/**
 * router.js — Navigation, action dispatch, and event handling.
 * Provides: navigate, actions, click event delegation
 */

function updateNavActive(name) {
  document.querySelectorAll('nav [data-nav]').forEach(btn => {
    const navName = btn.dataset ? btn.dataset.nav : btn.getAttribute('data-nav');
    const isActive = navName === name;
    btn.classList.toggle('active', isActive);
    if (isActive) {
      btn.setAttribute('aria-current', 'page');
    } else {
      btn.removeAttribute('aria-current');
    }
  });
}

function navigate(name) {
  const target = ({ home, progress, sources }[name] ? name : 'home');
  updateNavActive(target);
  ({ home, progress, sources }[target])();
}

const actions = {
  home: () => navigate('home'),
  progress: () => navigate('progress'),
  sources: () => navigate('sources'),
  quizSetup,
  quick: () => startQuiz(false, true),
  startQuiz: () => startQuiz(),
  retry: () => startQuiz(true),
  retryProgress: () => startQuiz(true, true),
  nextQuiz: () => {
    if (session?.answered) {
      session.index++;
      renderQuiz();
    }
  },
  writingSetup,
  randomWrite: () => {
    let pool = BANK.writing
      .map((w, i) => ({ w, i }))
      .filter(({ w }) =>
        $('#writeTopic').value === 'All topics' || w.topic === $('#writeTopic').value
      );
    startWrite(shuffle(pool)[0].i);
  },
  revealWrite,
  saveWrite,
  timer: startTimer,
  sequences,
  checkSequence,
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
  print: () => window.print(),
  reset: () => {
    if ($('#resetAgree')?.checked) {
      state = fresh();
      save();
      navigate('home');
    }
  }
};

document.addEventListener('click', e => {
  const el = e.target.closest('button');
  if (!el) return;

  if (el.dataset.nav) {
    navigate(el.dataset.nav);
    return;
  }

  if (el.dataset.action) {
    actions[el.dataset.action]?.();
    return;
  }

  if (el.dataset.answer !== undefined) {
    answer(Number(el.dataset.answer));
    return;
  }

  if (el.dataset.write !== undefined) {
    const i = Number(el.dataset.write);
    startWrite(i);
    if (state.drafts?.[BANK.writing[i].id] && !state.written[BANK.writing[i].id]) {
      $('#draft').value = state.drafts[BANK.writing[i].id].draft;
      written.draft = $('#draft').value;
    }
    return;
  }

  if (el.dataset.sequence !== undefined) {
    startSequence(Number(el.dataset.sequence));
    return;
  }

  if (el.dataset.case !== undefined) {
    startCase(Number(el.dataset.case));
    return;
  }

  if (el.dataset.move) {
    const [i, delta] = el.dataset.move.split(',').map(Number);
    const j = i + delta;
    if (j >= 0 && j < sequence.order.length) {
      [sequence.order[i], sequence.order[j]] = [sequence.order[j], sequence.order[i]];
      renderSequence();
      document.querySelector(`[data-move="${j},${delta}"]`)?.focus();
    }
  }
});

document.querySelector('.brand').addEventListener('click', e => {
  e.preventDefault();
  navigate('home');
});
