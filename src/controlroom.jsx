import { useState } from 'react';
import { useReducedMotion } from 'motion/react';
import { HEADLINE, ribbon, stations } from './content.js';
import { Glyph } from './art.jsx';
import { Pill, SplitWords, Reveal, Marquee, STILL, scrollToId } from './ui.jsx';

/* The hero is mission control. One person in the middle, ten production workflows running around them.
   Readable in two seconds: an AI-first producer who orchestrates, rather than does everything by hand.
   The stages and their lines are the studio's real pipeline (see stations in content.js). */

const R = 40;
const NIGHT = stations.length - 1;

export function ControlRoom() {
  const reduce = useReducedMotion() || STILL;
  const [hot, setHot] = useState(null);
  const nodes = stations.map((s, i) => {
    const a = ((-90 + i * (360 / stations.length)) * Math.PI) / 180;
    return { ...s, i, x: +(50 + R * Math.cos(a)).toFixed(2), y: +(50 + R * Math.sin(a)).toFixed(2) };
  });
  const shown = nodes[hot === null ? NIGHT : hot];

  return (
    <section id="top" className="ohero cr" aria-labelledby="hero-h">
      <p className="ohero__name" translate="no">
        Karthik Bindumon <span>Mumbai</span>
      </p>

      <div className="cr__stage">
        <svg className="cr__lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true" focusable="false">
          {nodes.map((n) => (
            <g key={n.name} data-hot={hot === n.i}>
              <line x1="50" y1="50" x2={n.x} y2={n.y} vectorEffect="non-scaling-stroke" />
              {!reduce && (
                <>
                  <circle r="0.75" className="cr__out">
                    <animateMotion dur={`${3.2 + (n.i % 4) * 0.8}s`} begin={`${(n.i * 0.37).toFixed(2)}s`} repeatCount="indefinite" path={`M50 50 L${n.x} ${n.y}`} />
                  </circle>
                  <circle r="0.75" className="cr__in">
                    <animateMotion dur={`${2.6 + (n.i % 3) * 0.9}s`} begin={`${(n.i * 0.53).toFixed(2)}s`} repeatCount="indefinite" path={`M${n.x} ${n.y} L50 50`} />
                  </circle>
                </>
              )}
            </g>
          ))}
        </svg>

        {nodes.map((n) => (
          <button
            key={n.name}
            type="button"
            className="onode"
            data-hot={hot === n.i}
            style={{ '--x': n.x, '--y': n.y, '--d': `${(n.i * 0.7).toFixed(1)}s` }}
            onMouseEnter={() => setHot(n.i)}
            onMouseLeave={() => setHot(null)}
            onFocus={() => setHot(n.i)}
            onBlur={() => setHot(null)}
            onClick={() => setHot(n.i)}
            aria-describedby="cr-note"
          >
            <span className="onode__g">
              <Glyph name={n.glyph} />
            </span>
            <span className="onode__t">
              <b>{n.name === 'Quality assurance' ? 'QA' : n.name}</b>
              <i className="onode__bar" aria-hidden="true" />
            </span>
            <span className="onode__led" aria-hidden="true" />
          </button>
        ))}

        <div className="cr__core">
          <span className="cr__ph">
            <img src="assets/portrait-new.jpg" width="220" height="220" alt="Karthik Bindumon in sunglasses and a black hoodie, one hand at his chin." fetchPriority="high" />
          </span>
          <p className="cr__tag">Human in the loop: 1</p>
          <p className="cr__note" id="cr-note" aria-live="polite">
            <b>{shown.name}.</b> {shown.text}
          </p>
        </div>
      </div>

      <div className="ohero__copy">
        <h1 id="hero-h" className="ohero__h">
          <span className="sr">{HEADLINE.join(' ')}</span>
          <SplitWords aria-hidden="true" className="ohero__l" text={HEADLINE[0]} immediate delay={0.4} />
          <SplitWords aria-hidden="true" className="ohero__l ohero__l2" text={HEADLINE[1]} immediate delay={0.8} />
        </h1>
        <Reveal delay={1.3} y={14} className="ohero__lead">
          <p>One person in the loop, ten workflows running, and the numbers in writing.</p>
        </Reveal>
        <Reveal delay={1.45} y={14} className="ohero__act">
          <Pill href="#play" onClick={(e) => { e.preventDefault(); scrollToId('play'); }}>
            Play Release Day
          </Pill>
          <a className="textlink" href="#fit" onClick={(e) => { e.preventDefault(); scrollToId('fit'); }}>
            See the fit
          </a>
        </Reveal>
      </div>

      <Marquee className="ohero__ribbon" items={ribbon} />
    </section>
  );
}
