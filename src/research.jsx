import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { channels, domains, cells, papers, rungs, placed, stages } from './research.js';
import { EASE, SplitWords, Reveal } from './ui.jsx';

/* ---------- the map: three ways the mind changes, four places to apply them ---------- */

export function Matrix() {
  const [sel, setSel] = useState({ c: 'rr', d: 'mh' });
  const cell = cells[sel.c][sel.d];
  const ch = channels.find((x) => x.id === sel.c);
  const dm = domains.find((x) => x.id === sel.d);
  return (
    <div className="rs-map">
      <div className="rs-grid" role="group" aria-label="Choose a way the mind changes and a place to apply it">
        <span className="rs-grid__corner" aria-hidden="true" />
        {domains.map((d) => (
          <span key={d.id} className="rs-grid__col">
            {d.name}
          </span>
        ))}
        {channels.map((c) => (
          <div key={c.id} className="rs-grid__row" data-ch={c.id}>
            <p className="rs-grid__head">
              <b>{c.name}</b>
              <span>{c.ask}</span>
            </p>
            {domains.map((d) => (
              <button
                key={d.id}
                type="button"
                className="rs-cell"
                data-ch={c.id}
                aria-pressed={sel.c === c.id && sel.d === d.id}
                aria-label={`${c.name} in ${d.name}`}
                onClick={() => setSel({ c: c.id, d: d.id })}
                data-cursor="Open"
              >
                <span className="rs-cell__dot" />
              </button>
            ))}
          </div>
        ))}
      </div>
      <div className="rs-card" data-ch={sel.c} aria-live="polite">
        <AnimatePresence mode="wait">
          <motion.div key={sel.c + sel.d} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4, ease: EASE }}>
            <p className="rs-card__path">
              <span>{ch.name}</span> in <span>{dm.name}</span>
            </p>
            <dl className="rs-card__dl">
              <div>
                <dt>The design move</dt>
                <dd>{cell.move}</dd>
              </div>
              <div>
                <dt>What the evidence says</dt>
                <dd>{cell.evidence}</dd>
              </div>
              <div className="rs-card__guard">
                <dt>The guardrail</dt>
                <dd>{cell.guard}</dd>
              </div>
            </dl>
            <a className="textlink" href={`?research#paper-${cell.paper}`}>
              Read paper {cell.paper}: {papers[cell.paper - 1].title}
            </a>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ---------- figures ---------- */

const DIAL = [
  ['Exploit', 'Explore'],
  ['Focus', 'Diversify'],
  ['Compress', 'Particularise'],
];

function Dials() {
  const [v, setV] = useState([50, 50, 50]);
  const edge = v.filter((x) => x < 12 || x > 88).length;
  const mid = v.every((x) => x > 30 && x < 70);
  const state =
    edge > 0
      ? 'A dial is pinned at one end. The player repeats a habit, or drifts across everything.'
      : mid
        ? 'Dials near the middle. Comfortable, and quiet. Move one and see how it feels to push the player.'
        : 'Dials moving between ends. This is the band a good level keeps visiting.';
  return (
    <figure className="rs-fig">
      <figcaption className="rs-fig__t">Figure · Three dials a level can turn</figcaption>
      <div className="rs-dials">
        {DIAL.map(([a, b], i) => (
          <label key={a} className="rs-dial">
            <span className="rs-dial__ends">
              <span>{a}</span>
              <span>{b}</span>
            </span>
            <input type="range" min="0" max="100" value={v[i]} onChange={(e) => setV(v.map((x, j) => (j === i ? +e.target.value : x)))} aria-label={`${a} to ${b}`} />
          </label>
        ))}
      </div>
      <p className="rs-fig__read" data-edge={edge > 0} aria-live="polite">
        {state}
      </p>
      <p className="rs-fig__note">A design heuristic from the relevance realization literature, not a measurement.</p>
    </figure>
  );
}

function Srt() {
  const pts = [48, 46, 72, 92, 108, 120, 128, 134, 50, 132];
  const x = (i) => 60 + i * 52;
  const d = pts.map((y, i) => `${i ? 'L' : 'M'}${x(i)},${y}`).join(' ');
  return (
    <figure className="rs-fig">
      <figcaption className="rs-fig__t">Figure · The cost of the swap</figcaption>
      <svg viewBox="0 0 600 210" role="img" aria-label="Schematic: reaction times fall as a hidden sequence repeats, then jump when a random block replaces it, then fall again.">
        <line x1="50" y1="170" x2="580" y2="170" className="rs-ax" />
        <line x1="50" y1="20" x2="50" y2="170" className="rs-ax" />
        <rect x={x(8) - 22} y="20" width="44" height="150" className="rs-band" />
        <path d={d} className="rs-line rs-line--blue" fill="none" />
        {pts.map((y, i) => (
          <circle key={i} cx={x(i)} cy={y} r={i === 8 ? 5 : 3.5} className={i === 8 ? 'rs-pt rs-pt--hot' : 'rs-pt'} />
        ))}
        <text x={x(8)} y="14" textAnchor="middle" className="rs-tx">Random block</text>
        <text x="46" y="30" textAnchor="end" className="rs-tx rs-tx--dim">Slower</text>
        <text x="46" y="165" textAnchor="end" className="rs-tx rs-tx--dim">Faster</text>
        <text x="315" y="198" textAnchor="middle" className="rs-tx rs-tx--dim">Practice blocks →</text>
        <text x={x(5)} y="156" textAnchor="middle" className="rs-tx">A hidden sequence repeats</text>
      </svg>
      <p className="rs-fig__note">Schematic of the serial reaction time effect. Not data.</p>
    </figure>
  );
}

function Warmth() {
  return (
    <figure className="rs-fig">
      <figcaption className="rs-fig__t">Figure · Two shapes of solving</figcaption>
      <svg viewBox="0 0 600 220" role="img" aria-label="Schematic: felt warmth climbs steadily on routine problems and stays low then jumps on insight problems.">
        <line x1="50" y1="190" x2="580" y2="190" className="rs-ax" />
        <line x1="50" y1="20" x2="50" y2="190" className="rs-ax" />
        <path d="M60,176 L560,48" className="rs-line rs-line--blue" fill="none" />
        <path d="M60,176 L120,172 L240,176 L360,170 L470,172 L496,52 L560,48" className="rs-line rs-line--green" fill="none" />
        <text x="300" y="116" className="rs-tx rs-tx--blue">Step by step: warmth climbs</text>
        <text x="270" y="158" className="rs-tx rs-tx--green">Insight: low, low, low, then a jump</text>
        <text x="46" y="30" textAnchor="end" className="rs-tx rs-tx--dim">Warm</text>
        <text x="46" y="188" textAnchor="end" className="rs-tx rs-tx--dim">Cold</text>
        <text x="315" y="212" textAnchor="middle" className="rs-tx rs-tx--dim">Time on the problem →</text>
      </svg>
      <p className="rs-fig__note">After Metcalfe and Wiebe (1987). Schematic of the pattern they reported, not their data.</p>
    </figure>
  );
}

const pc = (x) => `${(x * 100).toFixed(0)}%`;

function Fairness() {
  const [pa, setPa] = useState(20);
  const [pb, setPb] = useState(40);
  const [tpr, setTpr] = useState(70);
  const [fpr, setFpr] = useState(20);
  const ppv = (p) => {
    const t = tpr / 100;
    const f = fpr / 100;
    const q = p / 100;
    return (t * q) / (t * q + f * (1 - q) || 1);
  };
  const A = ppv(pa);
  const B = ppv(pb);
  const t = tpr / 100;
  const need = Math.min(1, (t * (pb / 100) * (1 - A)) / (A * (1 - pb / 100) || 1));
  const rows = [
    ['Base rate in group A', pa, setPa, 1, 60],
    ['Base rate in group B', pb, setPb, 1, 60],
    ['Catches true cases (both groups)', tpr, setTpr, 30, 95],
    ['Flags non-cases by mistake (both groups)', fpr, setFpr, 1, 60],
  ];
  return (
    <figure className="rs-fig">
      <figcaption className="rs-fig__t">Figure · Whom the score is wrong about</figcaption>
      <div className="rs-fair">
        {rows.map(([label, val, set, min, max]) => (
          <label key={label} className="rs-fair__row">
            <span>{label}</span>
            <output>{val}%</output>
            <input type="range" min={min} max={max} value={val} onChange={(e) => set(+e.target.value)} aria-label={label} />
          </label>
        ))}
      </div>
      <div className="rs-fair__out" aria-live="polite">
        <div>
          <span>A flag means a true case</span>
          <b>{pc(A)}</b>
          <i>group A</i>
        </div>
        <div data-hot={Math.abs(A - B) > 0.03}>
          <span>A flag means a true case</span>
          <b>{pc(B)}</b>
          <i>group B</i>
        </div>
      </div>
      <p className="rs-fig__read" aria-live="polite">
        {Math.abs(A - B) > 0.03
          ? `Same catch rate and same mistake rate, yet a flag means something different for each group. To make a flag mean the same, group B’s mistake rate would have to rise to ${pc(need)}, against ${fpr}% for group A.`
          : 'With equal base rates the two groups come out the same. Move one base rate and watch the flag change meaning.'}
      </p>
      <p className="rs-fig__note">The arithmetic behind Kleinberg, Mullainathan and Raghavan (2016) and Chouldechova (2017). Illustrative numbers.</p>
    </figure>
  );
}

function Loop() {
  const nodes = ['Machine proposes', 'Player perceives', 'Score tests the claim', 'Bench verifies', 'Model learns'];
  const cx = 300;
  const cy = 130;
  const r = 92;
  return (
    <figure className="rs-fig">
      <figcaption className="rs-fig__t">Figure · The loop that made the results</figcaption>
      <svg viewBox="0 0 600 270" role="img" aria-label="A cycle: machine proposes, player perceives, score tests the claim, bench verifies, model learns, and back.">
        <circle cx={cx} cy={cy} r={r} className="rs-ring" fill="none" />
        {nodes.map((n, i) => {
          const a = (-90 + i * 72) * (Math.PI / 180);
          const x = cx + r * Math.cos(a);
          const y = cy + r * Math.sin(a);
          const side = Math.cos(a) > 0.2 ? 'start' : Math.cos(a) < -0.2 ? 'end' : 'middle';
          const dx = side === 'start' ? 16 : side === 'end' ? -16 : 0;
          const dy = Math.abs(Math.cos(a)) <= 0.2 ? (Math.sin(a) < 0 ? -16 : 24) : 4;
          return (
            <g key={n}>
              <circle cx={x} cy={y} r="8" className="rs-node" />
              <text x={x + dx} y={y + dy} textAnchor={side} className="rs-tx">{n}</text>
            </g>
          );
        })}
        <text x={cx} y={cy + 4} textAnchor="middle" className="rs-tx rs-tx--dim">Human insight</text>
        <text x={cx} y={cy + 22} textAnchor="middle" className="rs-tx rs-tx--dim">+ machine search</text>
      </svg>
      <p className="rs-fig__note">A reading of the Foldit and EteRNA workflows, drawn to show where each channel acts.</p>
    </figure>
  );
}

function Ladder() {
  return (
    <figure className="rs-fig">
      <figcaption className="rs-fig__t">Figure · The evidence ladder</figcaption>
      <ol className="rs-ladder" role="list">
        {[...rungs].reverse().map((r) => {
          const hit = placed.find((p) => p.rung === r.n);
          return (
            <li key={r.n} style={{ '--i': r.n }} data-cls={hit?.cls}>
              <span className="rs-ladder__n">{r.n}</span>
              <span className="rs-ladder__b">
                <b>{r.t}</b>
                <i>{r.note}</i>
                {hit && <span className="rs-ladder__s">{hit.s}</span>}
              </span>
            </li>
          );
        })}
      </ol>
      <p className="rs-fig__note">Each study sits at the highest rung its design honestly reaches.</p>
    </figure>
  );
}

function Flood() {
  const [n, setN] = useState(2000);
  const [c, setC] = useState(200);
  const [s, setS] = useState(3);
  const share = Math.min(1, c / n);
  const missed = s * (1 - share);
  return (
    <figure className="rs-fig">
      <figcaption className="rs-fig__t">Figure · What a flood does to attention</figcaption>
      <div className="rs-fair">
        <label className="rs-fair__row">
          <span>Alerts per day</span>
          <output>{n.toLocaleString('en')}</output>
          <input type="range" min="100" max="10000" step="100" value={n} onChange={(e) => setN(+e.target.value)} aria-label="Alerts per day" />
        </label>
        <label className="rs-fair__row">
          <span>Items the team can review per day</span>
          <output>{c}</output>
          <input type="range" min="50" max="500" step="10" value={c} onChange={(e) => setC(+e.target.value)} aria-label="Items reviewed per day" />
        </label>
        <label className="rs-fair__row">
          <span>Real signals hidden in the flood</span>
          <output>{s}</output>
          <input type="range" min="1" max="5" value={s} onChange={(e) => setS(+e.target.value)} aria-label="Real signals hidden" />
        </label>
      </div>
      <div className="rs-bar" role="img" aria-label={`${pc(share)} of items reviewed`}>
        <span style={{ width: `${share * 100}%` }} />
      </div>
      <p className="rs-fig__read" data-edge={share < 0.3} aria-live="polite">
        {`With unranked review, any one signal has a ${pc(share)} chance of being looked at, and about ${missed.toFixed(1)} of ${s} go unseen. Doubling the alerts halves that chance. The only fix is a better ranking of relevance, which is a judgement skill.`}
      </p>
      <p className="rs-fig__note">Arithmetic with illustrative numbers. It assumes review in no particular order.</p>
    </figure>
  );
}

// Standard normal CDF (Abramowitz and Stegun 7.1.26).
function phi(z) {
  const t = 1 / (1 + 0.2316419 * Math.abs(z));
  const d = 0.3989423 * Math.exp((-z * z) / 2);
  const p = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
  return z > 0 ? 1 - p : p;
}

function Discern() {
  const [d, setD] = useState(0.8);
  const [s, setS] = useState(0);
  const fakeCalledFake = phi(d / 2 + s);
  const realCalledFake = phi(-d / 2 + s);
  return (
    <figure className="rs-fig">
      <figcaption className="rs-fig__t">Figure · Skill, or just suspicion</figcaption>
      <div className="rs-fair">
        <label className="rs-fair__row">
          <span>Discernment: how well true and fake are told apart</span>
          <output>{d.toFixed(1)}</output>
          <input type="range" min="0" max="3" step="0.1" value={d} onChange={(e) => setD(+e.target.value)} aria-label="Discernment" />
        </label>
        <label className="rs-fair__row">
          <span>Scepticism: the general lean toward calling things fake</span>
          <output>{s > 0 ? '+' : ''}{s.toFixed(1)}</output>
          <input type="range" min="-1" max="1" step="0.1" value={s} onChange={(e) => setS(+e.target.value)} aria-label="Scepticism" />
        </label>
      </div>
      <div className="rs-fair__out" aria-live="polite">
        <div>
          <span>Fake items called fake</span>
          <b>{pc(fakeCalledFake)}</b>
          <i>looks like success</i>
        </div>
        <div data-hot={realCalledFake > 0.35}>
          <span>True items called fake</span>
          <b>{pc(realCalledFake)}</b>
          <i>the hidden cost</i>
        </div>
      </div>
      <p className="rs-fig__read" aria-live="polite">
        Set discernment to 0 and raise scepticism: fake items are called fake more often, and so are true ones. Only raising discernment lifts the first number without the second.
      </p>
      <p className="rs-fig__note">A signal-detection illustration, equal-variance model. It shows the logic of the reanalysis, not its data.</p>
    </figure>
  );
}

const FIG = { dials: Dials, srt: Srt, warmth: Warmth, fairness: Fairness, loop: Loop, ladder: Ladder, flood: Flood, discern: Discern };

/* ---------- a paper: Notice, Absorb, Restructure ---------- */

function StageHead({ s }) {
  return (
    <header className="rs-stage__head">
      <span className="rs-stage__n">{s.n}</span>
      <div>
        <p className="rs-stage__name">{s.name}</p>
        <p className="rs-stage__method">{s.method}</p>
      </div>
      <p className="rs-stage__ask">{s.ask}</p>
    </header>
  );
}

function Paper({ p }) {
  const [seePattern, setSeePattern] = useState(false);
  const [seeReframe, setSeeReframe] = useState(false);
  const Fig = FIG[p.absorb.figure];
  const [s1, s2, s3] = stages;
  return (
    <article id={`paper-${p.n}`} className="rs-paper" aria-labelledby={`paper-${p.n}-h`}>
      <header className="rs-paper__head">
        <span className="rs-paper__n" aria-hidden="true">{String(p.n).padStart(2, '0')}</span>
        <ul className="rs-tags" role="list">
          {p.tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
          <li className="rs-tags__read">{p.read} min read</li>
        </ul>
        <h2 id={`paper-${p.n}-h`} className="rs-paper__h">{p.title}</h2>
        <p className="rs-paper__abs">{p.abstract}</p>
        <p className="rs-claim">
          <b>The claim</b>
          {p.claim}
        </p>
        <ol className="rs-format" role="list" aria-label="How this paper is built">
          {stages.map((s) => (
            <li key={s.id} data-ch={s.id}>
              <a href={`#paper-${p.n}-s${s.n}`}>
                <b>{s.n}</b> {s.name}
                <i>{s.method}</i>
              </a>
            </li>
          ))}
        </ol>
      </header>

      <section id={`paper-${p.n}-s1`} className="rs-stage" data-ch="rr" aria-label={`${s1.name}: ${s1.method}`}>
        <StageHead s={s1} />
        <div className="rs-problem">
          <b>The problem this solves</b>
          <p className="rs-problem__line">{p.problem.line}</p>
          <p className="rs-problem__stakes">{p.problem.stakes}</p>
        </div>
        <div className="rs-prose">
          {p.notice.text.map((t) => (
            <p key={t}>{t}</p>
          ))}
        </div>
        <div className="rs-keep">
          <div>
            <h3>Keep in view</h3>
            <ul role="list">
              {p.notice.signal.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Let go</h3>
            <ul role="list">
              {p.notice.noise.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id={`paper-${p.n}-s2`} className="rs-stage" data-ch="impl" aria-label={`${s2.name}: ${s2.method}`}>
        <StageHead s={s2} />
        <p className="rs-lead">{p.absorb.lead}</p>
        <ul className="rs-cases" role="list">
          {p.absorb.cases.map((c) => (
            <li key={c.k}>
              <b>{c.k}</b>
              <span>{c.t}</span>
            </li>
          ))}
        </ul>
        <Fig />
        <div className="rs-prose">
          {p.absorb.text.map((t) => (
            <p key={t}>{t}</p>
          ))}
        </div>
        <div className="rs-reveal" data-open={seePattern}>
          <button type="button" className="rs-reveal__btn" aria-expanded={seePattern} onClick={() => setSeePattern(true)} disabled={seePattern} data-cursor="Open">
            {seePattern ? 'The pattern' : 'What do the three share?'}
          </button>
          <p className="rs-reveal__body" hidden={!seePattern}>{p.absorb.pattern}</p>
        </div>
      </section>

      <section id={`paper-${p.n}-s3`} className="rs-stage" data-ch="insight" aria-label={`${s3.name}: ${s3.method}`}>
        <StageHead s={s3} />
        <ol className="rs-beats" role="list">
          <li>
            <span>Impasse</span>
            <div>
              <p className="rs-beats__k">The usual frame</p>
              <p>{p.restructure.frame}</p>
            </div>
          </li>
          <li>
            <span>Stall</span>
            <div>
              <p className="rs-beats__k">Where it breaks</p>
              <p>{p.restructure.breaks}</p>
            </div>
          </li>
        </ol>
        <div className="rs-reveal rs-reveal--big" data-open={seeReframe}>
          <button type="button" className="rs-reveal__btn" aria-expanded={seeReframe} onClick={() => setSeeReframe(true)} disabled={seeReframe} data-cursor="Open">
            {seeReframe ? 'The reframe' : 'Reframe it'}
          </button>
          <div className="rs-reveal__body" hidden={!seeReframe}>
            {p.restructure.reframe.map((t) => (
              <p key={t}>{t}</p>
            ))}
          </div>
        </div>
        <div className="rs-after" hidden={!seeReframe}>
          <aside className="rs-wrong">
            <b>Verify: what would prove this wrong</b>
            <p>{p.wrong}</p>
          </aside>
          <aside className="rs-limits">
            <b>Limits and boundary</b>
            <p>{p.restructure.limits}</p>
          </aside>
        </div>
      </section>

      <details className="rs-refs">
        <summary>References ({p.refs.length})</summary>
        <ol>
          {p.refs.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ol>
      </details>
    </article>
  );
}

/* ---------- main-page teaser ---------- */

export function ResearchTeaser() {
  return (
    <section id="research" className="sec sec--paper" aria-labelledby="research-h">
      <div className="wrap">
        <SplitWords as="h2" id="research-h" className="h2" text="Play, minds and machines." />
        <Reveal as="p" className="lede" delay={0.15}>
          Eight working papers on how game design and AI can solve critical problems in mental health, forensic psychology, biotech and defense. Each paper is built the way it argues: notice what matters, absorb the pattern, then restructure the problem. Every study cited is published and checked, and every proposal carries a way to be proved wrong.
        </Reveal>
        <Reveal>
          <Matrix />
        </Reveal>
        <Reveal as="ul" className="rs-index" role="list" delay={0.05}>
          {papers.map((p) => (
            <li key={p.n}>
              <a href={`?research#paper-${p.n}`}>
                <span className="rs-index__n">{String(p.n).padStart(2, '0')}</span>
                <span className="rs-index__t">{p.title}</span>
                <span className="rs-index__p">{p.problem.line}</span>
                <span className="rs-index__m">{p.tags[p.tags.length - 1]} · {p.read} min</span>
              </a>
            </li>
          ))}
        </Reveal>
        <p className="rs-note">Position papers that synthesise published work. They report no results of the author’s own.</p>
      </div>
    </section>
  );
}

/* ---------- the reading room (?research) ---------- */

export function ResearchPage() {
  return (
    <>
      <section className="sec sec--paper rs-hero" aria-labelledby="rs-h">
        <div className="wrap">
          <SplitWords as="h1" id="rs-h" className="h2" text="Play, minds and machines." immediate />
          <Reveal as="p" className="lede" delay={0.15}>
            Game design and AI applied to problems that cost lives, trust and years: mental health, forensic psychology, biotech and defense. Three ways a mind changes carry the argument: what it notices, what it absorbs unspoken, and what it restructures all at once.
          </Reveal>
          <Reveal>
            <Matrix />
          </Reveal>
          <Reveal as="ol" className="rs-format rs-format--wide" role="list">
            {stages.map((s) => (
              <li key={s.id} data-ch={s.id}>
                <span>
                  <b>{s.n}</b> {s.name}
                  <i>{s.method}</i>
                </span>
                <em>{s.ask}</em>
              </li>
            ))}
          </Reveal>
        </div>
      </section>
      <section className="sec sec--paper rs-read" aria-label="The eight papers">
        <div className="wrap rs-read__wrap">
          <nav className="rs-toc" aria-label="Papers">
            <p>Eight papers</p>
            <ol role="list">
              {papers.map((p) => (
                <li key={p.n}>
                  <a href={`#paper-${p.n}`}>
                    <span>{String(p.n).padStart(2, '0')}</span>
                    {p.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <div className="rs-stack">
            <p className="rs-howto">
              How to read these. Every paper runs the same three stages: notice what matters, absorb the cases and the figure, then restructure the problem. The pattern and the reframe stay closed until requested, so the reader can try to see them first. Papers synthesise published research and report no results of the author’s own. Proposals are hypotheses.
            </p>
            {papers.map((p) => (
              <Paper key={p.n} p={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
