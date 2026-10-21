import { useState } from 'react';
import { fields, groups, papers, rungs, placed, stages } from './research.js';
import { SplitWords, Reveal } from './ui.jsx';

/* ---------- pick a field, see the problems ---------- */

export function Matrix() {
  const [f, setF] = useState('all');
  const list = papers.filter((p) => f === 'all' || p.field === f);
  return (
    <div className="rs-pick">
      <div className="rs-chips" role="group" aria-label="Choose a field">
        {fields.map((x) => (
          <button key={x.id} type="button" className="rs-chip" aria-pressed={f === x.id} onClick={() => setF(x.id)} data-cursor="Open">
            {x.name}
            <span>{x.id === 'all' ? papers.length : papers.filter((p) => p.field === x.id).length}</span>
          </button>
        ))}
      </div>
      <ul className="rs-cards" role="list">
        {list.map((p) => (
          <li key={p.n}>
            <a href={`?research#paper-${p.n}`}>
              <span className="rs-cards__k">The problem</span>
              <span className="rs-cards__p">{p.problem.line}</span>
              <span className="rs-cards__t">Paper {p.n}: {p.title}</span>
              <span className="rs-cards__m">{p.read} min read</span>
            </a>
          </li>
        ))}
      </ul>
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
      <p className="rs-fig__note">A design heuristic from the cognitive science of attention, not a measurement.</p>
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
      <svg viewBox="0 0 600 220" role="img" aria-label="Schematic: felt warmth climbs steadily on routine problems and stays low then jumps on problems solved in a flash.">
        <line x1="50" y1="190" x2="580" y2="190" className="rs-ax" />
        <line x1="50" y1="20" x2="50" y2="190" className="rs-ax" />
        <path d="M60,176 L560,48" className="rs-line rs-line--blue" fill="none" />
        <path d="M60,176 L120,172 L240,176 L360,170 L470,172 L496,52 L560,48" className="rs-line rs-line--green" fill="none" />
        <text x="300" y="116" className="rs-tx rs-tx--blue">Step by step: warmth climbs</text>
        <text x="270" y="158" className="rs-tx rs-tx--green">A flash: low, low, low, then a jump</text>
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
        <text x={cx} y={cy + 4} textAnchor="middle" className="rs-tx rs-tx--dim">Human judgement</text>
        <text x={cx} y={cy + 22} textAnchor="middle" className="rs-tx rs-tx--dim">+ machine search</text>
      </svg>
      <p className="rs-fig__note">A reading of the Foldit and EteRNA workflows, drawn to show where the human and the machine each contribute.</p>
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

function Bars({ data }) {
  return (
    <figure className="rs-fig">
      <figcaption className="rs-fig__t">Figure · {data.title}</figcaption>
      <ul className="rs-bars" role="list">
        {data.rows.map((r) => (
          <li key={r.label}>
            <span className="rs-bars__l">{r.label}</span>
            <span className="rs-bars__track">
              <span style={{ width: `${Math.min(100, (r.v / r.max) * 100)}%` }} />
            </span>
            <b>{r.fmt(r.v)}</b>
          </li>
        ))}
      </ul>
      <p className="rs-fig__note">{data.note}</p>
    </figure>
  );
}

function Decades() {
  return (
    <figure className="rs-fig">
      <figcaption className="rs-fig__t">Figure · The window before memory fails</figcaption>
      <svg viewBox="0 0 600 230" role="img" aria-label="Schematic: brain changes begin early, a navigation game could detect disturbance in a middle window, and memory tests only rise near the time symptoms show.">
        <line x1="50" y1="190" x2="580" y2="190" className="rs-ax" />
        <line x1="50" y1="20" x2="50" y2="190" className="rs-ax" />
        <rect x="190" y="20" width="200" height="170" className="rs-band" />
        <line x1="420" y1="20" x2="420" y2="190" className="rs-ax" strokeDasharray="5 6" />
        <path d="M60,184 C150,182 200,170 270,128 S400,52 570,34" className="rs-line rs-line--blue" fill="none" />
        <path d="M60,184 L400,182 C440,160 500,100 570,70" className="rs-line rs-line--green" fill="none" />
        <text x="290" y="14" textAnchor="middle" className="rs-tx rs-tx--green">Window for a navigation game</text>
        <text x="425" y="206" className="rs-tx rs-tx--dim">Memory visibly fails</text>
        <text x="300" y="100" className="rs-tx rs-tx--blue">Brain change</text>
        <text x="460" y="146" className="rs-tx rs-tx--green">Memory tests</text>
        <text x="315" y="224" textAnchor="middle" className="rs-tx rs-tx--dim">Years →</text>
      </svg>
      <p className="rs-fig__note">Schematic after the hypothetical biomarker model of Jack et al. (2013). Not data.</p>
    </figure>
  );
}

function Ci() {
  const X = (v) => 300 + v * 330;
  const rows = [
    ['Effect on the targeted bias', 0.23, 0.06, 0.41, 62],
    ['Effect on relapse rate', -0.27, -0.68, 0.22, 138],
  ];
  return (
    <figure className="rs-fig">
      <figcaption className="rs-fig__t">Figure · What the pooled evidence can and cannot exclude</figcaption>
      <svg viewBox="0 0 600 200" role="img" aria-label="Two intervals: the effect on bias is above zero, and the effect on relapse has an interval that spans zero.">
        <line x1={X(0)} y1="20" x2={X(0)} y2="170" className="rs-ax" />
        {rows.map(([label, est, lo, hi, y]) => (
          <g key={label}>
            <text x="40" y={y - 20} className="rs-tx">{label}</text>
            <line x1={X(lo)} y1={y} x2={X(hi)} y2={y} className="rs-line rs-line--green" />
            <circle cx={X(est)} cy={y} r="6" className="rs-pt rs-pt--hot" />
            <text x={X(lo)} y={y + 24} textAnchor="middle" className="rs-tx rs-tx--dim">{lo.toFixed(2)}</text>
            <text x={X(hi)} y={y + 24} textAnchor="middle" className="rs-tx rs-tx--dim">{hi.toFixed(2)}</text>
          </g>
        ))}
        <text x={X(0)} y="190" textAnchor="middle" className="rs-tx rs-tx--dim">0 = no effect</text>
      </svg>
      <p className="rs-fig__note">Estimate and 95% credible interval, as reported by Boffo et al. (2019). The two rows use the authors’ own units.</p>
    </figure>
  );
}

function Doses() {
  const [a, setA] = useState(50);
  return (
    <figure className="rs-fig">
      <figcaption className="rs-fig__t">Figure · One hundred prescribed doses</figcaption>
      <label className="rs-fair__row">
        <span>Share of doses actually taken</span>
        <output>{a}%</output>
        <input type="range" min="10" max="100" value={a} onChange={(e) => setA(+e.target.value)} aria-label="Share of doses taken" />
      </label>
      <ol className="rs-dots" role="img" aria-label={`${a} of 100 doses taken`}>
        {Array.from({ length: 100 }, (_, i) => (
          <li key={i} data-on={i < a} />
        ))}
      </ol>
      <p className="rs-fig__read" aria-live="polite">{`${a} doses taken, ${100 - a} not. At about half, which is what people prescribed self-administered medicines typically take, the treatment is given in half measure and its full benefit cannot be realised.`}</p>
      <p className="rs-fig__note">Illustration of the scale of the problem described by Nieuwlaat et al. (2014).</p>
    </figure>
  );
}

function Trust() {
  const [a, setA] = useState(92);
  const [h, setH] = useState(95);
  const [c, setC] = useState(30);
  const aided = a + ((100 - a) * c) / 100;
  const need = a >= h ? 0 : ((h - a) / (100 - a)) * 100;
  const worse = aided < h;
  return (
    <figure className="rs-fig">
      <figcaption className="rs-fig__t">Figure · When a good aid hides a poor overseer</figcaption>
      <div className="rs-fair">
        <label className="rs-fair__row">
          <span>Aid accuracy</span>
          <output>{a}%</output>
          <input type="range" min="80" max="99" value={a} onChange={(e) => setA(+e.target.value)} aria-label="Aid accuracy" />
        </label>
        <label className="rs-fair__row">
          <span>Person alone, same task</span>
          <output>{h}%</output>
          <input type="range" min="70" max="99" value={h} onChange={(e) => setH(+e.target.value)} aria-label="Person alone accuracy" />
        </label>
        <label className="rs-fair__row">
          <span>Chance the person catches an aid error</span>
          <output>{c}%</output>
          <input type="range" min="0" max="100" value={c} onChange={(e) => setC(+e.target.value)} aria-label="Catch rate" />
        </label>
      </div>
      <div className="rs-fair__out" aria-live="polite">
        <div>
          <span>Person alone</span>
          <b>{h}%</b>
          <i>no aid</i>
        </div>
        <div data-hot={worse}>
          <span>Person with the aid</span>
          <b>{aided.toFixed(1)}%</b>
          <i>{worse ? 'worse than no aid' : 'better than no aid'}</i>
        </div>
      </div>
      <p className="rs-fig__read" data-edge={worse} aria-live="polite">
        {need > 0
          ? `Accepting the aid’s answer and catching only some of its errors, the person must catch at least ${need.toFixed(0)}% of them for the pair to beat the person alone.`
          : 'The aid alone already beats the person alone. The pair can only add to it, and the catch rate sets how much.'}
      </p>
      <p className="rs-fig__note">Simple arithmetic with illustrative numbers. It assumes the person follows the aid except when catching an error.</p>
    </figure>
  );
}

function Ratchet() {
  const [bias, setBias] = useState(1);
  const [gate, setGate] = useState(0);
  const rounds = 12;
  const cap = 10;
  const pts = [];
  let a = 1;
  let b = 1;
  let hit = 0;
  for (let t = 1; t <= rounds; t++) {
    const other = t % 2 ? b : a;
    let next = other + bias;
    if (gate > 0 && t % gate === 0) next = other;
    next = Math.min(cap, next);
    if (t % 2) a = next;
    else b = next;
    pts.push([t, a, b]);
    if (!hit && next >= cap) hit = t;
  }
  const x = (t) => 50 + (t - 1) * 45;
  const y = (v) => 170 - v * 15;
  const path = (i) => pts.map((p, k) => `${k ? 'L' : 'M'}${x(p[0])},${y(p[i])}`).join(' ');
  return (
    <figure className="rs-fig">
      <figcaption className="rs-fig__t">Figure · A toy ratchet</figcaption>
      <div className="rs-fair">
        <label className="rs-fair__row">
          <span>Each side reads the other’s move as this many steps larger</span>
          <output>{bias}</output>
          <input type="range" min="0" max="2" step="1" value={bias} onChange={(e) => setBias(+e.target.value)} aria-label="Misreading, in steps" />
        </label>
        <label className="rs-fair__row">
          <span>Human pause: every Nth move only matches (0 = none)</span>
          <output>{gate}</output>
          <input type="range" min="0" max="4" step="1" value={gate} onChange={(e) => setGate(+e.target.value)} aria-label="Pause every N moves" />
        </label>
      </div>
      <svg viewBox="0 0 600 190" role="img" aria-label="Two lines show each side’s level over twelve moves.">
        <line x1="40" y1="170" x2="580" y2="170" className="rs-ax" />
        <line x1="40" y1={y(cap)} x2="580" y2={y(cap)} className="rs-ax" strokeDasharray="5 6" />
        <text x="580" y={y(cap) - 6} textAnchor="end" className="rs-tx rs-tx--dim">Ceiling</text>
        <path d={path(1)} className="rs-line rs-line--blue" fill="none" />
        <path d={path(2)} className="rs-line rs-line--green" fill="none" />
        <text x="315" y="188" textAnchor="middle" className="rs-tx rs-tx--dim">Moves →</text>
      </svg>
      <p className="rs-fig__read" data-edge={hit > 0} aria-live="polite">
        {hit > 0 ? `Reaches the ceiling at move ${hit}.` : `Does not reach the ceiling in ${rounds} moves.`}
      </p>
      <p className="rs-fig__note">A toy model, not a forecast. It shows only that small misreadings compound and that a pause changes the arithmetic.</p>
    </figure>
  );
}

const FIG = { bars: Bars, decades: Decades, ci: Ci, doses: Doses, trust: Trust, ratchet: Ratchet, dials: Dials, srt: Srt, warmth: Warmth, fairness: Fairness, loop: Loop, ladder: Ladder, flood: Flood, discern: Discern };

/* ---------- a paper: Notice, Absorb, Restructure ---------- */

function StageHead({ s }) {
  return (
    <header className="rs-stage__head">
      <span className="rs-stage__n">{s.n}</span>
      <div>
        <p className="rs-stage__name">{s.name}</p>
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
              </a>
            </li>
          ))}
        </ol>
      </header>

      <section id={`paper-${p.n}-s1`} className="rs-stage" data-ch="rr" aria-label={s1.name}>
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

      <section id={`paper-${p.n}-s2`} className="rs-stage" data-ch="impl" aria-label={s2.name}>
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
        <Fig data={p.absorb.data} />
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

      <section id={`paper-${p.n}-s3`} className="rs-stage" data-ch="insight" aria-label={s3.name}>
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
          {papers.length} working papers on how game design and AI can attack critical problems in mental health, forensic psychology, biotech, medicine, education and defense. Each paper is built the way it argues: notice what matters, absorb the pattern, then restructure the problem. Every study cited is published and checked, and every proposal carries a way to be proved wrong.
        </Reveal>
        <Reveal>
          <Matrix />
        </Reveal>
        <p className="rs-note">Position papers that synthesise published work. They report no results of the author’s own, and none claims to have solved its problem. Each proposes a way to attack it and says how it would fail.</p>
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
            Game design and AI applied to problems that cost lives, trust and years: mental health, forensic psychology, biotech, medicine, education and defense.
          </Reveal>
          <Reveal>
            <Matrix />
          </Reveal>
          <Reveal as="ol" className="rs-format rs-format--wide" role="list">
            {stages.map((s) => (
              <li key={s.id} data-ch={s.id}>
                <span>
                  <b>{s.n}</b> {s.name}
                  </span>
                <em>{s.ask}</em>
              </li>
            ))}
          </Reveal>
        </div>
      </section>
      <section className="sec sec--paper rs-read" aria-label="The papers">
        <div className="wrap rs-read__wrap">
          <nav className="rs-toc" aria-label="Papers">
            {groups.map((g) => (
              <div key={g.id}>
                <p>{g.title}</p>
                <ol role="list">
                  {papers
                    .filter((p) => p.group === g.id)
                    .map((p) => (
                      <li key={p.n}>
                        <a href={`#paper-${p.n}`}>
                          <span>{String(p.n).padStart(2, '0')}</span>
                          {p.title}
                        </a>
                      </li>
                    ))}
                </ol>
              </div>
            ))}
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
