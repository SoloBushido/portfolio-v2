// How I think, shown as artifacts. Hypotheses with kill tests: none of these is a result.

export const moves = [
  'Start from the number someone is blamed for.',
  'Ask what people do when that number is at risk.',
  'Find who pays the hidden cost.',
  'Rebuild from the fundamentals, not the industry’s habits.',
  'Write the kill test before the plan.',
  'Test small, with a control.',
  'Write the verdict, even when it is no.',
];

export const bets = [
  {
    id: 'consulting',
    industry: 'Consulting',
    name: 'Number-first consulting',
    truth: 'Consulting profits from hours and complexity, so the firm is paid even when nothing changes. Analysis is now nearly free.',
    move: 'A fixed fee of a share of the measured improvement, with the target agreed before the work. AI does the analysis, so the cost to serve is tiny.',
    threatens: 'Billable-hour consulting.',
    kill: 'One client and one metric, 8 weeks. If the number does not move, there is no fee.',
  },
  {
    id: 'support',
    industry: 'Outsourced support',
    name: 'The anti-BPO',
    truth: 'Vendors are paid per minute or per head, so every unsolved problem is revenue. The industry profits from failure.',
    move: 'A support company paid only for calls that disappear: AI finds the root causes, the vendor fixes them upstream, and the savings are shared.',
    threatens: 'Per-minute outsourcing.',
    kill: 'One client, one call reason, 60 days. If its volume does not fall, it fails.',
  },
  {
    id: 'reputation',
    industry: 'Gig and home services',
    name: 'The portable reputation union',
    truth: 'A platform’s commission pays for matching and trust. Matching is now free through chat and instant payments. Trust is the only real moat, and the platform owns it.',
    move: 'Workers co-own their reputation record, so an electrician or cleaner takes their rating with them.',
    threatens: 'Marketplace commissions.',
    kill: 'One city, one trade. Do customers book on the portable record without the platform?',
  },
  {
    id: 'power',
    industry: 'Electricity',
    name: 'The behavioural power plant',
    truth: 'Grids build expensive peaker plants for a few hours a year, because people are blind to the time of day.',
    move: 'A utility that pays households not to use power at the peak, funded by the avoided plant. Neighbourhood competition, no hardware.',
    threatens: 'Peaker-plant economics and demand-response vendors.',
    kill: 'One block, one summer. Does it shave the evening peak by a measurable share?',
  },
  {
    id: 'training',
    industry: 'Corporate training',
    name: 'Training that appears after your mistake',
    truth: 'People learn most from errors they were confident about, and courses teach before the mistake, when nobody cares.',
    move: 'No courses. AI spots a confident error in real work and serves a 60-second practice rep the next day, owned by the employee.',
    threatens: 'Course libraries and learning platforms.',
    kill: 'One team, 8 weeks, error rate against a control. Opt-in only.',
  },
  {
    id: 'hiring',
    industry: 'Recruitment',
    name: 'Play-the-job hiring',
    truth: 'CVs and interviews are noisy guesses at “can they do the work”.',
    move: 'AI builds a 90-minute simulation of the real job from the company’s workflows, and the candidate plays it. That is the interview.',
    threatens: 'Agencies paid a share of salary.',
    kill: 'Does the simulation score predict 90-day performance better than interviews? Check on 30 hires.',
  },
  {
    id: 'care',
    industry: 'Healthcare',
    name: 'Care paid per event-free year',
    truth: 'Most spending is chronic disease, which is mostly daily behaviour, yet the system pays per hospital stay or pill.',
    move: 'A payer that pays per year with no event, so most of the budget goes on cheap daily behaviour design and the rest on medicine.',
    threatens: 'Episode-based pricing for hospitals and drug makers.',
    kill: 'One employer group, one condition, 12 months. Do avoided events pay for it?',
  },
];

export const gaps = [
  { industry: 'Call centres', gap: 'The metric punishes the hard call, so agents transfer it to protect handle time. The customer rings back three times.', why: 'Handle time is on the dashboard daily; repeat-call cost is spread invisibly across teams.', fix: 'Score hard calls higher, and charge repeats to the first agent.', measure: 'Contacts repeated within 7 days' },
  { industry: 'Warehouses and delivery', gap: 'The honest path is the slow one. A scanner cannot read a damaged label, so the picker confirms without scanning.', why: 'The system treats a scan as proof, so nobody audits skips.', fix: 'Make the honest exception one tap, and unpunished.', measure: 'Scan mismatch rate' },
  { industry: 'Sales teams', gap: 'Deal stages are updated optimistically at the end of the week to stop the nagging.', why: 'The forecast is read by people who punish bad news.', fix: 'Make an honest update the thing that removes the nagging.', measure: 'Forecast accuracy' },
  { industry: 'Construction', gap: 'Safety is performed for the inspector. PPE goes on when the supervisor arrives.', why: 'Compliance is measured by visits, not by behaviour when unobserved.', fix: 'A rotating “inspector of the day” vest, owned by the crew.', measure: 'Unannounced spot checks' },
  { industry: 'Hospitals', gap: 'Alarms cry wolf, so staff silence them. The one real alarm gets missed.', why: 'Device makers optimise to never miss an event, and the ward absorbs the noise.', fix: 'Mix alarms like game audio: a clear urgency hierarchy, fewer false triggers.', measure: 'Silenced or ignored alarm rate' },
  { industry: 'Meetings', gap: 'Agreement without ownership. Everyone nods, nobody writes a name, and the topic returns next week.', why: 'Minutes are written by the most junior person and bind nobody.', fix: 'A closing round where everyone says their promise aloud.', measure: 'Actions done by the next meeting' },
  { industry: 'Software onboarding', gap: 'The first session is built for the demo, not the user. They land on an empty dashboard and leave.', why: 'The team is measured on tour completion, so the tour gets built.', fix: 'Onboarding as level one: a win in 90 seconds, then a slightly harder step.', measure: 'Day-7 activation' },
  { industry: 'Cybersecurity', gap: 'Reporting your own mistake is punished, so it is hidden. Someone clicks, realises, and says nothing for hours.', why: 'The security desk counts clicks as failures.', fix: 'An honesty amnesty: reward the report, never punish the click.', measure: 'Minutes from click to report' },
];

export const builtOn = [
  'Fogg, behaviour model',
  'Gollwitzer, implementation intentions',
  'Schultz, reward prediction error',
  'Graybiel, habit',
  'Deci and Ryan, self-determination',
  'Ericsson, deliberate practice',
  'Bjork, desirable difficulties',
  'Sweller, cognitive load',
  'Csikszentmihalyi, flow',
  'Lave and Wenger, situated learning',
  'Kirkpatrick, four levels of evaluation',
  'Van Gennep, rites of passage',
];
