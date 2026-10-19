import { useMemo, useState } from 'react';
import { library } from './library.js';
import { demos, papers, paperList, more } from './evidence.js';
import { Glyph } from './art.jsx';
import { SplitWords, Reveal, Pill, useSpot } from './ui.jsx';

/* ---------- working demos from the earlier portfolio ---------- */

function DemoCard({ d, i }) {
  const spot = useSpot();
  return (
    <Reveal className="bezel demo" delay={(i % 4) * 0.07}>
      <div className="bezel__in" {...spot}>
        <Glyph name={d.glyph} />
        <h3 className="demo__h">{d.name}</h3>
        <p className="demo__for">{d.for}</p>
        <p className="demo__t">{d.text}</p>
        <a className="demo__a" href={d.href} data-cursor="Try it">
          Try the demo
          <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 15L15 5M7 5h8v8" />
          </svg>
        </a>
      </div>
    </Reveal>
  );
}

export function Demos() {
  return (
    <section id="demos" className="sec sec--dark" aria-labelledby="demos-h">
      <div className="wrap">
        <SplitWords as="h2" id="demos-h" className="h2" text="Eight demos you can play with." />
        <Reveal as="p" className="lede" delay={0.15}>
          Small working models from the case files and the four roles. Each is a demonstration of the design, not data: the pilots measure the real thing.
        </Reveal>
        <div className="demos">
          {demos.map((d, i) => (
            <DemoCard key={d.name} d={d} i={i} />
          ))}
        </div>
        <Reveal className="demos__more">
          <Pill href="case-files/">Open all the case files</Pill>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- the 32 proposed pilots ---------- */

export function Library() {
  const [q, setQ] = useState('');
  const shown = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return library;
    return library.filter((p) => `${p.industry} ${p.title} ${p.how} ${p.target}`.toLowerCase().includes(t));
  }, [q]);

  return (
    <section id="library" className="sec sec--paper" aria-labelledby="lib-h">
      <div className="wrap">
        <SplitWords as="h2" id="lib-h" className="h2" text="32 pilots, one for each industry." />
        <Reveal as="p" className="lede" delay={0.15}>
          Concept studies written in 2026. No client and no results are claimed: every number is a target. The first five have full plans and working demos.
        </Reveal>
        <Reveal>
          <div className="lib__bar">
            <label className="lib__search">
              <span className="sr">Find an industry</span>
              <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Find your industry…" autoComplete="off" spellCheck="false" name="industry" />
            </label>
            <p className="lib__count" aria-live="polite">
              {shown.length} of {library.length}
            </p>
          </div>
        </Reveal>
        <ul className="lib" role="list">
          {shown.map((p) => (
            <li key={p.n}>
              <details className="lib__item">
                <summary>
                  <span className="lib__ind">{p.industry}</span>
                  <span className="lib__title">{p.title}</span>
                  <i className="lib__x" aria-hidden="true" />
                </summary>
                <div className="lib__body">
                  <p>
                    <b>How.</b> {p.how}
                  </p>
                  <p>
                    <b>Target.</b> {p.target}
                  </p>
                  {p.plan && (
                    <p className="lib__plan">
                      <a className="textlink" href={`case-files/#case-${p.plan}`}>
                        Read the full plan and try the demo
                      </a>
                      <a className="textlink" href={papers[p.plan]?.href}>
                        Plan as PDF
                      </a>
                    </p>
                  )}
                </div>
              </details>
            </li>
          ))}
        </ul>
        {shown.length === 0 && <p className="lib__none">No pilot matches that yet. Write with your industry and the pilot gets outlined for it.</p>}
      </div>
    </section>
  );
}

/* ---------- working papers and more to see ---------- */

export function Papers() {
  return (
    <section id="papers" className="sec sec--paper sec--flush" aria-labelledby="papers-h">
      <div className="wrap">
        <SplitWords as="h2" id="papers-h" className="h2 h2--sm" data-store="Downloads" text="Working papers, and more to see." />
        <div className="papers">
          <Reveal>
            <h3 className="record__k">Download</h3>
            <ul className="paperlist" role="list">
              {paperList.map((p) => (
                <li key={p.href}>
                  <a href={p.href}>
                    <span className="paperlist__t">{p.title}</span>
                    <span className="paperlist__d">{p.text}</span>
                    <span className="paperlist__f">PDF</span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <h3 className="record__k">More to see</h3>
            <ul className="paperlist" role="list">
              {more.map((p) => (
                <li key={p.href}>
                  <a href={p.href} rel="noopener">
                    <span className="paperlist__t">{p.title}</span>
                    <span className="paperlist__d">{p.text}</span>
                    <span className="paperlist__f">External link</span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
