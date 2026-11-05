/**
 * templates.js — Shared template helper functions.
 * Provides: button, topicOptions, earned
 */

const button = (label, action, cls = 'primary') =>
  `<button class="${cls}" data-action="${action}">${label}</button>`;

const topicOptions = (items) => {
  const list = items || (window.BANK?.quiz) || (window.BANK?.writing) || [];
  return ['All topics', ...new Set(list.map(q => q.topic))]
    .map(t => `<option>${esc(t)}</option>`)
    .join('');
};

const earned = () =>
  Object.values(state.quiz).filter(v => v.correct).length * 10 +
  Object.keys(state.written).length * 15 +
  Object.keys(state.sequence).length * 15 +
  Object.values(state.cases).reduce(
    (n, v) => n + Object.values(v).filter(s => s.done).length * 10,
    0
  );
