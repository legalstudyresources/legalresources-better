/**
 * data/writing.js — Written practice challenges and model answers (22 prompts)
 */
var BANK = window.BANK = window.BANK || {};
BANK.writing = [
  {
    "id": "w1",
    "topic": "Foundations",
    "prompt": "Distinguish representative government from responsible government. Use a different example for each.",
    "model": "Representative government means people elect members to act on their behalf, such as electing a member for a local electorate. Responsible government means the executive is accountable to Parliament and must maintain the confidence of the lower house. A minister answering questions about a departmental failure illustrates that accountability.",
    "checks": [
      "Define representation accurately",
      "Explain executive accountability and lower-house confidence",
      "Give two distinct examples"
    ],
    "terms": "representative; responsible; executive; Parliament; confidence"
  },
  {
    "id": "w2",
    "topic": "Foundations",
    "prompt": "A council promises to change citizenship rules. Explain the problem with that promise.",
    "model": "Citizenship is a Commonwealth matter. A local council exercises powers provided by state legislation and cannot independently change national citizenship law. The proposal confuses local service responsibilities with Commonwealth legislative authority.",
    "checks": [
      "Identify the Commonwealth responsibility",
      "Explain the council\u2019s state-law basis",
      "Apply the distinction to the promise"
    ],
    "terms": "Commonwealth; local government; legislative authority"
  },
  {
    "id": "w3",
    "topic": "Foundations",
    "prompt": "Explain how accessible laws and independent courts support the rule of law.",
    "model": "Accessible laws allow people to understand legal obligations and challenge conduct inconsistent with them. Independent courts can determine disputes according to law, including claims against public officials. Together these safeguards constrain arbitrary power and help hold government accountable.",
    "checks": [
      "Explain accessibility rather than just naming it",
      "Explain the function of independent courts",
      "Connect both features to constrained public power"
    ],
    "terms": "rule of law; independent courts; accountability"
  },
  {
    "id": "w4",
    "topic": "Constitution",
    "prompt": "An inconsistent state provision conflicts with a valid Commonwealth law. Explain what happens and one limit on your conclusion.",
    "model": "Under Constitution s 109, a valid Commonwealth law prevails over an inconsistent state law, and the state law is invalid to the extent of the inconsistency. This does not necessarily invalidate the entire state Act. First, there must be a valid Commonwealth law and actual legal inconsistency, rather than merely different policies.",
    "checks": [
      "Identify s 109 accurately",
      "State the limited extent of invalidity",
      "Distinguish inconsistency from mere difference"
    ],
    "terms": "s 109; valid; inconsistency; extent"
  },
  {
    "id": "w5",
    "topic": "Constitution",
    "prompt": "Explain why a national Yes majority might not be enough to change the Constitution.",
    "model": "Section 128 requires a national majority and majorities in a majority of states, ordinarily at least four of six. Territory votes count towards the national total but not as states. A proposal could therefore win nationally yet fail if too few states support it. This gives the federal structure a role in constitutional change.",
    "checks": [
      "Explain both components",
      "Identify four of six states",
      "Explain the consequence and federal rationale"
    ],
    "terms": "s 128; double majority; federalism"
  },
  {
    "id": "w6",
    "topic": "Constitution",
    "prompt": "Explain the ordinary constitutional alteration pathway from parliamentary proposal to assent.",
    "model": "Under s 128, a proposed alteration normally passes by an absolute majority of each Commonwealth house. It goes to referendum no earlier than two and no later than six months after passage. It needs a national majority and majorities in at least four states, with territory votes included nationally. A successful proposal is presented for Royal Assent. There is also a special repeated one-house passage pathway.",
    "checks": [
      "Absolute majority in each house for the ordinary pathway",
      "Two-to-six-month interval",
      "Explain both voter majorities",
      "Assent after successful approval; acknowledge exceptional pathway"
    ],
    "terms": "absolute majority; referendum; double majority; Royal Assent"
  },
  {
    "id": "w7",
    "topic": "Constitution",
    "prompt": "Explain how constitutional interpretation can change the practical federal balance without changing the constitutional text.",
    "model": "The High Court determines the scope of constitutional powers. In Commonwealth v Tasmania (1983), the external affairs power supported Commonwealth legislation implementing World Heritage treaty obligations. This expanded the practical reach of Commonwealth law in an area also involving state interests. The constitutional text itself was not changed through a referendum.",
    "checks": [
      "Explain interpretation versus formal alteration",
      "Give an accurate case example",
      "Link the decision to practical Commonwealth power"
    ],
    "terms": "constitutional interpretation; external affairs; federal balance"
  },
  {
    "id": "w8",
    "topic": "Parliament",
    "prompt": "A fictional Queensland licensing Bill is declared urgent. Explain one benefit and one scrutiny risk.",
    "model": "Urgency may allow Parliament to respond quickly to an identified problem. However, the ordinary committee consideration and report stages may be bypassed, reducing opportunities for expert evidence and public submissions. In a unicameral parliament there is also no upper-house review, so reduced committee scrutiny can make weaknesses harder to detect before passage.",
    "checks": [
      "Link urgency to responsiveness",
      "Explain the committee scrutiny risk",
      "Apply the absence of an upper house"
    ],
    "terms": "unicameral; committee; scrutiny; responsiveness"
  },
  {
    "id": "w9",
    "topic": "Parliament",
    "prompt": "Explain why Royal Assent and commencement should not be treated as identical.",
    "model": "Royal Assent turns a passed Bill into an Act. Commencement is when its provisions begin operating. The Act may set a later commencement date or provide for commencement by proclamation, so an assented Act need not operate in full immediately.",
    "checks": [
      "Distinguish Bill and Act",
      "Explain commencement",
      "Allow for later or staged operation"
    ],
    "terms": "Royal Assent; Act; commencement; proclamation"
  },
  {
    "id": "w10",
    "topic": "Parliament",
    "prompt": "Explain how a Senate crossbench can affect a government\u2019s legislative program.",
    "model": "A government may control the House of Representatives without having a Senate majority. It may need crossbench support for Bills to pass the Senate, creating opportunities for negotiation and amendments. This can improve scrutiny and compromise but may slow or prevent parts of the government\u2019s program.",
    "checks": [
      "Distinguish lower-house and Senate support",
      "Explain negotiation or amendment",
      "Explain a benefit and limitation"
    ],
    "terms": "bicameral; crossbench; scrutiny; majority"
  },
  {
    "id": "w11",
    "topic": "Parliament",
    "prompt": "Explain how a minority government can remain in office and one consequence for law-making.",
    "model": "A party without its own lower-house majority may govern if other members support it on confidence and supply. It may still need to negotiate support for individual Bills. This can make law-making more responsive to crossbench concerns, while making outcomes less predictable.",
    "checks": [
      "Explain confidence and supply",
      "Do not imply automatic support for every Bill",
      "Connect negotiation to a consequence"
    ],
    "terms": "minority government; confidence; supply; negotiation"
  },
  {
    "id": "w12",
    "topic": "Courts",
    "prompt": "A minister tells a judge to deliver a government-friendly result. Explain the legal concern.",
    "model": "The executive must not improperly direct judicial decisions. Courts must independently interpret and apply law, including in disputes involving government. Political direction of a verdict would threaten judicial independence and undermine the rule of law because public power would be less effectively constrained by impartial adjudication.",
    "checks": [
      "Identify executive and judiciary",
      "Explain improper direction",
      "Link independence to rule of law"
    ],
    "terms": "judicial independence; executive; judiciary; rule of law"
  },
  {
    "id": "w13",
    "topic": "Courts",
    "prompt": "Distinguish judicial review from merits review using a licensing refusal.",
    "model": "Judicial review would examine whether the refusal was legally made, such as whether the decision-maker used the proper power and followed required procedures. Merits review, where legislation provides it, considers the correct or preferable decision on the material. An applicant cannot assume every licensing refusal carries a merits review right.",
    "checks": [
      "Explain legality",
      "Explain correct or preferable decision",
      "Recognise that review jurisdiction depends on law"
    ],
    "terms": "judicial review; merits review; jurisdiction"
  },
  {
    "id": "w14",
    "topic": "Courts",
    "prompt": "Explain why \u201cthe High Court hears every appeal\u201d is inaccurate.",
    "model": "The High Court is Australia\u2019s final appellate court, but appeals generally require special leave. It selects matters under the applicable legal requirements rather than automatically rehearing every unsuccessful case. It also has original jurisdiction in matters including important constitutional disputes.",
    "checks": [
      "Identify final appellate role",
      "Explain special leave",
      "Identify a distinct original or constitutional role"
    ],
    "terms": "special leave; appellate; original jurisdiction"
  },
  {
    "id": "w15",
    "topic": "Cases",
    "prompt": "Explain how Mabo (No. 2) illustrates interaction between courts and Parliament.",
    "model": "Mabo v Queensland (No. 2) (1992) recognised native title at common law, rejecting the denial of Indigenous land rights based on terra nullius. Parliament subsequently enacted the Native Title Act 1993 (Cth), providing a statutory framework. The example shows a judicial development of common law followed by legislative reform.",
    "checks": [
      "Accurate decision",
      "Name the linked Act",
      "Explain the court-to-Parliament connection"
    ],
    "terms": "native title; common law; legislation; law reform"
  },
  {
    "id": "w16",
    "topic": "Cases",
    "prompt": "Repair this claim: \u201ciiNet made internet piracy legal.\u201d Explain what the decision actually established.",
    "model": "Roadshow Films v iiNet (2012) held that iiNet had not authorised its customers\u2019 copyright infringement on the facts. The customers\u2019 conduct remained infringement. The decision clarified the limits of an internet service provider\u2019s statutory authorisation liability; it did not abolish copyright or legalise piracy.",
    "checks": [
      "Reject the false conclusion",
      "Distinguish user infringement from provider authorisation",
      "Explain the legal significance"
    ],
    "terms": "statutory interpretation; copyright; authorisation liability"
  },
  {
    "id": "w17",
    "topic": "Cases",
    "prompt": "Explain why a historical detention case needs a later-authority qualification.",
    "model": "Al Masri (2002) illustrates Federal Court statutory interpretation limiting detention where removal was not reasonably practicable in the foreseeable future. Later authorities altered the legal position, including Al-Kateb (2004) and the constitutional ruling in NZYQ (2023). A historical case can show legal development without representing the final current rule.",
    "checks": [
      "Identify historical statutory interpretation",
      "Recognise later developments",
      "Do not call Al Masri a High Court decision"
    ],
    "terms": "Federal Court; statutory interpretation; subsequent authority"
  },
  {
    "id": "w18",
    "topic": "Reasoning",
    "prompt": "A fictional audit records 60 delayed permit decisions out of 200 in two districts. Write a scope statement without overstating the evidence.",
    "model": "The audit identifies delays in 60 of 200 permit decisions across two districts, showing a substantial problem within that sample. This may affect applicants\u2019 ability to plan and obtain timely outcomes. The data does not establish a statewide delay rate because the sample is limited to two districts.",
    "checks": [
      "Use the actual figures",
      "Explain who is affected",
      "State the sample limitation"
    ],
    "terms": "scope; sample; timeliness; evidence"
  },
  {
    "id": "w19",
    "topic": "Reasoning",
    "prompt": "Turn \u201cbusinesses hate the scheme\u201d into a developed legal viewpoint. Use a fictional annual licence fee as the context.",
    "model": "Small operators may oppose the annual fee because fixed compliance costs take a larger share of their revenue than that of major businesses. If the fee leads otherwise compliant small operators to leave the market, the scheme may create unequal practical burdens. Evidence about costs and closures would be needed to test that consequence.",
    "checks": [
      "Name a stakeholder and position",
      "Explain the legal or practical reason",
      "Explain a consequence and evidence needed"
    ],
    "terms": "viewpoint; equality; compliance; consequence"
  },
  {
    "id": "w20",
    "topic": "Reasoning",
    "prompt": "Propose a legal alternative to unexplained permit refusals. Identify the authority and a limitation.",
    "model": "The state Parliament could amend the licensing Act to require written reasons for refusals and provide independent merits review. Reasons would help applicants understand and challenge errors, improving accountability. Review would require funding and accessible procedures; otherwise delay and cost could limit its usefulness.",
    "checks": [
      "Specify an actual legal mechanism",
      "Name a responsible authority",
      "Apply a criterion and discuss a limitation"
    ],
    "terms": "amendment; written reasons; merits review; accountability"
  },
  {
    "id": "w21",
    "topic": "Reasoning",
    "prompt": "Compare an education campaign with a statutory reporting duty as responses to undisclosed government contracts.",
    "model": "Education may encourage voluntary disclosure but does not itself create an enforceable obligation. Parliament could instead require publication of defined contract information, subject to justified confidentiality exceptions. The duty offers stronger enforceability and accountability, but clear thresholds and oversight are needed to manage compliance costs and protect genuinely sensitive information.",
    "checks": [
      "Explain the legal difference",
      "Apply enforceability or accountability",
      "Acknowledge confidentiality or cost"
    ],
    "terms": "statutory duty; enforceability; accountability; exceptions"
  },
  {
    "id": "w22",
    "topic": "Reasoning",
    "prompt": "Write a recommendation that balances accountability with access to justice in a review scheme.",
    "model": "Parliament should introduce independent merits review of permit refusals with written reasons, low application fees and an accessible online and paper process. Independent review strengthens accountability by allowing errors to be corrected. Low fees and multiple access methods improve access to justice, although adequate staffing will be needed to avoid lengthy delays.",
    "checks": [
      "Choose a specific reform",
      "Apply two criteria through mechanisms",
      "Discuss an implementation limitation"
    ],
    "terms": "recommendation; accountability; access to justice; implication"
  }
];
