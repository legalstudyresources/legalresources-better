/**
 * writing.js — All writing challenge functionality.
 * Provides: writingSetup, startWrite, persistWrite, revealWrite, saveWrite, startTimer
 */

function writingSetup() {
  view(`
    <div class="narrow">
      <span class="eyebrow">Written practice</span>
      <h1>Show your thinking.</h1>
      <p>Use full sentences. You can type or write in your notebook. The model and checklists guide your own judgement; the game does not award exam marks.</p>
      <div class="toolbar">
        <label>Topic
          <select id="writeTopic">${topicOptions()}</select>
        </label>
        ${button('Give me a challenge', 'randomWrite')}
      </div>
      <div class="panel">
        <h2>Or choose a focus</h2>
        <div class="options">
          ${BANK.writing.map((w, i) =>
            `<button class="option" data-write="${i}">` +
              `${esc(w.prompt)}` +
              `${state.written[w.id] ? ' <span class="pill">Practised</span>' : ''}` +
            `</button>`
          ).join('')}
        </div>
      </div>
    </div>
  `);
}

function startWrite(i) {
  const q = BANK.writing[i];
  const saved = state.written[q.id] || state.drafts[q.id];

  written = {
    q,
    draft: saved?.draft || '',
    repair: saved?.repair || ''
  };

  view(`
    <div class="narrow">
      <span class="eyebrow">${esc(q.topic)} / Write first</span>
      <h2>${esc(q.prompt)}</h2>
      <p>Suggested practice time: 4–6 minutes. This is a study guide, not an assessment time allocation.</p>
      <div class="toolbar">
        ${button('Start 5-minute timer', 'timer', '')}
        <span id="clock" role="timer"></span>
        ${button('Choose another', 'writingSetup', '')}
      </div>
      <label for="draft"><strong>Your response</strong></label>
      <textarea id="draft" placeholder="Write from memory. Explain the legal effect and answer the question.">${esc(written.draft)}</textarea>
      <label class="checkrow"><input id="paper" type="checkbox">I wrote my response in my notebook.</label>
      <p id="writeError" role="status"></p>
      ${button('Reveal model & check', 'revealWrite')}
      <p class="muted">Your typed draft is saved on this device as you write. Avoid entering personal details.</p>
    </div>
  `);

  $('#draft').addEventListener('input', () => {
    written.draft = $('#draft').value;
    persistWrite(false);
  });
}

function persistWrite(done) {
  const w = written;
  const prev = state.written[w.q.id];

  if (done || prev?.done) {
    state.written[w.q.id] = {
      draft: w.draft,
      repair: w.repair,
      done: done || prev.done
    };
  } else {
    state.drafts = state.drafts || {};
    state.drafts[w.q.id] = { draft: w.draft, repair: w.repair };
  }

  save();
}

function revealWrite() {
  if (!$('#draft').value.trim() && !$('#paper').checked) {
    $('#writeError').textContent = 'Write a response first, or confirm that you used your notebook.';
    return;
  }

  written.draft = $('#draft').value;
  const q = written.q;

  view(`
    <div class="narrow">
      <span class="eyebrow">Check & repair / Self-assessment</span>
      <h2>${esc(q.prompt)}</h2>
      <details>
        <summary>Your first response</summary>
        <p class="summary">${esc(written.draft || 'Written in notebook.')}</p>
      </details>
      <div class="feedback">
        <strong>Suggested answer — other well-supported responses are possible</strong>
        <p>${esc(q.model)}</p>
        <p class="muted">Useful vocabulary: ${esc(q.terms)}</p>
      </div>
      <h3>What does your response actually include?</h3>
      <p class="muted">Tick only what you can point to in your own writing. Unchecked items become your repair targets.</p>
      ${q.checks.map(c =>
        `<label class="checkrow"><input class="selfcheck" type="checkbox">${esc(c)}</label>`
      ).join('')}
      <label for="repair"><h3>Repair one sentence or idea</h3></label>
      <textarea id="repair" placeholder="Add a missing legal point, fix an error or explain a consequence more precisely.">${esc(written.repair)}</textarea>
      <label class="checkrow"><input id="paperRepair" type="checkbox">I completed my repair in my notebook.</label>
      <p id="repairError" role="status"></p>
      ${button('Save practice & feedback', 'saveWrite')}
    </div>
  `);
}

function saveWrite() {
  if (!$('#repair').value.trim() && !$('#paperRepair').checked) {
    $('#repairError').textContent = 'Add a repair or confirm you repaired your notebook response.';
    return;
  }

  written.repair = $('#repair').value;
  written.checks = [...document.querySelectorAll('.selfcheck')].map(x => x.checked);
  persistWrite(true);
  state.written[written.q.id].checks = written.checks;
  save();

  const nextSteps = written.q.checks
    .filter((_, i) => !written.checks[i])
    .map(c => `<p>Next time: ${esc(c)}</p>`)
    .join('') || '<p>Next time, try the same skill with a different example and no model.</p>';

  view(`
    <div class="narrow">
      <span class="eyebrow">Practice recorded</span>
      <h1>Keep the repair.</h1>
      <p>You checked ${written.checks.filter(Boolean).length} of ${written.checks.length} features in your original response. This is your self-assessment, not a verified mark.</p>
      <div class="feedback">
        ${nextSteps}
      </div>
      <div class="toolbar">
        ${button('Another challenge', 'writingSetup')}
        ${button('My progress', 'progress', '')}
      </div>
    </div>
  `);
}

function startTimer() {
  clearInterval(timer);
  let remaining = 300;
  const clock = $('#clock');
  clock.textContent = '5:00';

  timer = setInterval(() => {
    remaining--;
    if (!clock.isConnected) {
      clearInterval(timer);
      return;
    }
    clock.textContent = remaining > 0
      ? `${Math.floor(remaining / 60)}:${String(remaining % 60).padStart(2, '0')}`
      : 'Time to check — finish your sentence.';
    if (remaining <= 0) clearInterval(timer);
  }, 1000);
}
