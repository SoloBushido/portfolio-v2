import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'motion/react';
import { HEADLINE, ribbon } from './content.js';
import { Pill, SplitWords, Reveal, Marquee, STILL, scrollToId } from './ui.jsx';

/* The hero is a scatter plot. Most teams trade speed against quality, so almost every point sits on the same
   falling line. One does not: fast, and the standard held. The data is illustrative, and labelled that way. */

function rng(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const gauss = (r) => {
  let u = 0;
  let v = 0;
  while (!u) u = r();
  while (!v) v = r();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
};
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const easeOut = (t) => 1 - Math.pow(1 - t, 3);

const VIOLET = '138, 92, 255';
const BLUE = '79, 109, 255';
const GREEN = '61, 255, 162';
const LIGHT = '236, 233, 255';
const SIGMA = 0.065;

export function OutlierHero() {
  const wrap = useRef(null);
  const cv = useRef(null);
  const reduce = useReducedMotion() || STILL;
  const [pos, setPos] = useState({ x: 0, y: 0, sigma: 7 });

  useEffect(() => {
    const el = wrap.current;
    const c = cv.current;
    const ctx = c.getContext('2d');
    const small = window.matchMedia('(max-width: 900px)').matches;
    const N = small ? 360 : 780;
    const R = rng(11);
    const seeds = Array.from({ length: N }, () => ({ q: R(), n: gauss(R), s: 1.3 + R() * 1.9, c: R() < 0.62 ? 0 : 1, a: 0.5 + R() * 0.45, d: R() * 6.28, ex: R(), ey: R() }));
    let W = 0;
    let H = 0;
    let plot = { l: 0, t: 0, w: 0, h: 0 };
    let raf = 0;
    let first = true;
    const t0 = performance.now();
    const mouse = { x: -999, y: -999 };
    const P = seeds.map(() => ({ ox: 0, oy: 0, tx: 0, ty: 0, sx: 0, sy: 0 }));
    const out = { x: 0, y: 0, ty: 0 };

    const layout = () => {
      const r = el.getBoundingClientRect();
      W = r.width;
      H = r.height;
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      c.width = W * dpr;
      c.height = H * dpr;
      c.style.width = `${W}px`;
      c.style.height = `${H}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const padL = small ? 26 : 76;
      const padR = small ? 20 : 70;
      const padT = small ? 96 : 120;
      const padB = small ? 60 : 150;
      plot = { l: padL, t: padT, w: W - padL - padR, h: H - padT - padB };
      seeds.forEach((s, i) => {
        const p = P[i];
        p.tx = plot.l + s.q * plot.w;
        p.ty = plot.t + (0.2 + 0.58 * s.q + s.n * SIGMA) * plot.h;
        if (first) {
          p.sx = s.ex * W;
          p.sy = s.ey * H;
        }
      });
      first = false;
      out.x = plot.l + 0.88 * plot.w;
      out.y = plot.t + 0.2 * plot.h;
      out.ty = plot.t + (0.2 + 0.58 * 0.88) * plot.h;
      setPos({ x: out.x, y: out.y, sigma: Math.round((out.ty - out.y) / (SIGMA * plot.h)) });
    };

    const grid = () => {
      ctx.lineWidth = 1;
      ctx.strokeStyle = `rgba(${VIOLET}, 0.1)`;
      ctx.beginPath();
      for (let x = plot.l; x <= plot.l + plot.w; x += 80) {
        ctx.moveTo(x, plot.t);
        ctx.lineTo(x, plot.t + plot.h);
      }
      for (let y = plot.t; y <= plot.t + plot.h; y += 80) {
        ctx.moveTo(plot.l, y);
        ctx.lineTo(plot.l + plot.w, y);
      }
      ctx.stroke();
      ctx.strokeStyle = `rgba(${LIGHT}, 0.4)`;
      ctx.beginPath();
      ctx.moveTo(plot.l, plot.t);
      ctx.lineTo(plot.l, plot.t + plot.h);
      ctx.lineTo(plot.l + plot.w, plot.t + plot.h);
      ctx.stroke();
      ctx.beginPath();
      for (let x = plot.l; x <= plot.l + plot.w; x += 80) {
        ctx.moveTo(x, plot.t + plot.h);
        ctx.lineTo(x, plot.t + plot.h + 6);
      }
      for (let y = plot.t; y <= plot.t + plot.h; y += 80) {
        ctx.moveTo(plot.l, y);
        ctx.lineTo(plot.l - 6, y);
      }
      ctx.stroke();
    };

    const frame = (now, still) => {
      const t = still ? 9 : (now - t0) / 1000;
      ctx.clearRect(0, 0, W, H);
      grid();
      // the line most teams sit on
      ctx.setLineDash([6, 7]);
      ctx.strokeStyle = `rgba(${BLUE}, 0.7)`;
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(plot.l, plot.t + 0.2 * plot.h);
      ctx.lineTo(plot.l + plot.w, plot.t + 0.78 * plot.h);
      ctx.stroke();
      ctx.setLineDash([]);
      const rad = small ? 60 : 110;
      for (let i = 0; i < N; i++) {
        const s = seeds[i];
        const p = P[i];
        const k = easeOut(clamp((t - 0.1 - i * 0.0011) / 1.15));
        let x = p.sx + (p.tx - p.sx) * k;
        let y = p.sy + (p.ty - p.sy) * k;
        x += Math.sin(t * 0.6 + s.d) * 1.8;
        y += Math.cos(t * 0.5 + s.d) * 1.8;
        const dx = x - mouse.x;
        const dy = y - mouse.y;
        const dist = Math.hypot(dx, dy);
        let wx = 0;
        let wy = 0;
        if (dist < rad && dist > 0.1) {
          const f = (1 - dist / rad) * 34;
          wx = (dx / dist) * f;
          wy = (dy / dist) * f;
        }
        p.ox += (wx - p.ox) * 0.14;
        p.oy += (wy - p.oy) * 0.14;
        ctx.fillStyle = `rgba(${s.c ? BLUE : VIOLET}, ${s.a * (0.25 + 0.75 * k)})`;
        ctx.beginPath();
        ctx.arc(x + p.ox, y + p.oy, s.s, 0, 6.2832);
        ctx.fill();
      }
      // the outlier
      const ko = easeOut(clamp((t - 1.6) / 0.7));
      if (ko > 0) {
        ctx.strokeStyle = `rgba(${GREEN}, ${0.7 * ko})`;
        ctx.setLineDash([4, 5]);
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(out.x, out.y + 10);
        ctx.lineTo(out.x, out.y + (out.ty - out.y) * ko);
        ctx.stroke();
        ctx.setLineDash([]);
        if (!still) {
          for (let q = 0; q < 2; q++) {
            const ph = (t * 0.45 + q * 0.5) % 1;
            ctx.strokeStyle = `rgba(${GREEN}, ${(1 - ph) * 0.55 * ko})`;
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.arc(out.x, out.y, 9 + ph * 30, 0, 6.2832);
            ctx.stroke();
          }
        }
        ctx.fillStyle = `rgb(${GREEN})`;
        ctx.beginPath();
        ctx.arc(out.x, out.y, 7.5 * ko, 0, 6.2832);
        ctx.fill();
      }
    };

    layout();
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    const onLeave = () => {
      mouse.x = -999;
      mouse.y = -999;
    };
    const ro = new ResizeObserver(() => {
      layout();
      if (reduce) frame(0, true);
    });
    ro.observe(el);
    if (reduce) {
      frame(0, true);
    } else {
      el.addEventListener('pointermove', onMove, { passive: true });
      el.addEventListener('pointerleave', onLeave);
      const loop = (now) => {
        frame(now, false);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    }
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerleave', onLeave);
    };
  }, [reduce]);

  return (
    <section id="top" ref={wrap} className="ohero" aria-labelledby="hero-h">
      <canvas ref={cv} className="ohero__cv" aria-hidden="true" />

      <p className="ohero__name" translate="no">
        Karthik Bindumon <span>Mumbai</span>
      </p>
      <p className="ohero__cap">Illustrative: most teams trade speed for quality, and land on the same line.</p>
      <span className="ohero__ay" aria-hidden="true">Speed of delivery →</span>
      <span className="ohero__ax" aria-hidden="true">Quality bar →</span>
      <p className="ohero__legend" aria-hidden="true">
        <i /> Most teams <i className="is-out" /> Outlier
      </p>

      <aside className="otip" style={{ '--ox': `${pos.x}px`, '--oy': `${pos.y}px` }} aria-label="The outlier">
        <span className="otip__tag">Outlier +{pos.sigma}σ</span>
        <div className="otip__who">
          <span className="otip__ph">
            <img src="assets/portrait-new.jpg" width="96" height="96" alt="Karthik Bindumon in sunglasses and a black hoodie, one hand at his chin." fetchPriority="high" />
          </span>
          <div>
            <p className="otip__n" translate="no">Karthik Bindumon</p>
            <p className="otip__d">Fast, and the standard held.</p>
          </div>
        </div>
        <dl className="otip__rows">
          <div>
            <dt>Led</dt>
            <dd>50+ people</dd>
          </div>
          <div>
            <dt>Shipped</dt>
            <dd>30+ games</dd>
          </div>
          <div>
            <dt>Cost per install</dt>
            <dd>under $1.50</dd>
          </div>
        </dl>
      </aside>

      <div className="ohero__copy">
        <h1 id="hero-h" className="ohero__h">
          <span className="sr">{HEADLINE.join(' ')}</span>
          <SplitWords aria-hidden="true" className="ohero__l" text={HEADLINE[0]} immediate delay={0.5} />
          <SplitWords aria-hidden="true" className="ohero__l ohero__l2" text={HEADLINE[1]} immediate delay={0.9} />
        </h1>
        <Reveal delay={1.5} y={14} className="ohero__lead">
          <p>Teams led. Workflows built. Products shipped. Numbers in writing.</p>
        </Reveal>
        <Reveal delay={1.65} y={14} className="ohero__act">
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
