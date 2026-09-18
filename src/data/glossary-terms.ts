export type GlossaryTerm = {
  term: string;
  definition: string;
};

export type GlossaryData = Record<string, GlossaryTerm[]>;

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  // A
  {
    term: 'Acas (Advisory, Conciliation and Arbitration Service)',
    definition:
      "A publicly funded, independent body that provides free and impartial information, advice, training and conciliation services. Acas plays a central role in employment disputes and operates the mandatory Early Conciliation scheme that claimants must complete before lodging a tribunal claim.",
  },
  {
    term: 'Acas Code of Practice',
    definition:
      "Statutory guidance issued by Acas on disciplinary and grievance procedures. Employment tribunals must take the Code into account when relevant. Failure to follow the Code can result in a tribunal increasing or reducing any award by up to 25%.",
  },
  {
    term: 'Acas Early Conciliation',
    definition:
      "A free, mandatory pre-claim service where an Acas conciliator attempts to help the parties reach a settlement before a tribunal claim is submitted. A claimant cannot submit an ET1 without first contacting Acas and receiving an Early Conciliation certificate.",
  },
  {
    term: 'Aggravated Damages',
    definition:
      "An additional award of compensation in discrimination cases where the respondent's conduct has been high-handed, malicious, insulting or oppressive, and has made the claimant's injury worse. They compensate for the additional distress caused.",
  },
  {
    term: 'Appeal',
    definition:
      "A challenge to a tribunal judgment made to the Employment Appeal Tribunal (EAT). Appeals can only be made on a point of law, not simply because a party disagrees with the outcome. Permission is not usually required to appeal to the EAT.",
  },
  {
    term: 'Automatic Unfair Dismissal',
    definition:
      "Certain dismissals are automatically unfair regardless of length of service, including dismissals for pregnancy, whistleblowing, asserting a statutory right, trade union activities, or taking family leave. No qualifying period applies.",
  },

  // B
  {
    term: 'Basic Award',
    definition:
      "The minimum compensatory element payable for unfair dismissal, calculated using a statutory formula based on the claimant's age, weekly pay (capped), and completed years of service (up to 20). It mirrors the statutory redundancy pay calculation.",
  },
  {
    term: 'Bundle',
    definition:
      "A paginated collection of all documents relevant to a case, agreed between the parties and presented to the tribunal. The bundle typically contains correspondence, contracts, policies, meeting notes, and witness statements, and is referred to during hearings.",
  },
  {
    term: 'Burden of Proof',
    definition:
      "The obligation to prove a disputed assertion. In discrimination claims, once a claimant establishes facts from which discrimination could be inferred (a prima facie case), the burden shifts to the respondent to prove a non-discriminatory explanation.",
  },

  // C
  {
    term: 'Case Management Order',
    definition:
      "An order made by a tribunal judge to manage the progression of a claim. Typical orders include directions for exchange of witness statements, preparation of the bundle, and listing of hearings.",
  },
  {
    term: 'Claim Form (ET1)',
    definition:
      "The document submitted by a claimant to start tribunal proceedings. It sets out the details of the claim, including the parties, the complaints being made, and the remedy sought. The ET1 must be submitted within the relevant time limit.",
  },
  {
    term: 'Claimant',
    definition:
      "The individual bringing a claim in the employment tribunal, usually a current or former employee or worker. In some proceedings, such as equal pay, the claimant may be a group of individuals.",
  },
  {
    term: 'Comparator',
    definition:
      "A person (real or hypothetical) used for comparison purposes in a discrimination claim. To establish direct discrimination, the claimant must show they were treated less favourably than a real or hypothetical comparator in similar circumstances.",
  },
  {
    term: 'Compensatory Award',
    definition:
      "The main element of compensation in unfair dismissal cases, designed to compensate the claimant for financial losses caused by the dismissal. It is subject to a statutory cap (the lower of one year's pay or the prescribed limit, reviewed annually).",
  },
  {
    term: 'Constructive Dismissal',
    definition:
      "Where an employee resigns in response to a fundamental breach of their contract of employment by the employer. The employee treats themselves as dismissed. Common examples include a unilateral reduction in pay, bullying, or a significant change to duties.",
  },
  {
    term: 'Costs Order',
    definition:
      "An order that one party pay all or part of the other party's legal costs. Tribunals do not routinely award costs but may do so where a party has acted vexatiously, abusively, disruptively, or unreasonably, or where a claim had no reasonable prospect of success.",
  },
  {
    term: 'Cross-Examination',
    definition:
      "The questioning of a witness by the opposing party or their representative at a hearing. Its purpose is to challenge the witness's evidence, highlight inconsistencies, and put the other side's case.",
  },

  // D
  {
    term: 'Detriment',
    definition:
      "Unfavourable treatment suffered by a worker as a consequence of exercising a statutory right (such as whistleblowing, raising health and safety concerns, or working part-time). Detriment claims do not require dismissal.",
  },
  {
    term: 'Direct Discrimination',
    definition:
      "Treating a person less favourably than another person (real or hypothetical) because of a protected characteristic. Direct discrimination cannot be justified except in the case of age discrimination.",
  },
  {
    term: 'Disability',
    definition:
      "Under the Equality Act 2010, a physical or mental impairment that has a substantial and long-term adverse effect on a person's ability to carry out normal day-to-day activities. 'Long-term' generally means 12 months or more.",
  },
  {
    term: 'Disclosure',
    definition:
      "The process by which parties exchange relevant documents before a hearing. Each party is required to disclose documents that are, or have been, in their possession and are relevant to the issues. Documents disclosed must be included in the agreed bundle.",
  },
  {
    term: 'Dismissal',
    definition:
      "The termination of a contract of employment by the employer. Dismissal can be express (the employer terminates) or constructive (the employee resigns in response to a fundamental breach). Both can give rise to a tribunal claim.",
  },
  {
    term: 'Duty to Make Reasonable Adjustments',
    definition:
      "A positive obligation on employers under the Equality Act 2010 to take reasonable steps to remove, reduce or avoid a substantial disadvantage that a provision, criterion, practice, physical feature or absence of an auxiliary aid causes a disabled person.",
  },

  // E
  {
    term: 'Early Conciliation Certificate',
    definition:
      "A document issued by Acas at the conclusion of the Early Conciliation process, confirming that conciliation has been attempted or that the claimant does not wish to conciliate. This certificate number must be included in the ET1 claim form.",
  },
  {
    term: 'Employment Appeal Tribunal (EAT)',
    definition:
      "The appellate tribunal for employment tribunal decisions. It hears appeals on points of law only. The EAT is chaired by a High Court judge and may sit with lay members. Decisions of the EAT are binding on employment tribunals.",
  },
  {
    term: 'Employment Status',
    definition:
      "Whether an individual is classified as an employee, worker, or self-employed. Status affects what rights a person has and is often contested. Employment status is determined by looking at the actual working relationship, not just the contractual documentation.",
  },
  {
    term: 'Employment Tribunal',
    definition:
      "An independent judicial body that resolves disputes between employers and employees (and workers) relating to employment rights. Claims commonly heard include unfair dismissal, discrimination, breach of contract, and unlawful deduction from wages.",
  },
  {
    term: 'Equality Act 2010',
    definition:
      "The primary UK statute prohibiting discrimination, harassment and victimisation in employment and other areas of life. It consolidates and replaces earlier discrimination legislation. It identifies nine protected characteristics and imposes duties on employers.",
  },
  {
    term: 'ET1',
    definition:
      "The official claim form submitted by a claimant to start tribunal proceedings. It sets out the nature of the claim, the dates and facts relied upon, and the remedy sought. Submission must follow Acas Early Conciliation.",
  },
  {
    term: 'ET3',
    definition:
      "The official response form submitted by the respondent in answer to an ET1 claim. The respondent has 28 days from receiving the ET1 to submit an ET3. Failure to respond on time can result in a default judgment.",
  },
  {
    term: 'Ex Parte',
    definition:
      "A hearing or application made by one party in the absence of the other. Rarely used in employment tribunals but can arise in applications for interim injunctions or urgent orders.",
  },

  // F
  {
    term: 'Final Hearing',
    definition:
      'The main hearing at which both parties present their evidence and arguments. A judge (and sometimes lay members) hears witness evidence, receives submissions and decides the claim. Also called a "substantive hearing."',
  },
  {
    term: 'Fixed-Term Contract',
    definition:
      "A contract of employment with a defined end date or that ends on completion of a specific task. Fixed-term employees have protection against less favourable treatment compared to comparable permanent employees.",
  },
  {
    term: 'Further Particulars',
    definition:
      "A request for clarification or additional information regarding the other party's claim or response. Now more commonly ordered by a judge in the form of a written request under Case Management Orders.",
  },

  // G
  {
    term: 'Grievance',
    definition:
      "A formal complaint raised by an employee about a workplace matter, such as working conditions, treatment by management, or breach of contract. Employers should follow the Acas Code of Practice on Disciplinary and Grievance Procedures when handling grievances.",
  },
  {
    term: 'Gross Misconduct',
    definition:
      "Conduct by an employee so serious that it justifies summary dismissal (dismissal without notice or pay in lieu). Examples include theft, violence, serious health and safety breaches, and gross insubordination. The employer must still follow a fair procedure.",
  },

  // H
  {
    term: 'Harassment',
    definition:
      "Under the Equality Act 2010, unwanted conduct related to a protected characteristic which has the purpose or effect of violating a person's dignity or creating an intimidating, hostile, degrading, humiliating or offensive environment.",
  },
  {
    term: 'Hearing',
    definition:
      "A formal proceeding before a tribunal at which the parties present their cases. Hearings can be preliminary (dealing with jurisdictional or procedural matters) or final (determining the merits of the claim and/or remedy).",
  },
  {
    term: 'Hybrid Hearing',
    definition:
      "A hearing where some participants (parties, witnesses, or representatives) attend in person at the tribunal while others participate remotely by video link. Became common following the COVID-19 pandemic.",
  },

  // I
  {
    term: 'Indirect Discrimination',
    definition:
      "Where an employer applies a provision, criterion or practice (PCP) that is facially neutral but puts persons sharing a protected characteristic at a particular disadvantage. Indirect discrimination can be justified if the employer shows it is a proportionate means of achieving a legitimate aim.",
  },
  {
    term: 'Injury to Feelings',
    definition:
      "Compensation awarded in discrimination and certain other claims for the distress, hurt and humiliation suffered by the claimant. Awarded on a scale set out in the Vento guidelines (as updated): lower, middle, or upper band, depending on severity.",
  },
  {
    term: 'Interim Relief',
    definition:
      "An urgent remedy available in limited types of claims (principally whistleblowing and trade union dismissal) where a claimant asks the tribunal to order that their employment continue, or their contract be preserved, pending the final hearing.",
  },

  // J
  {
    term: 'Job Evaluation',
    definition:
      "A systematic process for assessing the relative value of jobs within an organisation. A valid job evaluation scheme can be used in equal pay claims to demonstrate that claimant and comparator jobs are of equal value.",
  },
  {
    term: 'Judgment',
    definition:
      "The formal decision of a tribunal. A judgment is binding and enforceable. It may be issued at the end of a hearing or reserved (issued in writing at a later date). A judgment must include reasons unless the parties consent to its omission.",
  },
  {
    term: 'Judicial Mediation',
    definition:
      "A confidential, voluntary process conducted by a trained employment judge to help the parties reach a negotiated settlement. It is not a hearing and the mediating judge will not decide the case. Anything said in judicial mediation is inadmissible at any subsequent hearing.",
  },
  {
    term: 'Jurisdiction',
    definition:
      "The legal authority of the tribunal to hear a particular claim. For example, a tribunal only has jurisdiction to hear an unfair dismissal claim if the claimant qualifies and the claim is in time. If jurisdiction is disputed it may be decided at a preliminary hearing.",
  },

  // L
  {
    term: 'Lay Members',
    definition:
      "Non-legal members of an employment tribunal panel who sit alongside the employment judge. They are drawn from employer-side and employee-side backgrounds and bring practical workplace experience. Lay members sit in full panels in certain cases such as unfair dismissal.",
  },
  {
    term: 'Legal Aid',
    definition:
      "State funding for legal representation. Legal aid is not available for representation in employment tribunals in England and Wales, although it may be available for related proceedings such as judicial review in certain circumstances.",
  },
  {
    term: 'Limitation Period',
    definition:
      "The time limit within which a tribunal claim must be brought. For most claims (e.g., unfair dismissal, discrimination) the limit is three months minus one day from the act complained of. Late claims may be accepted if it was not reasonably practicable to bring them in time, or if it is just and equitable to extend time.",
  },
  {
    term: 'Loss of Earnings',
    definition:
      "The financial losses suffered by a claimant following dismissal or other unlawful treatment, comprising past losses (from the date of dismissal to the hearing) and future losses (projected loss of earnings going forward). The claimant must mitigate their loss.",
  },

  // M
  {
    term: 'Mediation',
    definition:
      "A voluntary, confidential process in which an independent mediator helps the parties to resolve a dispute without a tribunal hearing. Settlement through mediation is usually recorded in a COT3 or settlement agreement.",
  },
  {
    term: 'Mitigation',
    definition:
      "The duty on a claimant to take reasonable steps to reduce their losses following dismissal, for example by actively seeking alternative employment. A tribunal will reduce a compensatory award if the claimant failed to mitigate.",
  },

  // N
  {
    term: 'Notice Pay',
    definition:
      "Payment in lieu of notice, or pay during a notice period, to which an employee is entitled upon termination. The minimum statutory notice period is one week per year of service (up to 12 weeks). Failure to pay can give rise to a wrongful dismissal claim.",
  },
  {
    term: 'Notice to Produce',
    definition:
      "A formal request requiring a party to produce specific documents. If a party fails to produce documents without good reason, the tribunal may draw adverse inferences.",
  },

  // O
  {
    term: 'Occupational Requirement',
    definition:
      "A limited exception to the prohibition on direct discrimination where it is a genuine and determining requirement of a particular job to have a specific protected characteristic (e.g., an actor of a specific ethnicity for authenticity), and the requirement is proportionate.",
  },
  {
    term: 'Ordinary Unfair Dismissal',
    definition:
      "An unfair dismissal claim where the claimant must show two years' qualifying service. The tribunal must consider whether the employer had a potentially fair reason for dismissal and whether it acted reasonably in all the circumstances.",
  },

  // P
  {
    term: 'Particulars of Claim',
    definition:
      "The detailed written statement by the claimant setting out the factual basis of their claim. A detailed particularised claim helps the respondent understand the case they face and helps the tribunal manage the issues efficiently.",
  },
  {
    term: 'Pension Loss',
    definition:
      "Compensation for loss of pension rights caused by a dismissal. May include both loss of employer contributions during the period of loss and, in longer-term cases, loss of defined benefit rights. Calculated using Presidential Guidance on pension losses.",
  },
  {
    term: 'Polkey Reduction',
    definition:
      "A reduction to a compensatory award based on the chance that the claimant would have been dismissed fairly in any event, even if a fair procedure had been followed. Named after the House of Lords case Polkey v AE Dayton Services Ltd [1987].",
  },
  {
    term: 'Preliminary Hearing',
    definition:
      "A hearing held before the final hearing to deal with procedural matters, jurisdictional disputes, or to determine preliminary issues such as whether the claimant has a disability or has qualifying service. Can be in public or in private.",
  },
  {
    term: 'Protected Characteristics',
    definition:
      "The nine characteristics protected under the Equality Act 2010: age, disability, gender reassignment, marriage and civil partnership, pregnancy and maternity, race, religion or belief, sex, and sexual orientation.",
  },
  {
    term: 'Protected Disclosure',
    definition:
      "A disclosure of information that a worker reasonably believes shows wrongdoing (such as a criminal offence, failure to comply with a legal obligation, or a danger to health and safety). Workers are protected from detriment and dismissal for making a protected disclosure (whistleblowing).",
  },

  // Q
  {
    term: 'Qualifying Period',
    definition:
      "The length of continuous employment required before certain statutory rights apply. For ordinary unfair dismissal, employees need two years' continuous service. Some claims (e.g., automatic unfair dismissal, discrimination) have no qualifying period.",
  },

  // R
  {
    term: 'Re-engagement',
    definition:
      "A remedy for unfair dismissal where the tribunal orders that the claimant be taken back into employment by the respondent in a different or comparable job. Unlike reinstatement, the claimant does not return to their old post.",
  },
  {
    term: 'Reasonable Adjustments',
    definition:
      "Changes that an employer is legally required to make under the Equality Act 2010 to remove or reduce a substantial disadvantage experienced by a disabled employee. What is 'reasonable' depends on factors such as cost, practicality, and the resources of the employer.",
  },
  {
    term: 'Redundancy',
    definition:
      "A dismissal where the employer's requirement for employees to carry out work of a particular kind has ceased or diminished. Employees with two or more years' service are entitled to statutory redundancy pay. Selection for redundancy using automatically unfair criteria is automatically unfair dismissal.",
  },
  {
    term: 'Reinstatement',
    definition:
      "A remedy for unfair dismissal where the tribunal orders that the claimant be returned to their original job as if they had never been dismissed. It is the primary remedy to consider in unfair dismissal but is relatively rarely ordered in practice.",
  },
  {
    term: 'Remedy Hearing',
    definition:
      "A separate hearing held after a finding of liability to determine the compensation or other remedy to be awarded to the claimant. Parties present evidence and arguments on quantum of loss and any relevant reductions.",
  },
  {
    term: 'Reserved Judgment',
    definition:
      "A judgment that is not given orally at the end of a hearing but is written up and sent to the parties at a later date. Reserved judgments are common in complex or lengthy cases.",
  },
  {
    term: 'Response (ET3)',
    definition:
      "The formal document submitted by the respondent in reply to a claimant's ET1. The ET3 must be submitted within 28 days. It sets out the respondent's grounds for resisting the claim.",
  },

  // S
  {
    term: 'Scott Schedule',
    definition:
      "A document used in cases involving multiple acts of alleged discrimination or detriment. It lists each incident relied upon by the claimant in a table, with columns for the claimant's case, the respondent's response, and the tribunal's findings.",
  },
  {
    term: 'Settlement Agreement',
    definition:
      "A legally binding agreement between an employer and employee that settles claims arising from the employment. For a settlement agreement to be valid and bar future claims, the employee must receive independent legal advice from a qualified adviser.",
  },
  {
    term: 'Strike Out',
    definition:
      "The tribunal's power to dismiss a claim (or response) without a full hearing. A claim may be struck out if it has no reasonable prospect of success, if it is scandalous, vexatious or an abuse of process, or if the claimant has failed to comply with orders.",
  },

  // T
  {
    term: 'Time Limits',
    definition:
      "The statutory deadlines for presenting a tribunal claim. Most claims must be brought within three months minus one day of the act complained of. Time limits are strictly enforced. Acas Early Conciliation can pause (stop the clock on) the time limit while conciliation is ongoing.",
  },
  {
    term: 'Transfer of Undertakings (TUPE)',
    definition:
      "The Transfer of Undertakings (Protection of Employment) Regulations 2006. TUPE protects employees when the business or undertaking they work for is transferred to a new employer. Their employment transfers automatically on the same terms and conditions.",
  },
  {
    term: 'Tribunal Panel',
    definition:
      "The composition of the tribunal hearing a case. Employment judges now sit alone in many types of cases. A full panel of three (judge plus two lay members) is most commonly used in unfair dismissal cases where either party requests it.",
  },

  // U
  {
    term: 'Unfair Dismissal',
    definition:
      "A statutory claim under the Employment Rights Act 1996 where an employee argues that their dismissal was unfair. The tribunal considers whether there was a potentially fair reason (e.g., conduct, capability, redundancy) and whether the employer acted reasonably in the circumstances.",
  },
  {
    term: 'Unless Order',
    definition:
      "A conditional order that specifies the consequence of non-compliance, usually that the claim (or response) will be struck out automatically if the party fails to comply by the specified date. Unless orders are used where a party has previously failed to comply with tribunal directions.",
  },
  {
    term: 'Uplift',
    definition:
      "An increase to a compensatory award made by the tribunal where either party has unreasonably failed to comply with the Acas Code of Practice on Disciplinary and Grievance Procedures. The tribunal may increase any award by up to 25%.",
  },

  // V
  {
    term: 'Vento Bands',
    definition:
      "The three bands used to quantify injury to feelings awards in discrimination cases, set out in Vento v Chief Constable of West Yorkshire Police [2002] and periodically updated by Presidential Guidance. The bands reflect the lower, middle, and upper levels of injury.",
  },
  {
    term: 'Victimisation',
    definition:
      'Under the Equality Act 2010, treating a person less favourably because they have done or are suspected of doing a "protected act" — such as making a complaint of discrimination, supporting someone else\'s complaint, or giving evidence in proceedings.',
  },

  // W
  {
    term: 'Whistleblowing',
    definition:
      "The act of a worker making a protected disclosure of information about wrongdoing in the workplace. Workers who blow the whistle are protected from dismissal and detriment. Such claims are brought under the Employment Rights Act 1996 and carry no qualifying period.",
  },
  {
    term: 'Without Prejudice',
    definition:
      'A legal rule that communications made genuinely in an attempt to settle a dispute cannot be used as evidence in tribunal proceedings. "Without prejudice save as to costs" communications may be considered by the tribunal only when deciding costs.',
  },
  {
    term: 'Witness Statement',
    definition:
      "A written statement of the evidence a witness proposes to give at a hearing. Witness statements are exchanged between parties before the final hearing and stand as the witness's evidence-in-chief. The witness is then cross-examined on it.",
  },
  {
    term: 'Worker',
    definition:
      "A broader category than employee that includes individuals who work under a contract to perform work personally, but who are not genuinely in business on their own account. Workers have certain statutory rights (e.g., national minimum wage, holiday pay) but fewer rights than employees.",
  },
  {
    term: 'Wrongful Dismissal',
    definition:
      "A common law claim for breach of contract arising from dismissal without proper notice (or pay in lieu), or in breach of contractual procedures. Unlike unfair dismissal, there is no qualifying period, but compensation is limited to contractual notice pay.",
  },

  // Z
  {
    term: 'Zero-Hours Contract',
    definition:
      "A contract under which the employer does not guarantee any minimum hours of work and is not obliged to offer work. Workers on zero-hours contracts are entitled to the national minimum wage and paid holidays. Since May 2024, workers have the right to request a more predictable contract.",
  },
];

export function getGlossaryByLetter(): GlossaryData {
  return GLOSSARY_TERMS.reduce<GlossaryData>((acc, term) => {
    const letter = term.term[0].toUpperCase();
    if (!acc[letter]) acc[letter] = [];
    acc[letter].push(term);
    return acc;
  }, {});
}
