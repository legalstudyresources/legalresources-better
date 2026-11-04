/**
 * sources.js — Help & sources page.
 * Provides: sources
 */

function sources() {
  view(`
    <div class="narrow">
      <span class="eyebrow">Study guidance &amp; source notes</span>
      <h1>Use the game well.</h1>

      <div class="panel">
        <h2>Move beyond recognition</h2>
        <p>After a quiz round, close the options and explain two answers aloud. Then write a response from memory, compare it with the model and repair a specific error. Return to that idea in a later session.</p>
        <p>The models are suggested responses, not official marking-guide answers. Check your school task sheet for actual exam conditions. This game uses parallel practice and does not reproduce the unseen exam.</p>
        <p>Comprehending: explain legal concepts precisely. Analysing: apply law and interpret evidence to examine the issue, viewpoints and consequences. Evaluating: compare alternatives, justify a recommendation using criteria and discuss implications.</p>
      </div>

      <h2>Sources and verification</h2>
      <p class="muted">Content checked 16 October 2026. Legal propositions are classroom summaries, not quotations. Fictional case packs use invented rules and data. No school assessment files are included.</p>

      <ul class="source-links">
        <li><a href="https://www.qcaa.qld.edu.au/downloads/senior-qce/syllabuses/snr_legal_25_syll.pdf">QCAA Legal Studies 2025 v1.3 syllabus</a> — Unit 3 Topic 1 and IA1.</li>
        <li><a href="https://www.legislation.gov.au/C2004Q00685/latest">Australian Constitution</a> — powers, inconsistency, deadlocks and alteration.</li>
        <li><a href="https://www.parliament.qld.gov.au/documents/explore/education/factsheets/Factsheet_3.7_MakingOfALaw.pdf">Queensland Parliament: making a law</a>.</li>
        <li><a href="https://peo.gov.au/understand-our-parliament/how-parliament-works/system-of-government/separation-of-powers-parliament-executive-and-judiciary">Parliamentary Education Office: separation of powers</a>.</li>
        <li><a href="https://www.art.gov.au/about-us">Administrative Review Tribunal: role</a>.</li>
        <li><a href="https://www.courts.qld.gov.au/the-courts/magistrates-court/court-programs/murri-court">Queensland Courts: Murri Court</a>.</li>
        <li><a href="https://www.courts.qld.gov.au/the-courts/childrens-court">Queensland Courts: Childrens Court</a>.</li>
        <li><a href="https://www.fcfcoa.gov.au/fl">Federal Circuit and Family Court: family law</a>.</li>
        <li><a href="https://www.hcourt.gov.au/about/overview-high-court/role-high-court">High Court: role and appeals</a>.</li>
        <li><a href="https://aiatsis.gov.au/ntpd-resource/742">AIATSIS: Mabo (No. 2)</a>.</li>
        <li><a href="https://www.hcourt.gov.au/sites/default/files/assets/publications/judgment-summaries/2012/hcasum16_2012_04_20_iiNet.pdf">High Court: Roadshow Films v iiNet (2012)</a>.</li>
        <li><a href="https://www.refworld.org/jurisprudence/caselaw/ausfc/2002/18813">Federal Court: Al Masri (2002), via Refworld</a>. Historical authority; later decisions must be acknowledged.</li>
        <li><a href="https://www.hcourt.gov.au/cases-and-judgments/judgments/judgments-1998-current/nzyq-v-minister-immigration-citizenship-and-multicultural-affairs">High Court: NZYQ (2023)</a> — subsequent constitutional development.</li>
      </ul>

      <div class="note">
        <strong>Privacy</strong>
        <p>The game makes no analytics or account requests. Progress and writing use browser storage on this device. Use clear-progress before returning a shared device. Your teacher cannot see this progress automatically; download or show your work if asked.</p>
      </div>
    </div>
  `);
}
