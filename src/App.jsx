import { useCallback, useState } from 'react';
import { AnimatePresence, motion, useScroll } from 'motion/react';
import { Cursor } from './ui.jsx';
import { Nav, Hero, Fit, Proof } from './sections1.jsx';
import { Work, Sheet, Pipeline, Positions, Craft } from './sections2.jsx';
import { Diagnostic, Ways, Method, Faq, Record, Contact } from './sections3.jsx';
import { Demos, Library, Papers } from './sections4.jsx';
import { Lenses, StartEasy, ShareButton } from './sections5.jsx';
import { Thinking } from './sections6.jsx';

export default function App() {
  const [sheet, setSheet] = useState(null);
  const { scrollYProgress } = useScroll();
  const open = useCallback((id, el) => setSheet({ id, el }), []);
  const close = useCallback(() => setSheet(null), []);

  return (
    <>
      <a className="skip" href="#main">Skip to the content</a>
      <motion.div className="topbar" style={{ scaleX: scrollYProgress }} aria-hidden="true" />
      <Nav />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Fit />
        <Proof />
        <Lenses />
        <Work onOpen={open} />
        <Pipeline />
        <Positions />
        <Craft />
        <Thinking />
        <Demos />
        <Library />
        <Diagnostic onOpen={open} />
        <Ways />
        <Method />
        <StartEasy />
        <Faq />
        <Record />
        <Papers />
      </main>
      <Contact />
      <AnimatePresence>{sheet && <Sheet key={sheet.id} id={sheet.id} onClose={close} returnTo={sheet.el} />}</AnimatePresence>
      <ShareButton />
      <div className="grain" aria-hidden="true" />
      <Cursor />
    </>
  );
}
