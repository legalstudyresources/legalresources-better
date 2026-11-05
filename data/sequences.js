/**
 * data/sequences.js — Legal process ordering drill pathways (3 drills)
 */
var BANK = window.BANK = window.BANK || {};
BANK.sequences = [
  {
    "id": "s1",
    "title": "Queensland Bill: ordinary pathway",
    "note": "Simplified ordinary pathway. Urgent Bills may bypass committee consideration and report. Assent and commencement can differ.",
    "steps": [
      "Presentation, explanatory speech and first reading",
      "Committee consideration",
      "Committee report",
      "Second reading",
      "Consideration-in-detail",
      "Third reading",
      "Royal Assent"
    ]
  },
  {
    "id": "s2",
    "title": "Constitutional alteration: ordinary pathway",
    "note": "Section 128 also provides an exceptional repeated one-house pathway. Some alterations require consent of an affected state.",
    "steps": [
      "Proposed alteration passes by absolute majority in each house",
      "Referendum held two to six months after passage",
      "Voters satisfy national majority and majority in at least four states",
      "Successful alteration presented for Royal Assent"
    ]
  },
  {
    "id": "s3",
    "title": "Build legal reasoning",
    "note": "A flexible thinking pathway; adapt the order to the question rather than forcing every response into a formula.",
    "steps": [
      "Identify the relevant source of law or legal power",
      "Explain its meaning or effect",
      "Apply it to the scenario or evidence",
      "Explain the consequence",
      "Evaluate using a relevant legal criterion"
    ]
  }
];
