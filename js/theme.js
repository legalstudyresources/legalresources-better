/**
 * theme.js — Dark mode management and persistence.
 * Provides: initTheme, toggleTheme, applyTheme
 */
'use strict';

const THEME_KEY = 'mkt-theme-v1';

function getPreferredTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved === 'dark' || saved === 'light') {
    return saved;
  }
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const toggleBtn = document.getElementById('themeToggle');
  if (toggleBtn) {
    const isDark = theme === 'dark';
    toggleBtn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    toggleBtn.title = isDark ? 'Switch to light mode' : 'Switch to dark mode';
    toggleBtn.innerHTML = `<span class="theme-icon" aria-hidden="true">${isDark ? '☀️' : '🌙'}</span>`;
  }
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || getPreferredTheme();
  const next = current === 'dark' ? 'light' : 'dark';
  try {
    localStorage.setItem(THEME_KEY, next);
  } catch (e) {}
  applyTheme(next);
}

function initTheme() {
  const theme = getPreferredTheme();
  applyTheme(theme);

  // Delegate click for theme toggle so it works across all page renders
  document.addEventListener('click', e => {
    if (e.target.closest('#themeToggle')) {
      toggleTheme();
    }
  });

  // Listen for system theme changes if no explicit user override is stored
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      if (!localStorage.getItem(THEME_KEY)) {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  }
}

// Initialize theme as soon as script loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTheme);
} else {
  initTheme();
}
