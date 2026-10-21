// Research programme: how game design and AI can support mental health, forensic psychology and biotech.
// Position papers that synthesise published work. Every cited study is real and checked against its record.
// Design proposals inside them are hypotheses with a stated way to be proved wrong, not results.

export const channels = [
  { id: 'rr', name: 'Relevance realization', ask: 'What gets noticed', line: 'The mind decides what matters among endless candidates. A game can shape that decision.' },
  { id: 'impl', name: 'Implicit learning', ask: 'What is learned unspoken', line: 'Structure is absorbed through repetition and feedback, without being explained.' },
  { id: 'insight', name: 'Insight', ask: 'What restructures at once', line: 'A stuck frame is dropped and the problem reorganises. It can be staged, then checked.' },
];

export const domains = [
  { id: 'mh', name: 'Mental health' },
  { id: 'fo', name: 'Forensic psychology' },
  { id: 'bt', name: 'Biotech' },
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
  },
  impl: {
    mh: {
      move: 'Dosed, timed play that practises a changed response until it runs without deliberation, with a probe level that tests whether the structure was learned.',
      evidence: 'A short Tetris session after a reminder cue, within 6 hours of a road accident, cut intrusive memories the following week in a proof-of-concept trial.',
      guard: 'One-week result. The one-month result was not shown.',
      paper: 2,
    },
    fo: {
      move: 'Repetitions that rehearse procedure: record the judgement first, reveal the context second, until sequence is habit.',
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
  },
};

export const papers = [
  {
    n: 1,
    title: 'Relevance realization: what a game actually teaches',
    tags: ['Relevance realization', 'Mental health'],
    read: 7,
    abstract:
      'Every game trains what a player notices before it trains what the player does. Relevance realization, the process by which a mind finds the few things that matter among endless candidates, gives game design a target that outlasts any genre and gives mental-health design a mechanism to aim at.',
    claim: 'Aim the design at the flexibility of attention, then measure the symptoms.',
    figure: 'dials',
    body: [
      {
        h: 'The problem a mind solves every second',
        p: [
          'A mind cannot examine everything. Artificial intelligence met the same wall as the frame problem: no list of rules can say in advance which of a situation’s countless facts are relevant to the task in hand (McCarthy and Hayes, 1969). Living minds get past it constantly and cheaply.',
          'Vervaeke, Lillicrap and Richards (2012) argue that this solving is the core of cognition, and that it works by balancing opposed pressures instead of following a rule. The position is a framework in cognitive science, not a settled mechanism, and it is used here as a design lens.',
        ],
      },
      {
        h: 'Three dials',
        p: [
          'In later formulations the opposed pressures include exploring against exploiting, focusing against diversifying attention, and compressing what is known against particularising it. Each fails in a recognisable way at either end: stuck in a habit, or scattered across everything.',
          'Move the dials in the figure. The useful band is the middle, and what matters is that the dials keep moving, not that they sit at one setting.',
        ],
      },
      {
        h: 'What a game does to the dials',
        p: [
          'A level that rewards a memorised route trains exploitation. A level that hides its goal trains exploration. Flow (Csikszentmihalyi, 1990), the narrow band where challenge matches skill, reads here as the band in which the dials keep moving rather than locking. Pacing is the alternation of tightening and loosening.',
          'Seen this way, the standard tools of a designer are dial controls. Fog of war widens the search. Scarcity narrows it. A red herring tests whether focus can be released. A new verb arriving late in a level forces a fresh compression of what the player thought they knew.',
        ],
      },
      {
        h: 'Where this meets mental health',
        p: [
          'Rumination, threat-biased attention and compulsive checking share a shape: salience that stays stuck. Attentional bias towards threat in anxious people was documented in the 1980s (MacLeod, Mathews and Tata, 1986), and training that shifts the bias has since been tried at scale.',
          'The record is sobering. A meta-analysis of 49 randomised trials of cognitive bias modification found small effects, mostly non-significant in patient samples, and non-significant once outliers were excluded and publication bias was adjusted for (Cristea, Kok and Cuijpers, 2015). Shifting a bias score is not the same as unsticking a life.',
          'The lesson for design is specific. The target should be whether a player can leave a pattern when the situation changes, and the outcome should be a validated symptom measure against an active control.',
        ],
      },
    ],
    wrong:
      'In-game flexibility (the cost of switching between a focus task and a scan task) improves, but PHQ-9 or GAD-7 scores do not move against an equally engaging control game. Then the dial idea trains the game and nothing else.',
    refs: [
      'McCarthy, J. and Hayes, P. J. (1969). Some philosophical problems from the standpoint of artificial intelligence. Machine Intelligence 4, 463–502.',
      'Vervaeke, J., Lillicrap, T. P. and Richards, B. A. (2012). Relevance realization and the emerging framework in cognitive science. Journal of Logic and Computation 22(1), 79–99.',
      'Csikszentmihalyi, M. (1990). Flow: The Psychology of Optimal Experience. Harper and Row.',
      'MacLeod, C., Mathews, A. and Tata, P. (1986). Attentional bias in emotional disorders. Journal of Abnormal Psychology 95(1), 15–20.',
      'Cristea, I. A., Kok, R. N. and Cuijpers, P. (2015). Efficacy of cognitive bias modification interventions in anxiety and depression: meta-analysis. British Journal of Psychiatry 206(1), 7–16. doi:10.1192/bjp.bp.114.146761',
    ],
  },
  {
    n: 2,
    title: 'Implicit learning: teaching what cannot be said',
    tags: ['Implicit learning', 'Mental health'],
    read: 7,
    abstract:
      'People pick up structure they cannot describe. Games deliver structure this way unusually well, which is why they can reach habits that explanations do not, and why the evidence has to be read with care.',
    claim: 'Test learning by what it costs to change the structure, not by asking the player.',
    figure: 'srt',
    body: [
      {
        h: 'Learning without being told',
        p: [
          'Reber (1967) had participants memorise letter strings generated by an artificial grammar. Afterwards they sorted new strings into grammatical and not, above chance, without being able to state the rules.',
          'Nissen and Bullemer (1987) showed the same with movement. In a serial reaction time task, responses speed up as a sequence repeats. When the sequence is swapped for random, responses slow again, and that slowing is the evidence that something had been learned. The figure shows the pattern as a schematic, not as data.',
        ],
      },
      {
        h: 'Why games suit it',
        p: [
          'The ingredients are immediate consequence, dense repetition, and input that varies inside a hidden structure. Dopamine neurons signal prediction errors, outcomes better or worse than expected (Schultz, Dayan and Montague, 1997). A game’s feedback is a continuous stream of such errors, so a well-built game teaches a model of its world through hundreds of small surprises.',
        ],
      },
      {
        h: 'Two clinical examples, read honestly',
        p: [
          'Holmes and colleagues (2009) found that playing Tetris soon after a traumatic film reduced flashbacks over the next week in healthy volunteers. Iyadurai and colleagues (2018) then ran a randomised proof-of-concept trial in an emergency department: a reminder cue plus about 20 minutes of Tetris within 6 hours of a motor vehicle accident, against an attention-placebo activity log. Intrusive memories were fewer over the following week. A clinical intrusion measure agreed at one week, and not at one month. The authors call it proof of concept, and a larger trial is the next step.',
          'These results sit under this heading only loosely. The proposed mechanism is competition for visuospatial resources while a memory consolidates, not learning a sequence. They matter here for a different reason: a game was used as a dosed procedure with a timing window and a placebo-matched control, and that is the right shape for any such claim.',
          'Kollins and colleagues (2020) report a randomised, double-blind trial of a video-game-like digital treatment for ADHD: 348 children aged 8 to 12, 25 minutes a day, 5 days a week, for 4 weeks, against a digital control. Attention performance improved more in the treatment arm (median change 0.88 on the primary index). The sponsor was the developer, and the authors say further research is needed.',
        ],
      },
      {
        h: 'What follows for the craft',
        p: [
          'If learning is implicit, asking players what they learned will mislead. The test is the swap: build a probe level that changes the hidden structure and measure the cost, then check transfer to a task outside the game.',
          'There is an ethical consequence as well. Because the player cannot always report what is being shaped, the aim of the programme has to be stated at the start, in plain words, and nothing may be shaped covertly.',
        ],
      },
    ],
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
  {
    n: 3,
    title: 'Insight: designing the impasse',
    tags: ['Insight', 'Mental health'],
    read: 6,
    abstract:
      'A solution that arrives whole feels different, is remembered differently, and is wrong more often than its owner believes. Designing for insight means designing the impasse, the release and the verification, in that order.',
    claim: 'The Aha is a flag for attention. It is never evidence that the answer is right.',
    figure: 'warmth',
    body: [
      {
        h: 'Two kinds of solving',
        p: [
          'Köhler (1925) watched apes stack boxes to reach fruit after a pause, and the idea of a sudden reorganisation has been argued over since. Metcalfe and Wiebe (1987) made the difference measurable. Participants rated how close they felt to the answer every fifteen seconds. On routine problems the feeling of warmth climbed steadily. On insight problems it stayed low and then jumped just before the solution. The figure sketches the two shapes.',
        ],
      },
      {
        h: 'What the brain does',
        p: [
          'Jung-Beeman and colleagues (2004) compared word puzzles solved by insight with those solved step by step. Insight solutions were preceded by a burst of high-frequency EEG activity over the right anterior temporal region, about a third of a second before the answer, and by greater activity in that region on fMRI. Kounios and Beeman (2014) review the sequence: a preparatory state, an impasse, a restructuring, and then the answer.',
        ],
      },
      {
        h: 'Memory, and error',
        p: [
          'Solutions reached with an Aha leave a mark. Danek and colleagues (2013) found better recall of insight solutions to magic-trick problems. The feeling is not a guarantee, though: Danek and Wiley (2017) showed that Aha experiences also accompany incorrect solutions.',
          'For design this has a clear reading. Reward the restructuring, and then force a check. A game that pays out on the feeling alone trains players to trust the feeling.',
        ],
      },
      {
        h: 'The pattern',
        p: [
          'Four beats. Impasse: enough exposure to build a wrong frame. Release: a prompt, an incidental cue, or rest. Restructure: the old frame is dropped. Verify: the new frame is tested against the world.',
          'A hint that arrives too early removes the impasse, and one that arrives too late is only fatigue. Kapur (2008) found that students who struggled with a problem before being taught the concept later showed better conceptual understanding and transfer than students taught first. The struggle was the lesson.',
        ],
      },
      {
        h: 'Where this meets mental health',
        p: [
          'Cognitive restructuring is a clinical staple, and a designed impasse can stage the experience of dropping a frame. A puzzle is a rehearsal, though, not a replacement. In therapy, durable change comes from testing a new belief against experience, repeatedly. The game can make the first drop safe and memorable, and the programme around it has to carry the testing.',
        ],
      },
    ],
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
  {
    n: 4,
    title: 'Forensic psychology: where games and AI belong, and where they do not',
    tags: ['All three channels', 'Forensic psychology'],
    read: 9,
    abstract:
      'The justice system rewards confidence and punishes doubt, which is the wrong way round for decision quality. Games and AI have a real job here, training the people who decide and structuring what they see. They also have a bad job: scoring the people who are judged.',
    claim: 'Use the machine to improve the decider. Do not use it to replace the decision about a person.',
    figure: 'fairness',
    body: [
      {
        h: 'Accounts are constructed, including by the interviewer',
        p: [
          'Loftus and Palmer (1974) asked people to estimate the speed of cars in a film. Changing one verb in the question, from hit to smashed, changed the estimates and changed later reports of seeing broken glass that was never there. An interviewer is part of the instrument. In interviews with children, the effect of poor questioning is larger and the stakes are worse.',
        ],
      },
      {
        h: 'Training the interviewer is a strong use',
        p: [
          'Pompedda, Zappalà and Santtila (2015) had students interview avatars that played a child with a hidden story, abuse or none. Students who received feedback after each interview asked more open and fewer closed questions, and reached more correct conclusions, in about an hour of practice.',
          'A pooled analysis of nine studies, with 2,208 interviews and 394 participants who included students, psychologists and police officers, found robust effects of feedback on several measures (Pompedda et al., 2022). The structure fits the medium: practice with the ground truth known to the simulator, which real cases almost never provide. The question that matters most is transfer to field interviews, and at least one study has tested it with police investigators (Kask et al., 2022).',
        ],
      },
      {
        h: 'Bias is structural, so procedure beats warning',
        p: [
          'Dror, Charlton and Péron (2006) had fingerprint examiners re-judge prints they had decided before, now with misleading context. Some of the earlier judgements changed. A competent expert who has been told about bias is still exposed to it.',
          'The remedy is procedure. Linear sequential unmasking reveals information in a fixed order and has the examiner commit to a conclusion before the next piece is shown (Dror et al., 2015). A game is a cheap place to rehearse that order until it is habit.',
        ],
      },
      {
        h: 'What the machine should not be asked',
        p: [
          'Lie detection first. Across decades of studies, people tell lies from truths only slightly above chance, about 54 per cent where chance is 50 (Bond and DePaulo, 2006). A system trained on human labels inherits that ceiling.',
          'Then risk scores. Dressel and Farid (2018) found that the COMPAS recidivism tool, built on 137 features, was no more accurate than untrained online participants, and that a simple linear model on two features did nearly as well.',
          'Fairness cannot be had all at once. When two groups have different base rates, a score cannot have equal predictive value and equal error rates for both (Kleinberg, Mullainathan and Raghavan, 2016; Chouldechova, 2017). Use the figure: whichever way the numbers are set, a score has to choose whom it will be wrong about. That is a political choice, and it needs a human owner who can be questioned.',
        ],
      },
      {
        h: 'An order of use',
        p: [
          'First, train practitioners on simulated cases where the truth is known. Second, structure case files for sequential unmasking and for a required alternative-hypothesis round. Third, audit past decisions for drift and for disparity between groups. Never, as a sole basis: automated verdicts on individuals, deception scores, or risk scores that cannot be contested and explained.',
        ],
      },
    ],
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
  {
    n: 5,
    title: 'Biotech: the interface is the instrument',
    tags: ['All three channels', 'Biotech'],
    read: 8,
    abstract:
      'Citizen-science games produced real results because they solved an interface problem: they made a molecule or a neuron legible to human perception. Machine learning then absorbed much of what players found. The lesson is about the division of labour, and about where humans are still the scarce part.',
    claim: 'Build games where the objective is still unknown to the machine.',
    figure: 'loop',
    body: [
      {
        h: 'When conventional attempts had failed',
        p: [
          'Cooper and colleagues (2010) described Foldit, a multiplayer game in which players fold proteins by hand against a scoring function. Khatib and colleagues (2011) then challenged players with the retroviral protease of the Mason-Pfizer monkey virus, after a wide range of attempts to solve its crystal structure by molecular replacement had failed. Players produced models good enough to determine the structure, and the refined structure gave new insight for antiretroviral drug design.',
        ],
      },
      {
        h: 'Neurons and RNA',
        p: [
          'Kim and colleagues (2014) reconstructed retinal cells in serial electron-microscope images with help from EyeWire, an online community of citizen neuroscientists, and found evidence on how the retina detects motion.',
          'EteRNA went further. Lee and colleagues (2014) connected about 37,000 enthusiasts to RNA design puzzles with a link to a real wet-laboratory pipeline. The community learned strategies, including several previously unrecognised negative design rules, which were distilled by machine learning into an algorithm, EteRNABot. Over a year of testing both the community and the algorithm beat earlier methods.',
        ],
      },
      {
        h: 'Why it worked, in the three channels',
        p: [
          'Relevance realization: the interface fixes what is salient, such as clashes and voids, so a non-expert sees the part of the structure that matters. Implicit learning: players develop a pattern sense they often cannot fully state. Insight: moves that a scoring algorithm would not try, kept because they were cheap to attempt.',
          'The score function is the quiet centre. It encodes a physical claim, so a game of this kind is a hypothesis about nature wrapped in a point system.',
        ],
      },
      {
        h: 'Then the machines',
        p: [
          'AlphaFold predicted protein structures at near-experimental accuracy for many targets (Jumper et al., 2021), and the 2024 Nobel Prize in Chemistry went to David Baker for computational protein design and to Demis Hassabis and John Jumper for structure prediction. Where a scoring function is known and learnable, the machine overtakes the crowd.',
          'The product consequence follows. Human play is most valuable where the objective is still ambiguous, such as labelling a new kind of microscopy image, ranking hypotheses, or judging the plausibility of a design in a context a model has not seen. A game built there is an instrument, and a game built where a model already wins is a temporary scaffold.',
        ],
      },
      {
        h: 'Five rules',
        p: [
          'One: write down which physical claim the score encodes. Two: capture strategies as well as solutions, as EteRNA did. Three: build bench verification into the loop so leaps are tested. Four: credit contributors as contributors. Five: watch for players optimising the score away from the physics, which is Goodhart’s law in a lab coat.',
        ],
      },
    ],
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
  {
    n: 6,
    title: 'Dose, not engagement: a bar for therapeutic play',
    tags: ['All three channels', 'Mental health'],
    read: 7,
    abstract:
      'A commercial game succeeds when people return. A therapeutic game succeeds when people need it less. Nearly every decision that makes the first kind work is a liability in the second, and the evidence ladder shows how few products have climbed it.',
    claim: 'Success is a smaller need, measured against an active control, and kept at follow-up.',
    figure: 'ladder',
    body: [
      {
        h: 'Two scoreboards that point opposite ways',
        p: [
          'A commercial game reads day-1, day-7 and day-30 retention, session length and revenue per user. A therapeutic programme reads symptom change at the end of a dose, durability at follow-up, and harm. The first scoreboard rewards a user who stays. The second rewards one who leaves better. A team using the wrong scoreboard will optimise toward the wrong user.',
        ],
      },
      {
        h: 'A ladder of evidence',
        p: [
          'Five rungs, from weakest to strongest: people play it; people say it helps; a measured process changes; symptoms improve more than with an equally engaging non-therapeutic control; the gain lasts and transfers to life. Most products stand on the first or second rung. The figure places the studies cited in this series.',
          'SPARX, a game-like computerised CBT programme, was tested in 187 help-seeking adolescents in New Zealand against treatment as usual and was not inferior, with higher remission in the SPARX arm (Merry et al., 2012). That is a strong result against usual care and not against a placebo, and the design is stated as such. Woebot, a conversational agent, reduced depressive symptoms on the PHQ-9 over two weeks in a 70-person unblinded trial against an information-only control (Fitzpatrick et al., 2017), and is a feasibility result more than a verdict.',
        ],
      },
      {
        h: 'Where engagement design does harm',
        p: [
          'Gaming disorder is a recognised condition in the WHO’s ICD-11. A large survey of 7,422 gamers found that spending on loot boxes was linked to problem-gambling severity more strongly than spending on other in-game items (Zendle and Cairns, 2018). The link is correlational and its direction is not settled, which is itself a reason for caution.',
          'Streak mechanics deserve a design judgement of their own. They turn a missed day into a failure, which is the wrong message for a person already prone to self-criticism. This point is a design judgement, offered as one, with no study behind it here.',
        ],
      },
      {
        h: 'Rules for a therapeutic build',
        p: [
          'An end in sight: a defined dose and a way to finish. No variable-ratio rewards. No streak shame. A route to a human when risk appears. Data kept to the minimum that the outcome requires. A pre-registered endpoint, and a plan to publish a null result.',
        ],
      },
      {
        h: 'Where AI enters, and where it stops',
        p: [
          'AI has two honest jobs here. It can hold difficulty inside the useful band, which is relevance realization put to work, and it can adapt pacing to what a person does. A conversational agent can deliver structured content, with the trial evidence above showing early promise.',
          'It must not be left unsupervised in a crisis. Scope, crisis routing and human oversight are design requirements before they are features, and the evidence for open-ended conversational support is still early.',
        ],
      },
    ],
    wrong:
      'Any programme where the retention dashboard is the success metric. In that case the build is optimising for the wrong user, whatever the interface looks like.',
    refs: [
      'Merry, S. N. et al. (2012). The effectiveness of SPARX, a computerised self help intervention for adolescents seeking help for depression: randomised controlled non-inferiority trial. BMJ 344, e2598. doi:10.1136/bmj.e2598',
      'Fitzpatrick, K. K., Darcy, A. and Vierhile, M. (2017). Delivering cognitive behavior therapy to young adults with symptoms of depression and anxiety using a fully automated conversational agent (Woebot): a randomized controlled trial. JMIR Mental Health 4(2), e19. doi:10.2196/mental.7785',
      'Zendle, D. and Cairns, P. (2018). Video game loot boxes are linked to problem gambling: results of a large-scale survey. PLoS ONE 13(11), e0206767. doi:10.1371/journal.pone.0206767',
      'World Health Organization. International Classification of Diseases, 11th revision: gaming disorder (6C51).',
      'Iyadurai, L. et al. (2018) and Kollins, S. H. et al. (2020): see the second paper in this series.',
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
