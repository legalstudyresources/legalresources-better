/**
 * state.js — Global state management and utility functions.
 * Provides: $, app, KEY, fresh, state, storageOK, session, written,
 *           sequence, caseRun, timer, esc, shuffle, save, view
 */
'use strict';

const $ = s => document.querySelector(s);
const app = $('#app');
const KEY = 'mkt-ia1-casefile-v1';

const fresh = () => ({
  quiz: {},
  written: {},
  sequence: {},
  cases: {},
  drafts: {}
});

let state = fresh();
let storageOK = true;

try {
  const saved = JSON.parse(localStorage.getItem(KEY));
  if (saved && typeof saved === 'object') {
    for (const k of Object.keys(state)) {
      if (saved[k] && typeof saved[k] === 'object' && !Array.isArray(saved[k])) {
        state[k] = saved[k];
      }
    }
  }
} catch (e) {
  storageOK = false;
}

let session = null;
let written = null;
let sequence = null;
let caseRun = null;
let timer = null;

const esc = s => String(s).replace(
  /[&<>"']/g,
  c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])
);

const shuffle = a => {
  a = [...a];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

function save() {
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch (e) {
    storageOK = false;
  }
}

function view(html) {
  clearInterval(timer);
  app.innerHTML = html;
  app.focus();
  window.scrollTo(0, 0);
}
