import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion, animate, useInView } from 'motion/react';

export const EASE = [0.16, 1, 0.3, 1];
export const STILL = typeof window !== 'undefined' && /[?&]still/.test(window.location.search);

export function useFine() {
  const [fine, setFine] = useState(false);
  useEffect(() => {
    const m = window.matchMedia('(hover: hover) and (pointer: fine)');
    const on = () => setFine(m.matches);
    on();
    m.addEventListener('change', on);
    return () => m.removeEventListener('change', on);
  }, []);
  return fine;
}

export function useWide(px = 900) {
  const [wide, setWide] = useState(typeof window !== 'undefined' ? window.innerWidth > px : true);
  useEffect(() => {
    const m = window.matchMedia(`(min-width: ${px + 1}px)`);
    const on = () => setWide(m.matches);
    on();
    m.addEventListener('change', on);
    return () => m.removeEventListener('change', on);
  }, [px]);
  return wide;
}

/* Progress (0 to 1) through a tall pinned scene, measured fresh every frame so it can never go stale. */
export function useSceneProgress(ref) {
  const p = useMotionValue(0);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      p.set(total > 0 ? Math.min(1, Math.max(0, -r.top / total)) : 0);
    };
    const on = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', on, { passive: true });
    window.addEventListener('resize', on);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', on);
      window.removeEventListener('resize', on);
    };
  }, [ref, p]);
  return p;
}

export function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const lenis = window.__lenis;
  if (lenis) lenis.scrollTo(el, { offset: -8, duration: 1.4 });
  else el.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  try { history.replaceState(null, '', '#' + id); } catch (e) {}
  if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '-1');
  el.focus({ preventScroll: true });
}

/* Words rise out of a mask, one after another. */
export function SplitWords({ text, as = 'span', className, delay = 0, stagger = 0.055, immediate = false, ...rest }) {
  const M = motion[as];
  const trigger = immediate || STILL ? { animate: 'show' } : { whileInView: 'show', viewport: { once: true, margin: '0px 0px -12% 0px' } };
  return (
    <M className={className} aria-label={text} initial={STILL ? 'show' : 'hidden'} {...trigger} transition={{ staggerChildren: stagger, delayChildren: delay }} {...rest}>
      {text.split(' ').map((w, i) => (
        <span key={i}>
          <span className="word" aria-hidden="true">
            <motion.span className="word__in" variants={{ hidden: { y: '112%' }, show: { y: '0%' } }} transition={{ duration: 0.95, ease: EASE }}>
              {w}
            </motion.span>
          </span>{' '}
        </span>
      ))}
    </M>
  );
}

export function Reveal({ children, delay = 0, as = 'div', y = 22, className, ...rest }) {
  const M = motion[as];
  return (
    <M
      className={className}
      initial={STILL ? false : { opacity: 0, y, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.9, ease: EASE, delay }}
      {...rest}
    >
      {children}
    </M>
  );
}

/* The element leans toward the pointer, then settles. */
export function Magnetic({ children, strength = 0.28, className }) {
  const fine = useFine();
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 16, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 16, mass: 0.4 });
  const move = (e) => {
    if (!fine || reduce) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const leave = () => {
    x.set(0);
    y.set(0);
  };
  return (
    <motion.span ref={ref} className={`magnetic ${className || ''}`} style={{ x: sx, y: sy }} onPointerMove={move} onPointerLeave={leave}>
      {children}
    </motion.span>
  );
}

const Arrow = () => (
  <svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
    <path d="M5 15L15 5M7 5h8v8" />
  </svg>
);

/* Pill button with the arrow in its own circle, per the island-button pattern. */
export function Pill({ href, onClick, children, variant = 'seal', icon = true, ...rest }) {
  const Tag = href ? 'a' : 'button';
  return (
    <Magnetic>
      <Tag className={`pill pill--${variant}`} href={href} onClick={onClick} type={href ? undefined : 'button'} {...rest}>
        <span className="pill__label">{children}</span>
        {icon && (
          <span className="pill__ico">
            <Arrow />
          </span>
        )}
      </Tag>
    </Magnetic>
  );
}

export function Marquee({ items, className, speed = 42 }) {
  const [paused, setPaused] = useState(false);
  const list = [...items, ...items];
  return (
    <div className={`marquee ${className || ''}`} style={{ '--speed': `${speed}s` }} data-paused={paused} aria-label={items.join(', ')} role="group">
      <div className="marquee__track" aria-hidden="true">
        {list.map((t, i) => (
          <span key={i} className={`marquee__item ${i >= items.length ? 'marquee__item--dup' : ''}`}>
            {t}
            <i className="marquee__dot" />
          </span>
        ))}
      </div>
      <button type="button" className="marquee__pause" aria-pressed={paused} onClick={() => setPaused((p) => !p)}>
        <span className="sr">Pause the ticker</span>
        <svg viewBox="0 0 20 20" width="14" height="14" fill="currentColor" aria-hidden="true">
          {paused ? <path d="M6 4l10 6-10 6z" /> : <path d="M5 4h3.5v12H5zM11.5 4H15v12h-3.5z" />}
        </svg>
      </button>
    </div>
  );
}

export function Count({ value, prefix = '', suffix = '', decimals = 0, label }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -15% 0px' });
  const [n, setN] = useState(STILL ? value : 0);
  useEffect(() => {
    if (!inView || STILL) return;
    const c = animate(0, value, { duration: 1.8, ease: EASE, onUpdate: (v) => setN(v) });
    return () => c.stop();
  }, [inView, value]);
  return (
    <span ref={ref} className="count">
      <span className="sr">{label || `${prefix}${value.toFixed(decimals)}${suffix}`}</span>
      <span aria-hidden="true">
        {prefix}
        {n.toFixed(decimals)}
        {suffix}
      </span>
    </span>
  );
}

/* A soft light that follows the pointer inside a card. */
export function useSpot() {
  return {
    onPointerMove: (e) => {
      const r = e.currentTarget.getBoundingClientRect();
      e.currentTarget.style.setProperty('--sx', `${e.clientX - r.left}px`);
      e.currentTarget.style.setProperty('--sy', `${e.clientY - r.top}px`);
    },
  };
}

export function Cursor() {
  const fine = useFine();
  const reduce = useReducedMotion();
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 420, damping: 36, mass: 0.35 });
  const sy = useSpring(y, { stiffness: 420, damping: 36, mass: 0.35 });
  const [label, setLabel] = useState('');
  const [down, setDown] = useState(false);
  const [on, setOn] = useState(false);
  useEffect(() => {
    if (!fine) return;
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setOn(true);
    };
    const over = (e) => {
      const t = e.target.closest?.('[data-cursor], a, button, summary, [role="button"]');
      setLabel(t ? t.dataset?.cursor || (t.matches('a,button,summary') ? ' ' : '') : '');
    };
    const leave = () => setOn(false);
    const md = () => setDown(true);
    const mu = () => setDown(false);
    window.addEventListener('pointermove', move, { passive: true });
    window.addEventListener('pointerover', over, { passive: true });
    window.addEventListener('pointerdown', md);
    window.addEventListener('pointerup', mu);
    document.documentElement.addEventListener('pointerleave', leave);
    return () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerover', over);
      window.removeEventListener('pointerdown', md);
      window.removeEventListener('pointerup', mu);
      document.documentElement.removeEventListener('pointerleave', leave);
    };
  }, [fine, x, y]);
  if (!fine || reduce) return null;
  const big = label.trim().length > 0;
  return (
    <motion.div className="cursor" aria-hidden="true" style={{ x: sx, y: sy, opacity: on ? 1 : 0 }}>
      <motion.span className="cursor__ring" animate={{ width: big ? 84 : label ? 52 : 14, height: big ? 84 : label ? 52 : 14, scale: down ? 0.86 : 1 }} transition={{ duration: 0.35, ease: EASE }}>
        {big && <span className="cursor__label">{label}</span>}
      </motion.span>
    </motion.div>
  );
}

/* A square vermilion seal with an uneven, inked edge. */
export function Hanko({ size = 120 }) {
  return (
    <svg className="hanko" width={size} height={size} viewBox="0 0 100 100" aria-hidden="true" focusable="false">
      <defs>
        <filter id="hanko-ink" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" seed="9" result="warp" />
          <feDisplacementMap in="SourceGraphic" in2="warp" scale="3.5" xChannelSelector="R" yChannelSelector="G" result="rough" />
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="3" result="grain" />
          <feColorMatrix in="grain" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -7 4.7" result="voids" />
          <feComposite in="rough" in2="voids" operator="in" />
        </filter>
      </defs>
      <g filter="url(#hanko-ink)">
        <rect x="6" y="6" width="88" height="88" fill="#0d0e11" />
        <rect x="14" y="14" width="72" height="72" fill="none" stroke="#efeee9" strokeWidth="2.5" />
        <text x="50" y="65" textAnchor="middle" fontSize="46" fontFamily="'Libre Caslon Text', serif" fill="#efeee9">KB</text>
      </g>
    </svg>
  );
}
