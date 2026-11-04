/**
 * quiz.js — All quiz / rapid-recall functionality.
 * Provides: quizSetup, startQuiz, renderQuiz, answer, quizEnd
 */

function quizSetup() {
  view(`
    <div class="narrow">
      <span class="eyebrow">Rapid recall</span>
      <h1>Retrieve first.</h1>
      <p>Choose a topic or mix the whole bank. Read the explanation after each answer; legal precision matters more than speed.</p>
      <div class="panel">
        <div class="toolbar">
          <label>Topic
            <select id="topic">${topicOptions()}</select>
          </label>
          <label>Round length
            <select id="length">
              <option>10</option>
              <option>20</option>
              <option>All</option>
            </select>
          </label>
        </div>
        ${button('Start round', 'startQuiz')}
        ${button('Retry missed questions', 'retry', '')}
      </div>
    </div>
  `);
}

function startQuiz(retry = false, quick = false) {
  const topic = quick ? 'All topics' : ($('#topic')?.value || 'All topics');

  let pool = BANK.quiz.filter(q =>
    (topic === 'All topics' || q.topic === topic) &&
    (!retry || state.quiz[q.id]?.correct === false)
  );

  if (!pool.length) {
    view(`
      <div class="empty">
        <h2>No missed questions in this selection.</h2>
        <p>Try a new round or select another topic.</p>
        ${button('Back to recall', 'quizSetup')}
      </div>
    `);
    return;
  }

  let n = quick ? '10' : ($('#length')?.value || '10');

  session = {
    queue: shuffle(pool).slice(0, n === 'All' ? pool.length : Number(n)),
    index: 0,
    score: 0,
    results: [],
    answered: false
  };

  renderQuiz();
}

function renderQuiz() {
  const s = session;

  if (s.index >= s.queue.length) {
    quizEnd();
    return;
  }

  const q = s.queue[s.index];
  s.answered = false;
  s.options = shuffle(q.options.map((text, i) => ({ text, correct: i === q.answer })));

  view(`
    <div class="narrow">
      <div class="toolbar">
        <span class="pill">${esc(q.topic)}</span>
        <span>Question ${s.index + 1} of ${s.queue.length}</span>
        ${button('Leave round', 'quizSetup', '')}
      </div>
      <div class="progressline">
        <div style="width:${s.index / s.queue.length * 100}%"></div>
      </div>
      <div class="panel">
        <p class="question">${esc(q.prompt)}</p>
        <div class="options">
          ${s.options.map((o, i) =>
            `<button class="option" data-answer="${i}">` +
              `<span class="letter">${String.fromCharCode(65 + i)}</span>` +
              `${esc(o.text)}` +
            `</button>`
          ).join('')}
        </div>
        <div id="feedback" aria-live="polite"></div>
      </div>
    </div>
  `);
}

function answer(i) {
  const s = session;
  if (!s || s.answered) return;

  s.answered = true;
  const q = s.queue[s.index];
  const ok = s.options[i]?.correct;

  if (ok) s.score++;
  s.results.push({ q, ok });

  const old = state.quiz[q.id] || { attempts: 0, firstCorrect: !!ok };
  state.quiz[q.id] = { ...old, attempts: old.attempts + 1, correct: !!ok };
  save();

  document.querySelectorAll('[data-answer]').forEach((b, j) => {
    b.disabled = true;
    if (s.options[j].correct) b.classList.add('correct');
    else if (j === i) b.classList.add('wrong');
  });

  $('#feedback').innerHTML =
    `<div class="feedback ${ok ? '' : 'error'}">` +
      `<strong>${ok ? 'Correct.' : 'Repair this idea.'}</strong>` +
      `<p>${esc(q.why)}</p>` +
    `</div>` +
    button(
      s.index === s.queue.length - 1 ? 'See round results' : 'Next question',
      'nextQuiz'
    );
}

function quizEnd() {
  const s = session;

  const repairList = s.results
    .filter(r => !r.ok)
    .map(r =>
      `<p><strong>${esc(r.q.prompt)}</strong><br>${esc(r.q.why)}</p>`
    )
    .join('') || '<p>No errors this round. Try a written challenge to test recall and explanation.</p>';

  view(`
    <div class="narrow">
      <span class="eyebrow">Round complete</span>
      <h1>${s.score} / ${s.queue.length}</h1>
      <p>This is recognition practice. Your next step is to explain one of these ideas without answer options.</p>
      <div class="panel">
        <h2>Your repair list</h2>
        ${repairList}
      </div>
      <div class="toolbar">
        ${button('Write a response', 'writingSetup')}
        ${button('Another round', 'quizSetup', '')}
        ${button('My progress', 'progress', '')}
      </div>
    </div>
  `);
}
