# IA1 Casefile — Mrs Knox Teaches

A buildless GitHub Pages game for Queensland senior Legal Studies, Unit 3 Topic 1: Governance in Australia.

## Student link

https://jasmineknox.github.io/legal-ia1-casefile/

## Included

- 60 shuffled multiple-choice questions with explanatory feedback, topic filters, 10/20/all-question rounds and a missed-question queue.
- 22 written challenges: retrieve without notes, compare with a suggested model, self-check and repair a sentence or idea.
- Three accessible up/down ordering drills: Queensland legislative process, constitutional alteration and legal reasoning.
- Two clearly labelled fictional governance case files, each with six sources and eight written stages: nature and scope, viewpoints, evidence limits, alternatives, recommendation and implications.
- Browser-local knowledge records, saved writing drafts, saved case plans, downloadable text plans and printing.

## Use in class

A suggested 20-minute study lab: ten recall questions, one written challenge, then a check and repair. For a longer lesson, use a case file and turn the saved plan into a handwritten extended response. Ask students to explain why their evidence supports their conclusion.

The suggested practice times are study guidance, not official examination conditions. Follow the actual school task sheet. This resource is independent and is not endorsed by QCAA.

## Assessment alignment and boundaries

Based on QCAA Legal Studies General senior syllabus 2025 v1.3, Unit 3 Topic 1, and the IA1 comprehending, analysing and evaluating criteria. Knowledge selection also draws on the supplied classroom teaching sequence. The game does not reproduce the school’s unseen questions or stimulus, student names, assessment dates or school branding. Fictional rules and statistics are explicitly identified as invented. The questions rehearse concepts and transferable legal reasoning rather than predict the assessment.

Written answers are **self-assessed**, not automatically marked. Models are suggested responses; alternative defensible answers are possible. Checklists describe features to look for and do not translate to an official mark. Quiz records show latest correctness; written and case records show completion, not demonstrated mastery. Practice XP is awarded once per completed item and is not an exam score.

## Files and architecture

No build step, bundler, database, dependencies, or API keys are required. The project runs directly in the browser and is fully compatible with GitHub Pages:

- `index.html`: Main HTML entry point linking modular styles and scripts.
- `data.js`: Content bank (`BANK`) containing 60 recall questions, 22 written practice prompts, 3 sequence pathways, and 2 eight-stage case files.
- `css/`: Modular stylesheets:
  - `base.css`: CSS custom properties, resets, typography, and utility classes.
  - `layout.css`: Header, navigation, footer, grid layouts, and hero sections.
  - `components.css`: Cards with hover lift, panels, buttons, forms, and tables.
  - `quiz.css`: Rapid recall styling, options, letter badges, and animated progress bar.
  - `writing.css`: Drafting textareas, timer, and self-assessment checklists.
  - `cases.css`: Two-column case study layouts, source list, and plan summaries.
  - `progress.css`: Local progress dashboard, score cards, and topic breakdown.
  - `responsive.css`: Mobile breakpoints (760px, 480px) and print styles.
- `js/`: Modular JavaScript logic:
  - `state.js`: Global state management and localStorage persistence.
  - `templates.js`: Shared template helpers (buttons, topic selectors, XP calculation).
  - `home.js`: Case desk homepage view.
  - `quiz.js`: Multiple-choice quiz setup, question runner, and repair queue.
  - `writing.js`: Writing challenges, drafting, model answer reveal, and self-checking.
  - `sequences.js`: Legislative and constitutional step-ordering drills.
  - `cases.js`: Case studies, 8-stage analysis workflow, and plan exports.
  - `progress.js`: Student progress tracking and performance breakdown.
  - `sources.js`: Syllabus references and study advice.
  - `router.js`: Navigation, event delegation, and action dispatcher.
  - `app.js`: Application bootstrap (`navigate('home')`).

Deploy by enabling GitHub Pages using the `main` branch and `/` (root) folder.

## Sources

Source links appear in the game. Checked 16 October 2026:

- QCAA, Legal Studies 2025 v1.3 General senior syllabus: https://www.qcaa.qld.edu.au/downloads/senior-qce/syllabuses/snr_legal_25_syll.pdf
- Australian Constitution (Federal Register): https://www.legislation.gov.au/C2004Q00685/latest
- Queensland Parliament, Making a Law: https://www.parliament.qld.gov.au/documents/explore/education/factsheets/Factsheet_3.7_MakingOfALaw.pdf
- Parliamentary Education Office, separation of powers: https://peo.gov.au/understand-our-parliament/how-parliament-works/system-of-government/separation-of-powers-parliament-executive-and-judiciary
- PEO, double dissolution: https://peo.gov.au/understand-our-parliament/having-your-say/elections-and-voting/double-dissolution
- High Court, role: https://www.hcourt.gov.au/about/overview-high-court/role-high-court
- AIATSIS, Mabo: https://aiatsis.gov.au/ntpd-resource/742
- High Court, iiNet judgment summary: https://www.hcourt.gov.au/sites/default/files/assets/publications/judgment-summaries/2012/hcasum16_2012_04_20_iiNet.pdf
- Federal Court, Al Masri, judgment via Refworld: https://www.refworld.org/jurisprudence/caselaw/ausfc/2002/18813
- High Court, NZYQ: https://www.hcourt.gov.au/cases-and-judgments/judgments/judgments-1998-current/nzyq-v-minister-immigration-citizenship-and-multicultural-affairs
- QCAT: https://www.qcat.qld.gov.au/about-qcat
- Supreme Court of Tasmania, Tasmanian Dam Case context: https://www.supremecourt.tas.gov.au/publications/speeches-articles/tasmanian-cases-high-court-australia/

Legal wording is summarised, not quoted. No third-party artwork or official logos are copied. The interface uses the supplied Mrs Knox Teaches deep green/sage palette with restrained purple, blue and amber accents and an Arial fallback.

## Privacy and storage

The game uses only device-local browser storage and does not transmit names, answers, analytics or progress. It makes no external asset requests. External references open only when followed. Saved responses can be read by anyone using the same browser profile; clear progress on shared devices. Browser clearing or private browsing can remove progress. If storage is unavailable, play continues without reliable persistence.

## Validation

JavaScript syntax and content structure checked. Interaction/state tests cover quiz scoring and repeat-click protection, retry queues, saved writing, case progression, process checks and unavailable storage. Browser visual QA was unavailable in this environment; mobile layout and keyboard focus styles are implemented but require a real-device review.

Created by Mrs Knox
