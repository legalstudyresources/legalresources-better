/**
 * progress.js — Progress / stats page.
 * Provides: progress
 */

function progress() {
  const attempted = BANK.quiz.filter(q => state.quiz[q.id]);
  const correct = attempted.filter(q => state.quiz[q.id].correct);
  const completedW = Object.values(state.written).filter(w => w.done).length;
  const completedC = Object.values(state.cases).reduce(
    (n, c) => n + Object.values(c).filter(s => s.done).length,
    0
  );

  const topicRows = [...new Set(BANK.quiz.map(q => q.topic))].map(t => {
    const bank = BANK.quiz.filter(q => q.topic === t);
    const tried = bank.filter(q => state.quiz[q.id]);
    return `<tr>` +
      `<td>${esc(t)}</td>` +
      `<td>${tried.filter(q => state.quiz[q.id].correct).length} / ${tried.length}</td>` +
      `<td>${bank.length}</td>` +
    `</tr>`;
  }).join('');

  const writtenLinks = BANK.writing
    .filter(w => state.written[w.id]?.done || state.drafts?.[w.id])
    .map(w =>
      `<p><button data-write="${BANK.writing.indexOf(w)}">${esc(w.prompt)}</button></p>`
    )
    .join('') || '<p>Your written challenges will appear here after you start one.</p>';

  view(`
    <span class="eyebrow">Device-local practice record</span>
    <h1>Your next step.</h1>

    <div class="stats">
      <div class="stat">
        <strong>${correct.length}/${BANK.quiz.length}</strong>
        Latest recall answers correct
      </div>
      <div class="stat">
        <strong>${completedW}/${BANK.writing.length}</strong>
        Written challenges repaired
      </div>
      <div class="stat">
        <strong>${completedC}/16</strong>
        Case stages repaired
      </div>
    </div>

    <p>Recall accuracy reflects your latest attempt at each question. Written practice records completion and self-checking, not verified exam performance.</p>

    <div class="panel">
      <h2>Knowledge by topic</h2>
      <table>
        <thead>
          <tr>
            <th>Topic</th>
            <th>Latest correct / attempted</th>
            <th>Available</th>
          </tr>
        </thead>
        <tbody>${topicRows}</tbody>
      </table>
      ${button('Repair missed knowledge', 'retryProgress')}
    </div>

    <div class="panel">
      <h2>Return to your written work</h2>
      ${writtenLinks}
    </div>

    <details>
      <summary>Clear this device's IA1 progress</summary>
      <p>This removes saved answers, drafts and practice progress for this game.</p>
      <label class="checkrow">
        <input id="resetAgree" type="checkbox">
        I want to clear this game's saved progress.
      </label>
      ${button('Clear progress', 'reset', 'danger')}
    </details>
  `);
}
