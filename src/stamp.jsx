import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { STILL } from './ui.jsx';

/* The design language: a document that gets stamped. In Japanese business the hanko is the mark of personal
   accountability, which is the whole point of this page. Stamps land hard, they are never faded in. */

/* One rough-ink filter, defined once and used by every stamp and seal. */
export function InkFilter() {
  return (
    <svg width="0" height="0" aria-hidden="true" focusable="false" style={{ position: 'absolute' }}>
      <defs>
        <filter id="stamp-ink" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="2" seed="4" result="warp" />
          <feDisplacementMap in="SourceGraphic" in2="warp" scale="2" xChannelSelector="R" yChannelSelector="G" result="rough" />
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed="7" result="grain" />
          <feColorMatrix in="grain" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -5 4.4" result="voids" />
          <feComposite in="rough" in2="voids" operator="in" />
        </filter>
      </defs>
    </svg>
  );
}

export function Stamp({ kanji, label, title, tone = 'seal', rotate = -6, size = 88, delay = 0, className = '' }) {
  const reduce = useReducedMotion();
  const still = reduce || STILL;
  return (
    <motion.span
      className={`stamp stamp--${tone} ${label ? 'stamp--wide' : ''} ${className}`}
      role="img"
      aria-label={title || label || 'Seal'}
      style={{ '--s': `${size}px`, ...(still ? { rotate } : null) }}
      initial={still ? false : { scale: 1.9, opacity: 0, rotate: rotate - 12 }}
      whileInView={still ? undefined : { scale: 1, opacity: 1, rotate }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{ type: 'spring', stiffness: 640, damping: 15, mass: 0.8, delay }}
    >
      <span className="stamp__in">
        {kanji && (
          <b className="stamp__k" aria-hidden="true">
            {kanji}
          </b>
        )}
        {label && (
          <span className="stamp__l" aria-hidden="true">
            {label}
          </span>
        )}
      </span>
    </motion.span>
  );
}

const verdicts = [
  { id: 'yes', label: 'Yes', kanji: '承', tone: 'seal', rotate: -7, note: 'The number moved. Scale it, with the control still running.' },
  { id: 'no', label: 'No', kanji: '止', tone: 'ink', rotate: 5, note: 'The number did not move. Stop here: the cost stays small and the finding is kept.' },
  { id: 'maybe', label: 'Not enough', tone: 'seal', rotate: -4, note: 'The result is too small to call. Extend with a tighter test, and say so in writing.' },
];

/* Press a verdict onto an example report. All three are allowed, which is the point. */
export function VerdictDesk() {
  const [pick, setPick] = useState(null);
  const [n, setN] = useState(0);
  const v = verdicts.find((x) => x.id === pick);
  return (
    <figure className="desk">
      <div className="desk__doc marks">
        <p className="desk__k">Example pilot report, week 8</p>
        <dl className="desk__dl">
          <div>
            <dt>Number</dt>
            <dd>Repeat contacts per 100 calls</dd>
          </div>
          <div>
            <dt>Target</dt>
            <dd>Down 10%</dd>
          </div>
          <div>
            <dt>Result</dt>
            <dd>Down 4%</dd>
          </div>
        </dl>
        <p className="desk__q">Verdict</p>
        <div className="desk__slot">{v && <Stamp key={`${v.id}-${n}`} kanji={v.kanji} label={v.label} tone={v.tone} rotate={v.rotate} size={74} title={`Verdict: ${v.label}`} />}</div>
      </div>
      <figcaption className="desk__side">
        <p className="desk__lead">Try the verdict desk.</p>
        <div className="desk__tray" role="group" aria-label="Press a verdict">
          {verdicts.map((x) => (
            <button
              key={x.id}
              type="button"
              className="chip"
              aria-pressed={pick === x.id}
              onClick={() => {
                setPick(x.id);
                setN((c) => c + 1);
              }}
            >
              {x.label}
            </button>
          ))}
        </div>
        <p className="desk__note" aria-live="polite">
          {v ? v.note : 'Every pilot ends with one of three verdicts. All three are allowed.'}
        </p>
      </figcaption>
    </figure>
  );
}

/* The colophon: how the page was printed. */
export function Colophon() {
  const inks = [
    ['Ink', '#0d0e11', 'var(--ink)'],
    ['Paper', '#efeee9', 'var(--paper)'],
    ['Vermilion', '#c92a19', 'var(--seal)'],
  ];
  return (
    <aside className="colophon" aria-label="Colophon">
      <p className="colophon__k">Colophon</p>
      <ul className="colophon__inks" role="list">
        {inks.map(([name, hex, v]) => (
          <li key={name}>
            <i style={{ background: v }} aria-hidden="true" />
            <span>
              {name}
              <small>{hex}</small>
            </span>
          </li>
        ))}
      </ul>
      <p className="colophon__t">Printed in three colours. Set in Libre Caslon and Zen Kaku Gothic New, with the seals in Zen Old Mincho. Every claim stamped, none faded in.</p>
    </aside>
  );
}
