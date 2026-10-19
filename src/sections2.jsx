import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useTransform, useMotionValueEvent, useReducedMotion } from 'motion/react';
import { projects, stations, positions, fields, EMAIL } from './content.js';
import { ProjectVisual, Glyph } from './art.jsx';
import { Stamp } from './stamp.jsx';
import { EASE, STILL, SplitWords, Reveal, Pill, useSpot, useWide, useSceneProgress } from './ui.jsx';

/* ---------- the work: eight case files ---------- */

function Card({ p, onOpen }) {
  const spot = useSpot();
  return (
    <article className="bezel card">
      <div className="bezel__in" {...spot}>
        <div className="card__art">
          <ProjectVisual p={p} />
          {p.stamp && <Stamp label={p.stamp} className="card__stamp" size={60} rotate={5} delay={0.2} />}
        </div>
        <div className="card__body">
          <p className="card__meta">
            <span>{p.org}</span>
            <span>{p.period}</span>
          </p>
          <h3 className="card__title">{p.title}</h3>
          <p className="card__blurb">{p.blurb}</p>
          <ul className="tags" role="list">
            {p.tags.slice(0, 3).map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <button type="button" className="card__open" data-cursor="Open" onClick={(e) => onOpen(p.id, e.currentTarget)}>
            Open the case file
            <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 15L15 5M7 5h8v8" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}

export function Work({ onOpen }) {
  const wide = useWide(900);
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const trackRef = useRef(null);
  const [dist, setDist] = useState(0);
  const [vh, setVh] = useState(typeof window !== 'undefined' ? window.innerHeight : 900);
  useEffect(() => {
    const on = () => setVh(window.innerHeight);
    window.addEventListener('resize', on);
    return () => window.removeEventListener('resize', on);
  }, []);
  const focusCard = (e) => {
    const card = e.target.closest && e.target.closest('.card');
    if (!card || !ref.current || dist <= 0) return;
    const want = Math.min(dist, Math.max(0, card.offsetLeft - 80));
    const top = ref.current.getBoundingClientRect().top + window.scrollY;
    const y = top + (want / dist) * (ref.current.offsetHeight - window.innerHeight);
    if (window.__lenis) window.__lenis.scrollTo(y, { immediate: true, force: true });
    else window.scrollTo(0, y);
  };
  const pinned = wide && !reduce && !STILL;

  useLayoutEffect(() => {
    if (!pinned) return;
    const measure = () => {
      setDist(Math.max(0, trackRef.current.scrollWidth - window.innerWidth + 40));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(trackRef.current);
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [pinned]);

  const scrollYProgress = useSceneProgress(ref);
  const x = useTransform(scrollYProgress, [0, 1], [0, -dist]);

  const head = (
    <div className="work__head">
      <SplitWords as="h2" id="work-h" className="h2" data-store="Screenshots" text="Eight case files. Open any of them." />
      <Reveal as="p" className="work__sub" delay={0.2}>
        What was in the way, what was done about it, and what came out of it, with the figures as they stand.
      </Reveal>
    </div>
  );

  if (!pinned) {
    return (
      <section id="work" className="sec sec--dark" aria-labelledby="work-h">
        <div className="wrap">
          {head}
          <div className="work__stack">
            {projects.map((p) => (
              <Reveal key={p.id}>
                <Card p={p} onOpen={onOpen} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="work" ref={ref} className="work" style={{ height: dist + vh }} aria-labelledby="work-h">
      <div className="work__sticky">
        <motion.div className="work__track" ref={trackRef} style={{ x }} onFocusCapture={focusCard}>
          <div className="work__intro">{head}</div>
          {projects.map((p) => (
            <Card key={p.id} p={p} onOpen={onOpen} />
          ))}
          <div className="work__end" aria-hidden="true" />
        </motion.div>
        <motion.div className="work__bar" style={{ scaleX: scrollYProgress }} aria-hidden="true" />
      </div>
    </section>
  );
}

/* ---------- a case file, in full ---------- */

export function Sheet({ id, onClose, returnTo }) {
  const p = projects.find((x) => x.id === id);
  const ref = useRef(null);
  useEffect(() => {
    const lenis = window.__lenis;
    lenis && lenis.stop();
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const el = ref.current;
    const focusables = () => [...el.querySelectorAll('a[href], button, [tabindex]:not([tabindex="-1"])')];
    const bg = document.querySelectorAll('main, header, footer');
    bg.forEach((n) => (n.inert = true));
    focusables()[0]?.focus({ preventScroll: true });
    const key = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'Tab') {
        const f = focusables();
        if (!f.length) return;
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener('keydown', key);
    return () => {
      window.removeEventListener('keydown', key);
      document.body.style.overflow = prev;
      bg.forEach((n) => (n.inert = false));
      lenis && lenis.start();
      returnTo && returnTo.focus && returnTo.focus({ preventScroll: true });
    };
  }, [onClose, returnTo]);

  const subject = encodeURIComponent(`About: ${p.title}`);
  const body = encodeURIComponent(`Hi Karthik,\n\nI read the case file on "${p.title}" and would like to talk about `);

  return (
    <motion.div className="veil" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} onClick={onClose}>
      <motion.aside
        ref={ref}
        className="sheet"
        role="dialog"
        aria-modal="true"
        aria-labelledby="sheet-h"
        data-lenis-prevent
        initial={{ x: '102%' }}
        animate={{ x: 0 }}
        exit={{ x: '102%' }}
        transition={{ duration: 0.65, ease: EASE }}
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="sheet__close" onClick={onClose}>
          Close
          <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
            <path d="M5 5l10 10M15 5L5 15" />
          </svg>
        </button>
        <div className="sheet__art">
          <ProjectVisual p={p} large />
        </div>
        {p.media && p.media.length > 1 && (
          <ul className="sheet__media" role="list">
            {p.media.slice(1).map((m) => (
              <li key={m.src}>{m.type === 'video' ? <video className="media" src={m.src} poster={m.poster} controls playsInline preload="metadata" aria-label={m.alt} /> : <img className="media" src={m.src} alt={m.alt} loading="lazy" />}</li>
            ))}
          </ul>
        )}
        <p className="card__meta">
          <span>{p.org}</span>
          <span>{p.period}</span>
        </p>
        <h2 id="sheet-h" className="sheet__h">
          {p.title}
        </h2>
        <p className="sheet__role">{p.role}</p>

        <h3 className="sheet__k">What was in the way</h3>
        <p className="sheet__p">{p.problem}</p>

        <h3 className="sheet__k">What was done</h3>
        <ul className="sheet__list" role="list">
          {p.approach.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>

        <h3 className="sheet__k">What came out of it</h3>
        <ul className="sheet__out" role="list">
          {p.outcome.map((o) => (
            <li key={o}>{o}</li>
          ))}
        </ul>

        <h3 className="sheet__k">Disciplines</h3>
        <ul className="tags" role="list">
          {p.tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <div className="sheet__cta">
          <Pill href={`mailto:${EMAIL}?subject=${subject}&body=${body}`}>Talk about this one</Pill>
        </div>
      </motion.aside>
    </motion.div>
  );
}

/* ---------- the loop: how a game is made here now ---------- */

export function Pipeline() {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const [idx, setIdx] = useState(0);
  const n = stations.length;
  const scrollYProgress = useSceneProgress(ref);
  useMotionValueEvent(scrollYProgress, 'change', (v) => setIdx(Math.max(0, Math.min(n - 1, Math.floor(v * n * 0.999)))));
  const fill = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const s = stations[idx];

  const head = (
    <>
      <SplitWords as="h2" id="pipeline-h" className="h2" data-store="Under the hood" text="Every stage of a game now runs on a workflow." />
      <Reveal as="p" className="pipe__sub" delay={0.2}>
        So one developer can carry a game from first asset to live data, and the standard stays where it was.
      </Reveal>
    </>
  );

  if (reduce || STILL) {
    return (
      <section id="pipeline" className="sec sec--dark" aria-labelledby="pipeline-h">
        <div className="wrap">
          {head}
          <ul className="pipe__static" role="list">
            {stations.map((st) => (
              <li key={st.name}>
                <Glyph name={st.glyph} />
                <h3>{st.name}</h3>
                <p>{st.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }

  return (
    <section id="pipeline" ref={ref} className="pipe" style={{ height: `${n * 52 + 100}vh` }} aria-labelledby="pipeline-h">
      <div className="pipe__sticky">
        <div className="pipe__top">{head}</div>
        <div className="pipe__grid">
          <div className="pipe__stage">
            <ul className="sr" role="list">
              {stations.map((st) => (
                <li key={st.name}>
                  {st.name}. {st.text}
                </li>
              ))}
            </ul>
            {stations.map((st, i) => (
              <motion.div
                key={st.name}
                className="pipe__card"
                aria-hidden="true"
                initial={false}
                animate={{ opacity: i === idx ? 1 : 0, y: i === idx ? 0 : i < idx ? -28 : 28, filter: i === idx ? 'blur(0px)' : 'blur(10px)' }}
                transition={{ duration: 0.6, ease: EASE }}
              >
                <Glyph name={st.glyph} />
                <h3 className="pipe__name">{st.name}</h3>
                <p className="pipe__text">{st.text}</p>
              </motion.div>
            ))}
          </div>
          <ol className="pipe__rail" role="list">
            <span className="pipe__track" aria-hidden="true">
              <motion.i style={{ scaleY: fill }} />
            </span>
            {stations.map((st, i) => (
              <li key={st.name} data-on={i === idx} data-done={i < idx}>
                <span className="pipe__dot" aria-hidden="true" />
                {st.name}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------- where Karthik parts from common practice ---------- */

export function Positions() {
  const wide = useWide(900);
  const [open, setOpen] = useState(0);
  const cur = positions[open];
  return (
    <section id="positions" className="sec sec--paper" aria-labelledby="positions-h">
      <div className="wrap">
        <SplitWords as="h2" id="positions-h" className="h2" text="Six places where common practice gives way." />
        <div className="pos">
          <ul className="pos__list" role="list">
            {positions.map((p, i) => {
              const on = open === i;
              return (
                <li key={p.better} className="pos__item" data-on={on}>
                  <button type="button" className="pos__btn" aria-pressed={on} onClick={() => setOpen(i)} data-cursor="Show">
                    <s className="pos__usual">{p.usual}</s>
                    <span className="pos__better">{p.better}</span>
                  </button>
                  {!wide && (
                    <AnimatePresence initial={false}>
                      {on && (
                        <motion.p className="pos__proof pos__proof--inline" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.45, ease: EASE }}>
                          {p.proof}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  )}
                </li>
              );
            })}
          </ul>
          {wide && (
            <div className="pos__panel" aria-live="polite">
              <AnimatePresence mode="wait">
                <motion.div key={open} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.45, ease: EASE }}>
                  <s className="pos__panel-usual">{cur.usual}</s>
                  <p className="pos__panel-proof">{cur.proof}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------- craft: the fields it draws on ---------- */

export function Craft() {
  const wide = useWide(900);
  const [open, setOpen] = useState(0);
  return (
    <section id="craft" className="sec sec--dark" aria-labelledby="craft-h">
      <div className="wrap">
        <SplitWords as="h2" id="craft-h" className="h2" text="Nine fields behind every decision." />
        <div className="craft">
          <ul className="craft__list" role="list">
            {fields.map(([name, note], i) => (
              <li key={name} data-on={open === i}>
                <button type="button" className="craft__btn" aria-pressed={open === i} onClick={() => setOpen(i)} onPointerEnter={(e) => wide && e.pointerType === 'mouse' && setOpen(i)} data-cursor=" ">
                  {name}
                </button>
                {!wide && <p className="craft__note craft__note--inline">{note}</p>}
              </li>
            ))}
          </ul>
          {wide && (
            <div className="craft__panel">
              <p className="sr" aria-live="polite">{fields[open][1]}</p>
              {fields.map(([name, note], i) => (
                <motion.p key={name} className="craft__note" aria-hidden="true" initial={false} animate={{ opacity: i === open ? 1 : 0, y: i === open ? 0 : 16 }} transition={{ duration: 0.45, ease: EASE }}>
                  {note}
                </motion.p>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
