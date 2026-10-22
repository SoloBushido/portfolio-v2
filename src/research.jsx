import { useEffect, useState } from 'react';
import { featured, fields, papers } from './research.js';
import { SplitWords, Reveal } from './ui.jsx';

/* ---------- pick a field, see the problems ---------- */

const go = (e, n, set) => {
  e.preventDefault();
  window.history.pushState(null, '', `${window.location.search}#paper-${n}`);
  set(n);
};

const FIELD_NAME = Object.fromEntries(fields.map((x) => [x.id, x.name]));

export function Matrix({ onPick }) {
  const [f, setF] = useState('start');
  const list = papers.filter((p) => (f === 'start' ? featured.includes(p.n) : f === 'all' || p.field === f));
  const count = (id) => (id === 'start' ? featured.length : id === 'all' ? papers.length : papers.filter((p) => p.field === id).length);
  return (
    <div className="rs-pick">
      <div className="rs-chips" role="group" aria-label="Choose a field">
        {fields.map((x) => (
          <button key={x.id} type="button" className="rs-chip" aria-pressed={f === x.id} onClick={() => setF(x.id)} data-cursor="Open">
            {x.name}
            <span>{count(x.id)}</span>
          </button>
        ))}
      </div>
      <ul className="rs-cards" role="list">
        {list.map((p) => (
          <li key={p.n}>
            <a href={`?research#paper-${p.n}`} onClick={onPick ? (e) => go(e, p.n, onPick) : undefined}>
              <span className="rs-cards__k">{FIELD_NAME[p.field]} · {p.read} min</span>
              <span className="rs-cards__p">{p.title}</span>
              <span className="rs-cards__t">{p.problem.line}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- two simple pictures ---------- */

function Bars({ data }) {
  return (
    <figure className="rs-fig">
      <figcaption className="rs-fig__t">{data.title}</figcaption>
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

function Doses() {
  const [a, setA] = useState(50);
  return (
    <figure className="rs-fig">
      <figcaption className="rs-fig__t">Picture 100 prescribed doses</figcaption>
      <label className="rs-fair__row">
        <span>Share actually taken</span>
        <output>{a}%</output>
        <input type="range" min="10" max="100" value={a} onChange={(e) => setA(+e.target.value)} aria-label="Share of doses taken" />
      </label>
      <ol className="rs-dots" role="img" aria-label={`${a} of 100 doses taken`}>
        {Array.from({ length: 100 }, (_, i) => (
          <li key={i} data-on={i < a} />
        ))}
      </ol>
      <p className="rs-fig__read" aria-live="polite">{`${a} taken, ${100 - a} missed. At about half, the medicine only works in half measure.`}</p>
    </figure>
  );
}

const FIG = { bars: Bars, doses: Doses };

/* ---------- one paper ---------- */

function Step({ n, title, children }) {
  return (
    <section className="rs-step" aria-label={title}>
      <h3 className="rs-step__h">
        <span>{n}</span>
        {title}
      </h3>
      {children}
    </section>
  );
}

function Paper({ p }) {
  const Fig = p.fig ? FIG[p.fig] : null;
  return (
    <article id={`paper-${p.n}`} className="rs-paper" aria-labelledby={`paper-${p.n}-h`}>
      <header className="rs-paper__head">
        <ul className="rs-tags" role="list">
          <li>{FIELD_NAME[p.field]}</li>
          <li className="rs-tags__read">{p.read} min read</li>
        </ul>
        <h2 id={`paper-${p.n}-h`} className="rs-paper__h">{p.title}</h2>
        <p className="rs-claim">
          <b>The short answer</b>
          {p.answer}
        </p>
      </header>

      <Step n="1" title="The problem">
        <p className="rs-line">{p.problem.line}</p>
        <ul className="rs-stats" role="list">
          {p.stats.map(([big, small]) => (
            <li key={big}>
              <b>{big}</b>
              <span>{small}</span>
            </li>
          ))}
        </ul>
        <div className="rs-keep">
          <div>
            <h4>Look at</h4>
            <ul role="list">
              {p.matters.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Skip</h4>
            <ul role="list">
              {p.ignore.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </Step>

      <Step n="2" title="What has been found">
        <ul className="rs-cases" role="list">
          {p.seen.map(([k, t]) => (
            <li key={k}>
              <b>{k}</b>
              <span>{t}</span>
            </li>
          ))}
        </ul>
        {Fig && <Fig data={p.absorb.data} />}
      </Step>

      <Step n="3" title="A better way">
        <dl className="rs-way">
          <div>
            <dt>The usual way</dt>
            <dd>{p.way.old}</dd>
          </div>
          <div>
            <dt>Why it falls short</dt>
            <dd>{p.way.fails}</dd>
          </div>
          <div className="rs-way__new">
            <dt>The better idea</dt>
            <dd>
              <ol>
                {p.way.idea.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ol>
            </dd>
          </div>
          <div className="rs-way__fail">
            <dt>It fails if</dt>
            <dd>{p.way.fail}</dd>
          </div>
          <div>
            <dt>Limits</dt>
            <dd>{p.way.limits}</dd>
          </div>
        </dl>
      </Step>

      <details className="rs-refs">
        <summary>Sources ({p.refs.length})</summary>
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
        <SplitWords as="h2" id="research-h" className="h2" text="Games and AI for hard problems." />
        <Reveal as="p" className="lede" delay={0.15}>
          {papers.length} short papers on how games and AI could help with health, justice, science and defense. Pick one. Each starts with the problem, shows what has been found, and ends with a better way.
        </Reveal>
        <Reveal>
          <Matrix />
        </Reveal>
        <p className="rs-note">None of these papers claims to have solved its problem. Each is an idea, with a clear way it could fail. Every study cited is published and checked.</p>
      </div>
    </section>
  );
}

/* ---------- the reading room (?research): one paper at a time ---------- */

const fromHash = () => {
  const m = typeof window !== 'undefined' && window.location.hash.match(/^#paper-(\d+)/);
  return m ? +m[1] : null;
};

export function ResearchPage() {
  const [open, setOpen] = useState(fromHash);
  useEffect(() => {
    const on = () => {
      const n = fromHash();
      if (n) setOpen(n);
    };
    window.addEventListener('hashchange', on);
    return () => window.removeEventListener('hashchange', on);
  }, []);
  useEffect(() => {
    if (open) setTimeout(() => document.getElementById(`paper-${open}`)?.scrollIntoView({ block: 'start' }), 60);
  }, [open]);
  const paper = papers.find((p) => p.n === open);
  const next = paper && papers.find((p) => p.n === (open % papers.length) + 1);
  return (
    <>
      <section className="sec sec--paper rs-hero" aria-labelledby="rs-h">
        <div className="wrap">
          <SplitWords as="h1" id="rs-h" className="h2" text="Games and AI for hard problems." immediate />
          <Reveal as="p" className="lede" delay={0.15}>
            Pick a field, then a problem. Each paper takes about 3 minutes. None claims to have solved its problem.
          </Reveal>
          <Reveal>
            <Matrix onPick={setOpen} />
          </Reveal>
        </div>
      </section>
      {paper && (
        <section className="sec sec--paper rs-read" aria-label="The paper">
          <div className="wrap wrap--narrow">
            <div className="rs-stack">
              <Paper key={paper.n} p={paper} />
              <nav className="rs-next" aria-label="More papers">
                <a
                  href="?research"
                  onClick={(e) => {
                    e.preventDefault();
                    window.history.pushState(null, '', window.location.search);
                    setOpen(null);
                    window.scrollTo(0, 0);
                  }}
                >
                  Back to all papers
                </a>
                <a href={`?research#paper-${next.n}`} onClick={(e) => go(e, next.n, setOpen)}>
                  Next: {next.title}
                </a>
              </nav>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
