// Ten harder problems. None is solved here, and none claims to be.
// Each paper keeps the three-stage format (Notice, Absorb, Restructure), cites only checked studies,
// proposes a way to attack the problem as a hypothesis, and states exactly how that hypothesis would fail.

export const morePapers = [
  /* ---------------------------------------------------------------- 9 */
  {
    n: 9,
    title: 'Alzheimer’s: a navigation game years before memory fails',
    tags: ['All three channels', 'Neurodegeneration'],
    read: 9,
    problem: {
      line: 'Alzheimer’s pathology starts long before memory fails, and the tests that could catch it early do not.',
      stakes:
        'The disease process is described as unfolding years before symptoms (Jack et al., 2013). A Lancet Commission report attributes about 40 per cent of dementia worldwide to twelve modifiable risk factors (Livingston et al., 2020), so finding people early matters. In one study, persons at genetic risk could be told apart by a navigation game while standard episodic-memory tests could not tell them apart.',
    },
    abstract:
      'The earliest disturbance in Alzheimer’s may sit in the brain’s navigation system, which no routine test loads. A game that loads it, played by millions, can build the normative background against which an individual’s result means something. The step that is missing is prospective proof.',
    claim: 'Make the game the instrument and the data engine at once, then follow the players forward.',
    notice: {
      text: [
        'Navigation asks the brain to keep deciding which cue to trust: a landmark, or the feel of its own movement. When that decision machinery starts to fail, the first sign may show as a different way of travelling through space, long before a name or a date is lost.',
        'The design question is what a test must hold fixed so that a small difference means something: age, sex, education and country. Only a very large normative sample can do that.',
      ],
      signal: ['Path integration and route choice in a navigation task', 'The result against a norm matched for age, sex, education and country', 'Who is later diagnosed, followed forward'],
      noise: ['Episodic-memory test scores in the preclinical window', 'A single cut-off with no norm behind it', 'Game score and time played'],
    },
    absorb: {
      lead: 'Three findings. Watch the timeline figure, then compare what each result is able to see.',
      cases: [
        { k: 'Genetic risk', t: 'In Sea Hero Quest, APOE ε4 carriers navigated differently, a pattern read as grid-cell coding errors in the entorhinal cortex. Episodic-memory tests did not separate the same participants (Coughlan et al., 2019).' },
        { k: 'A global norm', t: 'More than 2.5 million players in every nation showed that navigation ability clusters by country, tracks national wealth, and that the male-female gap tracks gender inequality (Coutrot et al., 2018).' },
        { k: 'The timeline', t: 'A widely used model has biomarker change in Alzheimer’s beginning well ahead of clinical symptoms (Jack et al., 2013).' },
      ],
      figure: 'decades',
      text: [
        'The second finding matters as much as the first. A navigation score cannot be read without knowing the player’s country, age, sex and schooling, because each shifts the baseline. A game played by millions solves a statistical problem no single clinic can: it supplies the benchmark.',
        'The genetic-risk study benchmarked a small, highly phenotyped laboratory cohort against 27,108 players, and the finding concerns detection of preclinical risk, not diagnosis. Whether low navigation benchmarks predict who later develops dementia is the question that remains open.',
      ],
      pattern: 'The earliest disturbance sits in something no standard test loads, and it becomes readable only against a very large normative background.',
    },
    restructure: {
      frame: 'Screen for Alzheimer’s with memory tests, when people start to complain.',
      breaks: 'In the preclinical window the memory tests did not distinguish high-risk from low-risk participants, and by the time memory visibly fails the pathology is old.',
      reframe: [
        'Make the test a game that loads navigation, and treat the game’s second product, the anonymous millions of plays, as the norm that gives each person’s result a matched baseline.',
        'Then close the loop that the existing work leaves open: enrol willing players, record later clinical outcomes, and test whether the benchmark predicts them better than age and education alone.',
      ],
      limits: 'A screening signal, not a diagnosis. False positives would cause harm. Cognitive data is among the most sensitive data there is, so consent and privacy come first. Prospective validation does not yet exist.',
    },
    wrong:
      'In a prospective cohort, baseline navigation benchmarks fail to predict later diagnosis or biomarker status any better than age and education alone.',
    refs: [
      'Coughlan, G. et al. (2019). Toward personalized cognitive diagnostics of at-genetic-risk Alzheimer’s disease. Proceedings of the National Academy of Sciences 116(19), 9285–9292.',
      'Coutrot, A. et al. (2018). Global determinants of navigation ability. Current Biology 28(17), 2861–2866.',
      'Jack, C. R. et al. (2013). Tracking pathophysiological processes in Alzheimer’s disease: an updated hypothetical model of dynamic biomarkers. The Lancet Neurology 12(2), 207–216.',
      'Livingston, G. et al. (2020). Dementia prevention, intervention, and care: 2020 report of the Lancet Commission. The Lancet 396(10248), 413–446.',
    ],
  },
  /* ---------------------------------------------------------------- 10 */
  {
    n: 10,
    title: 'Addiction: retraining the reflex that insight cannot reach',
    tags: ['Implicit learning', 'Addiction'],
    read: 8,
    problem: {
      line: 'People leave treatment understanding their addiction, and the automatic pull of cues is still there.',
      stakes:
        'A review in JAMA found relapse rates for drug dependence similar to those of type 2 diabetes, hypertension and asthma, and argued that dependence should be treated as a chronic illness (McLellan et al., 2000). Understanding the problem does not switch off the reflex.',
    },
    abstract:
      'Cognitive bias modification trains the automatic tendency to approach drug cues. Two large trials found fewer relapses a year later, and a pooled analysis of fourteen studies cannot rule out no effect. The honest next step is to train only people who show the bias, with a shared protocol.',
    claim: 'Test the reflex first. Train it only in people who have it.',
    notice: {
      text: [
        'Cues for a drug can pull a person toward it faster than a decision can form. The relevant skill to train is the reflex itself: the automatic response to the cue.',
        'In approach-avoidance training, patients push a joystick away in response to drug pictures. The aim is to turn a tendency to approach into a tendency to avoid, without the patient needing to reason about it.',
      ],
      signal: ['The strength of the automatic approach bias before training', 'Relapse at long follow-up', 'Who benefits most, and why'],
      noise: ['Stated intention to quit', 'Short-term bias scores alone', 'Insight into the addiction'],
    },
    absorb: {
      lead: 'Three results that do not agree. Look at the intervals in the figure, then read the trials.',
      cases: [
        { k: 'First trial', t: '214 alcoholic inpatients had four brief avoidance-training sessions before regular treatment. Their bias turned to avoidance, and their outcomes were better a year later (Wiers et al., 2011).' },
        { k: 'Replication', t: '509 alcohol-dependent patients: the trained group showed lower relapse at one year. Bias change mediated the effect, and older patients and those with a strong starting bias gained most (Eberl et al., 2013).' },
        { k: 'Pooled analysis', t: 'Fourteen studies and 2,435 participants gave a small effect on bias, and a relapse effect with credible intervals that include zero. Substance use did not fall (Boffo et al., 2019).' },
      ],
      figure: 'ci',
      text: [
        'The pooled analysis also found a paradox. With more training practice, relapse fell in the control condition relative to the training condition, so more practice did not simply mean more benefit. The authors call for a larger body of evidence and for adherence to current trial standards, and note that protocols differ from study to study.',
        'The mechanism is credible: the trained bias changed, and the change mediated the clinical effect in the replication. The clinical effect itself is not yet established.',
      ],
      pattern: 'Two large trials point one way. The pooled evidence cannot rule out zero. What is consistent across them is the mechanism, and what is missing is a shared, pre-registered protocol.',
    },
    restructure: {
      frame: 'Strengthen motivation and teach the patient why they drink or use.',
      breaks: 'Insight leaves the reflex untouched, and the one reflex-training approach with promising trials has pooled evidence too uncertain to rest a service on.',
      reframe: [
        'Treat the reflex as a measurable target. Measure approach bias first. Train only where it is strong, as an add-on to standard treatment. Use one shared, pre-registered protocol across sites.',
        'This changes the question from whether bias training works to for whom it works, which is the question that the replication’s own moderation finding raises.',
      ],
      limits: 'The credible intervals are very wide. Nothing here is a cure. The paradoxical dose effect needs explaining before dose is increased.',
    },
    wrong:
      'In a pre-registered, adequately powered trial restricted to patients with a strong baseline approach bias, relapse at twelve months does not differ from sham training.',
    refs: [
      'McLellan, A. T., Lewis, D. C., O’Brien, C. P. and Kleber, H. D. (2000). Drug dependence, a chronic medical illness. JAMA 284(13), 1689–1695.',
      'Wiers, R. W., Eberl, C., Rinck, M., Becker, E. S. and Lindenmeyer, J. (2011). Retraining automatic action tendencies changes alcoholic patients’ approach bias for alcohol and improves treatment outcome. Psychological Science 22(4), 490–497.',
      'Eberl, C. et al. (2013). Approach bias modification in alcohol dependence: do clinical effects replicate and for whom does it work best? Developmental Cognitive Neuroscience 4, 38–51.',
      'Boffo, M. et al. (2019). Cognitive bias modification for behavior change in alcohol and smoking addiction: Bayesian meta-analysis of individual participant data. Neuropsychology Review 29(1), 52–78. doi:10.1007/s11065-018-9386-4',
    ],
  },
  /* ---------------------------------------------------------------- 11 */
  {
    n: 11,
    title: 'Adult plasticity: the game that did not beat the patch',
    tags: ['Implicit learning', 'Neuroplasticity'],
    read: 7,
    problem: {
      line: 'Lazy eye was long thought untreatable after childhood, and the games meant to reopen plasticity have not clearly beaten the oldest treatment.',
      stakes:
        'Early reports showed large gains in adults. The largest randomised trial then compared a binocular game with part-time patching in 385 children and did not show the game to be as good.',
    },
    abstract:
      'Perceptual learning is real and so is the temptation to believe a pilot. The decisive trial found the game close, not better, and most children never played the prescribed amount. The design problem is therefore dose: make correct play the treatment, and measure what was actually delivered.',
    claim: 'Make the game impossible to play without receiving the dose.',
    notice: {
      text: [
        'Amblyopia is a failure of the brain to use one eye well, set during a sensitive period of development. Treatments that work do so through repeated exposure to a particular kind of stimulus, which makes this a dose-response problem more than a motivation one.',
        'Games promise a way to deliver that exposure at scale. Whether they deliver it depends on how much of the prescribed play is actually completed.',
      ],
      signal: ['Visual acuity change against the best available comparator', 'Delivered dose, from logs', 'Results in the large trial, not the pilot'],
      noise: ['Enthusiastic pilot results', 'Time the game was installed', 'Self-reported play'],
    },
    absorb: {
      lead: 'A pilot and a trial that point in different directions. Look at the numbers, then at the dose.',
      cases: [
        { k: 'The pilot', t: '20 adults, 40 to 80 hours of play: acuity improved by about a third, faster than childhood occlusion therapy, with a crossover design to separate it from patching (Li et al., 2011).' },
        { k: 'The trial', t: '385 children over 16 weeks, a binocular iPad game against patching. Acuity improved 1.05 lines with the game and 1.35 with patching. Non-inferiority was not shown (Holmes et al., 2016).' },
        { k: 'The dose', t: 'Of those with log data, 22.2 per cent did more than 75 per cent of the prescribed game treatment, and the median was 46 per cent (Holmes et al., 2016).' },
      ],
      figure: 'bars',
      data: {
        title: 'Acuity gain in lines, and share who completed the prescribed dose',
        rows: [
          { label: 'Binocular game, lines gained', v: 1.05, max: 2, fmt: (v) => `${v.toFixed(2)} lines` },
          { label: 'Patching, lines gained', v: 1.35, max: 2, fmt: (v) => `${v.toFixed(2)} lines` },
          { label: 'Game: completed more than 75% of dose', v: 22.2, max: 100, fmt: (v) => `${v.toFixed(1)}%` },
        ],
        note: 'From Holmes et al. (2016). Different scales per row.',
      },
      text: [
        'In younger children with no earlier treatment, both arms did well: 2.5 lines with the game and 2.8 with patching. The failure is therefore not that the game does nothing. It is that in this trial the game did not match the established treatment, and few children received the intended amount.',
        'The pilot and the trial are different designs and populations, and both are true. The lesson is about where the evidence can be trusted.',
      ],
      pattern: 'Small, enthusiastic pilots show large gains. The large trial shows the game close but not better, and most of the prescribed dose was never played.',
    },
    restructure: {
      frame: 'A game that is fun enough will repair a neural deficit.',
      breaks: 'The best comparator still did better, and the dose actually received was far below the prescription.',
      reframe: [
        'Treat adherence as the primary design problem. The unit of treatment is minutes of correct stimulation delivered, so build the game so the stimulus is delivered only when play is correct, and the game cannot advance on skipped or incorrect play.',
        'Log the delivered dose, report it as the main covariate, and compare at equal delivered dose against patching, which separates a weak treatment from an unplayed one.',
      ],
      limits: 'One trial tested one binocular game. A different game, or an enforced-dose version, could behave differently, and that is exactly what is to be tested.',
    },
    wrong:
      'A game with enforced, logged dose delivery still fails to match patching at equal delivered dose.',
    refs: [
      'Li, R. W., Ngo, C., Nguyen, J. and Levi, D. M. (2011). Video-game play induces plasticity in the visual system of adults with amblyopia. PLoS Biology 9(8), e1001135.',
      'Holmes, J. M. et al. (2016). Effect of a binocular iPad game vs part-time patching in children aged 5 to 12 years with amblyopia: a randomized clinical trial. JAMA Ophthalmology 134(12), 1391–1400.',
    ],
  },
  /* ---------------------------------------------------------------- 12 */
  {
    n: 12,
    title: 'Diagnostic error: the crowd inside every case',
    tags: ['Relevance realization', 'Medicine'],
    read: 8,
    problem: {
      line: 'Diagnostic errors touch at least 1 in 20 US adults a year, and a small set of dangerous diseases causes about half the serious harm.',
      stakes:
        'An estimate from three large studies put outpatient diagnostic error at about 5 per cent of US adults a year, around 12 million people (Singh et al., 2014). A later estimate counted about 795,000 Americans who die or are permanently disabled each year because dangerous diseases are misdiagnosed, with 15 diseases accounting for about half (Newman-Toker et al., 2024).',
    },
    abstract:
      'The harm is concentrated in a short list of conditions, and the correction that has the strongest evidence is not a smarter individual. It is pooled, structured judgement. A game can rehearse the cases, and AI can serve as one more independent voice, never as the anchor.',
    claim: 'Ask for a ranked list of candidates, and pool independent lists before anyone sees another’s answer.',
    notice: {
      text: [
        'The decisive act in diagnosis is deciding which of many possibilities deserves attention first. That is relevance realization in a clinic, and it fails in recognisable ways: anchoring on the first idea, closing early, missing the dangerous rare one.',
        'The useful object is the ranked differential, a list, not a single answer. A list can be pooled across people, and a single answer cannot.',
      ],
      signal: ['A ranked differential from each person, made independently', 'The 15 diseases that carry half the harm', 'Accuracy by case, not by clinician reputation'],
      noise: ['Confidence', 'Seniority and specialty label', 'Speed of the first answer'],
    },
    absorb: {
      lead: 'Three results about where error lives and what shrinks it. The figure puts the accuracy numbers side by side.',
      cases: [
        { k: 'How common', t: 'About 5.08 per cent of US outpatient adults a year, roughly 12 million, from three synthesised studies (Singh et al., 2014).' },
        { k: 'How concentrated', t: 'Fifteen dangerous diseases account for about half of serious misdiagnosis harm. Stroke, sepsis, pneumonia, venous thromboembolism and lung cancer alone carry 38.7 per cent (Newman-Toker et al., 2024).' },
        { k: 'What helps', t: 'On structured cases from the Human Diagnosis Project, individual physicians were right in the top three about 62.5 per cent of the time, and groups of nine 85.6 per cent (Barnett et al., 2019).' },
      ],
      figure: 'bars',
      data: {
        title: 'Diagnosis in the top three: accuracy by who decides',
        rows: [
          { label: 'Individual physicians', v: 62.5, max: 100, fmt: (v) => `${v}%` },
          { label: 'Individual specialists, on their own subspecialty', v: 66.3, max: 100, fmt: (v) => `${v}%` },
          { label: 'Group of 2', v: 77.7, max: 100, fmt: (v) => `${v}%` },
          { label: 'Group of 9', v: 85.6, max: 100, fmt: (v) => `${v}%` },
        ],
        note: 'From Barnett et al. (2019). Structured vignettes, not live care.',
      },
      text: [
        'Groups of two to nine outperformed individual specialists in their own subspecialty, and the gain held across presenting symptoms, with abdominal pain gaining 17.3 percentage points and fever 29.8. The authors write that there are few proven strategies against misdiagnosis, and that the technique merits study in clinical settings.',
        'These are structured vignettes pooled offline. Live practice, with its time pressure and its team dynamics, is different.',
      ],
      pattern: 'The harm is concentrated, and the strongest correction found is not a better individual but independent judgements pooled.',
    },
    restructure: {
      frame: 'Train each clinician to avoid bias, and add another test.',
      breaks: 'Individual accuracy on structured cases is about 62.5 per cent, specialists included, and error rates persist despite decades of exhortation.',
      reframe: [
        'Three parts. A rehearsal layer: cases from the dangerous list with immediate feedback on the whole differential, so that pattern sense builds by exposure. A decision step: every case collects a ranked list from several independent people before anyone sees another’s answer. AI as one more independent voice in the pool, and never the first or the anchor.',
        'The last point is a deliberate link to the next papers: a machine shown first becomes the anchor, so its list enters the pool blind, like everyone else’s.',
      ],
      limits: 'The 5 per cent figure is extrapolated from three studies. Human Dx accuracy was measured on vignettes. A live trial is the missing evidence.',
    },
    wrong:
      'In live clinical use, pooling independent differentials does not reduce missed dangerous diagnoses against usual care.',
    refs: [
      'Singh, H., Meyer, A. N. D. and Thomas, E. J. (2014). The frequency of diagnostic errors in outpatient care: estimations from three large observational studies involving US adult populations. BMJ Quality and Safety 23(9), 727–731.',
      'Newman-Toker, D. E. et al. (2024). Burden of serious harms from diagnostic error in the USA. BMJ Quality and Safety 33(2), 109–120.',
      'Barnett, M. L., Boddupalli, D., Nundy, S. and Bates, D. W. (2019). Comparative accuracy of diagnosis by collective intelligence of multiple physicians vs individual physicians. JAMA Network Open 2(3), e190096.',
    ],
  },
  /* ---------------------------------------------------------------- 13 */
  {
    n: 13,
    title: 'Adherence: the half of every prescription that is never taken',
    tags: ['Implicit learning', 'Chronic disease'],
    read: 7,
    problem: {
      line: 'People prescribed self-administered medicines typically take only about half their doses, and no intervention has reliably fixed that.',
      stakes:
        'A Cochrane review of 182 randomised trials found current methods of improving adherence mostly complex and not very effective, so the full benefits of treatment cannot be realised (Nieuwlaat et al., 2014).',
    },
    abstract:
      'Reminders and information do not carry adherence. Where anything worked, it was tailored, ongoing and human, and expensive. The design bet is to find each person’s actual barrier in the first week, and route them to the matching low-cost fix.',
    claim: 'Design for the person’s barrier, not the reminder.',
    notice: {
      text: [
        'A missed dose has a reason, and the reasons differ: forgetting, side effects, a belief about the drug, cost, a chaotic week. One reminder system cannot answer five different problems.',
        'The relevant thing to notice is which barrier is operating for this person. That is a salience question about the person, and the intervention follows from the answer.',
      ],
      signal: ['The person’s actual barrier', 'Objectively measured adherence', 'A clinical outcome that moves'],
      noise: ['Self-reported adherence', 'Number of reminders sent', 'App opens'],
    },
    absorb: {
      lead: 'Three facts from the largest review of the field. Use the dot grid to feel what half means.',
      cases: [
        { k: 'The scale of the evidence', t: 'The review covers 182 randomised trials, and the studies differed so widely that they could not be pooled (Nieuwlaat et al., 2014).' },
        { k: 'What passed the bar', t: 'Only 17 trials had the lowest risk of bias. Of those, five reported better adherence and better clinical outcomes, and they shared no common intervention features.' },
        { k: 'What those looked like', t: 'The strongest trials involved complex, multi-component, tailored, ongoing support, often from pharmacists or other health professionals. Even the best did not produce large improvements.' },
      ],
      figure: 'doses',
      text: [
        'The review recommends improved design of long-term interventions that are feasible, objective adherence measures, and studies powered to detect clinically important outcomes. In other words, the field lacks both a working method and the measurement that would show one.',
      ],
      pattern: 'Where anything worked it was tailored, ongoing and human, and costly. Generic reminders and information did not carry it.',
    },
    restructure: {
      frame: 'Remind people to take their medicine, with an app.',
      breaks: 'The pooled evidence says methods are mostly complex and not very effective, and that the most effective ones depend on skilled human time that cannot be scaled.',
      reframe: [
        'Make the barrier visible first. A short, game-like first week surfaces each person’s likely barrier through behaviour, not a questionnaire, and routes them to a matching low-cost step: a changed routine, a side-effect conversation, a cost referral. Humans take the cases that cannot be routed.',
        'Success is judged only on objective adherence and a clinical outcome together, since the review found few trials that moved both.',
      ],
      limits: 'Barrier-routing is a hypothesis built on the review’s call for tailoring. It has no trial evidence yet. Behavioural data about medicines is sensitive and needs strict consent.',
    },
    wrong:
      'Barrier-routed support does not beat generic reminders on both objective adherence and a clinical outcome in an adequately powered trial.',
    refs: [
      'Nieuwlaat, R. et al. (2014). Interventions for enhancing medication adherence. Cochrane Database of Systematic Reviews 2014(11), CD000011.',
    ],
  },
  /* ---------------------------------------------------------------- 14 */
  {
    n: 14,
    title: 'Two sigma at scale: a tutor for every child',
    tags: ['All three channels', 'Education'],
    read: 8,
    problem: {
      line: 'Seven in ten ten-year-olds in low- and middle-income countries cannot read and understand a simple text, and the tutoring that could close the gap cannot be staffed.',
      stakes:
        'The 2022 update to the World Bank’s learning poverty estimate put the figure at 70 per cent, up from 57 per cent before the pandemic. Bloom’s 1984 finding that one-to-one tutoring with mastery learning outperformed ordinary classes by about two standard deviations has been a challenge to the field ever since.',
    },
    abstract:
      'Adaptive practice in India raised scores by a real but fractional share of what a human tutor is thought to deliver. The gap is the tutor’s diagnosis of what a child misunderstands, and the tutor’s hold on a child’s attention. Those are exactly the two things the three channels describe.',
    claim: 'Rebuild the tutor’s three acts: find the misconception, stage the reframe, keep the child in range.',
    notice: {
      text: [
        'A tutor’s first act is noticing what is stuck in the child’s picture: which misconception is producing the wrong answer, not which answer is wrong. That is relevance realization applied to another mind.',
        'A score on a test says how much is missing. A diagnosis says which idea to repair first.',
      ],
      signal: ['The misconception behind the error', 'Time spent on the right problem for this child', 'Gains for the weakest learners'],
      noise: ['Seat time and syllabus coverage', 'The class average', 'Right answers reached by guessing'],
    },
    absorb: {
      lead: 'Three numbers. The figure sets the size of the promise against the size of the evidence.',
      cases: [
        { k: 'The benchmark', t: 'One-to-one tutoring with mastery learning reached about two standard deviations above conventional classes in Bloom’s studies, which were small (Bloom, 1984).' },
        { k: 'Adaptive practice', t: 'In an urban Indian trial with 619 students, a technology-aided after-school programme raised maths by 0.37 and Hindi by 0.23 standard deviations in about 4.5 months, with larger relative gains for weaker students (Muralidharan, Singh and Ganimian, 2019).' },
        { k: 'The need', t: 'Learning poverty was 57 per cent before the pandemic and 70 per cent after it, for ten-year-olds in low- and middle-income countries (World Bank et al., 2022).' },
      ],
      figure: 'bars',
      data: {
        title: 'Effect on learning, in standard deviations',
        rows: [
          { label: 'Human tutoring with mastery (Bloom, 1984)', v: 2, max: 2.2, fmt: (v) => `${v.toFixed(2)} SD` },
          { label: 'Adaptive practice, maths (India, 4.5 months)', v: 0.37, max: 2.2, fmt: (v) => `${v.toFixed(2)} SD` },
          { label: 'Adaptive practice, Hindi (India, 4.5 months)', v: 0.23, max: 2.2, fmt: (v) => `${v.toFixed(2)} SD` },
        ],
        note: 'Bloom’s figure comes from small studies, and the India figure from a 619-student efficacy trial.',
      },
      text: [
        'The Indian programme was also found cost-effective in terms of productivity per dollar and per unit of time. The authors caution that more research is needed to see whether the effects hold at larger scale.',
        'Adaptive practice delivers something real. The question is what is still missing from it, since a quarter of a tutor’s effect is still useful and still not two sigma.',
      ],
      pattern: 'Practice that adapts to the child delivers a real fraction of what a tutor does. The remainder lives in diagnosis of the misconception and in holding attention.',
    },
    restructure: {
      frame: 'Put the curriculum on a screen and let each child go at their own pace.',
      breaks: 'Pace-adaptive practice delivers a fraction of the benchmark, from a small efficacy trial, with scale unproven.',
      reframe: [
        'Rebuild around the tutor’s three acts. Diagnose the misconception by choosing problems that expose it. Stage the reframe with productive failure, so that the child tries before being told (the third paper). Keep the child in range with game pacing (the first paper).',
        'The portfolio’s Roti concept is a small instance: a sharing game that makes the fraction misconception visible before any rule is given.',
      ],
      limits: 'Both reference effects come from small studies. Equity of devices, teachers’ role and language of instruction all decide whether a result survives at scale.',
    },
    wrong:
      'In a government school system at scale, misconception-diagnosing practice gains no more than standard adaptive practice.',
    refs: [
      'Bloom, B. S. (1984). The 2 sigma problem: the search for methods of group instruction as effective as one-to-one tutoring. Educational Researcher 13(6), 4–16.',
      'Muralidharan, K., Singh, A. and Ganimian, A. J. (2019). Disrupting education? Experimental evidence on technology-aided instruction in India. American Economic Review 109(4), 1426–1460.',
      'World Bank, UNESCO, UNICEF, FCDO, USAID and the Bill and Melinda Gates Foundation (2022). The State of Global Learning Poverty: 2022 Update.',
    ],
  },
  /* ---------------------------------------------------------------- 15 */
  {
    n: 15,
    title: 'The rare signal: what matters most is missed most',
    tags: ['Relevance realization', 'Screening and security'],
    read: 8,
    problem: {
      line: 'When the target is rare, trained experts miss it far more often: cancers in screening, objects in baggage, threats on a watch.',
      stakes:
        'In a real clinic with a low prevalence of cancer, expert mammographers missed 30 per cent of the cancers. In a session with the same cases at 50 per cent prevalence, they missed 12 per cent (Evans, Birdwell and Wolfe, 2013).',
    },
    abstract:
      'Missing rare things is not a failure of effort or skill. It is a sensible adjustment of the decision criterion that becomes lethal when the rare thing is the one that matters. The design move is to change the prevalence the observer feels without changing the world.',
    claim: 'Calibrate the observer’s criterion with honest, seeded practice cases and instant feedback.',
    notice: {
      text: [
        'Humans quietly learn how often a thing occurs and set their threshold accordingly. When a target is rare, the sensible threshold is a conservative one, and a conservative threshold lets the rare real target through.',
        'The relevant variable to watch is therefore the prevalence the observer has experienced recently, not the true rate in the world.',
      ],
      signal: ['Miss rate on rare targets specifically', 'The prevalence the observer experienced recently', 'Detection of seeded cases with instant feedback'],
      noise: ['Overall accuracy, dominated by easy negatives', 'The observer’s confidence', 'Years of experience'],
    },
    absorb: {
      lead: 'Three results from the lab, the clinic and the radar room. The figure shows the clinic result.',
      cases: [
        { k: 'The lab', t: 'If observers do not find what they are looking for fairly often, they often fail to notice it when it does appear (Wolfe, Horowitz and Kenner, 2005).' },
        { k: 'The clinic', t: 'Fifty positive and fifty negative cases were inserted slowly into a hospital’s screening workflow over nine months. Six radiologists missed 30 per cent of cancers in the clinic and 12 per cent when reviewing the same cases at 50 per cent prevalence (Evans et al., 2013).' },
        { k: 'The watch', t: 'Radar and sonar operators miss rare, irregular events more often as a watch goes on, which Mackworth described in 1948 as the breakdown of vigilance.' },
      ],
      figure: 'bars',
      data: {
        title: 'Cancers missed by the same radiologists, same cases',
        rows: [
          { label: 'Real clinic, low prevalence', v: 30, max: 40, fmt: (v) => `${v}%` },
          { label: 'Test session, 50% prevalence', v: 12, max: 40, fmt: (v) => `${v}%` },
        ],
        note: 'From Evans, Birdwell and Wolfe (2013).',
      },
      text: [
        'The authors point out that, in most circumstances, the response to low prevalence is probably adaptive: it is wise to be conservative about reporting events with very low base rates. It is not adaptive in socially important, low-prevalence tasks where the rare event is the one that matters.',
      ],
      pattern: 'The same people, the same cases, a different base rate, and a large difference in what is seen. The criterion moved, not the skill.',
    },
    restructure: {
      frame: 'Train harder, add alerts, and rely on professionalism.',
      breaks: 'The effect was found in expert radiologists in a real clinic. Alerts raise noise, which worsens the problem of paper 7.',
      reframe: [
        'Change the felt prevalence. A game layer feeds realistic, honestly labelled rare-looking cases into the workflow at a controlled rate, with immediate feedback and a score, so that the observer’s criterion stays calibrated for the real thing. Short work bursts and rotation counter the vigilance decline.',
        'The same design applies in screening, security checkpoints and surveillance watches: the real prevalence stays rare, and the practiced prevalence does not.',
      ],
      limits: 'Seeded cases must be disclosed and honest. Seeding can push the criterion too far and raise false alarms, whose cost must be counted. This is a hypothesis, not a tested method.',
    },
    wrong:
      'Observers using seeded-case feedback show no higher detection of real rare targets than controls, or a rise in false alarms that outweighs the gain.',
    refs: [
      'Wolfe, J. M., Horowitz, T. S. and Kenner, N. M. (2005). Rare items often missed in visual searches. Nature 435, 439–440.',
      'Evans, K. K., Birdwell, R. L. and Wolfe, J. M. (2013). If you don’t find it often, you often don’t find it: why some cancers are missed in breast cancer screening. PLoS ONE 8(5), e64366.',
      'Mackworth, N. H. (1948). The breakdown of vigilance during prolonged visual search. Quarterly Journal of Experimental Psychology 1(1), 6–21.',
    ],
  },
  /* ---------------------------------------------------------------- 16 */
  {
    n: 16,
    title: 'Trust calibration: keeping a human able to disagree with the machine',
    tags: ['Implicit learning', 'Defense and medicine'],
    read: 9,
    problem: {
      line: 'As decision aids improve, people stop checking them, and the errors that remain are the ones nobody catches.',
      stakes:
        'In a simulated flight task, participants without an automated aid outperformed those using a very reliable but imperfect one on a monitoring task (Skitka, Mosier and Burdick, 1999). The pattern appears in medicine, aviation and any setting where a person supervises a machine.',
    },
    abstract:
      'A human in the loop is a safeguard only while the human is still checking. Complacency and automation bias appear in novices and experts and do not fade with simple practice. Oversight is a skill, and a skill can be trained and measured.',
    claim: 'Train oversight like a flight skill, and make the catch rate the licence to operate.',
    notice: {
      text: [
        'Supervising a reliable machine is boring, and attention goes where the work is. The operator’s task is to notice the one case in many where the machine is wrong, which is the rare-signal problem of the last paper aimed at the machine.',
        'The thing to measure is the catch rate on seeded machine errors. The agreement rate with the machine tells almost nothing, since a perfect overseer and a rubber stamp both agree most of the time.',
      ],
      signal: ['Catch rate on seeded machine errors', 'Whether the interface shows information before the recommendation', 'Who is accountable, by name'],
      noise: ['Agreement rate with the machine', 'Reported trust', 'Speed of the decision'],
    },
    absorb: {
      lead: 'Three findings about oversight. Use the figure to see how quickly a good aid hides a poor overseer.',
      cases: [
        { k: 'The cost', t: 'A very reliable but imperfect aid led to worse performance on a monitoring task than no aid (Skitka, Mosier and Burdick, 1999).' },
        { k: 'The mechanism', t: 'Complacency appears under multi-task load, in novices and experts, and is not overcome by simple practice. Automation bias also depends on attention (Parasuraman and Manzey, 2010).' },
        { k: 'The mitigators', t: 'A review of 74 papers found that training and emphasising user accountability helped, and so did design: advice position, updated confidence levels, and information provided instead of recommendations (Goddard, Roudsari and Wyatt, 2012).' },
      ],
      figure: 'trust',
      text: [
        'Bainbridge’s classic essay on the ironies of automation (1983) made the underlying point: the more reliable the automation, the less practised the operator, so the person left to supervise is the person least able to take over.',
      ],
      pattern: 'The better the aid, the less it is checked, so oversight has to be built and trained as its own skill, not assumed as a side-effect of having a person present.',
    },
    restructure: {
      frame: 'Keep a human in the loop, and the system is safe.',
      breaks: 'A person who has stopped checking is a signature, not a safeguard. The effect is found in experts and survives practice.',
      reframe: [
        'Train and test oversight directly. Seed known machine errors at a known rate with instant feedback so that calibration forms by experience. Show information before any recommendation. Attach accountability to a name. Rotate duties. Make the measured catch rate a requirement for operating the system.',
        'In defense, the same design governs advice to commanders (the next paper) and any system where a machine proposes and a person disposes.',
      ],
      limits: 'Seeded errors can lower trust in a good aid, so the rate has to be tuned. Context matters: results from one domain do not transfer automatically to another.',
    },
    wrong:
      'Operators trained with seeded errors catch no more real aid errors than untrained operators, or lose the benefit of a good aid altogether.',
    refs: [
      'Bainbridge, L. (1983). Ironies of automation. Automatica 19(6), 775–779.',
      'Skitka, L. J., Mosier, K. L. and Burdick, M. (1999). Does automation bias decision-making? International Journal of Human-Computer Studies 51(5), 991–1006.',
      'Parasuraman, R. and Manzey, D. H. (2010). Complacency and bias in human use of automation: an attentional integration. Human Factors 52(3), 381–410.',
      'Goddard, K., Roudsari, A. and Wyatt, J. C. (2012). Automation bias: a systematic review of frequency, effect mediators, and mitigators. Journal of the American Medical Informatics Association 19(1), 121–127.',
    ],
  },
  /* ---------------------------------------------------------------- 17 */
  {
    n: 17,
    title: 'Escalation: rehearsing crisis judgement before machines speed it up',
    tags: ['All three channels', 'Defense'],
    read: 9,
    problem: {
      line: 'Crises can escalate faster than leaders can think, and AI is entering the decision loop with untested behaviour under pressure.',
      stakes:
        'In a wargame study of five off-the-shelf language models, every model showed some escalation, with arms-race dynamics and, in rare cases, the deployment of nuclear weapons (Rivera et al., 2024). The most escalatory model was the one not tuned with human feedback.',
    },
    abstract:
      'An accuracy test cannot reveal how an adviser behaves inside a dynamic. The sequence that escalates is produced by interaction, each step proportionate to the actor and the sum not. The design move is to test every AI adviser as a participant in repeated crisis games, and to train leaders in the same games.',
    claim: 'Test the model as a player in a dynamic, not as an answer machine.',
    notice: {
      text: [
        'In a crisis, the move that matters is the other side’s last one, and what it is a signal of. A leader who reads a defensive move as an attack, and answers in kind, hands the other side the same misreading.',
        'The relevant thing to notice is the interaction itself: how each side’s reading of the other’s move compounds over rounds.',
      ],
      signal: ['The moment a human can still slow the sequence', 'How each side reads the other’s last move', 'Off-ramps that remain available'],
      noise: ['Speed', 'The apparent provocation of the last move alone', 'Consensus inside one’s own team'],
    },
    absorb: {
      lead: 'Three cases where interaction produced something no one chose. Use the toy model to feel the ratchet.',
      cases: [
        { k: 'Language-model nations', t: 'Eight autonomous nation agents interacted in a turn-based conflict game. All five models escalated, with arms-race dynamics emerging (Rivera et al., 2024).' },
        { k: 'Humans and models compared', t: 'Lamparth and colleagues (2024) compared the behaviour of expert humans and language models in wargame simulations, the first step in learning where they differ.' },
        { k: 'Machine speed elsewhere', t: 'The 2010 US “flash crash” investigation described a rapid fall and recovery in markets produced partly by automated trading systems interacting at speed (SEC and CFTC, 2010).' },
      ],
      figure: 'ratchet',
      text: [
        'The common feature across the three is not malice or error. Each step looks proportionate to the actor taking it, and the sum is not. That is why accuracy checks on an adviser, run one answer at a time, can look excellent and still miss the failure.',
        'The model in the figure is a toy. It shows only that a small bias in how each side reads the other can ratchet to the ceiling, and that a point where a human matches rather than exceeds the other’s move changes the outcome.',
      ],
      pattern: 'In each case the sequence is produced by interaction. Each step looks reasonable, and the total is something nobody intended.',
    },
    restructure: {
      frame: 'Keep a human in the loop and test AI advisers for accuracy.',
      breaks: 'Accuracy is measured one answer at a time. The failure lives in repeated interaction, and the models escalated without anyone intending it.',
      reframe: [
        'Run crisis rehearsals as repeated games that include the machine. Leaders play with and against AI agents in scenario families, with deliberate off-ramp moments. Every adviser model passes an escalation gate, measured over many games, before use. Leaders practise reading the opponent’s move charitably.',
        'The insight is to treat an AI adviser as a participant in a dynamic and to examine its behaviour there, which is where the documented failures appeared.',
      ],
      limits:
        'Simulations are not reality, and models differ and change. Scope is defensive: rehearsal, adviser testing and leader training. No autonomous decisions over the use of force, no target selection. A named human decides.',
    },
    wrong:
      'Adviser models that pass the escalation gate still escalate in held-out scenario families, or trained leaders show no lower escalation than untrained leaders.',
    refs: [
      'Rivera, J.-P. et al. (2024). Escalation risks from language models in military and diplomatic decision-making. Proceedings of the ACM Conference on Fairness, Accountability, and Transparency (FAccT). arXiv:2401.03408.',
      'Lamparth, M. et al. (2024). Human vs. machine: behavioral differences between expert humans and language models in wargame simulations. Proceedings of the AAAI/ACM Conference on AI, Ethics, and Society (AIES).',
      'US Securities and Exchange Commission and Commodity Futures Trading Commission (2010). Findings Regarding the Market Events of May 6, 2010.',
    ],
  },
  /* ---------------------------------------------------------------- 18 */
  {
    n: 18,
    title: 'Suicide: when prediction fails, rehearse the plan',
    tags: ['All three channels', 'Crisis care'],
    read: 8,
    problem: {
      line: 'More than 700,000 people die by suicide each year, and fifty years of research have not improved the prediction of who will attempt.',
      stakes:
        'A meta-analysis of 365 studies found prediction only slightly better than chance for all outcomes, with no improvement across fifty years (Franklin et al., 2017). The WHO’s 2019 estimates put deaths by suicide at more than 700,000 a year.',
    },
    abstract:
      'If prediction cannot sort people, the work moves to preparation. A brief structured safety plan with follow-up was associated with about 45 per cent fewer suicidal behaviours in one large cohort comparison. A plan only helps if it can be carried out when thinking is hardest, and that is a rehearsal problem.',
    claim: 'Within clinical care only, rehearse the plan in calm times until its first step is automatic.',
    notice: {
      text: [
        'In crisis, attention narrows. This is a long-described clinical observation, and it is a design premise here, not a measurement from the studies below. When attention narrows, a plan that needs deliberation to start is a plan that may not start.',
        'The relevant thing to design is therefore the first step: pre-chosen, simple, and needing almost no thought. The rest can follow once the person is moving.',
      ],
      signal: ['What the person can do in the first minutes of a crisis', 'A pre-chosen first step', 'Contact with a human, reliably'],
      noise: ['Risk scores that sort people', 'A single warning indicator', 'Stated intention at one moment'],
    },
    absorb: {
      lead: 'Two facts and a design premise. The figure shows the cohort comparison result.',
      cases: [
        { k: 'Prediction', t: 'Across 365 studies and 3,428 risk-factor effect sizes, prediction was only slightly better than chance, and had not improved in fifty years (Franklin et al., 2017).' },
        { k: 'Preparation', t: 'In nine Veterans Health Administration emergency departments, a Safety Planning Intervention with telephone follow-up was associated with fewer suicidal behaviours over six months: 3.03 per cent against 5.29 per cent (Stanley et al., 2018).' },
        { k: 'The plan itself', t: 'The intervention is a brief clinical one built around a prioritised list of coping skills and strategies, with follow-up calls to review it and support treatment (Stanley et al., 2018).' },
      ],
      figure: 'bars',
      data: {
        title: 'Suicidal behaviour in six months after an emergency visit',
        rows: [
          { label: 'Safety plan with follow-up (1,186 patients)', v: 3.03, max: 6, fmt: (v) => `${v.toFixed(2)}%` },
          { label: 'Usual care (454 patients)', v: 5.29, max: 6, fmt: (v) => `${v.toFixed(2)}%` },
        ],
        note: 'Cohort comparison, not a randomised trial. Odds ratio 0.56 (95% CI 0.33 to 0.95). Intervention patients also had more than double the odds of an outpatient visit.',
      },
      text: [
        'This is a cohort comparison across sites, not a randomised trial, and the authors describe the result as an association. It sits beside a harder fact: the prediction work that would target an intervention more finely has not delivered.',
      ],
      pattern: 'Sorting people by predicted risk does not work. A short structured plan with human follow-up is associated with fewer behaviours. Both point to preparation over prediction.',
    },
    restructure: {
      frame: 'Predict who is at risk, then intervene on the high-risk group.',
      breaks: 'Fifty years of prediction research did not get far above chance, so the sorting step has no foundation to stand on.',
      reframe: [
        'Move from prediction to preparation, for everyone who reaches care. Rehearse the plan in calm periods, with a clinician, until its first steps are automatic. Design the first step to need almost no thought. Keep a human in contact throughout.',
        'The design draws on implicit learning, since a rehearsed step runs without deliberation, and on relevance realization, since the plan hands a narrowed mind one pre-chosen thing to attend to.',
      ],
      limits:
        'A hypothesis with no trial of its own. The existing evidence is a cohort comparison. Only inside clinical care, co-designed with people with lived experience, with ethics review. Never a stand-alone game, never any content about methods, and always a route to a person. Anyone in distress should reach a person, not a program.',
    },
    wrong:
      'In a randomised trial inside clinical care, plan rehearsal adds nothing to the safety planning intervention with follow-up on suicidal behaviour at six months, or raises distress.',
    refs: [
      'Franklin, J. C. et al. (2017). Risk factors for suicidal thoughts and behaviors: a meta-analysis of 50 years of research. Psychological Bulletin 143(2), 187–232.',
      'Stanley, B. et al. (2018). Comparison of the Safety Planning Intervention with follow-up vs usual care of suicidal patients treated in the emergency department. JAMA Psychiatry 75(9), 894–900.',
      'World Health Organization (2021). Suicide worldwide in 2019: Global Health Estimates.',
    ],
  },
];
