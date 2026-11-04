/**
 * home.js — Home page renderer.
 * Provides: home
 */

function home() {
  session = null;

  view(`
    <section class="hero">
      <div>
        <span class="eyebrow">Your governance training desk</span>
        <h1>IA1 Casefile<span style="color:var(--purple)">.</span></h1>
        <p>Know the law. Work through the evidence. Write a response you can defend.</p>
        <p class="muted">Unit 3 · Governance in Australia · Comprehending / Analysing / Evaluating</p>
        <span class="pill">${earned()} practice XP</span>
      </div>
      <aside class="docket">
        <span class="eyebrow">Open your first file</span>
        <h2>A useful 20-minute session</h2>
        <ol>
          <li>Retrieve: 10 knowledge questions.</li>
          <li>Write: one short response without notes.</li>
          <li>Check the model and repair one weak sentence.</li>
        </ol>
        ${button('Start a mixed round', 'quick')}
      </aside>
    </section>

    <div class="grid">
      <article class="card">
        <span class="tag">01 / Comprehending</span>
        <h2>Rapid recall</h2>
        <p>${BANK.quiz.length} questions on governance, constitutional powers, Parliament, courts, cases and legal reasoning. Incorrect answers return in your repair queue.</p>
        ${button('Choose a recall round', 'quizSetup')}
      </article>

      <article class="card purple">
        <span class="tag">02 / Written practice</span>
        <h2>Write → check → repair</h2>
        <p>${BANK.writing.length} direct writing challenges. Write first, compare with a suggested answer, then improve your reasoning.</p>
        ${button('Choose a writing challenge', 'writingSetup')}
      </article>

      <article class="card blue">
        <span class="tag">03 / Legal processes</span>
        <h2>Put it in order</h2>
        <p>Rebuild the Queensland legislative process, constitutional alteration pathway and a legal reasoning pathway.</p>
        ${button('Open process drills', 'sequences')}
      </article>

      <article class="card amber">
        <span class="tag">04 / Analysing &amp; evaluating</span>
        <h2>Crack a case file</h2>
        <p>Two fictional governance disputes. Read six sources, test the evidence and build your own justified recommendation across eight stages.</p>
        ${button('Choose a case file', 'cases')}
      </article>
    </div>

    <p class="muted spaced">
      Your progress and saved writing stay in this browser. No names or accounts needed.
      ${storageOK ? '' : 'Storage is unavailable; progress may not persist.'}
    </p>
  `);
}
