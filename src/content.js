// All words on the page, written in my own voice. Every figure and claim comes from the résumé or from my earlier portfolio.
// Role words (delivery, live operations, risk, stakeholders, CPI, creative testing, human-in-the-loop, cycle time) are the ones job descriptions use.

export const EMAIL = 'karthik.mbindumon@gmail.com';

// The line that opens and closes the page. Change it here and everywhere follows.
export const HEADLINE = ['Producer, AI-first.', 'Idea to live.'];
// The closing line must not repeat the opening one.
export const FINALE = ['Send the', 'hard part.'];

// Where a hiring manager files me. One primary role and three strengths.
export const fit = [
  { k: 'The role', t: 'Producer', line: 'I own delivery from concept and prototype to launch and live operations: scope, schedule, milestones and risk, and the cross-functional team of designers, engineers, artists and QA that does the work.', maps: ['Game Producer', 'Head of Production', 'Product Lead', 'Programme Manager'] },
  { k: 'Also strong', t: 'Growth and acquisition', line: 'I run user acquisition on cost per install, retention and creative testing, with a UA tool and dashboard I built on MMP data.', maps: ['Growth Lead', 'UA Manager', 'Performance Marketing'] },
  { k: 'Also strong', t: 'AI workflow lead', line: 'I rebuild how a team works so AI does the repeated stages and people keep the judgement (human in the loop), and cycle time drops. I also run the adoption, so the team uses it.', maps: ['AI Operations', 'Workflow Automation', 'AI Enablement'] },
  { k: 'Also strong', t: 'Behaviour and game design', line: 'I design the experience around why people act: onboarding, engagement and retention, grounded in game design and behavioural science.', maps: ['Game Designer', 'Product Designer', 'Gamification'] },
];

export const ribbon = [
  'BooBoo Games',
  'Funcell Games',
  'Dinelift',
  'Papertoy Studio',
  'Nerdy Quest',
  'Fanclash Game Studios',
  'Sportskeeda',
  'Expleo Group',
  'Toronto Film School',
];

export const mirror = [
  'The roadmap is longer than the runway.',
  'The team is quick. The pipeline is not.',
  'Creatives take weeks. Levels take months.',
  'And the standard cannot slip.',
];

export const proof = [
  { id: 'a', value: 50, suffix: '+', label: 'People led across design, development, art and editing, on simultaneous projects.', note: 'BooBoo Games' },
  { id: 'b', value: 30, suffix: '+', label: 'Games shipped across hybrid-puzzle, idle, rewarded, narrative and client titles.' },
  { id: 'c', value: 1.5, prefix: '<$', decimals: 2, sr: 'Under $1.50', label: 'Cost per install on hybrid-puzzle titles.' },
  { id: 'd', value: 100, suffix: '+', label: 'Levels built in a single day by the developers on the AI workflow.' },
  { id: 'e', value: 5, suffix: ' days', label: 'To port 6 Steam games to mobile, with cost held down.' },
  { id: 'f', value: 25, suffix: '+', label: 'Interactive microdrama stories on one production workflow.' },
  { id: 'g', value: 12, suffix: '+', label: 'Android games published, concept to launch.' },
  { id: 'h', value: 150, suffix: '+', label: 'Executives across construction, interiors and defence served by one visualisation studio.' },
];

// To show real screens or a clip on a case file, add a media list to that project, for example:
//   media: [{ type: 'image', src: 'work/hybrid/level-12.png', alt: 'Level 12 of the puzzle title' },
//           { type: 'video', src: 'work/hybrid/trailer.mp4', poster: 'work/hybrid/trailer.jpg', alt: 'Trailer' }]
// Files go in portfolio/public/work/. The first item replaces the illustrative art on the card.
export const projects = [
  {
    id: 'hybrid',
    art: 'puzzle',
    title: 'Hybrid-puzzle, idle and tycoon titles',
    org: 'BooBoo Games',
    period: '2025 – now',
    role: 'Producer, leading a team of 50+',
    blurb: 'Mobile games across hybrid-puzzle, idle arcade, idle tycoon and rewarded formats, tuned until acquisition is cheap.',
    problem: 'Acquisition has to cost less than a player is worth, and nobody knows which design will manage that before it ships.',
    approach: [
      'Design from data, not taste alone: every title is shaped by what the numbers say after launch.',
      'Iterate in short cycles with numeric gates, kill decisions and post-mortems.',
      'Run the portfolio from concept to prototype, soft launch and live-ops.',
    ],
    outcome: ['Cost per install under $1.50 on hybrid-puzzle titles', '30+ games shipped across formats', '5+ 3D PC games and 10+ mobile games built by me personally'],
    tags: ['Hybrid-puzzle', 'Idle arcade', 'Idle tycoon', 'Rewarded', 'Live-ops'],
  },
  {
    id: 'ai-studio',
    art: 'orbit',
    title: 'The AI-first studio',
    org: 'BooBoo Games and Funcell Games',
    period: '2025 – now',
    role: 'Led the merger, then the move to AI-first',
    blurb: 'Two studios joined into one, then rebuilt around AI at every stage of development.',
    problem: 'A merged studio carries two ways of working. Add AI to both and it only makes the confusion faster.',
    approach: [
      'Merge first: people, operations, workflows and tools moved into one studio.',
      'Then build an AI workflow for every stage: 3D asset generation, rigging, animation, sound, QA, and game improvement from live data.',
      'Give each stage its own tools and skills, so one developer can carry a game end to end.',
      'Keep compute working day and night with internal AI tools.',
    ],
    outcome: ['100+ levels built in a single day', '6 Steam games ported to mobile in 5 days, cost held down', 'One developer can carry a game from first asset to release'],
    tags: ['Studio integration', 'AI workflows', '3D pipeline', 'QA', 'Live data'],
  },
  {
    id: 'ads-ua',
    art: 'ads',
    title: 'Creative, playable-ad and UA engine',
    org: 'BooBoo Games',
    period: '2025 – now',
    role: 'Built single-handedly',
    blurb: 'One workflow from making an ad to publishing it, and a dashboard that decides the acquisition strategy for each game.',
    problem: 'Creatives and acquisition plans tend to be slow, manual and detached from what the spend is actually doing.',
    approach: [
      'A workflow for creative and playable-ad development and publishing, built end to end.',
      'A curated UA tool and dashboard that sets the acquisition strategy for each game.',
      'The strategy adapts to ad spend and MMP data as they change.',
    ],
    outcome: ['Video creatives and playable ads run through one pipeline', 'Acquisition strategy set per game, from live data'],
    tags: ['Playable ads', 'Creatives', 'UA', 'MMP data', 'Dashboards'],
  },
  {
    id: 'microdrama',
    art: 'drama',
    title: 'Interactive microdrama platform',
    org: 'BooBoo Games',
    period: '2025 – now',
    role: 'Production workflow lead',
    blurb: 'A platform for short interactive stories, produced on one streamlined workflow.',
    problem: 'Dozens of stories means dozens of different ways of making them, unless the workflow is shared.',
    approach: ['Streamlined the production workflow across the stories.', 'Coordinated the AI-based internal tools used in production.'],
    outcome: ['25+ stories on one workflow'],
    tags: ['Interactive narrative', 'AI tools', 'Production'],
  },
  {
    id: 'clients',
    art: 'clients',
    title: 'Rewarded and web games for clients',
    org: 'BooBoo Games',
    period: '2025 – now',
    role: 'Producer',
    blurb: 'Rewarded games for European clients and web games for six-plus clients, including TikTok.',
    problem: 'Clients arrive with a format and a date, not a studio process.',
    approach: [
      'Run client titles through the same production system as the studio’s own games.',
      'Deliver rewarded games for European clients.',
      'Deliver web games for six-plus clients, including TikTok.',
    ],
    outcome: ['6+ web-game clients, including TikTok', 'Rewarded games shipped for European clients'],
    tags: ['Client work', 'Rewarded', 'Web games'],
  },
  {
    id: 'dinelift',
    art: 'table',
    title: 'Dinelift',
    org: 'Co-founder, Product Designer, Project Manager',
    period: '2022 – now',
    role: 'Co-founder',
    blurb: 'A gamified outdoor-dining product, validated with sales calls before a line of code.',
    problem: 'A new product can look right on paper and still have no buyer.',
    approach: [
      'Make 50+ sales calls a day into the hospitality sector before development.',
      'Design the app around engagement and retention.',
      'Build the technical team from the ground up: recruit and onboard full-stack mobile developers.',
    ],
    outcome: ['50+ daily validation calls before the build', 'A technical team built from nothing'],
    tags: ['Gamification', 'Validation', 'Hospitality', 'Team building'],
  },
  {
    id: 'papertoy',
    art: 'paper',
    title: 'Papertoy Studio',
    org: 'Co-founder, Product Designer, Project Manager',
    period: '2022 – now',
    role: 'Co-founder',
    blurb: 'Gamified fitness, photo-real visualisation and an AR sign-language app, from one small studio.',
    problem: 'Fitness habits fade and architectural visions stay abstract until someone can see and feel them.',
    approach: [
      'Develop a gamified holistic fitness application built on behavioural psychology and game mechanics.',
      'Lead 3D specialists producing photo-realistic, gamified visualisations for architecture and design clients.',
      'Design an AR sign-language application for hearing-impaired users.',
    ],
    outcome: ['Client relationships with 150+ executives across construction, interior design and defence'],
    tags: ['Behaviour change', '3D visualisation', 'AR', 'Fitness'],
  },
  {
    id: 'nerdy',
    art: 'pixel',
    title: 'Nerdy Quest',
    org: 'Co-founder, Game Designer, Project Manager',
    period: '2022 – now',
    role: 'Co-founder',
    blurb: '12+ Android games across five genres, and a talent programme that grows junior developers.',
    problem: 'Shipping games is one skill. Growing the people who ship them is another.',
    approach: [
      'Develop and publish Android games across five genres, concept to launch.',
      'Provide design consultancy and project management for Fanclash Game Studios on multiple titles.',
      'Recruit, train and mentor junior game developers in a scalable talent programme.',
    ],
    outcome: ['12+ Android games published', 'Partnerships with 150+ clients across the Indian film production and distribution industry'],
    tags: ['Android', 'Five genres', 'Talent programme', 'Consultancy'],
  },
];

export const stations = [
  { glyph: 'cube', name: 'Assets', text: 'Generated in 3D by a dedicated AI workflow.' },
  { glyph: 'rig', name: 'Rigging', text: 'Handled by its own workflow.' },
  { glyph: 'wave', name: 'Animation', text: 'Produced inside the same pipeline.' },
  { glyph: 'sound', name: 'Sound', text: 'Built into the pipeline with everything else.' },
  { glyph: 'grid', name: 'Levels', text: 'Developers on the workflow have built 100+ levels in a single day.' },
  { glyph: 'check', name: 'Quality assurance', text: 'A dedicated workflow for testing builds.' },
  { glyph: 'frame', name: 'Creatives', text: 'Video creatives and playable ads, made and published through one pipeline.' },
  { glyph: 'chart', name: 'Acquisition', text: 'A curated tool and dashboard sets the strategy for each game and adjusts to ad spend and MMP data.' },
  { glyph: 'pulse', name: 'Live data', text: 'A workflow that turns what the data shows into improvements to the game.' },
  { glyph: 'moon', name: 'Night shift', text: 'Internal tools keep compute working day and night, with no one at the desk.' },
];

export const positions = [
  { usual: 'AI is for making teams smaller.', better: 'AI lets one person carry a whole game.', proof: 'Asset generation, rigging, animation, sound and QA each run on their own workflow, so one developer can take a game from first asset to release.' },
  { usual: 'Creatives are a design task.', better: 'Creatives are a production line.', proof: 'The creative and playable-ad workflow, from making to publishing, was built end to end by one person.' },
  { usual: 'Plan acquisition first, then build the game.', better: 'Let each game set its own acquisition strategy.', proof: 'A curated UA tool reads ad spend and MMP data and adjusts the strategy for each title.' },
  { usual: 'Explain it, then test whether it was understood.', better: 'Design it so people find it out themselves.', proof: 'Training, onboarding and product experiences draw on game design and behavioural science, each with a target number agreed before the build.' },
  { usual: 'Validate with a plan and a deck.', better: 'Validate with calls.', proof: 'Dinelift took 50+ sales calls a day into hospitality before development began.' },
  { usual: 'Compute is idle when the team is.', better: 'Machines can work the night shift.', proof: 'Internal AI tools keep compute running day and night, with no one at the desk.' },
];

export const fields = [
  ['Neuroscience', 'Reward, habit, memory and spaced practice.'],
  ['Psychology', 'Motivation, and why a broken streak reads as failure.'],
  ['Behavioural science', 'Decisions follow friction and defaults, not intentions.'],
  ['System design', 'Economies, loops, and what a player has a reason to spend.'],
  ['Play design', 'Difficulty has to dip before it rises.'],
  ['Toy design', 'Hands teach before heads do.'],
  ['Anthropology', 'Ritual explains what a survey cannot.'],
  ['Sociology', 'A group is not a crowd of individuals.'],
  ['Applied AI', 'A way to test any of the above by the end of the week.'],
];

export const hurts = [
  {
    id: 'slow',
    hurt: 'Releases are slow',
    start: 'An AI production audit',
    first: 'Map every stage from first asset to live build, find where hands wait on hands, and name the workflow that removes each wait.',
    gets: ['A stage-by-stage map of the current pipeline', 'The workflows to build first, in order', 'A target number for release speed, agreed before anything changes'],
    project: 'ai-studio',
    evidence: '100+ levels in a single day. 6 Steam games ported to mobile in 5 days.',
  },
  {
    id: 'cost',
    hurt: 'Acquisition costs too much',
    start: 'A creative and UA engine',
    first: 'Connect making creatives to publishing them, and let spend and MMP data set the strategy for each game.',
    gets: ['One pipeline for video creatives and playable ads', 'A dashboard that sets strategy per game', 'A cost-per-install target agreed up front'],
    project: 'ads-ua',
    evidence: 'Cost per install under $1.50 on hybrid-puzzle titles.',
  },
  {
    id: 'retain',
    hurt: 'Players do not stay',
    start: 'A systems and economy review',
    first: 'Read the economy as sinks, sources and reasons to spend, then find where players run out of reasons.',
    gets: ['What is earned, what is spent, what the player sees, how it fails', 'Tuning rules and live-ops dials, documented', 'A retention target agreed before the change'],
    project: 'hybrid',
    evidence: '30+ games shipped, tuned from live data.',
  },
  {
    id: 'unproven',
    hurt: 'The product is unproven',
    start: 'A validation sprint',
    first: 'Put the idea in front of the people who would pay for it, at volume, before any development is funded.',
    gets: ['A written verdict: yes, no, or not enough', 'The smallest build that can test the idea', 'A plan with kill criteria'],
    project: 'dinelift',
    evidence: '50+ sales calls a day before a line of code.',
  },
  {
    id: 'sticks',
    hurt: 'Training or onboarding does not stick',
    start: 'A behaviour-change pilot',
    first: 'Watch the job being done, suspect the obvious cause first, and test one small change against a control for 4 to 8 weeks.',
    gets: ['A target number written before the build', 'A pilot in one team, with a control', 'A written verdict from real data'],
    project: 'papertoy',
    evidence: 'Gamified fitness built on behavioural psychology and game mechanics.',
  },
  {
    id: 'stretch',
    hurt: 'The team is stretched or merging',
    start: 'Studio integration and leadership',
    first: 'Move people, operations, workflows and tools into one way of working, with decisions written down.',
    gets: ['One operating rhythm, with weekly written updates instead of status meetings', 'Scope, out-of-scope and kill decisions in writing', 'A team that can run without its leader'],
    project: 'ai-studio',
    evidence: 'Led a team of 50+ through a studio merger.',
  },
];

export const ways = [
  {
    role: 'Game producer',
    for: 'Studios that need a portfolio taken from concept to live.',
    covers: [
      'Portfolio from concept to prototype, soft launch and live-ops',
      'Client titles: rewarded games, web games',
      'Studio integration: people, operations, tools',
      'Creative pipeline: video and playable ads',
      'Numeric gates, kill decisions and post-mortems',
    ],
  },
  {
    role: 'Product, project or programme manager',
    for: 'Teams that need a product delivered across art, engineering, creative and live-ops.',
    covers: [
      'An objective and success metric written before the backlog exists',
      'Scope, out-of-scope list and kill decisions, in writing',
      'Clients, vendors and partners, from first call to handover',
      'Weekly written updates instead of status meetings',
    ],
  },
  {
    role: 'Systems designer',
    for: 'Products whose economy, loops or retention are not working.',
    covers: [
      'Economies: what is earned, what is spent, what the user sees, how it fails',
      'Engagement and retention systems, inside and outside games',
      'Learning systems built on game design and behavioural science',
      'Tuning rules and live-ops dials, documented so the team can run them',
    ],
  },
  {
    role: 'Game design mentor',
    for: 'Teams and individuals growing their design craft.',
    covers: [
      'Design fundamentals taught through psychology and play',
      'Buddy structure and teach-back for every junior',
      'One-to-one and small-group sessions, or an eight-week course',
      'Weekly feedback on paper prototypes',
    ],
  },
];

export const method = [
  { name: 'Observe', text: 'Watch the job being done, not the brief about the job.' },
  { name: 'Suspect the obvious', text: 'The usual answer is the first suspect: more training, more posters, a longer course. Test it first.' },
  { name: 'Test small', text: 'One team, one cohort, one release. A control group. Four to eight weeks.' },
  { name: 'Verdict', text: 'Did the number move? Yes, no, or not enough. In writing.' },
  { name: 'Fix the cause', text: 'Change the cue, the object, the loop or the ritual. Rarely the content.' },
  { name: 'Measure', text: 'Real data from the business, against the control, on a date agreed before the build.' },
];

export const faq = [
  { q: 'How does an engagement start?', a: 'With a short conversation about the part that is stuck, then a pilot of 4 to 8 weeks with a target number agreed before anything is built. The verdict is written down, whichever way it goes.' },
  { q: 'Where am I based, and do I work remotely?', a: 'Mumbai. Remote or on-site, depending on the work.' },
  { q: 'What do I work in?', a: 'Unity, Unreal Engine, 3D visualisation tools, Android development and AI-based production tools, plus the workflows built around them.' },
  { q: 'What does hiring an international candidate involve?', a: 'The first stage needs no immigration process: a paid 4 to 8 week pilot on contract, or through an employer-of-record, which legally employs me in my own country on your behalf. If a role later needs me on site, the pathway depends on the country and role; your immigration counsel confirms it, and I prepare the documents in advance.' },
  { q: 'Which roles do I take?', a: 'Game producer, head of production, product or programme manager, growth or UA lead, AI workflow lead, systems designer, and game design mentor. The role is a starting point, not a box.' },
  { q: 'Can a pilot be about something other than games?', a: 'Yes. The same method applies to onboarding, training, fitness and hospitality products: anywhere a behaviour has to change and a number can measure it.' },
  { q: 'What helps most in a first message?', a: 'The part that is stuck, what it costs now, and the date it matters by. One paragraph is enough.' },
];

export const roles = [
  { when: '2025 –', org: 'BooBoo Games', role: 'Game Producer', line: 'Lead 50+. Merged Funcell Games into the studio, then moved it to an AI-first model.' },
  { when: '2024 – 25', org: 'Sportskeeda', role: 'Content Writer', line: '200+ mobile gaming articles, 50,000+ views.' },
  { when: '2022 –', org: 'Dinelift', role: 'Co-founder, Product Designer, Project Manager', line: 'A gamified outdoor-dining product, built around engagement and retention.' },
  { when: '2022 –', org: 'Papertoy Studio', role: 'Co-founder, Product Designer, Project Manager', line: 'Gamified fitness, photo-real visualisation for 150+ executives, and an AR sign-language app.' },
  { when: '2022 –', org: 'Nerdy Quest', role: 'Co-founder, Game Designer, Project Manager', line: '12+ Android games across five genres, and a talent programme for junior developers.' },
  { when: '2021 –', org: 'Freelance', role: 'Game Designer, Gamification Consultant, Tutor', line: 'Mentors students in design grounded in psychology and neuroscience. Consults on gamification for acquisition and retention.' },
  { when: '2019', org: 'Expleo Group', role: 'Game Tester', line: 'QA on iOS for visual novel and action RPG titles, around 10 bug submissions a day.' },
];

export const school = [
  ['Toronto Film School', 'Diploma, Video Game Design and Animation', '2021 – 22'],
  ['Seamedu School of Pro-Expressionism', 'BFA, Game Design and Game Art', '2018 – 19'],
  ['Google', 'Project Management. Prompt Engineering', 'Certified'],
  ['Gamification', 'Motivation Psychology', 'Certified'],
];

// What a reader can hold me to. Each one is a practice already stated elsewhere on the page; here it is a commitment.
export const hold = [
  { n: '1', t: 'One named owner', p: 'Every project has one person answerable for the result. On mine, that is me.' },
  { n: '2', t: 'A number agreed first', p: 'I write the objective and the success metric before the backlog exists, and the target before any build starts.' },
  { n: '3', t: 'A written update every week', p: 'A short written update replaces the status meeting: where we are, what changed, what is at risk.' },
  { n: '4', t: 'Scope and kill decisions on paper', p: 'What is in, what is out and what gets stopped, recorded when it is decided and not recalled later.' },
  { n: '5', t: 'A verdict, even when it is no', p: 'At the end of every pilot I write down whether the number moved: yes, no, or not enough.' },
  { n: '6', t: 'A post-mortem after every release', p: 'What worked, what did not, and what changes next time, shared with the whole team.' },
];
