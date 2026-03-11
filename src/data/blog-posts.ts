export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  coverImage: string;
  publishedAt: string;
  author: {
    name: string;
    avatar: string;
  };
  category: string;
  readTime: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'understanding-equality-act-2010-disability-discrimination',
    title: 'Understanding the Equality Act 2010: A Complete Guide to Disability Discrimination Protection',
    description: 'The Equality Act 2010 provides comprehensive protection against disability discrimination in the UK. Learn about your rights and employer obligations under this landmark legislation.',
    coverImage: '/assets/blog/equality-act-workplace-rights.jpg',
    publishedAt: '2026-03-05',
    author: {
      name: 'Dave Boland',
      avatar: '/assets/about/DaveBoland.jpeg',
    },
    category: 'Legislation',
    readTime: '8 min read',
    content: `
## Introduction to the Equality Act 2010

The Equality Act 2010 is the cornerstone of anti-discrimination law in the United Kingdom. It consolidates and strengthens previous anti-discrimination legislation, providing a single legal framework to protect individuals from unfair treatment. For disabled people, it offers comprehensive protection across employment, services, education, and more.

## What is Disability Under the Equality Act?

Under Section 6 of the Equality Act 2010, a person has a disability if they have a physical or mental impairment that has a 'substantial' and 'long-term' negative effect on their ability to do normal daily activities.

**Key definitions:**
- **Substantial** means more than minor or trivial
- **Long-term** means the impairment has lasted, or is likely to last, at least 12 months
- **Normal daily activities** include things like using a computer, walking, or concentrating

Certain conditions are automatically considered disabilities under the Act, including cancer, HIV, and multiple sclerosis from the point of diagnosis.

## Protected Characteristics and Disability

Disability is one of nine protected characteristics under the Equality Act. This means it is unlawful to discriminate against someone because of their disability in:

- Employment (recruitment, terms and conditions, promotion, dismissal)
- Education
- Access to goods and services
- Buying and renting property
- Functions of public bodies

## Types of Discrimination

The Act recognises several forms of disability discrimination:

### Direct Discrimination
Treating someone less favourably because of their disability. For example, refusing to interview a candidate because they are blind.

### Indirect Discrimination
Applying a provision, criterion or practice that disadvantages disabled people generally, unless it can be objectively justified.

### Discrimination Arising from Disability
Treating someone unfavourably because of something connected to their disability, such as dismissing an employee for disability-related absences.

### Harassment
Unwanted conduct related to disability that violates dignity or creates a hostile environment.

### Victimisation
Treating someone badly because they have made or supported a complaint about discrimination.

## The Duty to Make Reasonable Adjustments

One of the most significant aspects of the Equality Act is the duty on employers and service providers to make reasonable adjustments. This anticipatory duty requires organisations to:

1. Change provisions, criteria or practices that put disabled people at a disadvantage
2. Alter physical features that create barriers
3. Provide auxiliary aids and services

What is 'reasonable' depends on factors including:
- The effectiveness of the adjustment
- The cost and financial resources of the organisation
- The practicability of making the adjustment
- The size and nature of the employer

## Enforcement and Remedies

Individuals who believe they have been discriminated against can bring claims to:
- **Employment Tribunal** for workplace discrimination (within 3 months less one day)
- **County Court** for services and education discrimination (within 6 months)

Remedies may include:
- Compensation for financial loss and injury to feelings
- Recommendations that the employer takes specific actions
- Declaration that discrimination occurred

## Conclusion

The Equality Act 2010 provides robust protection for disabled people against discrimination. Understanding these rights is essential for both employees seeking to enforce their protections and employers aiming to create inclusive, compliant workplaces.

**Key Takeaway:** If you believe you have experienced disability discrimination, seek advice promptly as there are strict time limits for bringing claims.
    `,
  },
  {
    slug: 'reasonable-adjustments-employers-complete-guide',
    title: 'Reasonable Adjustments at Work: What Employers Must Know',
    description: 'A comprehensive guide for employers on implementing reasonable adjustments in the workplace. Understand your legal obligations and best practices for supporting disabled employees.',
    coverImage: '/assets/blog/reasonable-adjustments-guide.jpg',
    publishedAt: '2026-02-28',
    author: {
      name: 'Dave Boland',
      avatar: '/assets/about/DaveBoland.jpeg',
    },
    category: 'Employment Law',
    readTime: '10 min read',
    content: `
## Understanding Reasonable Adjustments

The duty to make reasonable adjustments is a cornerstone of disability discrimination law. Under the Equality Act 2010, employers have a proactive obligation to remove barriers that put disabled employees at a substantial disadvantage compared to non-disabled colleagues.

## When Does the Duty Arise?

The duty is triggered when:
- An employer knows, or ought reasonably to know, that an employee is disabled
- A provision, criterion, practice, or physical feature puts the disabled person at a substantial disadvantage

Importantly, employers cannot avoid responsibility by claiming ignorance if the disability should reasonably have been known.

## The Three Requirements

Section 20 of the Equality Act establishes three requirements:

### 1. Changing Provisions, Criteria or Practices
This includes policies, procedures, and ways of working. Examples:
- Modifying working hours or shift patterns
- Allowing flexible working arrangements
- Adjusting performance targets or deadlines
- Permitting additional breaks

### 2. Altering Physical Features
This covers the physical environment:
- Installing ramps or handrails
- Widening doorways
- Improving lighting
- Providing accessible parking
- Adjusting workstation layout

### 3. Providing Auxiliary Aids
Equipment, services, or support:
- Screen readers or magnification software
- Hearing loops
- Ergonomic equipment
- Sign language interpreters
- Support workers

## What Makes an Adjustment 'Reasonable'?

There is no exhaustive list of reasonable adjustments. Whether an adjustment is reasonable depends on:

**Effectiveness:** Will it actually remove or reduce the disadvantage?

**Practicability:** How feasible is the adjustment to implement?

**Cost:** What is the financial impact relative to the employer's resources?

**Disruption:** How much disruption would it cause to the business?

**Resources available:** The size and nature of the organisation matters.

**Financial assistance:** Is funding available through schemes like Access to Work?

## The Process of Making Adjustments

### Step 1: Identify the Barrier
Understand exactly what is putting the disabled person at a disadvantage. This requires open dialogue with the employee.

### Step 2: Consider Options
Explore various possible adjustments. The employee will often have valuable insight into what would help them most.

### Step 3: Assess Reasonableness
Evaluate each option against the factors above.

### Step 4: Implement and Review
Put adjustments in place and monitor their effectiveness. Needs may change over time.

## Common Reasonable Adjustments

**Physical adjustments:**
- Height-adjustable desks
- Accessible toilets
- Reserved parking spaces
- Quiet workspaces

**Working arrangements:**
- Part-time or flexible hours
- Working from home
- Job restructuring
- Phased return to work

**Support and equipment:**
- Assistive technology
- Modified equipment
- Additional training
- Mentoring or buddy systems

**Communication:**
- Information in accessible formats
- Extra time for meetings
- Written instructions
- Regular one-to-one check-ins

## Failure to Make Reasonable Adjustments

Failing to comply with the duty is a form of discrimination. An Employment Tribunal can award:
- Compensation for financial losses
- Injury to feelings awards (typically £1,000 to £50,000+)
- Recommendations for the employer

## Best Practice Recommendations

1. **Be proactive:** Don't wait for requests; create an accessible environment
2. **Train managers:** Ensure line managers understand their obligations
3. **Document everything:** Keep records of discussions and decisions
4. **Review regularly:** Adjustments may need updating
5. **Seek expert advice:** Occupational health and Access to Work can help
6. **Foster open dialogue:** Create a culture where employees feel comfortable disclosing

## Conclusion

Making reasonable adjustments is not just a legal requirement—it's good business practice. Supported employees are more productive, loyal, and engaged. By understanding and fulfilling this duty, employers can create truly inclusive workplaces.
    `,
  },
  {
    slug: 'european-convention-human-rights-disability-protection',
    title: 'The European Convention on Human Rights and Disability Discrimination',
    description: 'Explore how the European Convention on Human Rights provides fundamental protections against disability discrimination and its relationship with UK law.',
    coverImage: '/assets/blog/echr-disability-protections.jpg',
    publishedAt: '2026-02-20',
    author: {
      name: 'Dave Boland',
      avatar: '/assets/about/DaveBoland.jpeg',
    },
    category: 'Human Rights',
    readTime: '7 min read',
    content: `
## The ECHR Framework

The European Convention on Human Rights (ECHR) is an international treaty that protects fundamental rights and freedoms. Through the Human Rights Act 1998, Convention rights are incorporated into UK domestic law, requiring public authorities to act compatibly with these rights.

## Key Articles Protecting Disabled People

### Article 14: Prohibition of Discrimination

Article 14 prohibits discrimination in the enjoyment of Convention rights on grounds including disability. While not a standalone right, it can be invoked alongside other substantive articles.

The European Court of Human Rights has recognised that the failure to treat differently persons whose situations are significantly different may constitute discrimination, establishing the principle that sometimes equal treatment of unequal situations is itself discriminatory.

### Article 8: Right to Private and Family Life

This article protects:
- Personal autonomy and dignity
- The right to develop one's personality
- The ability to establish relationships

For disabled people, this has been interpreted to include:
- Access to facilities enabling participation in society
- Protection against institutionalisation without proper safeguards
- The right to live independently in the community

### Article 3: Prohibition of Torture and Degrading Treatment

In extreme cases, the failure to provide appropriate support or the provision of care in degrading conditions can engage Article 3. This has been particularly relevant in institutional settings.

### Article 2: Right to Life

This article creates positive obligations on states to protect life, which extends to ensuring disabled people receive appropriate healthcare and support.

## Landmark ECHR Cases

### Pretty v United Kingdom (2002)
Established that personal autonomy is a central concept underlying Article 8, relevant to disability rights and end-of-life decisions.

### Glor v Switzerland (2009)
Found a violation of Article 14 combined with Article 8 where a man with diabetes was found unfit for military service but still required to pay a military exemption tax.

### Kiyutin v Russia (2011)
Confirmed that health conditions, including disabilities, are protected grounds under Article 14.

### Guberina v Croatia (2016)
The Court found discrimination where a tax benefit for adapting a home for a disabled child was refused because the claimant, rather than the child, owned the property.

## The Human Rights Act and UK Law

The Human Rights Act 1998 gives effect to Convention rights in UK law. Section 6 makes it unlawful for public authorities to act incompatibly with Convention rights.

This means:
- Public bodies must consider disabled people's human rights in decision-making
- Courts must interpret legislation compatibly with Convention rights where possible
- Individuals can bring claims against public authorities for human rights violations

## Relationship with the Equality Act

The ECHR complements domestic anti-discrimination law:
- The Equality Act provides detailed protection against specific forms of discrimination
- The ECHR provides overarching human rights protection
- Both frameworks can be relied upon, sometimes in the same proceedings

## Practical Implications

### For Individuals
- Human rights arguments can strengthen discrimination claims
- ECHR rights apply particularly against public authorities
- They provide additional remedies and arguments

### For Organisations
- Public authorities must conduct human rights assessments
- Policy decisions should consider Article 14 implications
- Training should cover both equality and human rights law

## Post-Brexit Considerations

Following Brexit, the UK remains a party to the ECHR (which is separate from the EU). The Human Rights Act continues to apply, though there have been political discussions about reform.

The European Court of Human Rights remains accessible to UK citizens who have exhausted domestic remedies, though this involves a lengthy process.

## Conclusion

The European Convention on Human Rights provides a fundamental layer of protection against disability discrimination, complementing the detailed provisions of the Equality Act. Understanding both frameworks is essential for effectively protecting and enforcing disability rights.
    `,
  },
  {
    slug: 'invisible-disabilities-workplace-understanding-support',
    title: 'Invisible Disabilities in the Workplace: Understanding and Support',
    description: 'Learn about invisible disabilities, the challenges employees face, and how organisations can create supportive environments for those with non-apparent conditions.',
    coverImage: '/assets/blog/invisible-disabilities-workplace.jpg',
    publishedAt: '2026-02-12',
    author: {
      name: 'Dave Boland',
      avatar: '/assets/about/DaveBoland.jpeg',
    },
    category: 'Workplace Inclusion',
    readTime: '9 min read',
    content: `
## What Are Invisible Disabilities?

Invisible disabilities, also known as hidden or non-apparent disabilities, are conditions that are not immediately obvious to others. They can significantly impact a person's daily life and work, yet colleagues and managers may be unaware of their existence.

## Common Invisible Disabilities

### Mental Health Conditions
- Depression
- Anxiety disorders
- Bipolar disorder
- Post-traumatic stress disorder (PTSD)
- Obsessive-compulsive disorder (OCD)

### Neurological Conditions
- Epilepsy
- Multiple sclerosis
- Chronic fatigue syndrome/ME
- Fibromyalgia

### Neurodivergent Conditions
- Autism spectrum conditions
- ADHD
- Dyslexia
- Dyspraxia
- Dyscalculia

### Chronic Health Conditions
- Diabetes
- Crohn's disease and colitis
- Chronic pain conditions
- Lupus
- Endometriosis

## The Challenge of Disclosure

Employees with invisible disabilities face a unique dilemma: whether to disclose their condition. This decision involves weighing:

**Potential benefits:**
- Access to reasonable adjustments
- Greater understanding from colleagues
- Legal protection against discrimination
- Reduced stress from hiding the condition

**Potential concerns:**
- Fear of stigma or stereotyping
- Worry about career progression
- Concern about being treated differently
- Privacy preferences

Research suggests that up to 80% of disabled people have invisible disabilities, yet many choose not to disclose at work.

## Legal Protection

Under the Equality Act 2010, invisible disabilities receive the same protection as visible disabilities, provided they meet the statutory definition:
- A physical or mental impairment
- Having substantial adverse effect
- On day-to-day activities
- Which is long-term (12 months or more)

Many invisible conditions meet this definition, even if they fluctuate in severity.

## Workplace Challenges

### Lack of Understanding
Without visible indicators, colleagues may not understand why someone needs adjustments or appears to struggle with certain tasks.

### Inconsistent Symptoms
Many invisible conditions fluctuate, leading to good days and bad days. This inconsistency can be misinterpreted as unreliability.

### Stigma
Mental health conditions and neurodivergent conditions still carry stigma in many workplaces.

### Proving Need
Employees may feel they need to "prove" their disability to access support, which can be exhausting and demoralising.

## Creating Supportive Environments

### Foster Psychological Safety
Create a culture where employees feel safe discussing health and disability without fear of negative consequences.

### Train Line Managers
Ensure managers understand invisible disabilities and can have supportive conversations.

### Normalise Adjustments
Frame reasonable adjustments as standard good practice rather than special treatment.

### Offer Flexible Working
Flexibility benefits many people with invisible disabilities who may need to manage energy levels or attend medical appointments.

### Review Policies
Ensure absence management and performance policies account for disability-related factors.

## Reasonable Adjustments for Invisible Disabilities

Effective adjustments might include:
- Flexible working hours or patterns
- Working from home options
- Regular breaks
- Reduced sensory stimulation (lighting, noise)
- Written rather than verbal instructions
- Modified workloads during flare-ups
- Mentor or buddy support
- Access to quiet spaces

## The Role of Occupational Health

Occupational health assessments can provide valuable, impartial guidance on appropriate adjustments. They bridge the gap between the employee's experience and the employer's understanding.

## Conclusion

Invisible disabilities affect millions of workers. By creating understanding, reducing stigma, and providing appropriate support, organisations can unlock the full potential of these employees while meeting their legal obligations under the Equality Act 2010.

**Key message:** Disability is defined by impact, not visibility. The duty to make reasonable adjustments applies equally to invisible conditions.
    `,
  },
  {
    slug: 'employment-tribunal-disability-discrimination-claims',
    title: 'Taking a Disability Discrimination Claim to Employment Tribunal',
    description: 'A practical guide to the Employment Tribunal process for disability discrimination claims, from ACAS Early Conciliation to the final hearing.',
    coverImage: '/assets/blog/employment-tribunal-process.jpg',
    publishedAt: '2026-02-05',
    author: {
      name: 'Dave Boland',
      avatar: '/assets/about/DaveBoland.jpeg',
    },
    category: 'Employment Law',
    readTime: '12 min read',
    content: `
## Overview of the Process

Employment Tribunal claims for disability discrimination follow a structured process. Understanding each stage helps claimants navigate what can be a challenging but important process for enforcing rights under the Equality Act 2010.

## Time Limits

**Critical deadline:** Claims must usually be brought within three months less one day from the act of discrimination.

For ongoing discrimination, time runs from the last discriminatory act. The Tribunal has discretion to extend time where "just and equitable," but this is not guaranteed.

The time limit is paused during ACAS Early Conciliation.

## Stage 1: ACAS Early Conciliation

Before bringing a Tribunal claim, you must contact ACAS (Advisory, Conciliation and Arbitration Service) for Early Conciliation.

**The process:**
1. Contact ACAS online or by phone
2. Receive an Early Conciliation certificate
3. ACAS contacts the employer to explore settlement
4. Conciliation lasts up to one calendar month (extendable by two weeks)

**Outcomes:**
- Settlement agreement
- No settlement reached, certificate issued enabling Tribunal claim

Early Conciliation is free and confidential. Around one-third of cases settle at this stage.

## Stage 2: Submitting the Claim (ET1)

If conciliation fails, submit your claim using form ET1. This can be done online via the Government's Employment Tribunal service.

**Required information:**
- Your personal details
- Employer details
- Nature of the claim (disability discrimination)
- Brief facts of what happened
- Remedy sought

**Key sections for disability discrimination:**
- Confirm you have a disability under the Equality Act
- Describe the disability and its effects
- Explain the discriminatory acts
- Specify the type of discrimination

## Stage 3: Employer's Response (ET3)

The employer has 28 days to respond using form ET3. They will set out their defence to your claims.

Common defences include:
- Denying the claimant is disabled
- Denying discrimination occurred
- Arguing adjustments were not reasonable
- Claiming a defence of justification

## Stage 4: Case Management

### Preliminary Hearing
A judge may hold a preliminary hearing to:
- Clarify the issues
- Set a timetable
- Order disclosure of documents
- Consider any preliminary issues (like whether you're disabled)

### Disclosure
Both parties must disclose relevant documents, including:
- Employment records
- Emails and correspondence
- Medical evidence
- Policies and procedures

### Witness Statements
Exchange of written witness statements occurs before the final hearing.

## Stage 5: The Final Hearing

### Preparation
- Bundle of documents prepared
- Witness statements finalised
- Chronology and cast list helpful

### The Hearing
Typically involves:
- Opening statements (sometimes)
- Claimant's evidence and cross-examination
- Respondent's evidence and cross-examination
- Closing submissions

### Duration
Simple cases: 1-2 days
Complex cases: Several days or weeks

## Evidence in Disability Discrimination Claims

### Proving Disability
Medical evidence is usually essential:
- GP letters
- Consultant reports
- Occupational health assessments
- Expert medical reports

### Proving Discrimination
Evidence might include:
- Comparative treatment of non-disabled colleagues
- Timing of adverse treatment
- Comments or statements made
- Failure to follow proper procedures

### Burden of Proof
Initially, the claimant must prove facts from which discrimination could be inferred. The burden then shifts to the employer to prove a non-discriminatory explanation.

## Remedies

### Compensation
- **Financial loss:** Lost earnings, pension loss, benefits
- **Injury to feelings:** Vento bands range from approximately £1,000 to £50,000+
- **Personal injury:** For psychiatric damage caused by discrimination
- **Interest:** Added to awards

### Recommendations
The Tribunal can recommend the employer takes specific action.

### Declaration
A formal finding that discrimination occurred.

## Costs

Employment Tribunals are generally "no costs" jurisdictions—each side bears their own costs. However, costs can be awarded for unreasonable conduct or if a claim/defence had no reasonable prospect of success.

## Practical Tips

1. **Keep detailed records:** Dates, times, witnesses, documents
2. **Follow internal processes first:** Grievances can strengthen your case
3. **Seek early advice:** Time limits are strict
4. **Consider representation:** Though not required, legal help improves outcomes
5. **Be realistic:** Assess the strength of your case objectively
6. **Consider settlement:** Many cases settle before final hearing

## Conclusion

Bringing a Tribunal claim is a significant decision. While the process can be challenging, it provides an important mechanism for enforcing disability discrimination rights and obtaining compensation for unlawful treatment.
    `,
  },
  {
    slug: 'mental-health-disability-discrimination-workplace',
    title: 'Mental Health and Disability Discrimination: Legal Rights at Work',
    description: 'Mental health conditions can qualify as disabilities under the Equality Act 2010. Understand the legal framework and protections for employees with mental health conditions.',
    coverImage: '/assets/blog/mental-health-discrimination.jpg',
    publishedAt: '2026-01-28',
    author: {
      name: 'Dave Boland',
      avatar: '/assets/about/DaveBoland.jpeg',
    },
    category: 'Mental Health',
    readTime: '8 min read',
    content: `
## Mental Health as a Disability

Mental health conditions are increasingly recognised as disabilities under the Equality Act 2010. When a mental impairment has a substantial and long-term adverse effect on a person's ability to carry out normal day-to-day activities, it meets the statutory definition.

## Conditions Likely to Qualify

Many mental health conditions may qualify as disabilities:

**Clinical conditions:**
- Major depressive disorder
- Generalised anxiety disorder
- Bipolar disorder
- Schizophrenia
- Post-traumatic stress disorder
- Obsessive-compulsive disorder
- Eating disorders

**The key question** is not the diagnosis but the effect on day-to-day activities.

## Assessing Substantial Adverse Effect

"Substantial" means more than minor or trivial. For mental health conditions, effects might include:

**Cognitive impacts:**
- Difficulty concentrating
- Memory problems
- Impaired decision-making
- Reduced ability to plan or organise

**Social impacts:**
- Difficulty maintaining relationships
- Anxiety in social situations
- Withdrawal from colleagues

**Physical impacts:**
- Fatigue
- Sleep disturbance
- Changes in appetite

**Functional impacts:**
- Difficulty completing tasks
- Problems meeting deadlines
- Reduced productivity during episodes

## The "Without Treatment" Rule

When assessing disability, the effect of the condition must be considered without the benefit of ongoing medical treatment. This means someone whose condition is controlled by medication may still be disabled.

## Fluctuating Conditions

Mental health conditions often fluctuate. A condition that has substantial adverse effect during episodes meets the definition if:
- The effects are likely to recur, AND
- They are substantial when they do recur

This protects people with conditions that come and go.

## Employer Knowledge

Employers are under a duty to make reasonable adjustments when they know—or ought reasonably to know—that an employee is disabled.

**Constructive knowledge:** Even without formal disclosure, an employer may be deemed to know if:
- The employee's behaviour or performance suggests mental health difficulties
- The employee has been absent with stress or anxiety
- A colleague or manager has expressed concern

**Practical implications:** Employers should not ignore warning signs or deliberately avoid enquiry to claim ignorance.

## Discrimination Arising from Disability

Section 15 of the Equality Act is particularly relevant for mental health conditions. It prohibits treating someone unfavourably because of something arising in consequence of their disability.

**Examples:**
- Dismissing for sickness absence caused by depression
- Disciplining for poor performance caused by anxiety
- Rejecting a promotion due to concerns about stress

The employer must prove the treatment was a proportionate means of achieving a legitimate aim.

## Reasonable Adjustments for Mental Health

Effective adjustments might include:

**Working patterns:**
- Flexible start and finish times
- Phased return to work
- Reduced hours temporarily
- Working from home

**Workload:**
- Adjusted targets
- Reallocation of certain duties
- Additional time for tasks
- Reduced pressure roles

**Support:**
- Regular one-to-one meetings
- Access to Employee Assistance Programmes
- Mental health first aiders
- Mentor or buddy systems

**Environment:**
- Quiet workspace
- Reduced sensory stimulation
- Regular breaks
- Time for medical appointments

## Workplace Culture

Legal compliance alone is insufficient. Organisations should:
- Train managers in mental health awareness
- Reduce stigma through open discussion
- Promote work-life balance
- Monitor workloads and stress levels
- Provide mental health support resources

## Making a Complaint

If you experience discrimination:
1. Keep detailed records
2. Raise concerns through internal grievance procedures
3. Contact ACAS for advice
4. Consider an Employment Tribunal claim within time limits

## Conclusion

Mental health conditions are increasingly recognised as disabilities deserving full legal protection. Both employees and employers benefit from understanding these rights and creating supportive workplaces where people can thrive regardless of their mental health status.

**Remember:** Seeking help is a sign of strength, not weakness. Understanding your legal rights empowers you to access the support you deserve.
    `,
  },
  {
    slug: 'access-to-work-scheme-complete-guide',
    title: 'Access to Work: Complete Guide to the UK Government Support Scheme',
    description: 'Access to Work provides grants to help disabled people start or stay in work. Learn about eligibility, what it covers, and how to apply.',
    coverImage: '/assets/blog/access-to-work-scheme.jpg',
    publishedAt: '2026-01-20',
    author: {
      name: 'Dave Boland',
      avatar: '/assets/about/DaveBoland.jpeg',
    },
    category: 'Government Support',
    readTime: '7 min read',
    content: `
## What is Access to Work?

Access to Work is a government grant scheme administered by the Department for Work and Pensions (DWP). It provides practical and financial support to help disabled people and those with health conditions start work, stay in work, or move into self-employment.

The scheme can pay for support beyond what employers are required to provide as reasonable adjustments under the Equality Act 2010.

## Eligibility

You may be eligible if you:
- Have a disability or health condition that affects your ability to work
- Are 16 or over
- Live in England, Scotland, or Wales
- Are in paid employment or about to start/return to work
- Are self-employed or about to become self-employed

You do not need to receive disability benefits to apply.

## What Access to Work Can Pay For

### Specialist Equipment
- Screen readers
- Magnification software
- Ergonomic equipment
- Communication devices
- Hearing aids for work

### Adaptations
- Workplace modifications
- Vehicle adaptations for work travel
- Additional costs of travel to work

### Support Workers
- Sign language interpreters
- Readers for blind employees
- Support workers for personal assistance
- Mental health support services

### Communication Support
- Lip speakers
- Note takers
- British Sign Language interpreters
- Palantypists

### Mental Health Support
The scheme now includes specific mental health support for people whose mental health condition affects their work, including:
- Coping strategies
- Workplace adjustments
- Support for maintaining employment

## How Much Support?

Access to Work can cover:
- 100% of approved costs for unemployed people starting work
- Varying employer contributions depending on employer size for those in work
- Up to £66,000 per year (2025/26 figure, reviewed annually)

The amount depends on individual circumstances and needs.

## The Application Process

### Step 1: Apply Online
Apply through the government website. You'll need:
- Contact details
- National Insurance number
- Employer details
- Bank account information
- Details of your disability/health condition

### Step 2: Assessment
An Access to Work adviser will contact you to discuss your needs. This might involve:
- A workplace assessment
- Telephone discussion
- Expert report (for complex needs)

### Step 3: Decision
You'll receive a decision letter explaining:
- What support has been approved
- How much grant will be paid
- How to arrange the support

### Step 4: Arrange Support
For equipment: Work with approved suppliers
For support workers: Arrange directly or through agencies
Submit invoices for reimbursement

## Renewals

Access to Work grants are typically awarded for a set period. You'll need to renew your award:
- When the current award ends
- If your needs change significantly
- If you change jobs

## Relationship with Reasonable Adjustments

Access to Work supplements—not replaces—the employer's duty to make reasonable adjustments.

**Employer responsibilities:**
- Reasonable adjustments under the Equality Act
- Cannot refuse to employ someone because Access to Work is needed
- Must cooperate with assessments and implementation

**Access to Work provides:**
- Support beyond reasonable adjustments
- Funding for larger expenditure
- Specialist assessments

## Tips for Successful Applications

1. **Apply early:** Before starting work if possible
2. **Be specific:** Clearly describe how your condition affects your work
3. **Know your needs:** Consider what adjustments would help most
4. **Involve your employer:** They can provide supporting information
5. **Keep records:** Document all communications and agreements
6. **Request reassessment:** If your needs change

## Common Issues

### Delays
Processing times vary. Apply as early as possible and follow up regularly.

### Disputes
If you disagree with a decision, you can request a reconsideration or appeal.

### Changes in Circumstances
Notify Access to Work promptly if your job, hours, or needs change.

## Conclusion

Access to Work is an underutilised but valuable resource for disabled people and their employers. It removes financial barriers to employment and enables people to access support that helps them thrive at work.

**Key message:** Don't assume you won't qualify—the eligibility criteria are broad, and the support available is extensive.
    `,
  },
  {
    slug: 'direct-indirect-disability-discrimination-explained',
    title: 'Direct vs Indirect Disability Discrimination: Key Differences Explained',
    description: 'Understanding the distinction between direct and indirect discrimination is crucial for recognising and challenging workplace discrimination.',
    coverImage: '/assets/blog/direct-indirect-discrimination.jpg',
    publishedAt: '2026-01-12',
    author: {
      name: 'Dave Boland',
      avatar: '/assets/about/DaveBoland.jpeg',
    },
    category: 'Employment Law',
    readTime: '6 min read',
    content: `
## Two Forms of Discrimination

The Equality Act 2010 distinguishes between direct and indirect discrimination. Understanding this distinction is essential for identifying discriminatory treatment and knowing how to challenge it.

## Direct Discrimination

### Definition
Section 13 of the Equality Act defines direct discrimination as treating someone less favourably because of a protected characteristic—in this case, disability.

### Key Elements
1. **Less favourable treatment:** The claimant must be treated worse than others
2. **Because of disability:** The disability must be the reason (or one of the reasons) for the treatment
3. **Comparator:** A real or hypothetical non-disabled person in the same circumstances

### Examples

**Recruitment:**
- Rejecting an applicant because they have epilepsy
- Withdrawing a job offer upon learning of a disability
- Refusing to interview wheelchair users

**During employment:**
- Denying promotion due to concerns about a mental health condition
- Excluding a deaf employee from meetings
- Making offensive comments about someone's disability

**Termination:**
- Dismissing someone because of their disability
- Selecting for redundancy based on disability-related factors

### No Justification Defence

Unlike indirect discrimination, direct discrimination cannot be justified. It is unlawful regardless of the employer's reasons or intentions.

The only exception is where there is an occupational requirement—for example, requiring full mobility for a firefighter role—but such requirements must be genuine and proportionate.

## Indirect Discrimination

### Definition
Section 19 of the Equality Act defines indirect discrimination as applying a provision, criterion or practice (PCP) that:
1. Applies equally to everyone
2. Puts disabled people at a particular disadvantage
3. Puts the individual claimant at that disadvantage
4. Cannot be objectively justified

### Key Elements

**Provision, criterion or practice:** This is interpreted broadly and includes:
- Policies
- Procedures
- Requirements
- Conditions
- Working practices

**Particular disadvantage:** The PCP must disadvantage disabled people generally, not just the individual claimant.

**Individual disadvantage:** The claimant must personally be disadvantaged.

### Examples

**Working patterns:**
- Requiring all employees to work full-time may disadvantage people with fatigue-related conditions
- Rotating shift patterns may disadvantage those with conditions requiring routine

**Physical requirements:**
- A requirement to climb stairs disadvantages wheelchair users
- Mandatory driving requirements disadvantage those who cannot drive

**Assessment methods:**
- Timed tests may disadvantage people with dyslexia or anxiety
- Written exams may disadvantage those with visual impairments

**Attendance policies:**
- Strict absence triggers disadvantage those with fluctuating conditions
- Bradford Factor calculations disadvantage those with regular appointments

### The Justification Defence

An employer can defend indirect discrimination by showing the PCP was:
- A **proportionate** means
- Of achieving a **legitimate aim**

**Legitimate aims** might include:
- Health and safety
- Business efficiency
- Customer service requirements

**Proportionality** requires showing:
- No less discriminatory alternative exists
- The discriminatory effect is not excessive
- The aim is sufficiently important

## Practical Differences

| Aspect | Direct Discrimination | Indirect Discrimination |
|--------|----------------------|------------------------|
| Treatment | Explicit, targeted | Neutral rule, discriminatory effect |
| Intent | Can be intentional or not | Usually unintentional |
| Comparator | Needed | Group disadvantage shown |
| Justification | Not available | Available |

## Burden of Proof

For both types:
1. The claimant establishes facts from which discrimination could be inferred
2. The burden shifts to the employer to provide a non-discriminatory explanation

For indirect discrimination, the employer must additionally prove justification.

## Why the Distinction Matters

### For Employees
Understanding which type of discrimination you've experienced helps:
- Frame your complaint correctly
- Gather appropriate evidence
- Anticipate employer defences

### For Employers
Recognising indirect discrimination risks helps:
- Review policies proactively
- Consider less discriminatory alternatives
- Ensure proper justification where needed

## Conclusion

Both direct and indirect discrimination are unlawful, but they operate differently. Direct discrimination involves targeted treatment based on disability. Indirect discrimination involves neutral rules that disadvantage disabled people as a group. Understanding these concepts is crucial for recognising and challenging workplace discrimination.
    `,
  },
  {
    slug: 'employer-duty-to-make-reasonable-adjustments',
    title: 'The Employer\'s Duty to Make Reasonable Adjustments: A Legal Analysis',
    description: 'A detailed examination of the legal framework surrounding the duty to make reasonable adjustments, including when it arises and what it requires.',
    coverImage: '/assets/blog/duty-to-make-adjustments.jpg',
    publishedAt: '2026-01-05',
    author: {
      name: 'Dave Boland',
      avatar: '/assets/about/DaveBoland.jpeg',
    },
    category: 'Employment Law',
    readTime: '10 min read',
    content: `
## Legal Framework

The duty to make reasonable adjustments is found in sections 20-22 and Schedule 8 of the Equality Act 2010. It is a cornerstone of disability discrimination law, requiring employers to take positive steps to remove barriers facing disabled employees.

## When the Duty Arises

The duty is triggered when three conditions are met:

### 1. The Employee is Disabled
They must meet the statutory definition—a physical or mental impairment having a substantial and long-term adverse effect on day-to-day activities.

### 2. The Employer Knows or Should Know
The employer must have actual or constructive knowledge of the disability. Constructive knowledge means they would have known had they made reasonable enquiries.

**Factors suggesting constructive knowledge:**
- Absences with stress or health reasons
- Poor performance with no other explanation
- Employee behaviour suggesting difficulties
- Information from occupational health

### 3. A Substantial Disadvantage Exists
A provision, criterion, practice, physical feature, or lack of auxiliary aid must put the disabled person at a substantial disadvantage compared to non-disabled people.

"Substantial" means more than minor or trivial.

## The Three Requirements

Section 20 establishes three separate requirements:

### First Requirement: Provisions, Criteria and Practices
Where a PCP puts a disabled person at a substantial disadvantage, the employer must take reasonable steps to avoid that disadvantage.

**Examples of PCPs:**
- Working hours requirements
- Performance standards
- Attendance policies
- Selection criteria
- Working methods

### Second Requirement: Physical Features
Where a physical feature puts a disabled person at substantial disadvantage, reasonable steps must be taken to avoid that disadvantage.

**Physical features include:**
- Design or construction of buildings
- Approach, exit or access
- Fixtures, fittings, equipment
- Any permanent or semi-permanent feature

**Steps might include:**
- Removing the feature
- Altering the feature
- Providing a means of avoiding the feature
- Providing a reasonable alternative method

### Third Requirement: Auxiliary Aids
Where the absence of an auxiliary aid puts a disabled person at substantial disadvantage, reasonable steps must be taken to provide one.

**Auxiliary aids include:**
- Equipment
- Services
- Assistance from another person

## What is "Reasonable"?

The Act does not define "reasonable." Factors to consider include:

**Effectiveness:** How far would the adjustment eliminate or reduce the disadvantage?

**Practicability:** How feasible is implementation?

**Cost:** What is the financial impact? This must be weighed against:
- Employer's financial resources
- Size of the organisation
- Availability of external funding (e.g., Access to Work)

**Disruption:** How much would the adjustment disrupt the employer's activities?

**Nature of employer's activities:** What does the organisation do?

**Resources available:** Staff, finances, external support

## Key Legal Principles

### Comparative Exercise
The disadvantage must be compared to non-disabled people. Consider what adjustments would place the disabled person in a more equal position.

### Proactive Duty
The duty is anticipatory. Employers should not wait for requests but proactively consider what adjustments might be needed.

### Ongoing Nature
The duty continues throughout employment. What is reasonable may change as circumstances change.

### Employee Involvement
While not legally required, consulting the employee about their needs is good practice and helps identify effective adjustments.

## Case Law Guidance

### Environment Agency v Rowan [2008]
Established the need to identify:
1. The PCP, physical feature or lack of auxiliary aid
2. The non-disabled comparators
3. The nature and extent of substantial disadvantage

### Archibald v Fife Council [2004]
The duty may require treating a disabled person more favourably—for example, redeploying them without competitive interview.

### Project Management Institute v Latif [2007]
Once a potential adjustment is identified, the employer must consider it. The employee does not have to propose specific adjustments.

## Failure to Make Adjustments

Failing to comply with the duty is a form of discrimination. There is no justification defence—either an adjustment is reasonable and must be made, or it is not reasonable.

### Compensation
Includes:
- Financial losses
- Injury to feelings
- Aggravated damages in serious cases

### Recommendations
Tribunals can recommend specific adjustments be implemented.

## Practical Implementation

### For Employers
1. Train managers to recognise when duty may arise
2. Have clear processes for discussing adjustments
3. Document decisions and reasoning
4. Involve occupational health where appropriate
5. Review adjustments regularly

### For Employees
1. Be clear about your needs
2. Suggest adjustments where possible
3. Keep records of discussions
4. Escalate concerns promptly
5. Seek advice if adjustments are refused

## Conclusion

The duty to make reasonable adjustments is a powerful legal mechanism for removing workplace barriers. Understanding when it arises and what it requires enables both employers and employees to navigate this area effectively, creating more inclusive workplaces while ensuring legal compliance.
    `,
  },
  {
    slug: 'definition-of-disability-equality-act-2010',
    title: 'Who Qualifies as Disabled? Understanding the Legal Definition',
    description: 'The legal definition of disability under the Equality Act 2010 determines who is protected. Learn how courts and tribunals interpret this crucial definition.',
    coverImage: '/assets/blog/disability-definition-equality-act.jpg',
    publishedAt: '2025-12-28',
    author: {
      name: 'Dave Boland',
      avatar: '/assets/about/DaveBoland.jpeg',
    },
    category: 'Legislation',
    readTime: '9 min read',
    content: `
## The Statutory Definition

Section 6 of the Equality Act 2010 defines disability as:

> A person has a disability if they have a physical or mental impairment, and the impairment has a substantial and long-term adverse effect on their ability to carry out normal day-to-day activities.

Each element of this definition has been subject to extensive judicial interpretation.

## Physical or Mental Impairment

### Physical Impairments
Include conditions affecting the body, such as:
- Mobility impairments
- Sensory impairments (sight, hearing)
- Chronic health conditions
- Conditions affecting internal organs

### Mental Impairments
Include conditions affecting the mind, such as:
- Mental health conditions (depression, anxiety, bipolar)
- Learning disabilities
- Neurodevelopmental conditions (autism, ADHD)
- Cognitive impairments

**Key points:**
- No exhaustive list of qualifying conditions exists
- The focus is on effect, not diagnosis
- Medically recognised conditions need not have a known cause

## Substantial Adverse Effect

### What is "Substantial"?
"Substantial" means more than minor or trivial. This is a low threshold—it does not mean "very large" or "major."

### Assessing Effect
Consider the things the person cannot do, or can only do with difficulty:

**Physical activities:**
- Walking
- Using stairs
- Manual dexterity
- Physical coordination

**Cognitive activities:**
- Concentrating
- Learning
- Understanding
- Memory

**Communication:**
- Speaking
- Reading
- Writing
- Understanding others

**Perception of danger:**
- Recognising hazards
- Responding to risk

### Cumulative Effects
Where a person has more than one impairment, consider their combined effect. Multiple minor impairments may cumulatively be substantial.

### The "Without Treatment" Rule
The effect must be assessed without the benefit of ongoing medical treatment. This includes:
- Medication
- Medical aids (excluding glasses/contact lenses)
- Therapies

A person whose condition is controlled by medication may still be disabled if they would have substantial effect without it.

## Long-Term

### Duration
An impairment has long-term effect if it:
- Has lasted at least 12 months, OR
- Is likely to last at least 12 months, OR
- Is likely to last for the rest of the person's life

### Recurring Conditions
A condition that has had substantial adverse effect and is likely to recur is treated as continuing to have that effect.

**Examples:**
- Depression with recurring episodes
- Conditions that flare up periodically
- Relapsing-remitting conditions like MS

## Normal Day-to-Day Activities

### Definition
Activities that are normal for most people and carried out daily or frequently. They are not extraordinary or highly specialised.

**Include:**
- Shopping
- Reading
- Writing
- Having conversations
- Preparing meals
- Travelling
- Using technology
- Personal care

**Workplace activities** can be day-to-day activities if they are normal activities for many people:
- Using a computer
- Attending meetings
- Following instructions
- Meeting deadlines

## Deemed Disabilities

Certain conditions are automatically deemed disabilities from the point of diagnosis:
- Cancer
- HIV infection
- Multiple sclerosis

Additionally:
- Registered blind or partially sighted people are deemed disabled
- Severe disfigurements are treated as having substantial adverse effect

## Progressive Conditions

For progressive conditions (like MS, motor neurone disease, HIV), a person is disabled if:
- The condition is likely to result in substantial adverse effect
- Even if current effect is not yet substantial

## Past Disabilities

The Equality Act protects people who have had a disability in the past. Protection continues even after recovery.

## Excluded Conditions

Certain conditions are specifically excluded:
- Addiction to alcohol, nicotine, or other substances (though underlying conditions may qualify)
- Tendency to set fires
- Tendency to steal
- Tendency to physical or sexual abuse
- Exhibitionism
- Voyeurism

**Note:** These exclusions are narrow. A mental health condition causing such behaviour may still be a disability.

## Proving Disability

In an Employment Tribunal claim, the claimant must prove they are disabled. Evidence includes:

**Medical evidence:**
- GP reports
- Consultant letters
- Occupational health reports
- Psychiatric assessments

**Personal evidence:**
- Impact statements
- Daily activity diaries
- Witness statements

**Other evidence:**
- Prescription records
- Sick notes
- Previous assessments

## Practical Guidance

### For Individuals
- Document how your condition affects daily activities
- Obtain supportive medical evidence
- Focus on effects, not just diagnosis
- Consider the "without treatment" position

### For Employers
- Don't assume someone isn't disabled
- Focus on functional impact
- Seek occupational health guidance
- Apply a low threshold when assessing "substantial"

## Conclusion

The definition of disability under the Equality Act is broader than many people realise. Understanding each element—impairment, substantial effect, long-term, and day-to-day activities—is essential for determining whether someone is protected and entitled to the Act's safeguards against discrimination.

**Key takeaway:** If in doubt, assume protection applies. The threshold is designed to be inclusive, and employers cannot avoid duties by incorrectly concluding someone is not disabled.
    `,
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}
