// Research programme: how game design and AI can support mental health, forensic psychology, biotech and defense.
// Position papers that synthesise published work. Every cited study is real and was checked against its record.
// Design proposals inside them are hypotheses with a stated way to be proved wrong, not results.
//
// Each paper is itself built as the three-stage design it argues for:
//   1 Notice      (relevance realization): the problem, what to keep in view, what to let go.
//   2 Absorb      (implicit learning): cases and a figure to experience, then the pattern is revealed on request.
//   3 Restructure (epiphany design): the usual frame, where it breaks, the reframe, the test, the limits.

export const channels = [
  { id: 'rr', name: 'Relevance realization', ask: 'What gets noticed', line: 'The mind decides what matters among endless candidates. A game can shape that decision.' },
  { id: 'impl', name: 'Implicit learning', ask: 'What is learned unspoken', line: 'Structure is absorbed through repetition and feedback, without being explained.' },
  { id: 'insight', name: 'Epiphany design', ask: 'What restructures at once', line: 'A stuck frame is dropped and the problem reorganises. It can be staged, then checked.' },
];

export const domains = [
  { id: 'mh', name: 'Mental health' },
  { id: 'fo', name: 'Forensic psychology' },
  { id: 'bt', name: 'Biotech' },
  { id: 'df', name: 'Defense' },
];

// cells[channel][domain]: the design move, the best evidence, the guardrail, and the paper that argues it.
export const cells = {
  rr: {
    mh: {
      move: 'Levels whose winning strategy forces a switch between narrow focus and wide scanning, so a stuck habit of attention (threat, self-criticism) is loosened in play.',
      evidence: 'Attention-bias training moves bias scores, but a 49-trial meta-analysis found small effects on symptoms that did not survive outlier and publication-bias adjustment.',
      guard: 'Measure symptoms and flexibility, not bias scores.',
      paper: 1,
    },
    fo: {
      move: 'Interview simulators that reward open prompts and penalise early closure, so the investigator’s picture does not narrow around the first suspect.',
      evidence: 'Avatar interviews with feedback raised question quality within about an hour, and the effect held in a nine-study pooled analysis.',
      guard: 'Train the interviewer. Never score the witness or suspect.',
      paper: 4,
    },
    bt: {
      move: 'Present the molecule so the relevant structure is visible to a non-expert, and let the score function carry the physics.',
      evidence: 'Foldit players produced models good enough to solve a retroviral protease structure after conventional attempts had failed.',
      guard: 'The score is a hypothesis about physics. Check it at the bench.',
      paper: 5,
    },
    df: {
      move: 'Warning-triage exercises where real signals sit inside realistic noise from the start, scored on what the analyst let go as well as on what was found.',
      evidence: 'The classic study of Pearl Harbor found that the warning signals were present and went unrecognised as relevant, drowned in noise and expectation.',
      guard: 'Decision support and training only. A named human owns every judgement.',
      paper: 7,
    },
  },
  impl: {
    mh: {
      move: 'Dosed, timed play that practises a changed response until it runs without deliberation, with a probe level that tests whether the structure was learned.',
      evidence: 'A short Tetris session after a reminder cue, within 6 hours of a road accident, cut intrusive memories the following week in a proof-of-concept trial.',
      guard: 'One-week result. The one-month result was not shown.',
      paper: 2,
    },
    fo: {
      move: 'Repetitions that rehearse procedure: record the judgement first, reveal the context second, until the sequence is habit.',
      evidence: 'Fingerprint examiners changed earlier judgements when misleading context was supplied, so warnings alone are not a control.',
      guard: 'Proceduralise the safeguard. Do not just announce it.',
      paper: 4,
    },
    bt: {
      move: 'Pattern games where players absorb structure by play, then capture the strategies they cannot fully state.',
      evidence: 'EteRNA players’ strategies were distilled into an algorithm that, with the community, beat prior RNA-design algorithms.',
      guard: 'Record strategies as well as solutions, or the learning is lost.',
      paper: 5,
    },
    df: {
      move: 'Play the manipulator’s seat: players build a disinformation campaign in a sandbox, so the technique is absorbed and recognised later in any topic.',
      evidence: 'Short inoculation games and videos improved recognition of manipulation techniques in large samples, though a reanalysis argues some of the gain was blanket scepticism.',
      guard: 'Measure discernment, not scepticism. Build no persuasion engines.',
      paper: 8,
    },
  },
  insight: {
    mh: {
      move: 'A designed impasse: a puzzle whose frame must be dropped, followed by a reflection that ties the dropped frame to a belief the player chose.',
      evidence: 'Insight solutions are remembered better than step-by-step ones, but the Aha feeling also accompanies wrong answers.',
      guard: 'A puzzle is a rehearsal. Lasting change needs tests against real life.',
      paper: 3,
    },
    fo: {
      move: 'Case simulations with a mandatory alternative-hypothesis round, so a second frame is built before the first one sets.',
      evidence: 'Sequential unmasking protocols keep early information from contaminating the frame, so a late reframe is still possible.',
      guard: 'A flash of certainty is not evidence.',
      paper: 4,
    },
    bt: {
      move: 'Make an absurd move cheap to try, and keep a record of the moves that worked.',
      evidence: 'Foldit players’ recurring manoeuvres were collected as recipes that a conventional search had not tried.',
      guard: 'Verify every leap by experiment before it counts.',
      paper: 5,
    },
    df: {
      move: 'A mandatory red-team round that must invent how the plan fails, followed by scored forecasts, so imagination is trained and then audited.',
      evidence: 'The 9/11 Commission named a failure of imagination as the central failure. Forecasting tournaments showed that judgement can be scored against outcomes.',
      guard: 'A reframe is a hypothesis. Score it against what happens.',
      paper: 7,
    },
  },
};

export const papers = [
  /* ---------------------------------------------------------------- 1 */
  {
    n: 1,
    title: 'Relevance realization: what a game actually teaches',
    tags: ['Relevance realization', 'Mental health'],
    read: 8,
    problem: {
      line: 'Attention-training apps move scores, not lives.',
      stakes:
        'About 970 million people were living with a mental disorder in 2019, anxiety and depression the most common (WHO, 2022). Digital tools that retrain attention have been tried at scale, and the best pooled evidence finds small effects on symptoms at most.',
    },
    abstract:
      'Every game trains what a player notices before it trains what the player does. Relevance realization, the process by which a mind finds the few things that matter among endless candidates, gives game design a target that outlasts any genre and gives mental-health design a mechanism to aim at.',
    claim: 'Aim the design at the flexibility of attention, then measure the symptoms.',
    notice: {
      text: [
        'A mind cannot examine everything. Artificial intelligence met the same wall as the frame problem: no list of rules can say in advance which of a situation’s countless facts are relevant to the task in hand (McCarthy and Hayes, 1969). Living minds get past it constantly and cheaply.',
        'Vervaeke, Lillicrap and Richards (2012) argue that this solving is the core of cognition, and that it works by balancing opposed pressures instead of following a rule. It is a framework in cognitive science, not a settled mechanism, and it is used here as a design lens.',
      ],
      signal: ['Whether a player can release one focus and re-aim', 'Symptom change on a validated scale', 'Behaviour that changes when the situation changes'],
      noise: ['Bias scores on a lab task', 'Streaks, minutes and return visits', 'Content that sounds therapeutic'],
    },
    absorb: {
      lead: 'Three conditions, three different contents. Look at what stays the same.',
      cases: [
        { k: 'Rumination', t: 'A self-critical thought takes all the weight and cannot be set down, whatever else is happening.' },
        { k: 'Threat bias', t: 'Anxious people attend to threatening words faster than neutral ones (MacLeod, Mathews and Tata, 1986).' },
        { k: 'Compulsive checking', t: 'One possible danger outranks everything else, and checking does not lower its weight.' },
      ],
      figure: 'dials',
      text: [
        'In later formulations the opposed pressures include exploring against exploiting, focusing against diversifying attention, and compressing what is known against particularising it. Each fails in a recognisable way at either end: stuck in a habit, or scattered across everything.',
        'A level that rewards a memorised route trains exploitation. A level that hides its goal trains exploration. Flow (Csikszentmihalyi, 1990), the narrow band where challenge matches skill, reads here as the band in which the dials keep moving. Fog of war, scarcity, a red herring and a late new verb are all dial controls.',
      ],
      pattern: 'The content differs and the loop is the same: one thing gets all the weight, and the weight cannot be released. The fault is in the movement of attention, not in what it lands on.',
    },
    restructure: {
      frame: 'Change what the person attends to. Retrain the bias away from threat.',
      breaks:
        'A meta-analysis of 49 randomised trials of cognitive bias modification found small effects, mostly non-significant in patient samples, and non-significant once outliers were excluded and publication bias was adjusted for (Cristea, Kok and Cuijpers, 2015). Shifting a bias score is not the same as unsticking a life.',
      reframe: [
        'Train the ability to release and re-aim. Build play where the winning move alternates between narrow and wide, and measure the cost of switching.',
        'The outcome stays clinical: a validated symptom measure against an active control. Flexibility inside the game is the mechanism under test, not the proof.',
      ],
      limits: 'The mapping from dials to disorders is a design hypothesis, not an established mechanism.',
    },
    wrong:
      'In-game flexibility improves, but PHQ-9 or GAD-7 scores do not move against an equally engaging control game. Then the dial idea trains the game and nothing else.',
    refs: [
      'World Health Organization (2022). World Mental Health Report: Transforming Mental Health for All.',
      'McCarthy, J. and Hayes, P. J. (1969). Some philosophical problems from the standpoint of artificial intelligence. Machine Intelligence 4, 463–502.',
      'Vervaeke, J., Lillicrap, T. P. and Richards, B. A. (2012). Relevance realization and the emerging framework in cognitive science. Journal of Logic and Computation 22(1), 79–99.',
      'Csikszentmihalyi, M. (1990). Flow: The Psychology of Optimal Experience. Harper and Row.',
      'MacLeod, C., Mathews, A. and Tata, P. (1986). Attentional bias in emotional disorders. Journal of Abnormal Psychology 95(1), 15–20.',
      'Cristea, I. A., Kok, R. N. and Cuijpers, P. (2015). Efficacy of cognitive bias modification interventions in anxiety and depression: meta-analysis. British Journal of Psychiatry 206(1), 7–16. doi:10.1192/bjp.bp.114.146761',
    ],
  },
  /* ---------------------------------------------------------------- 2 */
  {
    n: 2,
    title: 'Implicit learning: teaching what cannot be said',
    tags: ['Implicit learning', 'Mental health'],
    read: 8,
    problem: {
      line: 'After trauma, nothing scalable prevents intrusive memories in the first hours.',
      stakes:
        'Intrusive visual memories are a hallmark of post-traumatic stress, and the researchers who tested the Tetris approach describe preventive interventions after trauma as lacking. Explaining a habit to someone rarely changes it.',
    },
    abstract:
      'People pick up structure they cannot describe. Games deliver structure this way unusually well, which is why they can reach habits that explanations do not, and why the evidence has to be read with care.',
    claim: 'Test learning by what it costs to change the structure, not by asking the player.',
    notice: {
      text: [
        'The first question is what the player is actually absorbing. A game’s rules are explicit, and its regularities are not: where things tend to appear, which rhythm precedes a threat, how a pattern repeats. Those hidden regularities are what implicit learning picks up.',
        'The design target is therefore a structure, chosen on purpose, delivered by dense repetition with immediate feedback, and a probe that can tell whether it was learned.',
      ],
      signal: ['A hidden structure chosen in advance', 'The cost of changing that structure', 'Transfer to a task outside the game'],
      noise: ['What players say they learned', 'Instruction text and tutorials', 'Time played'],
    },
    absorb: {
      lead: 'Three studies of learning that the learner could not report. Watch the figure, then compare.',
      cases: [
        { k: 'Artificial grammar', t: 'After memorising letter strings, people sorted new strings above chance without being able to state the rules (Reber, 1967).' },
        { k: 'Hidden sequence', t: 'Reaction times fall as a sequence repeats, and rise again when it is swapped for random (Nissen and Bullemer, 1987).' },
        { k: 'Tetris after trauma', t: 'A short game, timed inside the consolidation window, reduced later intrusive memories (Holmes et al., 2009; Iyadurai et al., 2018).' },
      ],
      figure: 'srt',
      text: [
        'The ingredients are immediate consequence, dense repetition, and input that varies inside a hidden structure. Dopamine neurons signal prediction errors, outcomes better or worse than expected (Schultz, Dayan and Montague, 1997). A game’s feedback is a continuous stream of such errors, so a well-built game teaches a model of its world through hundreds of small surprises.',
        'Iyadurai and colleagues (2018) ran a randomised proof-of-concept trial in an emergency department: a reminder cue plus about 20 minutes of Tetris within 6 hours of a motor vehicle accident, against an attention-placebo activity log. Intrusive memories were fewer over the following week. A clinical intrusion measure agreed at one week, and not at one month. The authors call it proof of concept. The proposed mechanism is competition for visuospatial resources while a memory consolidates, so this sits under implicit learning only loosely, and it matters here because a game was used as a dosed procedure with a timing window and a placebo-matched control.',
        'Kollins and colleagues (2020) report a randomised, double-blind trial of a video-game-like digital treatment for ADHD: 348 children aged 8 to 12, 25 minutes a day, 5 days a week, for 4 weeks, against a digital control. Attention performance improved more in the treatment arm (median change 0.88 on the primary index). The sponsor was the developer, and the authors say further research is needed.',
      ],
      pattern: 'In every case performance changed without the person being able to say why, and the proof was found in the cost of changing the structure or the presence of a control, never in self-report.',
    },
    restructure: {
      frame: 'Teach the lesson, then check by asking what was learned.',
      breaks: 'If learning is implicit, asking misleads. Players who learned a great deal can report almost nothing, and players who report a lot may have learned little.',
      reframe: [
        'Dose, then probe by swapping. Build a probe level that changes the hidden structure and measure the cost, then check transfer to a task outside the game.',
        'Because the player cannot always report what is being shaped, the aim of the programme has to be stated at the start, in plain words, and nothing may be shaped covertly.',
      ],
      limits: 'Early, mostly one-week results. Two of the three trials cited here were sponsored or proof-of-concept only.',
    },
    wrong:
      'The swap cost appears in the game but does not transfer to an untrained real-world task, against an active control. Then the game taught the game.',
    refs: [
      'Reber, A. S. (1967). Implicit learning of artificial grammars. Journal of Verbal Learning and Verbal Behavior 6(6), 855–863.',
      'Nissen, M. J. and Bullemer, P. (1987). Attentional requirements of learning: evidence from performance measures. Cognitive Psychology 19(1), 1–32.',
      'Schultz, W., Dayan, P. and Montague, P. R. (1997). A neural substrate of prediction and reward. Science 275(5306), 1593–1599.',
      'Holmes, E. A., James, E. L., Coode-Bate, T. and Deeprose, C. (2009). Can playing the computer game Tetris reduce the build-up of flashbacks for trauma? PLoS ONE 4(1), e4153. doi:10.1371/journal.pone.0004153',
      'Iyadurai, L. et al. (2018). Preventing intrusive memories after trauma via a brief intervention involving Tetris computer game play in the emergency department: a proof-of-concept randomized controlled trial. Molecular Psychiatry 23(3), 674–682. doi:10.1038/mp.2017.23',
      'Kollins, S. H. et al. (2020). A novel digital intervention for actively reducing severity of paediatric ADHD (STARS-ADHD): a randomised controlled trial. The Lancet Digital Health 2(4), e168–e178. doi:10.1016/S2589-7500(20)30017-0',
    ],
  },
  /* ---------------------------------------------------------------- 3 */
  {
    n: 3,
    title: 'Epiphany design: building the impasse',
    tags: ['Epiphany design', 'Mental health'],
    read: 7,
    problem: {
      line: 'Beliefs outlive their evidence, and the moment of dropping one is left to chance.',
      stakes:
        'Cognitive restructuring is a clinical staple, yet the instant a person abandons a frame is rarely engineered. This is a design observation, offered as one, and the research below says what such an engineered moment would need.',
    },
    abstract:
      'A solution that arrives whole feels different, is remembered differently, and is wrong more often than its owner believes. Designing for insight means designing the impasse, the release and the verification, in that order.',
    claim: 'The Aha is a flag for attention. It is never evidence that the answer is right.',
    notice: {
      text: [
        'Two kinds of solving look identical from outside and feel different from within. One advances in small steps. The other stalls, then reorganises. Only the second involves dropping a frame, and the second is the one worth designing.',
        'Köhler (1925) watched apes stack boxes to reach fruit after a pause, and the idea of sudden reorganisation has been argued over since.',
      ],
      signal: ['The stall before the jump', 'What the player did after the reframe', 'Whether the new frame survived a test'],
      noise: ['The feeling of certainty', 'Speed of solution', 'How impressive the puzzle looked'],
    },
    absorb: {
      lead: 'Three findings about the same event. Look at the shape of the figure, then at what the brain and memory do.',
      cases: [
        { k: 'Warmth', t: 'On insight problems, felt closeness to the answer stays low and then jumps. On routine problems it climbs steadily (Metcalfe and Wiebe, 1987).' },
        { k: 'Brain', t: 'A burst of high-frequency EEG activity over the right anterior temporal region comes about a third of a second before insight solutions (Jung-Beeman et al., 2004).' },
        { k: 'Memory', t: 'Insight solutions are recalled better than step-by-step ones (Danek et al., 2013), yet Aha feelings also accompany wrong answers (Danek and Wiley, 2017).' },
      ],
      figure: 'warmth',
      text: [
        'Kounios and Beeman (2014) review the sequence: a preparatory state, an impasse, a restructuring, and then the answer. The practical reading is that impasse is not a fault in the design. It is a stage in it.',
        'Kapur (2008) found that students who struggled with a problem before being taught the concept later showed better conceptual understanding and transfer than students taught first. The struggle was the lesson.',
      ],
      pattern: 'Stall, jump, remember, and sometimes be wrong. The jump is real and memorable, and the feeling that comes with it cannot be trusted as proof.',
    },
    restructure: {
      frame: 'Insight cannot be designed. It happens, or it does not.',
      breaks: 'The research shows structure around it: a hint that arrives too early removes the impasse, and one that arrives too late is only fatigue. The feeling of rightness also shows up for wrong answers.',
      reframe: [
        'Four beats. Impasse: enough exposure to build a wrong frame. Release: a prompt, an incidental cue, or rest. Restructure: the old frame is dropped. Verify: the new frame is tested against the world.',
        'In mental health, a designed impasse can stage the experience of dropping a frame, followed by a reflection tying it to a belief the player chose. The game makes the first drop safe and memorable, and the programme around it carries the testing.',
      ],
      limits: 'A puzzle is a rehearsal, not therapy. Durable change comes from testing a new belief against experience, repeatedly.',
    },
    wrong:
      'The insight puzzle produces a memorable Aha but no belief change on a validated measure, against an equally engaging non-insight puzzle. Then the experience is a pleasure and not a mechanism.',
    refs: [
      'Köhler, W. (1925). The Mentality of Apes. Harcourt, Brace.',
      'Metcalfe, J. and Wiebe, D. (1987). Intuition in insight and noninsight problem solving. Memory and Cognition 15(3), 238–246.',
      'Jung-Beeman, M. et al. (2004). Neural activity when people solve verbal problems with insight. PLoS Biology 2(4), e97. doi:10.1371/journal.pbio.0020097',
      'Kounios, J. and Beeman, M. (2014). The cognitive neuroscience of insight. Annual Review of Psychology 65, 71–93. doi:10.1146/annurev-psych-010213-115154',
      'Danek, A. H., Fraps, T., von Müller, A., Grothe, B. and Öllinger, M. (2013). Aha! experiences leave a mark: facilitated recall of insight solutions. Psychological Research 77(5), 659–669.',
      'Danek, A. H. and Wiley, J. (2017). What about false insights? Deconstructing the Aha! experience along its multiple dimensions for correct and incorrect solutions separately. Frontiers in Psychology 7, 2077.',
      'Kapur, M. (2008). Productive failure. Cognition and Instruction 26(3), 379–424.',
    ],
  },
  /* ---------------------------------------------------------------- 4 */
  {
    n: 4,
    title: 'Forensic psychology: where games and AI belong, and where they do not',
    tags: ['All three channels', 'Forensic psychology'],
    read: 10,
    problem: {
      line: 'Evidence is contaminated before it reaches a court, and scores decide lives with no better accuracy than lay guesses.',
      stakes:
        'A commercial recidivism tool built on 137 features was no more accurate than untrained online participants, and a two-feature model did nearly as well (Dressel and Farid, 2018). Interviews with children can contaminate the account before any court sees it.',
    },
    abstract:
      'The justice system rewards confidence and punishes doubt, which is the wrong way round for decision quality. Games and AI have a real job here, training the people who decide and structuring what they see. They also have a bad job: scoring the people who are judged.',
    claim: 'Use the machine to improve the decider. Do not use it to replace the decision about a person.',
    notice: {
      text: [
        'Accounts are constructed, including by the interviewer. Loftus and Palmer (1974) asked people to estimate the speed of cars in a film. Changing one verb in the question, from hit to smashed, changed the estimates and changed later reports of seeing broken glass that was never there. An interviewer is part of the instrument.',
        'The question for design is where a human is the weak link and where a machine would make things worse.',
      ],
      signal: ['The quality of the interviewer’s questions', 'The order in which information is revealed', 'Whom a score is wrong about'],
      noise: ['Confidence', 'A single accuracy figure', 'A score’s authority'],
    },
    absorb: {
      lead: 'Three results about how judgement fails or improves. Then use the calculator to see what a score must do.',
      cases: [
        { k: 'Interviewing', t: 'With avatar interviews and feedback, students asked more open and fewer closed questions and reached more correct conclusions in about an hour (Pompedda, Zappalà and Santtila, 2015).' },
        { k: 'Context', t: 'Fingerprint examiners re-judging prints changed some earlier judgements when misleading context was supplied (Dror, Charlton and Péron, 2006).' },
        { k: 'Scoring', t: 'People tell lies from truths at about 54 per cent where chance is 50 (Bond and DePaulo, 2006), and risk scores trade fairness measures against each other.' },
      ],
      figure: 'fairness',
      text: [
        'A pooled analysis of nine avatar studies, with 2,208 interviews and 394 participants who included students, psychologists and police officers, found robust effects of feedback on several measures (Pompedda et al., 2022). The structure fits the medium: practice with the ground truth known to the simulator, which real cases almost never provide. Transfer to field interviews is the question that matters most, and at least one study has tested it with police investigators (Kask et al., 2022).',
        'Bias is structural, so procedure beats warning. Linear sequential unmasking reveals information in a fixed order and has the examiner commit to a conclusion before the next piece is shown (Dror et al., 2015). A game is a cheap place to rehearse that order until it is habit.',
        'Fairness cannot be had all at once. When two groups have different base rates, a score cannot have equal predictive value and equal error rates for both (Kleinberg, Mullainathan and Raghavan, 2016; Chouldechova, 2017). Whichever way the numbers are set, a score has to choose whom it will be wrong about.',
      ],
      pattern: 'The weak point is the human instrument, and the strong fix is procedure and practice. Scoring people hides a political choice inside arithmetic.',
    },
    restructure: {
      frame: 'Use AI to predict who will offend, or who is lying.',
      breaks: 'Lie detection sits at the human ceiling, risk scores match lay accuracy, and no score can be fair on every measure at once.',
      reframe: [
        'Use AI to improve those who decide. An order of use: first, train practitioners on simulated cases where the truth is known. Second, structure case files for sequential unmasking and a required alternative-hypothesis round. Third, audit past decisions for drift and disparity between groups.',
        'Never, as a sole basis: automated verdicts on individuals, deception scores, or risk scores that cannot be contested and explained.',
      ],
      limits: 'Simulator gains must transfer to field practice. The choice of whom a score is wrong about needs a human owner who can be questioned.',
    },
    wrong:
      'Interviewers trained on the simulator show no better questioning with real children than untrained controls. Then the simulator trains the simulator.',
    refs: [
      'Loftus, E. F. and Palmer, J. C. (1974). Reconstruction of automobile destruction. Journal of Verbal Learning and Verbal Behavior 13(5), 585–589.',
      'Pompedda, F., Zappalà, A. and Santtila, P. (2015). Simulations of child sexual abuse interviews using avatars paired with feedback improves interview quality. Psychology, Crime and Law 21(1), 28–52. doi:10.1080/1068316X.2014.915323',
      'Pompedda, F., Zhang, Y., Haginoya, S. and Santtila, P. (2022). A mega-analysis of the effects of feedback on the quality of simulated child sexual abuse interviews with avatars. Journal of Police and Criminal Psychology 37(3), 485–498. doi:10.1007/s11896-022-09509-7',
      'Kask, K. et al. (2022). Transfer of avatar training effects to investigative field interviews of children conducted by police officers. Frontiers in Psychology 13.',
      'Dror, I. E., Charlton, D. and Péron, A. E. (2006). Contextual information renders experts vulnerable to making erroneous identifications. Forensic Science International 156(1), 74–78.',
      'Dror, I. E. et al. (2015). Context management toolbox: a linear sequential unmasking (LSU) approach for minimizing cognitive bias in forensic decision making. Journal of Forensic Sciences 60(4).',
      'Bond, C. F. and DePaulo, B. M. (2006). Accuracy of deception judgments. Personality and Social Psychology Review 10(3), 214–234.',
      'Dressel, J. and Farid, H. (2018). The accuracy, fairness, and limits of predicting recidivism. Science Advances 4(1), eaao5580.',
      'Kleinberg, J., Mullainathan, S. and Raghavan, M. (2016). Inherent trade-offs in the fair determination of risk scores. arXiv:1609.05807.',
      'Chouldechova, A. (2017). Fair prediction with disparate impact. Big Data 5(2), 153–163.',
    ],
  },
  /* ---------------------------------------------------------------- 5 */
  {
    n: 5,
    title: 'Biotech: the interface is the instrument',
    tags: ['All three channels', 'Biotech'],
    read: 8,
    problem: {
      line: 'Disease research stalls on problems where algorithms fail and experts are too few.',
      stakes:
        'An unsolved crystal structure can hold up drug design for years. The retroviral protease in the Foldit study had resisted a wide range of attempts before players produced usable models.',
    },
    abstract:
      'Citizen-science games produced real results because they solved an interface problem: they made a molecule or a neuron legible to human perception. Machine learning then absorbed much of what players found. The lesson is about the division of labour, and about where humans are still the scarce part.',
    claim: 'Build games where the objective is still unknown to the machine.',
    notice: {
      text: [
        'The scarce resource in several corners of biology is not computing. It is the right view of the problem: a way to see which feature of a structure matters.',
        'Cooper and colleagues (2010) described Foldit, a multiplayer game in which players fold proteins by hand against a scoring function. The score is a claim about physics wrapped in a point system, which is what makes the game an instrument.',
      ],
      signal: ['A score that encodes a physical claim', 'Strategies players converge on', 'Bench verification of what players find'],
      noise: ['Player counts as a goal', 'Leaderboards', 'Solutions without the strategy behind them'],
    },
    absorb: {
      lead: 'Three cases where players contributed. Then the loop shows how the pieces fit.',
      cases: [
        { k: 'A protein', t: 'After conventional attempts failed, Foldit players produced models good enough to determine the structure of a retroviral protease (Khatib et al., 2011).' },
        { k: 'A neuron', t: 'EyeWire citizen neuroscientists helped reconstruct retinal cells, and the data bore on how the retina detects motion (Kim et al., 2014).' },
        { k: 'An RNA', t: 'About 37,000 EteRNA participants learned design rules from repeated lab feedback, and their strategies were distilled into an algorithm (Lee et al., 2014).' },
      ],
      figure: 'loop',
      text: [
        'In EteRNA the community controlled a remote experimental pipeline for RNA synthesis and structure mapping. It learned strategies, including several previously unrecognised negative design rules, which were distilled by machine learning into EteRNABot. Over a year of testing, both the community and the algorithm beat earlier methods (Lee et al., 2014).',
        'The three channels all operate. Relevance realization: the interface fixes what is salient, such as clashes and voids. Implicit learning: players develop a pattern sense they often cannot fully state. Epiphany: moves a scoring algorithm would not try, kept because they were cheap to attempt.',
      ],
      pattern: 'Human perception, a hard score and bench verification. The crowd is not free labour. It is a way to explore a space that a machine has no good objective for yet.',
    },
    restructure: {
      frame: 'Games are a cheap way to get unpaid labour for science.',
      breaks: 'AlphaFold predicted protein structures at near-experimental accuracy for many targets (Jumper et al., 2021), and the 2024 Nobel Prize in Chemistry recognised that work and computational protein design. Where the scoring function is known and learnable, the machine overtakes the crowd.',
      reframe: [
        'The interface is the instrument. Human play is most valuable where the objective is still ambiguous, such as labelling a new kind of microscopy image, ranking hypotheses, or judging the plausibility of a design in a context a model has not seen.',
        'Five rules. Write down which physical claim the score encodes. Capture strategies as well as solutions. Build bench verification into the loop. Credit contributors as contributors. Watch for players optimising the score away from the physics.',
      ],
      limits: 'A game built where a model already wins is a temporary scaffold, not a product.',
    },
    wrong:
      'The best human strategies in a chosen task are reproduced by a model within a release cycle. Then the human layer was scaffolding, and the product should be built on the next unknown.',
    refs: [
      'Cooper, S. et al. (2010). Predicting protein structures with a multiplayer online game. Nature 466, 756–760. doi:10.1038/nature09304',
      'Khatib, F. et al. (2011). Crystal structure of a monomeric retroviral protease solved by protein folding game players. Nature Structural and Molecular Biology 18, 1175–1177. doi:10.1038/nsmb.2119',
      'Kim, J. S. et al. (2014). Space-time wiring specificity supports direction selectivity in the retina. Nature 509, 331–336. doi:10.1038/nature13240',
      'Lee, J. et al. (2014). RNA design rules from a massive open laboratory. Proceedings of the National Academy of Sciences 111(6), 2122–2127. doi:10.1073/pnas.1313039111',
      'Jumper, J. et al. (2021). Highly accurate protein structure prediction with AlphaFold. Nature 596, 583–589. doi:10.1038/s41586-021-03819-2',
      'The Nobel Prize in Chemistry 2024. NobelPrize.org.',
    ],
  },
  /* ---------------------------------------------------------------- 6 */
  {
    n: 6,
    title: 'Dose, not engagement: a bar for therapeutic play',
    tags: ['All three channels', 'Mental health'],
    read: 8,
    problem: {
      line: 'The metric that funds a mental-health product is not the metric that helps the patient.',
      stakes:
        'Commercial design rewards return visits. A therapeutic programme succeeds when the person needs it less. Spending in the first model can be linked to harm: loot-box spending tracked problem-gambling severity in a survey of 7,422 gamers (Zendle and Cairns, 2018).',
    },
    abstract:
      'A commercial game succeeds when people return. A therapeutic game succeeds when people need it less. Nearly every decision that makes the first kind work is a liability in the second, and the evidence ladder shows how few products have climbed it.',
    claim: 'Success is a smaller need, measured against an active control, and kept at follow-up.',
    notice: {
      text: [
        'A commercial game reads day-1, day-7 and day-30 retention, session length and revenue per user. A therapeutic programme reads symptom change at the end of a dose, durability at follow-up, and harm. The first scoreboard rewards a user who stays. The second rewards one who leaves better.',
        'A team using the wrong scoreboard will optimise toward the wrong user, whatever the interface looks like.',
      ],
      signal: ['Symptom change against an active control', 'Durability at follow-up', 'Harm and dropout reasons'],
      noise: ['Retention and streaks', 'Session length', 'Satisfaction scores on their own'],
    },
    absorb: {
      lead: 'Three studies. The ladder shows how high each one honestly reaches.',
      cases: [
        { k: 'SPARX', t: 'A game-like computerised CBT programme was not inferior to treatment as usual in 187 help-seeking adolescents, with higher remission in the SPARX arm (Merry et al., 2012).' },
        { k: 'Woebot', t: 'A conversational agent reduced depressive symptoms over two weeks in a 70-person unblinded trial against an information-only ebook (Fitzpatrick et al., 2017).' },
        { k: 'AKL-T01', t: 'A video-game-like treatment beat a digital control on an objective attention measure in 348 children (Kollins et al., 2020).' },
      ],
      figure: 'ladder',
      text: [
        'SPARX was tested against treatment as usual, not against a placebo, and that design is stated as such. Woebot is a feasibility result more than a verdict. The ladder places each study at the highest rung its design honestly reaches.',
        'Gaming disorder is a recognised condition in the WHO’s ICD-11. The loot-box link is correlational and its direction is not settled, which is itself a reason for caution. Streak mechanics deserve a design judgement of their own: they turn a missed day into a failure, the wrong message for a person already prone to self-criticism. That last point is a judgement, offered as one, with no study behind it here.',
      ],
      pattern: 'Every credible result had a defined dose, a control and an outcome measure. None of them had a retention dashboard as the reason it counted.',
    },
    restructure: {
      frame: 'A good mental-health game is an engaging game with therapeutic content.',
      breaks: 'Engagement design carries harm in its mechanics, and engagement alone does not climb past the lowest rungs of the ladder.',
      reframe: [
        'Build to the bar. An end in sight: a defined dose and a way to finish. No variable-ratio rewards. No streak shame. A route to a human when risk appears. Data kept to the minimum that the outcome requires. A pre-registered endpoint, and a plan to publish a null result.',
        'AI has two honest jobs. It can hold difficulty inside the useful band, which is relevance realization put to work, and it can adapt pacing to what a person does. It must not be left unsupervised in a crisis: scope, crisis routing and human oversight are requirements before they are features.',
      ],
      limits: 'The evidence for open-ended conversational support is still early.',
    },
    wrong:
      'Any programme where the retention dashboard is the success metric. In that case the build is optimising for the wrong user.',
    refs: [
      'Merry, S. N. et al. (2012). The effectiveness of SPARX, a computerised self help intervention for adolescents seeking help for depression: randomised controlled non-inferiority trial. BMJ 344, e2598. doi:10.1136/bmj.e2598',
      'Fitzpatrick, K. K., Darcy, A. and Vierhile, M. (2017). Delivering cognitive behavior therapy to young adults with symptoms of depression and anxiety using a fully automated conversational agent (Woebot): a randomized controlled trial. JMIR Mental Health 4(2), e19. doi:10.2196/mental.7785',
      'Zendle, D. and Cairns, P. (2018). Video game loot boxes are linked to problem gambling: results of a large-scale survey. PLoS ONE 13(11), e0206767. doi:10.1371/journal.pone.0206767',
      'World Health Organization. International Classification of Diseases, 11th revision: gaming disorder (6C51).',
      'Kollins, S. H. et al. (2020) and Iyadurai, L. et al. (2018): see the second paper in this series.',
    ],
  },
  /* ---------------------------------------------------------------- 7 */
  {
    n: 7,
    title: 'Defense I: strategic warning, and the judgement behind it',
    tags: ['All three channels', 'Defense'],
    read: 10,
    problem: {
      line: 'Strategic surprise keeps recurring, and more sensors have not ended it.',
      stakes:
        'Warning failures such as Pearl Harbor and 9/11 are among the costliest failures any state has suffered. The recurring finding is that information existed and was not recognised as relevant or imagined as a threat. Alert volume from sensors and AI keeps rising.',
    },
    abstract:
      'Governments buy collection, and the failure keeps arriving in judgement: deciding which of the data matters, and imagining what it could mean. Judgement is a trainable system with measurable output, and it can be rehearsed, scored and audited like any other critical system.',
    claim: 'Treat judgement as the system under test, and score it against outcomes.',
    notice: {
      text: [
        'Wohlstetter (1962) studied Pearl Harbor and found that the signals of the coming attack were present, and sat among a great deal of noise and under strong expectations about where danger would come from. The sorting of signal from noise was the problem, not the absence of information.',
        'The 9/11 Commission (2004) named a failure of imagination as the central failure. Heuer (1999) had argued years before that the mental models analysts bring shape what they see.',
      ],
      signal: ['The few indicators that break the pattern', 'The assumption a plan depends on', 'Forecasts scored against what happened'],
      noise: ['Raw alert volume', 'Consensus and confidence', 'Familiar dangers that crowd out unfamiliar ones'],
    },
    absorb: {
      lead: 'Three cases of the same failure, then a calculator for what a flood does to attention.',
      cases: [
        { k: 'Pearl Harbor', t: 'Warning signals existed in quantity and were not recognised as relevant, amid noise and expectation (Wohlstetter, 1962).' },
        { k: 'September 11', t: 'An official inquiry placed the central failure in imagination: threats that analysts had not pictured (9/11 Commission, 2004).' },
        { k: 'Forecast tournaments', t: 'In an IARPA-sponsored tournament of 199 geopolitical questions, training, teaming and tracking were reported to improve forecast accuracy (Mellers et al., 2014).' },
      ],
      figure: 'flood',
      text: [
        'The forecasting result carries a caveat. A reanalysis published in Psychological Science argues that the effects of teaming and training were reduced or eliminated once extraneous variables were modelled, and the original researchers dispute it. The honest reading is that scoring forecasts against outcomes is the robust idea, and that which training works is still contested.',
        'On training for bias in particular, Morewedge and colleagues (2015) tested a single-session game and an instructional video built for intelligence-analysis biases. Both reduced bias, the game by more, with medium-to-large reductions lasting at least two months and carrying across problem formats not taught. This is a lab result, and the field is the real test.',
      ],
      pattern: 'In each case the information existed. What failed was deciding which of it mattered and imagining what it could mean, and the one thing that improved was practising and scoring judgement.',
    },
    restructure: {
      frame: 'Buy more collection and more AI alerting.',
      breaks: 'More alerts lower the odds that any one item is reviewed. The documented failures were not shortages of data.',
      reframe: [
        'Instrument the judgement. Four parts. Salience triage drills with real signals hidden in realistic noise, scored on what was let go as well as what was found. Short debiasing games with personalised feedback. A mandatory red-team round that must invent how the plan fails. Forecast scoring against outcomes, so accuracy is visible and audited.',
        'What a government can measure: time to recognise injected signals, bias scores, and forecast accuracy against a matched control team using the same data. AI plays two roles, ranking what an analyst sees and generating adversarial scenarios, and a named human owns every judgement.',
      ],
      limits:
        'Scope: warning, decision quality, training and resilience. Not targeting, not autonomous use of force, not surveillance of citizens. Every model suggestion is logged and contestable. Lab bias tasks are not the job, so field testing decides.',
    },
    wrong:
      'Trained analysts do not recognise injected, realistic signals faster, or forecast more accurately on scored out-of-sample questions, than a matched control group using the same data. Then the programme trains the exercise.',
    refs: [
      'Wohlstetter, R. (1962). Pearl Harbor: Warning and Decision. Stanford University Press.',
      'National Commission on Terrorist Attacks Upon the United States (2004). The 9/11 Commission Report. W. W. Norton.',
      'Heuer, R. J., Jr. (1999). Psychology of Intelligence Analysis. Center for the Study of Intelligence, Central Intelligence Agency.',
      'Mellers, B. et al. (2014). Psychological strategies for winning a geopolitical forecasting tournament. Psychological Science 25(5), 1106–1115. doi:10.1177/0956797614524255',
      'Rethinking the role of teams and training in geopolitical forecasting. Psychological Science (2024). A reanalysis of Mellers et al. (2014), disputed by the original authors.',
      'Morewedge, C. K., Yoon, H., Scopelliti, I., Symborski, C. W., Korris, J. H. and Kassam, K. S. (2015). Debiasing decisions: improved decision making with a single training intervention. Policy Insights from the Behavioral and Brain Sciences 2(1), 129–140. doi:10.1177/2372732215600886',
    ],
  },
  /* ---------------------------------------------------------------- 8 */
  {
    n: 8,
    title: 'Defense II: cognitive security, immunity as a skill',
    tags: ['All three channels', 'Defense'],
    read: 9,
    problem: {
      line: 'Hostile influence now outruns fact-checking, and AI makes the content cheap.',
      stakes:
        'Debunking handles one falsehood at a time, after the fact. When content is cheap to produce in volume, a defence that answers claims individually cannot keep pace, and public trust in institutions is the asset at risk.',
    },
    abstract:
      'The number of false claims is unbounded. The number of manipulation techniques is small and reusable. Practising the techniques from the manipulator’s seat is a form of implicit learning with a decades-old theory behind it, and the early evidence is promising and contested in exactly the way it should be.',
    claim: 'Train recognition of technique, and measure discernment, never just scepticism.',
    notice: {
      text: [
        'Relevance realization applies directly. The feature that matters in a piece of manipulation is rarely its topic. It is the technique: emotional language, a false dichotomy, scapegoating, impersonation, an ad hominem attack.',
        'McGuire (1964) proposed inoculation theory in persuasion research: expose people to a weakened form of an attack and its technique, and resistance to the stronger form follows.',
      ],
      signal: ['The technique in the message', 'Discernment between true and false', 'Whether the effect lasts and generalises'],
      noise: ['The individual claim', 'Shifts in general distrust', 'Short-term belief change on test headlines'],
    },
    absorb: {
      lead: 'Three studies in the same line. Use the figure to see what a measure can hide.',
      cases: [
        { k: 'Bad News game', t: 'Players take the role of a fake-news producer. In about 15,000 participants, perceived reliability of manipulative headlines fell after play (Roozenbeek and van der Linden, 2019).' },
        { k: 'YouTube field study', t: 'Short videos about manipulation techniques improved recognition and discernment in randomised studies and a field study of 22,632 people (Roozenbeek et al., 2022).' },
        { k: 'The reanalysis', t: 'Reanalysing earlier game studies, Modirrousta-Galian and Higham (2023) found that gains were mainly a shift toward calling items false, with no improvement in telling true from fake.' },
      ],
      figure: 'discern',
      text: [
        'The Bad News game teaches six techniques: polarisation, invoking emotions, spreading conspiracy theories, trolling, deflecting blame and impersonating fake accounts. The authors also report that the effect carried across to new content and reported that those most susceptible to begin with gained most.',
        'The reanalysis is the sort of challenge a field needs. It uses signal-detection analysis to separate discernment from a general lean toward distrust, which the figure shows can look like success on fake items while damaging trust in real ones.',
      ],
      pattern: 'Play or watch from the manipulator’s side, and recognition of the technique transfers. The measure then decides whether the result is skill or merely suspicion.',
    },
    restructure: {
      frame: 'Debunk each falsehood, and make people sceptical.',
      breaks: 'Debunking is one claim at a time, and generalised scepticism lowers trust in true information too.',
      reframe: [
        'Inoculate against technique, measure discernment, and deliver through institutions people already trust. Platforms, schools and civil society reach the public more credibly than a state broadcaster. The results above were measured shortly after exposure in much of the early work, so follow-up and boosters are open questions to test, not assume.',
        'For a government the value is a measured, scalable and non-coercive resilience: recognition rates and discernment (not just rating shifts) among a population, tracked against a control.',
      ],
      limits:
        'Defensive only. Build no persuasion engines and no profiling of citizens. Publish what is taught. Keep the programme independent of state messaging, because credibility is the asset.',
    },
    wrong:
      'Discernment, not scepticism, does not improve against an active control when measured weeks later on realistic content. Then the programme teaches distrust.',
    refs: [
      'McGuire, W. J. (1964). Inoculation against persuasion: some preliminary theory and research. In L. Berkowitz (ed.), Advances in Experimental Social Psychology, vol. 1, 191–229. Academic Press.',
      'Roozenbeek, J. and van der Linden, S. (2019). Fake news game confers psychological resistance against online misinformation. Palgrave Communications 5, 65.',
      'Roozenbeek, J., van der Linden, S., Goldberg, B., Rathje, S. and Lewandowsky, S. (2022). Psychological inoculation improves resilience against misinformation on social media. Science Advances 8(34), eabo6254. doi:10.1126/sciadv.abo6254',
      'Modirrousta-Galian, A. and Higham, P. A. (2023). Gamified inoculation interventions do not improve discrimination between true and fake news: reanalyzing existing research with receiver operating characteristic analysis. Journal of Experimental Psychology: General 152(9), 2411–2437.',
    ],
  },
];

export const rungs = [
  { n: 1, t: 'People play it', note: 'Engagement' },
  { n: 2, t: 'People say it helps', note: 'Acceptability' },
  { n: 3, t: 'A measured process changes', note: 'Mechanism' },
  { n: 4, t: 'Symptoms improve more than with an equally engaging control', note: 'Outcome' },
  { n: 5, t: 'The gain lasts and transfers to life', note: 'Durability' },
];

// Studies placed on the ladder: the highest rung each one honestly reaches.
export const placed = [
  { rung: 5, s: 'Not yet shown for any study cited in this series.', cls: 'none' },
  { rung: 4, s: 'SPARX against treatment as usual (n = 187) · AKL-T01 against a digital control (n = 348) · Tetris in the emergency department, one week (proof of concept)', cls: 'ok' },
  { rung: 3, s: 'Tetris after a trauma film (volunteers) · Woebot against an information-only ebook (n = 70, unblinded, two weeks) · attention-bias training moves the bias, not reliably the symptoms', cls: 'mid' },
  { rung: 2, s: 'Most commercial wellbeing apps, where the evidence is what users say', cls: 'low' },
  { rung: 1, s: 'Most games sold as good for you, where the evidence is that people play', cls: 'low' },
];

// The three stages every paper follows.
export const stages = [
  { id: 'rr', n: 1, name: 'Notice', method: 'Relevance realization', ask: 'Find what matters, and what to let go.' },
  { id: 'impl', n: 2, name: 'Absorb', method: 'Implicit learning', ask: 'Take in the cases and the figure. The pattern comes after.' },
  { id: 'insight', n: 3, name: 'Restructure', method: 'Epiphany design', ask: 'Hold the usual frame, see it break, then reframe and test.' },
];
