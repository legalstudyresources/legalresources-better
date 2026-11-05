/**
 * sequences.js — Sequence / ordering drill functionality for sequences.html.
 * Provides: sequences, startSequence, renderSequence, checkSequence
 */

function sequences() {
  view(`
    <span class="eyebrow">Processes</span>
    <h1>Rebuild the pathway.</h1>
    <div class="grid">
      ${BANK.sequences.map((s, i) =>
        `<article class="card">` +
          `<h2>${esc(s.title)}</h2>` +
          `<p>${esc(s.note)}</p>` +
          `<button class="primary" data-sequence="${i}">Start drill</button>` +
        `</article>`
      ).join('')}
    </div>
  `);
}

function startSequence(i) {
  const q = BANK.sequences[i];
  let order = shuffle(q.steps);

  // If the shuffle accidentally produced the correct order, reverse it
  if (order.every((s, j) => s === q.steps[j])) order.reverse();

  sequence = { q, order, tries: 0 };
  renderSequence();
}

function renderSequence(msg = '') {
  view(`
    <div class="narrow">
      <span class="eyebrow">Process drill</span>
      <h2>${esc(sequence.q.title)}</h2>
      <p>Move each stage up or down, then check your whole pathway.</p>
      <div class="panel">
        ${sequence.order.map((s, i) =>
          `<div class="steprow">` +
            `<strong>${i + 1}.</strong>` +
            `<span>${esc(s)}</span>` +
            `<button data-move="${i},-1" aria-label="Move stage ${i + 1} up" ${i === 0 ? 'disabled' : ''}>↑</button>` +
            `<button data-move="${i},1" aria-label="Move stage ${i + 1} down" ${i === sequence.order.length - 1 ? 'disabled' : ''}>↓</button>` +
          `</div>`
        ).join('')}
      </div>
      <p class="note">${esc(sequence.q.note)}</p>
      <div aria-live="polite">${msg}</div>
      <div class="toolbar">
        ${button('Check pathway', 'checkSequence')}
        ${button('Choose another', 'sequences', '')}
      </div>
    </div>
  `);
}

function checkSequence() {
  sequence.tries++;
  const n = sequence.order.filter((s, i) => s === sequence.q.steps[i]).length;

  if (n === sequence.order.length) {
    state.sequence[sequence.q.id] = true;
    save();
    renderSequence(
      '<div class="feedback">' +
        '<strong>Correct pathway.</strong>' +
        '<p>Now explain why each stage exists. Knowing the order is the starting point.</p>' +
      '</div>'
    );
  } else {
    const hint = sequence.tries >= 2
      ? '<details><summary>Show the correct pathway</summary><ol>' +
        sequence.q.steps.map(s => `<li>${esc(s)}</li>`).join('') +
        '</ol></details>'
      : '';

    renderSequence(
      `<div class="feedback error">` +
        `<strong>${n} of ${sequence.order.length} stages are in the correct position.</strong>` +
        `<p>Adjust the order and try again.</p>` +
        hint +
      `</div>`
    );
  }
}

// Action dispatcher and event listener for sequences page
const sequenceActions = {
  sequences,
  checkSequence
};

document.addEventListener('click', e => {
  const btn = e.target.closest('button');
  if (!btn) return;

  if (btn.dataset.action && sequenceActions[btn.dataset.action]) {
    sequenceActions[btn.dataset.action]();
    return;
  }

  if (btn.dataset.sequence !== undefined) {
    startSequence(Number(btn.dataset.sequence));
    return;
  }

  if (btn.dataset.move) {
    const [i, delta] = btn.dataset.move.split(',').map(Number);
    const j = i + delta;
    if (j >= 0 && j < sequence.order.length) {
      [sequence.order[i], sequence.order[j]] = [sequence.order[j], sequence.order[i]];
      renderSequence();
      document.querySelector(`[data-move="${j},${delta}"]`)?.focus();
    }
  }
});

// Initialize on page load
sequences();
