// Material for decision makers: what carries over to other functions, how to start without paperwork, time-zone cover.
// Every claim comes from the résumé or the earlier portfolio.

export const lenses = [
  {
    id: 'ops',
    name: 'Operations',
    headline: 'Fewer waits between people, tools and decisions.',
    fig: '50+',
    figLabel: 'people led across simultaneous projects',
    carries: [
      'Led 50+ designers, developers, artists and editors across simultaneous projects.',
      'Merged two studios: people, operations, workflows and tools moved into one.',
      'Built a workflow for every stage of production, so one person can carry a project end to end.',
    ],
    isNew: ['Your systems, vocabulary and rules.', 'Which of your waits are structural and which are habit.'],
    first: 'Where does work wait on a person today?',
    plan: ['Watch the work and map every wait.', 'Change one stage, with a control.', 'Verdict in writing. Scale it or stop.'],
  },
  {
    id: 'product',
    name: 'Product and project',
    headline: 'A number agreed first, then a plan that serves it.',
    fig: '30+',
    figLabel: 'products shipped, concept to live-ops',
    carries: [
      'Shipped 30+ products, with numeric gates, kill decisions and post-mortems.',
      'Validated Dinelift with 50+ sales calls a day before any development began.',
      'Google-certified project manager: objective written before the backlog, weekly written updates.',
    ],
    isNew: ['Your customers and market.', 'The politics of your roadmap.'],
    first: 'What single number says this product is working?',
    plan: ['Talk to your users and write the metric.', 'Cut scope to what moves it.', 'Ship, read the number, decide.'],
  },
  {
    id: 'growth',
    name: 'Growth and marketing',
    headline: 'Cheap acquisition, found by testing, not guessing.',
    fig: '<$1.50',
    figLabel: 'cost per install on hybrid-puzzle titles',
    carries: [
      'Held cost per install under $1.50 through data-driven design and rapid iteration.',
      'Built the creative and playable-ad workflow, from making to publishing.',
      'Built a UA tool and dashboard that sets strategy per product and adapts to ad spend and MMP data.',
    ],
    isNew: ['Your channels, audience and margin.', 'What a customer is worth in your business.'],
    first: 'Which channel costs you most, and what does a customer there return?',
    plan: ['Read spend against return, channel by channel.', 'Test small creative and offer changes.', 'Kill what loses, scale what wins.'],
  },
  {
    id: 'learning',
    name: 'Learning and behaviour',
    headline: 'Change what people do, and prove it with a number.',
    fig: '4 to 8',
    figLabel: 'week pilots, with the target agreed first',
    carries: [
      'Designs training, onboarding and product experiences on game design and behavioural science, each with a target agreed before the build.',
      'Mentors juniors in design, production practice and collaboration; built a talent programme for junior developers.',
      'Certified in Gamification: Motivation Psychology.',
    ],
    isNew: ['Your people, culture and constraints.', 'Which behaviours are worth changing first.'],
    first: 'Which behaviour, if it changed, would move a number you already track?',
    plan: ['Watch the job being done, not the course.', 'Pilot one change on one team, with a control.', 'Read the result and write the verdict.'],
  },
  {
    id: 'ai',
    name: 'AI and automation',
    headline: 'One person and a good workflow, doing what took a team.',
    fig: '100+',
    figLabel: 'levels built in a single day on the AI workflow',
    carries: [
      'Built an AI workflow for each stage: asset generation, rigging, animation, sound, QA and improvement from live data.',
      'Ported 6 products to a new platform in 5 days through the workflow, with cost held down.',
      'Built internal AI tools that keep compute working day and night, with no one at the desk.',
    ],
    isNew: ['Your data, security and compliance rules.', 'Which tasks are worth automating first.'],
    first: 'Which repeated task takes the most human hours today?',
    plan: ['List the repeated tasks and their hours.', 'Automate the largest one end to end.', 'Measure hours saved, then the next task.'],
  },
  {
    id: 'strategy',
    name: 'Strategy and founder’s office',
    headline: 'Evidence before the decision, not after it.',
    fig: '3',
    figLabel: 'studios co-founded',
    carries: [
      'Co-founded three studios: Dinelift, Papertoy Studio and Nerdy Quest.',
      'Led a studio merger, then a move to an AI-first model.',
      'Validates before building: 50+ sales calls a day before Dinelift’s first line of code.',
    ],
    isNew: ['Your market, board and numbers.', 'The decisions that are actually waiting.'],
    first: 'What decision is waiting for evidence right now?',
    plan: ['List the open decisions and their cost.', 'Find the cheapest evidence for each.', 'Bring a recommendation with its number.'],
  },
  {
    id: 'games',
    name: 'Games and apps',
    headline: 'The home ground: 30+ launches and an AI-first studio.',
    fig: '30+',
    figLabel: 'games shipped across hybrid-puzzle, idle, rewarded and narrative titles',
    carries: [
      'Lead 50+ at BooBoo Games; moved the merged studio to an AI-first model.',
      'Built the creative, playable-ad and UA engine single-handed.',
      '5+ 3D PC games and 10+ mobile games built personally.',
    ],
    isNew: ['Your genre and audience.', 'Your live data, once seen.'],
    first: 'Which part of the pipeline is slowest today?',
    plan: ['Map the pipeline from first asset to live data.', 'Automate the slowest stage.', 'Measure release speed against the target.'],
  },
];

export const ladder = [
  { when: 'Weeks 1 to 8', h: 'Start remotely, as a paid pilot', p: 'On contract, or through an employer-of-record, a service that legally employs a person in their own country on your behalf. No immigration process is needed for this stage. A target number is agreed before any work starts, and the verdict is written down.' },
  { when: 'Months 3 to 6', h: 'Extend, with evidence', p: 'If the number moved, the work continues remotely. Everyone has seen the work before any paperwork is considered.' },
  { when: 'When both sides are sure', h: 'Relocate, only if the role needs it', p: 'Pathways differ by country and role, and your immigration counsel confirms what applies. The documents and timeline are prepared in advance.' },
];

export const brief = {
  title: 'Karthik Bindumon',
  line: 'AI-first producer, Mumbai.',
  facts: [
    'Led 50+ people and shipped 30+ products; moved a merged studio to AI-first workflows.',
    'Held cost per install under $1.50 through data-driven iteration.',
    'Built workflows so one person can carry a project end to end: 100+ levels in a day, 6 ports in 5 days.',
    'Co-founded three studios; validated one with 50+ sales calls a day before building.',
    'Write falsifiable bets with kill tests before building anything: seven on the site, each a hypothesis with a way to prove it wrong.',
  ],
  start: 'Starts remotely as a paid 4 to 8 week pilot, with the target number agreed first, so no immigration process is needed for the first stage.',
  contact: 'karthik.mbindumon@gmail.com',
  url: 'https://solobushido.github.io/portfolio/',
};

export const summaryText = () =>
  [
    `${brief.title}. ${brief.line}`,
    ...brief.facts,
    brief.start,
    `Portfolio: ${brief.url}`,
    `Contact: ${brief.contact}`,
  ].join('\n');
