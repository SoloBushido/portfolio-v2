// Material carried over from the earlier portfolio. Concept studies: targets only, no results claimed.

export const demos = [
  { glyph: 'check', name: 'Threshold', for: 'Hospitals', text: 'Step on the tile and follow the lit path to the dispenser.', href: 'case-files/#toy-threshold' },
  { glyph: 'wave', name: 'Kata', for: 'Warehouses', text: 'Change the number of practice sessions and watch the forgetting curve respond.', href: 'case-files/#toy-kata' },
  { glyph: 'cube', name: 'Roti', for: 'Schools, Grade 5', text: 'Change how many people share each roti and see whose piece is bigger.', href: 'case-files/#toy-roti' },
  { glyph: 'grid', name: 'Rep', for: 'Physiotherapy', text: 'Move one bead per repetition on a ten-bead loop.', href: 'case-files/#toy-rep' },
  { glyph: 'chart', name: 'Salary day', for: 'Banking apps', text: 'Spend, keep or auto-invest for 36 paydays, then see the path not taken.', href: 'case-files/#toy-salary' },
  { glyph: 'rig', name: 'Prioritise', for: 'Product management', text: 'Five candidate features: choose the release goal and see what gets cut.', href: 'case-files/#toy-prio' },
  { glyph: 'frame', name: 'Gate', for: 'Game production', text: 'A soft-launch path with gates on cost per install and day-1 retention.', href: 'case-files/#toy-gate' },
  { glyph: 'pulse', name: 'Economy', for: 'Systems design', text: 'Coins earned and spent per day: watch the wallet fill or drain.', href: 'case-files/#toy-econ' },
];

export const papers = {
  0: { title: 'The realisation loop', text: 'The method behind every case: observe, suspect the obvious, test small, verdict, fix the cause, measure.', href: 'docs/00-realisation-loop.pdf' },
  1: { title: 'Threshold', text: 'Hospitals: hand hygiene without a training module. The full plan.', href: 'docs/01-threshold.pdf' },
  2: { title: 'Kata', text: 'Warehouses: twelve short exercises in place of a two-hour induction. The full plan.', href: 'docs/02-kata.pdf' },
  3: { title: 'Roti', text: 'Schools: fractions through a sharing game. The full plan.', href: 'docs/03-roti.pdf' },
  4: { title: 'Rep', text: 'Physiotherapy: a bead counter instead of an app. The full plan.', href: 'docs/04-rep.pdf' },
  5: { title: 'Salary day', text: 'Banking: a six-minute simulation of 36 paydays. The full plan.', href: 'docs/05-salary-day.pdf' },
};

const extra = [
  { title: 'Salary day, as a product brief', text: 'The same concept written as a brief: objective, scope and success metric.', href: 'docs/06-product-brief-salary-day.pdf' },
  { title: 'Production playbook', text: 'Gates, kill decisions and post-mortems for a casual hybrid-puzzle soft launch.', href: 'docs/07-production-playbook.pdf' },
  { title: 'System design notes', text: 'What is earned, what is spent, what the player sees and how an economy fails.', href: 'docs/08-system-design-notes.pdf' },
  { title: 'Mentoring syllabus', text: 'An eight-week game design course taught through psychology and play.', href: 'docs/09-mentoring-syllabus.pdf' },
  { title: 'Résumé', text: 'Two pages: roles, studios, tools, education and certification.', href: 'assets/Karthik-Bindumon-Resume.pdf' },
];

// Papers shown as a list: the six case-file plans first (index 0 to 5), then the rest.
export const paperList = [...Object.values(papers), ...extra];

export const more = [
  { title: 'Demo reel', text: 'A short reel of game work.', href: 'https://youtu.be/Z5KlDz1ZCIU' },
  { title: 'Prototype playlist', text: 'Playable prototypes, recorded.', href: 'https://youtube.com/playlist?list=PLqclwE6nsbUiWlxZzg8OdPuaOT8MF9twp' },
  { title: 'Earlier portfolio', text: 'Prototypes, artwork, programming, design notes and the blog.', href: 'https://karthikmbindumon.wixsite.com/designportfolio' },
  { title: 'Game design tutoring', text: 'The tutoring page, with the eight-week course.', href: 'https://karthikmbindumon.wixsite.com/designportfolio/service-page/game-design-tutoring' },
  { title: 'Book a session', text: 'Book a one-to-one session online.', href: 'https://karthikmbindumon.wixsite.com/designportfolio/book-online' },
];
