import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import { lenses, ladder, brief, summaryText } from './hiring.js';
import { EASE, SplitWords, Reveal } from './ui.jsx';

/* ---------- pick your function ---------- */

export function Lenses() {
  const [id, setId] = useState(lenses[0].id);
  const l = lenses.find((x) => x.id === id);
  return (
    <section id="lenses" className="sec sec--dark" aria-labelledby="lens-h">
      <div className="wrap">
        <SplitWords as="h2" id="lens-h" className="h2" data-store="Compatibility" text="Pick your function. See what carries over." />
        <Reveal as="p" className="lede" delay={0.15}>
          The record is built in studios and AI workflows. Here is what each part proves for other work, what would be new, and how the first 90 days would run.
        </Reveal>
        <Reveal>
          <div className="lens__tabs" role="group" aria-label="Function">
            {lenses.map((x) => (
              <button key={x.id} type="button" className="chip chip--dark" aria-pressed={id === x.id} onClick={() => setId(x.id)}>
                {x.name}
              </button>
            ))}
          </div>
        </Reveal>
        <div className="lens" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.div key={l.id} className="lens__panel" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }} transition={{ duration: 0.5, ease: EASE }}>
              <div className="lens__lead">
                <p className="lens__fig">{l.fig}</p>
                <p className="lens__figl">{l.figLabel}</p>
                <h3 className="lens__h">{l.headline}</h3>
              </div>
              <div className="lens__cols">
                <div>
                  <h4 className="lens__k">What carries over</h4>
                  <ul className="lens__list" role="list">
                    {l.carries.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                  <h4 className="lens__k">What would be new</h4>
                  <ul className="lens__list lens__list--soft" role="list">
                    {l.isNew.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="lens__k">The first 90 days</h4>
                  <ol className="lens__plan" role="list">
                    {['30 days', '60 days', '90 days'].map((d, i) => (
                      <li key={d}>
                        <span className="lens__d">{d}</span>
                        <span>{l.plan[i]}</span>
                      </li>
                    ))}
                  </ol>
                  <p className="lens__q">
                    <span className="lens__k">The first question</span>
                    {l.first}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

/* ---------- start without paperwork, and time-zone cover ---------- */

export function StartEasy() {
  return (
    <section id="start" className="sec sec--dark" aria-labelledby="start-h">
      <div className="wrap">
        <SplitWords as="h2" id="start-h" className="h2" data-store="Installation" text="Start in a week, not a quarter." />
        <Reveal as="p" className="lede" delay={0.15}>
          Hiring across borders means paperwork, so the first stage avoids it. You see the work before anyone files anything.
        </Reveal>
        <ol className="ladder" role="list">
          {ladder.map((s, i) => (
            <Reveal as="li" key={s.h} className="ladder__step" delay={i * 0.08}>
              <span className="ladder__when">{s.when}</span>
              <h3 className="ladder__h">{s.h}</h3>
              <p className="ladder__p">{s.p}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- share this with your team ---------- */

export function ShareButton() {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const last = useRef(0);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, 'change', (v) => {
    const up = v < last.current - 4;
    const down = v > last.current + 4;
    if (v < 900) setShow(false);
    else if (up) setShow(true);
    else if (down) setShow(false);
    last.current = v;
  });
  return (
    <>
      <AnimatePresence>
        {show && !open && (
          <motion.button
            type="button"
            className="share"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.5, ease: EASE }}
            onClick={() => setOpen(true)}
          >
            Share with your team
            <span className="share__ico" aria-hidden="true">
              <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 15L15 5M7 5h8v8" />
              </svg>
            </span>
          </motion.button>
        )}
      </AnimatePresence>
      <AnimatePresence>{open && <Brief onClose={() => setOpen(false)} />}</AnimatePresence>
    </>
  );
}

function Brief({ onClose }) {
  const ref = useRef(null);
  const [msg, setMsg] = useState('');
  const timer = useRef(null);
  useEffect(() => () => clearTimeout(timer.current), []);
  useEffect(() => {
    const lenis = window.__lenis;
    lenis && lenis.stop();
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const bg = document.querySelectorAll('main, header, footer');
    bg.forEach((n) => (n.inert = true));
    const el = ref.current;
    const f = () => [...el.querySelectorAll('a[href], button')];
    f()[0]?.focus({ preventScroll: true });
    const key = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'Tab') {
        const items = f();
        const a = items[0];
        const z = items[items.length - 1];
        if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); }
        else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); }
      }
    };
    window.addEventListener('keydown', key);
    return () => {
      window.removeEventListener('keydown', key);
      document.body.style.overflow = prev;
      bg.forEach((n) => (n.inert = false));
      lenis && lenis.start();
    };
  }, [onClose]);

  const note = (m) => {
    setMsg(m);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setMsg(''), 2400);
  };
  const copy = async (text, ok) => {
    try {
      await navigator.clipboard.writeText(text);
      note(ok);
    } catch (e) {
      note('Copy failed. Select the text instead.');
    }
  };

  return (
    <motion.div className="veil brief-veil" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }} onClick={onClose}>
      <motion.div
        ref={ref}
        className="brief"
        role="dialog"
        aria-modal="true"
        aria-labelledby="brief-h"
        data-lenis-prevent
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5, ease: EASE }}
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="sheet__close brief__close no-print" onClick={onClose}>
          Close
          <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
            <path d="M5 5l10 10M15 5L5 15" />
          </svg>
        </button>
        <p className="brief__k">One-page brief</p>
        <h2 id="brief-h" className="brief__h" translate="no">{brief.title}</h2>
        <p className="brief__line">{brief.line}</p>
        <ul className="brief__facts" role="list">
          {brief.facts.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
        <h3 className="brief__sub">How it starts</h3>
        <p>{brief.start}</p>
        <p className="brief__meta">
          {brief.url}
          <br />
          {brief.contact}
        </p>
        <div className="brief__actions no-print">
          <button type="button" className="chip chip--solid" onClick={() => copy(summaryText(), 'Summary copied')}>Copy as an email</button>
          <button type="button" className="chip" onClick={() => window.print()}>Print or save as PDF</button>
          <button type="button" className="chip" onClick={() => copy(brief.url, 'Link copied')}>Copy the link</button>
          <span className="brief__msg" aria-live="polite">{msg}</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
