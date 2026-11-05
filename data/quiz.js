/**
 * data/quiz.js — Rapid recall multiple-choice question bank (60 questions)
 */
var BANK = window.BANK = window.BANK || {};
BANK.quiz = [
  {
    "id": "q1",
    "topic": "Foundations",
    "prompt": "What distinguishes representative government?",
    "options": [
      "Voters elect members to make decisions on their behalf",
      "Ministers answer only to judges",
      "Every law is decided by referendum",
      "The Crown chooses every MP"
    ],
    "answer": 0,
    "why": "Representation connects elected members with the people they represent; it does not require a public vote on every law."
  },
  {
    "id": "q2",
    "topic": "Foundations",
    "prompt": "Which example best demonstrates responsible government?",
    "options": [
      "A minister answers parliamentary questions about a department",
      "A judge decides a negligence claim",
      "A council collects rubbish",
      "A voter signs an online petition"
    ],
    "answer": 0,
    "why": "The executive is accountable to Parliament. Maintaining lower-house confidence is central to remaining in government."
  },
  {
    "id": "q3",
    "topic": "Foundations",
    "prompt": "Which action conflicts with the rule of law?",
    "options": [
      "A minister claims public office exempts them from legal limits",
      "A court reviews a government decision",
      "A law is published for public access",
      "An official acts under a statutory power"
    ],
    "answer": 0,
    "why": "Public power must have a lawful basis. Government officials are subject to law."
  },
  {
    "id": "q4",
    "topic": "Foundations",
    "prompt": "Which description best fits federalism?",
    "options": [
      "Constitutional division of power between Commonwealth and state systems",
      "Separation of judges from ministers only",
      "A single national Parliament controls every law",
      "Local councils have the same constitutional status as states"
    ],
    "answer": 0,
    "why": "Federalism concerns levels of government. Separation of powers concerns branches of government."
  },
  {
    "id": "q5",
    "topic": "Foundations",
    "prompt": "Who normally has responsibility for immigration law?",
    "options": [
      "Commonwealth government",
      "Local councils alone",
      "Queensland councils collectively",
      "School principals"
    ],
    "answer": 0,
    "why": "Immigration is a Commonwealth responsibility; councils do not control entry to Australia."
  },
  {
    "id": "q6",
    "topic": "Foundations",
    "prompt": "Which matter is usually administered by local government?",
    "options": [
      "Local rubbish collection",
      "Issuing Australian passports",
      "National defence",
      "Operating the High Court"
    ],
    "answer": 0,
    "why": "Local councils deliver local services under state legislation. Some service areas involve cooperation across levels."
  },
  {
    "id": "q7",
    "topic": "Foundations",
    "prompt": "Which is a typical state responsibility?",
    "options": [
      "State schools and public hospitals",
      "Issuing Australian currency",
      "Foreign affairs",
      "Granting citizenship"
    ],
    "answer": 0,
    "why": "States provide major education and health services, with Commonwealth funding and policy also playing roles."
  },
  {
    "id": "q8",
    "topic": "Foundations",
    "prompt": "Which distinction is accurate?",
    "options": [
      "Parliament includes government and non-government members",
      "Government and Parliament mean exactly the same thing",
      "Only ministers are members of Parliament",
      "The judiciary is a political party"
    ],
    "answer": 0,
    "why": "Government is the executive leadership; Parliament is the wider law-making and scrutiny institution."
  },
  {
    "id": "q9",
    "topic": "Constitution",
    "prompt": "What is a concurrent legislative power?",
    "options": [
      "A subject on which both Commonwealth and state parliaments can legislate",
      "A subject reserved only to councils",
      "A power to amend the Constitution without voters",
      "A power held only by the High Court"
    ],
    "answer": 0,
    "why": "Overlap does not automatically invalidate a state law. Inconsistency with a valid Commonwealth law raises a separate issue."
  },
  {
    "id": "q10",
    "topic": "Constitution",
    "prompt": "What are residual powers?",
    "options": [
      "State powers not exclusively vested in the Commonwealth or withdrawn from states",
      "All powers of the Governor-General",
      "Powers created by a local referendum",
      "Powers that disappear after an election"
    ],
    "answer": 0,
    "why": "The Constitution preserves state legislative powers subject to its limits; not every subject is assigned exclusively to the Commonwealth."
  },
  {
    "id": "q11",
    "topic": "Constitution",
    "prompt": "What does Constitution s 109 address?",
    "options": [
      "Inconsistency between a valid Commonwealth law and a state law",
      "A disagreement between two local councils",
      "Every difference between state policies",
      "The referendum double majority"
    ],
    "answer": 0,
    "why": "The Commonwealth law prevails and the state law is invalid to the extent of the inconsistency. The whole state Act is not necessarily affected."
  },
  {
    "id": "q12",
    "topic": "Constitution",
    "prompt": "What does Constitution s 51 principally do?",
    "options": [
      "Lists subjects of Commonwealth legislative power",
      "Gives Commonwealth Parliament unlimited power",
      "Sets out local council boundaries",
      "Requires a referendum on every Bill"
    ],
    "answer": 0,
    "why": "Commonwealth legislation must be supported by constitutional power. Many listed powers are concurrent, subject to constitutional exceptions."
  },
  {
    "id": "q13",
    "topic": "Constitution",
    "prompt": "A referendum gets 55% Yes nationally but Yes majorities in only three states. Outcome?",
    "options": [
      "It fails the state-majority requirement",
      "It passes because the national vote exceeds half",
      "It passes if both territories vote Yes",
      "The High Court must declare it passed"
    ],
    "answer": 0,
    "why": "A successful ordinary alteration needs both a national majority and Yes majorities in at least four of the six states."
  },
  {
    "id": "q14",
    "topic": "Constitution",
    "prompt": "How do territory votes count in a constitutional referendum?",
    "options": [
      "Towards the national total, not the majority-of-states count",
      "As two additional states",
      "Only if the six states are tied",
      "They never count"
    ],
    "answer": 0,
    "why": "The national majority includes eligible territory voters. The state component concerns the six states."
  },
  {
    "id": "q15",
    "topic": "Constitution",
    "prompt": "What parliamentary majority is normally required to propose a constitutional alteration?",
    "options": [
      "An absolute majority in each house",
      "A majority of ministers only",
      "A majority of local mayors",
      "A unanimous High Court judgment"
    ],
    "answer": 0,
    "why": "An absolute majority is more than half of all members. Section 128 also provides a special repeated one-house passage pathway."
  },
  {
    "id": "q16",
    "topic": "Constitution",
    "prompt": "When is the ordinary referendum held after parliamentary passage?",
    "options": [
      "No earlier than two and no later than six months",
      "Within seven days",
      "Only after the next election",
      "At least two years later"
    ],
    "answer": 0,
    "why": "This is the ordinary two-house pathway under s 128. Royal Assent follows successful voter approval."
  },
  {
    "id": "q17",
    "topic": "Constitution",
    "prompt": "What did the successful 1967 referendum do?",
    "options": [
      "Changed the race power and removed the exclusion from population reckoning",
      "Gave Aboriginal people citizenship for the first time",
      "Created a constitutional Voice",
      "Introduced compulsory voting"
    ],
    "answer": 0,
    "why": "Do not claim 1967 first granted citizenship or voting rights. The alterations concerned s 51(xxvi) and the removal of s 127."
  },
  {
    "id": "q18",
    "topic": "Constitution",
    "prompt": "What is the best description of judicial constitutional interpretation?",
    "options": [
      "Courts determine the meaning and application of constitutional provisions",
      "Judges rewrite the constitutional text by referendum",
      "Courts replace Parliament at every election",
      "Ministers dictate constitutional meaning to judges"
    ],
    "answer": 0,
    "why": "Interpretation can affect the practical balance of powers without formally altering the constitutional text."
  },
  {
    "id": "q19",
    "topic": "Parliament",
    "prompt": "What does unicameral mean?",
    "options": [
      "One parliamentary chamber",
      "Two parliamentary chambers",
      "One political party",
      "One level of government"
    ],
    "answer": 0,
    "why": "Queensland has the Legislative Assembly as its sole chamber; the Crown is also a component of Parliament."
  },
  {
    "id": "q20",
    "topic": "Parliament",
    "prompt": "Which is a real scrutiny mechanism in Queensland?",
    "options": [
      "Parliamentary committee examination of Bills",
      "A Queensland Senate veto",
      "Automatic High Court approval of every Bill",
      "A referendum on every Act"
    ],
    "answer": 0,
    "why": "Committees can receive evidence and make recommendations. Their existence does not create a second chamber."
  },
  {
    "id": "q21",
    "topic": "Parliament",
    "prompt": "What is a plausible benefit of one parliamentary chamber?",
    "options": [
      "Fewer chamber-to-chamber delays in passing legislation",
      "Every law is automatically fair",
      "Committees become unnecessary",
      "Judicial review is abolished"
    ],
    "answer": 0,
    "why": "Explain the mechanism: a Bill does not need agreement from an upper house. Efficiency does not guarantee sound law."
  },
  {
    "id": "q22",
    "topic": "Parliament",
    "prompt": "What risk can arise when government controls a single chamber?",
    "options": [
      "Reduced opportunities for independent parliamentary resistance",
      "No law can ever pass",
      "Courts must vote with the government",
      "All opposition parties are outlawed"
    ],
    "answer": 0,
    "why": "Strong party numbers may make scrutiny less influential. Opposition debate, committees, elections and courts still matter."
  },
  {
    "id": "q23",
    "topic": "Parliament",
    "prompt": "What happens at consideration-in-detail?",
    "options": [
      "Clauses and proposed amendments are examined",
      "Voters approve the Constitution",
      "The Governor delivers a judicial sentence",
      "The Bill first becomes an Act"
    ],
    "answer": 0,
    "why": "Distinguish detailed scrutiny of clauses from second-reading debate about the principles of a Bill."
  },
  {
    "id": "q24",
    "topic": "Parliament",
    "prompt": "Who gives Royal Assent to a Queensland Bill?",
    "options": [
      "The Governor",
      "The Prime Minister",
      "The High Court Chief Justice",
      "The President of the Senate"
    ],
    "answer": 0,
    "why": "At Commonwealth level the Governor-General performs the assent role. An Act may commence later than assent."
  },
  {
    "id": "q25",
    "topic": "Parliament",
    "prompt": "What best describes a minority government?",
    "options": [
      "It governs with lower-house confidence despite lacking its own majority of seats",
      "It has fewer judges than the opposition",
      "It cannot ever pass legislation",
      "It automatically controls the Senate"
    ],
    "answer": 0,
    "why": "Crossbench confidence and supply can enable government. Negotiation can improve scrutiny but make passage less predictable."
  },
  {
    "id": "q26",
    "topic": "Parliament",
    "prompt": "A government has a House majority but lacks a Senate majority. Likely effect?",
    "options": [
      "It may need crossbench or opposition support to pass legislation",
      "Every Bill automatically becomes law",
      "It must always resign immediately",
      "It can abolish the Senate by ordinary vote"
    ],
    "answer": 0,
    "why": "The Senate can amend or reject most Bills. Lower-house confidence and Senate legislative support are distinct."
  },
  {
    "id": "q27",
    "topic": "Parliament",
    "prompt": "What does a double dissolution dissolve?",
    "options": [
      "Both houses of the Commonwealth Parliament under constitutional conditions",
      "Two state councils",
      "The High Court and Cabinet",
      "Only the House of Representatives"
    ],
    "answer": 0,
    "why": "It is a constitutional deadlock mechanism, not a normal consequence of any Senate disagreement."
  },
  {
    "id": "q28",
    "topic": "Parliament",
    "prompt": "What is a joint sitting in the s 57 deadlock process?",
    "options": [
      "Members of both federal houses deliberate and vote together after required steps",
      "State premiers replace federal MPs",
      "Judges vote on whether a Bill should pass",
      "A routine meeting of local councils"
    ],
    "answer": 0,
    "why": "It is exceptional and follows the constitutional double-dissolution process and renewed disagreement."
  },
  {
    "id": "q29",
    "topic": "Courts",
    "prompt": "Why is Australia not described as having a complete separation of all three powers?",
    "options": [
      "Ministers also sit in Parliament",
      "The High Court is part of Cabinet",
      "Every MP is a judge",
      "The Constitution has no judiciary chapter"
    ],
    "answer": 0,
    "why": "The legislature and executive overlap. Federal judicial independence remains a major constitutional safeguard."
  },
  {
    "id": "q30",
    "topic": "Courts",
    "prompt": "Which action is an exercise of judicial review?",
    "options": [
      "A court assesses whether a public decision was lawfully made",
      "A tribunal chooses a preferable decision on the merits",
      "A minister runs a popularity poll",
      "Parliament counts election votes"
    ],
    "answer": 0,
    "why": "Judicial review concerns legality. It is distinct from substituting a preferable policy or merits decision."
  },
  {
    "id": "q31",
    "topic": "Courts",
    "prompt": "What is the purpose of special leave for a High Court appeal?",
    "options": [
      "Permission is required for an appeal to proceed",
      "Every losing party must automatically receive a new trial",
      "The Prime Minister authorises the result",
      "A jury chooses which federal laws are valid"
    ],
    "answer": 0,
    "why": "The High Court is the final appellate court, but it does not automatically hear every attempted appeal."
  },
  {
    "id": "q32",
    "topic": "Courts",
    "prompt": "Which statement about judges and policy is strongest?",
    "options": [
      "Judges apply law independently even when government dislikes the outcome",
      "Judges must implement ministers\u2019 preferred verdicts",
      "Judges can ignore valid legislation whenever they dislike it",
      "Judges hold office only while popular on social media"
    ],
    "answer": 0,
    "why": "Judicial independence protects impartial decision-making; it does not place judges above the law."
  },
  {
    "id": "q33",
    "topic": "Courts",
    "prompt": "How can Parliament respond to a court\u2019s statutory interpretation?",
    "options": [
      "Amend the legislation within constitutional limits",
      "Order the judge to change the delivered reasons",
      "Abolish constitutional limits by press release",
      "Ignore all binding judgments"
    ],
    "answer": 0,
    "why": "The interaction between statute and case law can prompt reform. Parliament cannot override the Constitution by ordinary legislation."
  },
  {
    "id": "q34",
    "topic": "Courts",
    "prompt": "Which activity is statutory interpretation?",
    "options": [
      "A court decides what an ambiguous legislative phrase means",
      "A minister drafts a party slogan",
      "Voters change constitutional wording",
      "A council paints road markings"
    ],
    "answer": 0,
    "why": "The court applies legislative meaning in a case. This differs from Parliament enacting the statute."
  },
  {
    "id": "q35",
    "topic": "Courts",
    "prompt": "What best describes precedent?",
    "options": [
      "Relevant legal principles from earlier decisions guide or bind later courts",
      "Every earlier factual detail must be repeated",
      "Parliamentary speeches always bind judges",
      "Every court can ignore a superior court\u2019s binding ratio"
    ],
    "answer": 0,
    "why": "Identify the legal principle and court hierarchy; a case is more than a story about its parties."
  },
  {
    "id": "q36",
    "topic": "Cases",
    "prompt": "Which reform is closely connected to Mabo (No. 2)?",
    "options": [
      "The Native Title Act 1993 (Cth)",
      "The creation of the Australian Constitution",
      "The abolition of all private ownership",
      "The first law establishing Parliament"
    ],
    "answer": 0,
    "why": "The decision recognised native title at common law and prompted a statutory framework. It did not automatically return all Australian land."
  },
  {
    "id": "q37",
    "topic": "Cases",
    "prompt": "What did Roadshow Films v iiNet decide on the facts?",
    "options": [
      "iiNet had not authorised customers\u2019 copyright infringements",
      "All online downloading was legal",
      "Copyright was abolished",
      "Internet providers were strictly liable for every user\u2019s conduct"
    ],
    "answer": 0,
    "why": "The decision concerned authorisation liability under copyright legislation, not permission for users to infringe copyright."
  },
  {
    "id": "q38",
    "topic": "Cases",
    "prompt": "Which is the strongest way to explain a landmark case\u2019s influence?",
    "options": [
      "Link its legal issue, decision and resulting legal change",
      "List only its year and parties",
      "Describe whether the judges seemed nice",
      "Say it was important without explaining why"
    ],
    "answer": 0,
    "why": "A causal link shows influence: what changed in legal meaning, practice or subsequent legislation?"
  },
  {
    "id": "q39",
    "topic": "Cases",
    "prompt": "How should Al Masri (2002) be used in revision?",
    "options": [
      "As historical statutory interpretation, with later developments acknowledged",
      "As the final current rule on all detention",
      "As a referendum result",
      "As a High Court judgment creating citizenship"
    ],
    "answer": 0,
    "why": "It was a Federal Court decision. Later detention authorities include Al-Kateb (2004) and NZYQ (2023); do not present the historical case as the final current position."
  },
  {
    "id": "q40",
    "topic": "Cases",
    "prompt": "What did the Tasmanian Dam Case illustrate?",
    "options": [
      "The external affairs power can support laws implementing treaty obligations",
      "States can never regulate the environment",
      "Treaties automatically become Australian statutes",
      "The High Court can hold a referendum"
    ],
    "answer": 0,
    "why": "Commonwealth v Tasmania (1983) illustrates constitutional interpretation affecting the practical federal balance."
  },
  {
    "id": "q41",
    "topic": "Reasoning",
    "prompt": "Which sentence identifies the nature of a legal issue?",
    "options": [
      "The proposed power allows a minister to cancel licences without reasons",
      "The scheme affects 240 operators across six districts",
      "The survey has 700 respondents",
      "The debate has lasted eight months"
    ],
    "answer": 0,
    "why": "Nature identifies the legal problem. Scope examines its extent, reach and affected groups."
  },
  {
    "id": "q42",
    "topic": "Reasoning",
    "prompt": "Which sentence provides scope evidence?",
    "options": [
      "The supplied audit records 80 refusals across four regions",
      "The law should be fair",
      "I dislike the minister",
      "Accountability is a legal criterion"
    ],
    "answer": 0,
    "why": "Specific evidence can show extent. State what the evidence does and does not establish."
  },
  {
    "id": "q43",
    "topic": "Reasoning",
    "prompt": "Which is analysis rather than source retelling?",
    "options": [
      "The short review period may prevent affected applicants obtaining advice",
      "Source B contains three paragraphs",
      "Source A says a Bill is proposed",
      "The article uses a heading"
    ],
    "answer": 0,
    "why": "Analysis connects legal information to meaning or consequences; accurate summary can support it but is not enough alone."
  },
  {
    "id": "q44",
    "topic": "Reasoning",
    "prompt": "Which is a developed viewpoint?",
    "options": [
      "Operators oppose the fee because it may price small businesses out of licensing",
      "People have different opinions",
      "Source C is about operators",
      "The law has supporters"
    ],
    "answer": 0,
    "why": "Name the stakeholder, position, reason and likely consequence, using evidence where available."
  },
  {
    "id": "q45",
    "topic": "Reasoning",
    "prompt": "Which is a specific legal alternative?",
    "options": [
      "Amend the Act to require written reasons and independent merits review",
      "Tell everyone to be nicer",
      "Spend money without specifying any mechanism",
      "Make a poster saying fairness matters"
    ],
    "answer": 0,
    "why": "A legal alternative identifies an actual change to a rule, power, obligation, remedy or process and an appropriate authority."
  },
  {
    "id": "q46",
    "topic": "Reasoning",
    "prompt": "Which recommendation applies a criterion?",
    "options": [
      "Prefer independent review because it allows errors to be corrected and improves accountability",
      "The better option is best",
      "Fairness, equality, rights",
      "I choose it because I like it"
    ],
    "answer": 0,
    "why": "Explain how the proposed mechanism satisfies the criterion, then consider limitations and competing criteria."
  },
  {
    "id": "q47",
    "topic": "Reasoning",
    "prompt": "What is a useful practical implication of a review scheme?",
    "options": [
      "It needs trained reviewers and funding to manage applications promptly",
      "The word accountability has six syllables",
      "The law has a long title",
      "A source is on page three"
    ],
    "answer": 0,
    "why": "Discuss implementation, resources, delays, access or unintended effects connected to the actual proposal."
  },
  {
    "id": "q48",
    "topic": "Reasoning",
    "prompt": "A source reports 40 complaints. What can you safely infer?",
    "options": [
      "Complaints indicate concerns but do not prove 40 legal breaches",
      "Exactly 40 offences were proved",
      "No other people were affected",
      "Every complaint is false"
    ],
    "answer": 0,
    "why": "Distinguish allegations, complaints, findings and proof. Avoid inflating the evidence."
  },
  {
    "id": "q49",
    "topic": "Reasoning",
    "prompt": "Which consequence follows from removing independent review?",
    "options": [
      "An erroneous administrative decision may be harder to correct",
      "Every decision will certainly be corrupt",
      "All decisions become constitutionally valid",
      "Courts automatically become ministers"
    ],
    "answer": 0,
    "why": "Use proportionate language and explain the causal legal effect. Avoid unsupported absolute claims."
  },
  {
    "id": "q50",
    "topic": "Reasoning",
    "prompt": "Which is the best way to use stimulus evidence?",
    "options": [
      "Identify the source detail and explain how it supports the legal claim",
      "Mention every source number without explanation",
      "Invent a statistic if the source is vague",
      "Copy a paragraph and move on"
    ],
    "answer": 0,
    "why": "Evidence earns its place by supporting an inference, viewpoint, consequence or evaluation."
  },
  {
    "id": "q51",
    "topic": "Reasoning",
    "prompt": "Which comparison genuinely evaluates alternatives?",
    "options": [
      "Written reasons are cheaper, but independent review offers stronger error correction",
      "Option A exists and Option B exists",
      "Both are good and both are bad",
      "The first source comes before the second"
    ],
    "answer": 0,
    "why": "Compare relevant strengths and limitations through criteria and use the analysis to justify the recommendation."
  },
  {
    "id": "q52",
    "topic": "Parliament",
    "prompt": "What does a territory Administrator do in broad terms?",
    "options": [
      "Performs formal Crown-representative functions within the territory framework",
      "Represents a seventh state in referendum counting",
      "Acts as Chief Justice of the High Court",
      "Controls every Commonwealth minister"
    ],
    "answer": 0,
    "why": "Territory arrangements arise under their self-government frameworks and differ from state constitutional arrangements."
  },
  {
    "id": "q53",
    "topic": "Courts",
    "prompt": "What is merits review designed to examine?",
    "options": [
      "The correct or preferable administrative decision under the applicable law",
      "Only whether parliamentary speeches were polite",
      "Whether the Constitution should be rewritten",
      "Whether the tribunal can create unlimited powers"
    ],
    "answer": 0,
    "why": "Tribunal powers and review rights depend on legislation. Merits review differs from a court testing legality."
  },
  {
    "id": "q54",
    "topic": "Courts",
    "prompt": "Which description of QCAT is accurate?",
    "options": [
      "A Queensland tribunal with civil, administrative and disciplinary jurisdictions",
      "The upper house of Queensland Parliament",
      "A branch of the High Court",
      "A national legislature"
    ],
    "answer": 0,
    "why": "Its jurisdiction is conferred by legislation. Not every dispute or government decision can be taken there."
  },
  {
    "id": "q55",
    "topic": "Courts",
    "prompt": "Which body independently reviews many reviewable Commonwealth administrative decisions?",
    "options": [
      "The Administrative Review Tribunal",
      "The Queensland Senate",
      "The local council caucus",
      "The Governor acting as a trial judge"
    ],
    "answer": 0,
    "why": "The ART conducts merits review where legislation gives it jurisdiction. It is not a general right of appeal against every government action."
  },
  {
    "id": "q56",
    "topic": "Courts",
    "prompt": "What distinguishes Murri Court sentencing?",
    "options": [
      "A magistrate considers cultural information with Elders and Respected Persons involved",
      "Elders replace the magistrate and create a separate criminal code",
      "The Commonwealth Constitution is suspended",
      "All eligible defendants automatically avoid punishment"
    ],
    "answer": 0,
    "why": "Murri Court operates within Queensland law. Cultural and community participation informs the magistrate\u2019s sentencing process."
  },
  {
    "id": "q57",
    "topic": "Courts",
    "prompt": "Which matters are associated with Queensland\u2019s Childrens Court?",
    "options": [
      "Youth justice and child protection matters",
      "Divorce for all Australian couples",
      "Constitutional disputes between states",
      "Passage of Commonwealth Bills"
    ],
    "answer": 0,
    "why": "The Childrens Court has specialised roles concerning children. It should not be confused with the federal family law courts."
  },
  {
    "id": "q58",
    "topic": "Courts",
    "prompt": "Which matter falls within the family law work of the Federal Circuit and Family Court of Australia?",
    "options": [
      "An application for parenting orders after separation",
      "A Bill\u2019s second reading",
      "A constitutional referendum count",
      "A council\u2019s annual rubbish collection roster"
    ],
    "answer": 0,
    "why": "The federal courts exercise jurisdiction given by legislation, including family law. Do not treat every dispute involving a child as the same kind of proceeding."
  },
  {
    "id": "q59",
    "topic": "Constitution",
    "prompt": "What was the legal outcome of the 2023 Voice referendum?",
    "options": [
      "The proposal did not pass and did not alter the Constitution",
      "The Voice was inserted into the Constitution",
      "A national Yes majority alone changed the text",
      "Every state approved the proposal"
    ],
    "answer": 0,
    "why": "The proposal did not achieve the required double majority. A referendum outcome is distinct from a later policy debate."
  },
  {
    "id": "q60",
    "topic": "Parliament",
    "prompt": "A party has majorities in both federal houses. Which implication is most plausible?",
    "options": [
      "Its legislation may pass more readily, while independent parliamentary resistance may weaken",
      "Constitutional limits cease to apply",
      "Courts must accept every Bill as valid",
      "Royal Assent is no longer part of law-making"
    ],
    "answer": 0,
    "why": "Control of both houses may reduce the need for negotiation. Elections, constitutional limits and independent courts still constrain power."
  }
];
