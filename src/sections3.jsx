import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { hurts, projects, ways, method, faq, roles, school, EMAIL, FINALE } from './content.js';
import { EASE, SplitWords, Reveal, Pill, useSpot, Hanko } from './ui.jsx';

/* ---------- a small commitment: where does it hurt? ---------- */

export function Diagnostic({ onOpen }) {
  const [id, setId] = useState(hurts[0].id);
  const h = hurts.find((x) => x.id === id);
  const proj = h && projects.find((p) => p.id === h.project);
  const subject = h ? encodeURIComponent(`Starting point: ${h.start}`) : '';
  const body = h ? encodeURIComponent(`Hi Karthik,\n\nWhat is stuck: ${h.hurt.toLowerCase()}.\nWhat it costs now: \nThe date it matters by: \n`) : '';

  return (
    <section id="diagnostic" className="sec sec--paper" aria-labelledby="diag-h">
      <div className="wrap">
        <SplitWords as="h2" id="diag-h" className="h2" text="Where does it hurt?" />
        <Reveal as="p" className="lede" delay={0.15}>
          Pick the closest one. This is where a first conversation would start, what comes out of it, and the work that proves it.
        </Reveal>

        <Reveal delay={0.1}>
          <div className="chips" role="group" aria-label="What is stuck">
            {hurts.map((x) => (
              <button key={x.id} type="button" className="chip" aria-pressed={id === x.id} onClick={() => setId(x.id)}>
                {x.hurt}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="diag">
          <p className="sr" aria-live="polite">{h ? `Starting point: ${h.start}.` : ''}</p>
          <AnimatePresence mode="wait">
            {!h ? (
              <motion.p key="empty" className="diag__empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
                Nothing picked yet.
              </motion.p>
            ) : (
              <motion.div key={h.id} className="diag__card" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.6, ease: EASE }}>
                <div className="diag__main">
                  <h3 className="diag__title">{h.start}</h3>
                  <p className="diag__first">{h.first}</p>
                  <h4 className="diag__sub">What comes out of it</h4>
                  <ul className="diag__gets" role="list">
                    {h.gets.map((g) => (
                      <li key={g}>{g}</li>
                    ))}
                  </ul>
                </div>
                <div className="diag__side bezel">
                  <div className="bezel__in">
                    <p className="diag__ev">{h.evidence}</p>
                    <button type="button" className="textlink textlink--btn" onClick={(e) => onOpen(proj.id, e.currentTarget)} data-cursor="Open">
                      Open the case file: {proj.title}
                    </button>
                    <div className="diag__cta">
                      <Pill href={`mailto:${EMAIL}?subject=${subject}&body=${body}`}>Start here</Pill>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

/* ---------- ways to work together ---------- */

function WayCard({ w, i }) {
  const spot = useSpot();
  return (
    <Reveal className="bezel way" delay={(i % 2) * 0.08}>
      <div className="bezel__in" {...spot}>
        <h3 className="way__h">{w.role}</h3>
        <p className="way__for">{w.for}</p>
        <ul className="way__list" role="list">
          {w.covers.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

export function Ways() {
  return (
    <section id="ways" className="sec sec--paper" aria-labelledby="ways-h">
      <div className="wrap">
        <SplitWords as="h2" id="ways-h" className="h2" text="Four ways to work together." />
        <Reveal as="p" className="lede" delay={0.15}>
          The role is a starting point, not a box. Most engagements begin as a pilot of 4 to 8 weeks, with the target number written down before anything is built.
        </Reveal>
        <div className="ways">
          {ways.map((w, i) => (
            <WayCard key={w.role} w={w} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- how an engagement runs ---------- */

export function Method() {
  return (
    <section id="method" className="sec sec--paper sec--flush" aria-labelledby="method-h">
      <div className="wrap">
        <SplitWords as="h2" id="method-h" className="h2 h2--sm" text="How a pilot runs, from first look to verdict." />
        <ol className="method" role="list">
          {method.map((m, i) => (
            <Reveal as="li" key={m.name} className="method__step" delay={(i % 3) * 0.08}>
              <span className="method__dot" aria-hidden="true" />
              <h3 className="method__name">{m.name}</h3>
              <p className="method__text">{m.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- questions a careful buyer asks ---------- */

export function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="sec sec--paper" aria-labelledby="faq-h">
      <div className="wrap wrap--narrow wrap--left">
        <SplitWords as="h2" id="faq-h" className="h2" text="Questions worth asking first." />
        <ul className="faq" role="list">
          {faq.map((f, i) => {
            const on = open === i;
            return (
              <Reveal as="li" key={f.q} className="faq__item" data-on={on}>
                <h3>
                  <button type="button" className="faq__q" aria-expanded={on} aria-controls={`faq-${i}`} onClick={() => setOpen(on ? -1 : i)}>
                    {f.q}
                    <i className="faq__x" aria-hidden="true" />
                  </button>
                </h3>
                <div id={`faq-${i}`} className="faq__a">
                  <p>{f.a}</p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/* ---------- the full record ---------- */

export function Record() {
  const tools = ['Unity', 'Unreal Engine', '3D visualisation tools', 'Android development', 'AI-based production tools', 'LaTeX'];
  return (
    <section id="record" className="sec sec--paper sec--flush" aria-labelledby="record-h">
      <div className="wrap">
        <SplitWords as="h2" id="record-h" className="h2" text="The full record." />
        <ul className="roles" role="list">
          {roles.map((r) => (
            <Reveal as="li" key={r.org + r.when} className="role">
              <span className="role__when">{r.when}</span>
              <span className="role__who">
                <strong translate="no">{r.org}</strong>
                <span>{r.role}</span>
              </span>
              <span className="role__line">{r.line}</span>
            </Reveal>
          ))}
        </ul>
        <div className="record__cols">
          <Reveal>
            <h3 className="record__k">Education and certification</h3>
            <ul className="school" role="list">
              {school.map(([a, b, c]) => (
                <li key={a}>
                  <strong translate="no">{a}</strong>
                  <span>{b}</span>
                  <span className="school__when">{c}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <h3 className="record__k">Tools</h3>
            <ul className="tags tags--lg" role="list">
              {tools.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <p className="record__dl">
              <a className="textlink" href="assets/Karthik-Bindumon-Resume.pdf">
                Download the résumé, PDF
              </a>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- act three: the loop closes ---------- */

export function Contact() {
  const [msg, setMsg] = useState('');
  const timer = useRef(null);
  useEffect(() => () => clearTimeout(timer.current), []);
  const copy = async () => {
    let m = 'Copied';
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch (e) {
      m = 'Copy failed. Select the address instead.';
    }
    setMsg(m);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setMsg(''), 2600);
  };
  return (
    <footer id="contact" className="contact" aria-labelledby="contact-h">
      <div className="contact__glow" aria-hidden="true" />
      <div className="wrap contact__in">
        <h2 id="contact-h" className="contact__h">
          <span className="sr">{FINALE.join(' ')}</span>
          <SplitWords aria-hidden="true" as="span" className="contact__l" text={FINALE[0]} />
          <SplitWords aria-hidden="true" as="span" className="contact__l" text={FINALE[1]} delay={0.3} />
        </h2>
        <div className="contact__row">
          <Reveal as="p" className="contact__p" delay={0.2}>
            Tell Karthik what is stuck, what it costs now, and the date it matters by. One paragraph is enough.
          </Reveal>
          <Reveal className="contact__actions" delay={0.3}>
            <Pill variant="ink" href={`mailto:${EMAIL}?subject=${encodeURIComponent("Let's make it")}`}>
              Write to Karthik
            </Pill>
            <a className="mail" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
            <p className="contact__small">
              <button type="button" className="textlink textlink--btn" onClick={copy}>
                {msg || 'Copy email address'}
              </button>
              <a className="textlink" href="https://www.linkedin.com/in/karthikbindumon11" rel="noopener">
                LinkedIn
              </a>
              <a className="textlink" href="assets/Karthik-Bindumon-Resume.pdf">
                Résumé, PDF
              </a>
            </p>
            <span aria-live="polite" className="sr">
              {msg}
            </span>
          </Reveal>
        </div>
        <div className="contact__sign" aria-hidden="true">
          <p className="contact__name">Karthik Bindumon</p>
          <Hanko />
        </div>
        <p className="contact__end">Mumbai. Remote or on-site, depending on the work.</p>
      </div>
    </footer>
  );
}
