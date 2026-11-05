/**
 * cases.js — Case file functionality for cases.html.
 * Provides: cases, startCase, caseDraft, renderCase, revealCase, nextCase, caseText, caseSummary
 */

function cases() {
  view(`
    <span class="eyebrow">Analysing &amp; evaluating</span>
    <h1>Open a case file.</h1>
    <p>Every source, quote and statistic in these two packs is invented for practice. They are not the unseen assessment stimulus.</p>
    <div class="grid">
      ${BANK.cases.map((c, i) =>
        `<article class="card ${i ? 'purple' : 'amber'}">` +
          `<span class="tag">Six sources / eight stages</span>` +
          `<h2>${esc(c.title)}</h2>` +
          `<p>${esc(c.subtitle)}</p>` +
          `<button class="primary" data-case="${i}">Open file</button>` +
        `</article>`
      ).join('')}
    </div>
  `);
}

function startCase(i) {
  caseRun = { c: BANK.cases[i], stage: 0 };
  renderCase();
}

function caseDraft() {
  if (!caseRun || !$('#caseDraft')) return;

  const r = caseRun;
  state.cases[r.c.id] = state.cases[r.c.id] || {};

  const prev = state.cases[r.c.id][r.stage] || {};
  state.cases[r.c.id][r.stage] = { ...prev, draft: $('#caseDraft').value };
  save();
}

function renderCase() {
  const r = caseRun;
  const c = r.c;
  const s = c.stages[r.stage];
  const stored = state.cases[c.id]?.[r.stage];

  view(`
    <span class="eyebrow">Fictional classroom stimulus / ${esc(c.subtitle)}</span>
    <h2>${esc(c.title)}</h2>
    <p>${esc(c.intro)}</p>

    <div class="toolbar">
      <label>Stage
        <select id="stage">
          ${c.stages.map((s, i) =>
            `<option value="${i}" ${r.stage === i ? 'selected' : ''}>${i + 1}. ${esc(s[0])}</option>`
          ).join('')}
        </select>
      </label>
      ${button('View my whole plan', 'caseSummary', '')}
      ${button('Other case files', 'cases', '')}
    </div>

    <div class="case-layout">
      <aside class="panel">
        <h3>Source pack</h3>
        <p class="muted">All material below is simulated. Letter labels are for evidence references.</p>
        <div class="source-list">
          ${c.sources.map(([title, text]) =>
            `<article class="source">` +
              `<h3>${esc(title)}</h3>` +
              `<p>${esc(text)}</p>` +
            `</article>`
          ).join('')}
        </div>
      </aside>

      <section class="panel">
        <span class="pill">Stage ${r.stage + 1} of 8</span>
        <h2>${esc(s[0])}</h2>
        <p>${esc(s[1])}</p>
        <label for="caseDraft"><strong>Your response or planning notes</strong></label>
        <textarea id="caseDraft" placeholder="Use source letters and explain the legal meaning of the evidence.">${esc(stored?.draft || '')}</textarea>
        <p class="muted">Saved on this device as you type. For handwritten work, note your page here.</p>
        <p id="caseError" role="status"></p>
        ${button('Check against a model', 'revealCase')}
        <div id="caseFeedback"></div>
      </section>
    </div>
  `);

  $('#caseDraft').addEventListener('input', caseDraft);
  $('#stage').addEventListener('change', e => {
    caseDraft();
    caseRun.stage = Number(e.target.value);
    renderCase();
  });
}

function revealCase() {
  if (!$('#caseDraft').value.trim()) {
    $('#caseError').textContent = 'Write a response or add a note identifying your handwritten work first.';
    return;
  }

  caseDraft();
  const s = caseRun.c.stages[caseRun.stage];

  $('#caseFeedback').innerHTML =
    `<div class="feedback">` +
      `<strong>One possible response</strong>` +
      `<p>${esc(s[2])}</p>` +
    `</div>` +
    `<h3>Check your reasoning</h3>` +
    s[3].map(t =>
      `<label class="checkrow"><input class="casecheck" type="checkbox">${esc(t)}</label>`
    ).join('') +
    `<p class="muted">Other recommendations can work if they follow from the evidence and address legal criteria.</p>` +
    `<label for="caseRepair"><strong>One repair to carry forward</strong></label>` +
    `<textarea id="caseRepair" placeholder="Improve one point in your plan."></textarea>` +
    `<p id="caseRepairError" role="status"></p>` +
    button(
      caseRun.stage === 7 ? 'Save & view whole plan' : 'Save repair & next stage',
      'nextCase'
    );
}

function nextCase() {
  if (!$('#caseRepair').value.trim()) {
    $('#caseRepairError').textContent = 'Write one repair before moving on.';
    return;
  }

  const r = caseRun;
  caseDraft();

  Object.assign(state.cases[r.c.id][r.stage], {
    repair: $('#caseRepair').value,
    checked: [...document.querySelectorAll('.casecheck')].map(x => x.checked),
    done: true
  });
  save();

  if (r.stage < 7) {
    r.stage++;
    renderCase();
  } else {
    caseSummary();
  }
}

function caseText() {
  const c = caseRun.c;
  return c.title + '\nFICTIONAL CLASSROOM PRACTICE\n\n' +
    c.stages.map((s, i) => {
      const v = state.cases[c.id]?.[i];
      return `${i + 1}. ${s[0]}\n${v?.draft || '(Not attempted)'}\nRepair: ${v?.repair || '(Not recorded)'}`;
    }).join('\n\n');
}

function caseSummary() {
  caseDraft();

  view(`
    <div class="narrow">
      <span class="eyebrow">Your plan / Fictional practice</span>
      <h2>${esc(caseRun.c.title)}</h2>
      <p>Turn this plan into a connected extended response. Use your own reasoning and support each claim with the source evidence.</p>
      <div class="toolbar">
        ${button('Download my plan', 'downloadPlan')}
        ${button('Return to stages', 'returnCase', '')}
        ${button('Print plan', 'print', '')}
      </div>
      <div class="panel summary">${esc(caseText())}</div>
    </div>
  `);
}

// Action dispatcher and event listener for cases page
const caseActions = {
  cases,
  revealCase,
  nextCase,
  caseSummary,
  returnCase: renderCase,
  downloadPlan: () => {
    const blob = new Blob([caseText()], { type: 'text/plain;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'IA1-Practice-Plan.txt';
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  },
  print: () => window.print()
};

document.addEventListener('click', e => {
  const btn = e.target.closest('button');
  if (!btn) return;

  if (btn.dataset.action && caseActions[btn.dataset.action]) {
    caseActions[btn.dataset.action]();
    return;
  }

  if (btn.dataset.case !== undefined) {
    startCase(Number(btn.dataset.case));
  }
});

// Initialize on page load
cases();
