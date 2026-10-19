import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'motion/react';
import { HEADLINE, ribbon } from './content.js';
import { Marquee, STILL, scrollToId } from './ui.jsx';

/* The opening is a poster, not an interface. A halftone screenprint of the portrait is generated live from the
   photograph: black ink and blue ink on ultraviolet, printed slightly out of register. The dots swell under the cursor. */

function Halftone({ src, still }) {
  const ref = useRef(null);
  useEffect(() => {
    const cv = ref.current;
    const host = cv.parentElement;
    const ctx = cv.getContext('2d');
    const img = new Image();
    img.src = src;
    const small = window.matchMedia('(max-width: 900px)').matches;
    const s = small ? 6 : 7;
    let W = 0;
    let H = 0;
    let lum = null;
    let raf = 0;
    let grow = still ? 1 : 0;
    let dirty = true;
    const m = { x: -9999, y: -9999, k: 0, tk: 0 };
    let last = performance.now();

    const prep = () => {
      const r = host.getBoundingClientRect();
      W = Math.max(1, Math.round(r.width));
      H = Math.max(1, Math.round(r.height));
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      cv.width = W * dpr;
      cv.height = H * dpr;
      cv.style.width = `${W}px`;
      cv.style.height = `${H}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const o = document.createElement('canvas');
      o.width = W;
      o.height = H;
      const oc = o.getContext('2d', { willReadFrequently: true });
      oc.fillStyle = '#fff';
      oc.fillRect(0, 0, W, H);
      const sc = Math.max(W / img.width, H / img.height) * 1.04;
      const iw = img.width * sc;
      const ih = img.height * sc;
      oc.drawImage(img, (W - iw) * 0.5, (H - ih) * 0.25, iw, ih);
      const d = oc.getImageData(0, 0, W, H).data;
      lum = new Float32Array(W * H);
      for (let i = 0; i < W * H; i++) lum[i] = (0.3 * d[i * 4] + 0.59 * d[i * 4 + 1] + 0.11 * d[i * 4 + 2]) / 255;
      dirty = true;
    };

    const layer = (angle, ox, oy, color, gain, blend) => {
      const c = Math.cos(angle);
      const sn = Math.sin(angle);
      const half = Math.hypot(W, H) / 2;
      ctx.globalCompositeOperation = blend;
      ctx.fillStyle = color;
      ctx.beginPath();
      for (let u = -half; u < half; u += s) {
        for (let v = -half; v < half; v += s) {
          const x = W / 2 + u * c - v * sn;
          const y = H / 2 + u * sn + v * c;
          if (x < 0 || y < 0 || x >= W || y >= H) continue;
          const l = lum[(y | 0) * W + (x | 0)];
          const dk = Math.max(0, (1 - l - 0.1) * 1.3);
          let r = Math.sqrt(Math.min(1, dk)) * s * 0.64 * gain * grow;
          const dx = x - m.x;
          const dy = y - m.y;
          r *= 1 + 0.7 * Math.exp(-(dx * dx + dy * dy) / 16000) * m.k;
          if (r < 0.4) continue;
          ctx.moveTo(x + ox + r, y + oy);
          ctx.arc(x + ox, y + oy, r, 0, 6.2832);
        }
      }
      ctx.fill();
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      layer(0.785, 0, 0, '#06050d', 1, 'source-over');
      layer(0.262, 4, 3, 'rgba(26, 40, 255, 0.9)', 0.92, 'multiply');
      ctx.globalCompositeOperation = 'source-over';
    };

    const frame = (now) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (grow < 1) {
        grow = Math.min(1, grow + dt / 1.3);
        dirty = true;
      }
      if (Math.abs(m.tk - m.k) > 0.004) {
        m.k += (m.tk - m.k) * 0.12;
        dirty = true;
      }
      if (dirty && lum) {
        draw();
        dirty = false;
      }
      raf = requestAnimationFrame(frame);
    };

    const onMove = (e) => {
      const r = host.getBoundingClientRect();
      m.x = e.clientX - r.left;
      m.y = e.clientY - r.top;
      m.tk = 1;
      dirty = true;
    };
    const onLeave = () => {
      m.tk = 0;
    };

    img.onload = () => {
      prep();
      if (still) draw();
      else raf = requestAnimationFrame(frame);
    };
    const ro = new ResizeObserver(() => {
      if (img.complete && img.naturalWidth) {
        prep();
        if (still) draw();
      }
    });
    ro.observe(host);
    if (!still) {
      host.parentElement.addEventListener('pointermove', onMove, { passive: true });
      host.parentElement.addEventListener('pointerleave', onLeave);
    }
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      host.parentElement?.removeEventListener('pointermove', onMove);
      host.parentElement?.removeEventListener('pointerleave', onLeave);
    };
  }, [src, still]);
  return <canvas ref={ref} className="poster__ht" aria-hidden="true" />;
}

const tape = [...ribbon, 'Numbers in writing', 'Kill it early', 'Verdict, even when it is no'];

export function Poster() {
  const reduce = useReducedMotion() || STILL;
  return (
    <section id="top" className="poster" aria-labelledby="hero-h">
      <div className="poster__panel">
        <Halftone src="assets/portrait-new.jpg" still={reduce} />
        <img className="sr" src="assets/portrait-new.jpg" width="420" height="420" alt="Karthik Bindumon in sunglasses and a black hoodie, one hand at his chin." />
      </div>
      <p className="poster__bar poster__bar--a" aria-hidden="true">Numbers in writing.</p>
      <p className="poster__bar poster__bar--b" aria-hidden="true">Kill it early.</p>

      <svg className="poster__sticker" viewBox="0 0 200 200" aria-hidden="true" focusable="false">
        <defs>
          <path id="stk" d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0" />
        </defs>
        <circle cx="100" cy="100" r="98" fill="#3dffa2" stroke="#06050d" strokeWidth="3" />
        <g className="poster__spin">
          <text fontSize="13" fontWeight="800" letterSpacing="1.5" fill="#06050d" fontFamily="Martian Mono, monospace">
            <textPath href="#stk">ONE HUMAN IN THE LOOP ✺ NUMBERS IN WRITING ✺</textPath>
          </text>
        </g>
        <circle cx="100" cy="100" r="44" fill="#06050d" />
        <text x="100" y="116" textAnchor="middle" fontSize="50" fontWeight="800" fill="#3dffa2" fontFamily="Bricolage Grotesque, sans-serif">1</text>
      </svg>

      <p className="poster__name" translate="no">
        Karthik Bindumon <span>Mumbai</span>
      </p>
      <p className="poster__man">No decks. No theatre. The number, in writing, and one person answerable for it.</p>

      <h1 id="hero-h" className="poster__h">
        <span className="sr">{HEADLINE.join(' ')}</span>
        <span className="poster__l1" aria-hidden="true">PRODUCER,</span>
        <span className="poster__l2" aria-hidden="true">AI-FIRST.</span>
        <span className="poster__l3" aria-hidden="true">{HEADLINE[1].toUpperCase()}</span>
      </h1>

      <div className="poster__act">
        <a className="pill pill--seal" href="#play" onClick={(e) => { e.preventDefault(); scrollToId('play'); }}>
          <span className="pill__label">Play Release Day</span>
          <span className="pill__ico">→</span>
        </a>
        <a className="textlink" href="#fit" onClick={(e) => { e.preventDefault(); scrollToId('fit'); }}>
          See the fit
        </a>
      </div>

      <Marquee className="tape tape--hero" items={tape} speed={30} />
    </section>
  );
}
