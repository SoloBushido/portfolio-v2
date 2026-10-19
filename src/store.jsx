import { store, requirements, EMAIL } from './content.js';
import { Pill, Reveal, SplitWords, scrollToId } from './ui.jsx';
import { Stamp } from './stamp.jsx';

/* The frame for the whole portfolio: a store page for one title. Recognisable furniture, none of it faked:
   no reviews, no ratings, no price. The facts are the résumé's. */

export function StoreStrip() {
  return (
    <section id="about" className="store" aria-labelledby="store-h">
      <div className="wrap store__in">
        <div className="store__main">
          <p className="store__k">About this title</p>
          <h2 id="store-h" className="store__h">
            {store.about}
          </h2>
          <ul className="tags tags--lg store__tags" role="list" aria-label="Tags">
            {store.tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <div className="store__act">
            <Pill href="#play" onClick={(e) => { e.preventDefault(); scrollToId('play'); }}>
              Play the demo
            </Pill>
            <Pill variant="ink" href="#contact" onClick={(e) => { e.preventDefault(); scrollToId('contact'); }}>
              Send a message
            </Pill>
          </div>
        </div>
        <aside className="store__side" aria-label="Facts">
          <Stamp label={store.stamp} className="store__stamp" size={70} rotate={4} delay={0.4} />
          <dl className="store__facts">
            {store.facts.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}

export function Requirements() {
  return (
    <section id="requirements" className="sec sec--paper sec--flush reqs" aria-labelledby="req-h">
      <div className="wrap">
        <SplitWords as="h2" id="req-h" className="h2 h2--sm" data-store="System requirements" text="What this runs on." />
        <div className="reqs__cols">
          {requirements.cols.map((c, i) => (
            <Reveal key={c.k} className="reqs__col" delay={i * 0.08}>
              <h3 className="reqs__k">{c.k}</h3>
              <ul role="list">
                {c.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
        <ul className="reqs__notes" role="list">
          {requirements.notes.map(([k, v]) => (
            <li key={k}>
              <b>{k}</b> {v}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
