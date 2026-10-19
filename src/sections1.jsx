import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring, useMotionTemplate, useMotionValueEvent, useReducedMotion } from 'motion/react';
import { ribbon, mirror, proof, fit, hold, toolbox, HEADLINE } from './content.js';
import { Stamp, VerdictDesk } from './stamp.jsx';
import { EASE, STILL, SplitWords, Reveal, Pill, Marquee, Count, useSpot, useFine, scrollToId, useSceneProgress } from './ui.jsx';

/* ---------- navigation island ---------- */

const mainLinks = [
  ['play', 'Play'],
  ['work', 'Work'],
  ['method', 'Method'],
  ['ways', 'Ways to work'],
  ['record', 'Record'],
];
const workshopLinks = [
  ['demos', 'Demos'],
  ['library', 'Pilot ideas'],
  ['positions', 'Positions'],
  ['./', 'Back to the portfolio'],
];
const isPage = (id) => id.startsWith('.');

export function Nav({ workshop = false }) {
  const links = workshop ? workshopLinks : mainLinks;
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 40));

  useEffect(() => {
    const map = { pipeline: 'work', positions: 'method', craft: 'method', demos: 'work', library: 'work', diagnostic: 'ways', faq: 'ways', papers: 'record', contact: '' };
    const ids = ['play', 'work', 'pipeline', 'positions', 'craft', 'demos', 'library', 'diagnostic', 'method', 'ways', 'faq', 'record', 'papers', 'contact'];
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(map[e.target.id] ?? e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    ids.forEach((id) => document.getElementById(id) && io.observe(document.getElementById(id)));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const lenis = window.__lenis;
    if (open) lenis && lenis.stop();
    else lenis && lenis.start();
    document.querySelectorAll('main, footer').forEach((n) => (n.inert = open));
    if (open) setTimeout(() => document.querySelector('#menu a')?.focus(), 120);
    const esc = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', esc);
    return () => window.removeEventListener('keydown', esc);
  }, [open]);

  const go = (id) => (e) => {
    if (isPage(id)) return;
    e.preventDefault();
    setOpen(false);
    setTimeout(() => scrollToId(id), open ? 250 : 0);
  };

  return (
    <header className="nav" data-scrolled={scrolled}>
      <nav className="island" aria-label="Main">
        <a className="island__mark" href="#top" onClick={go('top')} aria-label="Karthik Bindumon, back to top" translate="no">
          KB
        </a>
        <ul className="island__links" role="list">
          {links.map(([id, label]) => (
            <li key={id}>
              <a href={isPage(id) ? id : `#${id}`} onClick={go(id)} aria-current={active === id ? 'location' : undefined}>
                {label}
                {active === id && <motion.span className="island__line" layoutId="island-line" transition={{ duration: 0.5, ease: EASE }} />}
              </a>
            </li>
          ))}
        </ul>
        <a className="island__cta" href="#contact" onClick={go('contact')}>
          Start a conversation
        </a>
        <button className="island__burger" type="button" aria-expanded={open} aria-controls={open ? 'menu' : undefined} onClick={() => setOpen((o) => !o)}>
          <span className="sr">Menu</span>
          <i data-open={open} />
          <i data-open={open} />
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div id="menu" className="menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35, ease: EASE }}>
            <ul role="list">
              {[...links, ['contact', 'Start a conversation']].map(([id, label], i) => (
                <li key={id} className="menu__li">
                  <motion.a href={isPage(id) ? id : `#${id}`} onClick={go(id)} initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: EASE, delay: 0.08 + i * 0.07 }}>
                    {label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ---------- act one: the poster ---------- */

export function Hero() {
  const fine = useFine();
  const reduce = useReducedMotion();
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 70, damping: 18 });
  const sy = useSpring(py, { stiffness: 70, damping: 18 });
  const rotY = useTransform(sx, [-0.5, 0.5], [-5, 5]);
  const rotX = useTransform(sy, [-0.5, 0.5], [4, -4]);
  const tx = useTransform(sx, [-0.5, 0.5], [-14, 14]);
  const dx = useTransform(sx, [-0.5, 0.5], [22, -22]);
  const dy = useTransform(sy, [-0.5, 0.5], [16, -16]);
  const { scrollY } = useScroll();
  const lift = useTransform(scrollY, [0, 700], [0, -90]);
  const discScale = useTransform(scrollY, [0, 700], [1, 1.35]);

  useEffect(() => {
    if (!fine || reduce) return;
    const move = (e) => {
      px.set(e.clientX / window.innerWidth - 0.5);
      py.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener('pointermove', move, { passive: true });
    return () => window.removeEventListener('pointermove', move);
  }, [fine, reduce, px, py]);

  const enter = STILL ? { initial: false } : { initial: { opacity: 0, scale: 0.7 }, animate: { opacity: 1, scale: 1 }, transition: { type: 'spring', stiffness: 70, damping: 18, delay: 0.15 } };

  return (
    <section id="top" className="hero" aria-labelledby="hero-h">
      <div className="hero__marks marks" aria-hidden="true" />
      <Stamp kanji="出" title="Shipped" rotate={-9} size={112} delay={1.7} className="hero__stamp" />
      <div className="hero__id">
        <span translate="no">Karthik Bindumon</span>
        <span>Mumbai</span>
      </div>

      <motion.div className="hero__stage" style={reduce ? undefined : { y: lift }}>
        <motion.div className="hero__disc-wrap" style={reduce ? undefined : { x: dx, y: dy, scale: discScale }}>
          <motion.div className="hero__disc" {...enter} />
        </motion.div>
        <h1 id="hero-h" className="hero__h">
          <span className="sr">{HEADLINE.join(' ')}</span>
          <SplitWords aria-hidden="true" className="hero__l hero__l1" text={HEADLINE[0]} immediate delay={0.45} />
          <SplitWords aria-hidden="true" className="hero__l hero__l2" text={HEADLINE[1]} immediate delay={0.85} />
        </h1>
        <motion.img
          className="hero__img"
          src="assets/portrait-new.jpg"
          width="420"
          height="420"
          alt="Karthik Bindumon in sunglasses and a black hoodie, one hand at his chin."
          fetchPriority="high"
          style={{ rotateY: rotY, rotateX: rotX, x: tx, transformPerspective: 1200 }}
          initial={STILL ? false : { opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, ease: EASE, delay: 0.35 }}
        />
      </motion.div>

      <div className="hero__foot">
        <Reveal delay={1.35} y={16} className="hero__lead">
          <p>
            Teams led. Workflows built. Products shipped. Numbers in writing.
          </p>
        </Reveal>
        <Reveal delay={1.5} y={16} className="hero__actions">
          <Pill href="#play" onClick={(e) => { e.preventDefault(); scrollToId('play'); }}>
            Play Release Day
          </Pill>
          <a className="textlink" href="#fit" onClick={(e) => { e.preventDefault(); scrollToId('fit'); }}>
            See the fit
          </a>
        </Reveal>
      </div>

      <Marquee className="hero__ribbon" items={ribbon} />
    </section>
  );
}

/* ---------- role and strengths ---------- */

export function Fit() {
  return (
    <section id="fit" className="sec sec--paper" aria-labelledby="fit-h">
      <div className="wrap">
        <SplitWords as="h2" id="fit-h" className="h2" text="Role and strengths." />
        <Reveal as="p" className="lede" delay={0.15}>
          One role and three strengths, one line each, so the fit is clear in a minute.
        </Reveal>
        <ol className="fit" role="list">
          {fit.map((r, i) => (
            <Reveal as="li" key={r.t} className={`fit__row ${i === 0 ? 'fit__row--lead' : ''}`} delay={i * 0.07}>
              <span className="fit__k">{r.k}</span>
              <h3 className="fit__t">{r.t}</h3>
              <p className="fit__p">{r.line}</p>
              <ul className="tags fit__maps" role="list" aria-label="Job titles it maps to">
                {r.maps.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- what you can hold me to ---------- */

export function Hold() {
  return (
    <section id="hold" className="sec sec--paper" aria-labelledby="hold-h">
      <div className="wrap">
        <SplitWords as="h2" id="hold-h" className="h2" text="Held to a number, in writing." />
        <Reveal as="p" className="lede" delay={0.15}>
          Six commitments written down on every project, so where things stand against the number is never a matter of opinion.
        </Reveal>
        <ol className="hold" role="list">
          {hold.map((h, i) => (
            <Reveal as="li" key={h.n} className="hold__item" delay={(i % 3) * 0.07}>
              <span className="hold__n" aria-hidden="true">{h.n}</span>
              <h3 className="hold__t">{h.t}</h3>
              <p className="hold__p">{h.p}</p>
            </Reveal>
          ))}
        </ol>
        <VerdictDesk />
      </div>
    </section>
  );
}

/* ---------- act two: the mirror, spoken one line at a time ---------- */

function MirrorLine({ text, i, n, p, last }) {
  const a = i / n;
  const b = (i + 1) / n;
  const w = 0.045;
  const keys = last ? [a, a + w * 1.5] : [a, a + w, b - w, b];
  const o = useTransform(p, keys, last ? [0, 1] : [0, 1, 1, 0]);
  const y = useTransform(p, keys, last ? [48, 0] : [48, 0, 0, -48]);
  const blur = useTransform(p, keys, last ? [10, 0] : [10, 0, 0, 10]);
  const filter = useMotionTemplate`blur(${blur}px)`;
  return (
    <motion.p className={`mirror__line ${last ? 'mirror__line--last' : ''}`} style={{ opacity: o, y, filter }}>
      {text}
    </motion.p>
  );
}

export function Mirror() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const scrollYProgress = useSceneProgress(ref);
  const lines = [...mirror, 'Here is what shipped looks like.'];
  const n = lines.length;
  const ring = useTransform(scrollYProgress, [0, 1], [0.6, 2.4]);

  if (reduce || STILL) {
    return (
      <section id="mirror" className="mirror mirror--static" aria-label="The problem, in four lines">
        <div className="mirror__stack">
          {lines.map((l, i) => (
            <p key={l} className={`mirror__line ${i === n - 1 ? 'mirror__line--last' : ''}`}>
              {l}
            </p>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section id="mirror" ref={ref} className="mirror" style={{ height: `${n * 78 + 40}vh` }} aria-label="The problem, in four lines">
      <div className="mirror__sticky">
        <motion.div className="mirror__rings" style={{ scale: ring }} aria-hidden="true">
          <i />
          <i />
          <i />
        </motion.div>
        <div className="mirror__stack">
          {lines.map((l, i) => (
            <MirrorLine key={l} text={l} i={i} n={n} p={scrollYProgress} last={i === n - 1} />
          ))}
        </div>
        <motion.div className="mirror__bar" style={{ scaleX: scrollYProgress }} aria-hidden="true" />
      </div>
    </section>
  );
}

/* ---------- the record, as figures ---------- */

function ProofCard({ item, i }) {
  const spot = useSpot();
  return (
    <Reveal className={`bezel proof proof--${item.id}`} delay={(i % 4) * 0.07}>
      <div className="bezel__in" {...spot}>
        {item.id === 'a' && <span className="beam" aria-hidden="true" />}
        <p className="proof__fig">
          <Count value={item.value} prefix={item.prefix} suffix={item.suffix} decimals={item.decimals} label={item.sr} />
        </p>
        <p className="proof__label">{item.label}</p>
        {item.note && <p className="proof__note">{item.note}</p>}
      </div>
    </Reveal>
  );
}

export function Proof() {
  return (
    <section id="proof" className="sec sec--dark" aria-labelledby="proof-h">
      <div className="wrap">
        <SplitWords as="h2" id="proof-h" className="h2" text="Here is what shipped looks like." />
        <div className="proof-grid">
          {proof.map((p, i) => (
            <ProofCard key={p.id} item={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- what the work runs on ---------- */

export function Toolbox() {
  return (
    <section id="toolbox" className="sec sec--paper" aria-labelledby="toolbox-h">
      <div className="wrap">
        <SplitWords as="h2" id="toolbox-h" className="h2" text="What the work runs on." />
        <Reveal as="p" className="lede" delay={0.15}>
          The practical skills and tools behind the record above, grouped by the job they do.
        </Reveal>
        <div className="tbx">
          {toolbox.map((g, i) => (
            <Reveal key={g.t} className="tbx__g" delay={(i % 2) * 0.07}>
              <h3 className="tbx__t">{g.t}</h3>
              <ul className="tbx__l" role="list">
                {g.items.map((x) => (
                  <li key={x} className="tbx__i">{x}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
