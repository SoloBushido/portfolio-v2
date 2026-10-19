import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MotionConfig } from 'motion/react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import './index.css';
import './theme.css';
import App from './App.jsx';

// Inertial scrolling, switched off for reduced motion and for ?still captures.
const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches || /[?&]still/.test(window.location.search);
if (!calm) {
  const lenis = new Lenis({ duration: 1.15, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true });
  window.__lenis = lenis;
  const raf = (t) => {
    lenis.raf(t);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MotionConfig reducedMotion="user">
      <App />
    </MotionConfig>
  </StrictMode>
);
