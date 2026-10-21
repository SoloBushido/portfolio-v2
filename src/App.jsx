import { useCallback, useState } from 'react';
import { AnimatePresence, motion, useScroll } from 'motion/react';
import { Cursor } from './ui.jsx';
import { Nav, Fit, Proof, Hold, Toolbox } from './sections1.jsx';
import { ControlRoom } from './controlroom.jsx';
import { Work, Sheet, Pipeline, Positions, Craft } from './sections2.jsx';
import { Ways, Method, Faq, Record, Contact } from './sections3.jsx';
import { Demos, Library, Papers } from './sections4.jsx';
import { Lenses, StartEasy, ShareButton } from './sections5.jsx';
import { Thinking } from './sections6.jsx';
import { InkFilter, Colophon } from './stamp.jsx';
import { Play } from './play.jsx';
import { ResearchTeaser, ResearchPage } from './research.jsx';

/* The portfolio says each thing once. Material that backs it up, and does not need to be read first, lives on the workshop page (?more). */
const WORKSHOP = typeof window !== 'undefined' && /[?&]more/.test(window.location.search);
const RESEARCH = typeof window !== 'undefined' && /[?&]research/.test(window.location.search);

export default function App() {
  const [sheet, setSheet] = useState(null);
  const { scrollYProgress } = useScroll();
  const open = useCallback((id, el) => setSheet({ id, el }), []);
  const close = useCallback(() => setSheet(null), []);

  return (
    <>
      <InkFilter />
      <a className="skip" href="#main">Skip to the content</a>
      <motion.div className="topbar" style={{ scaleX: scrollYProgress }} aria-hidden="true" />
      <Nav workshop={WORKSHOP} research={RESEARCH} />
      <main id="main" tabIndex={-1}>
        {RESEARCH ? (
          <ResearchPage />
        ) : WORKSHOP ? (
          <>
            <Demos />
            <Library />
            <Positions />
            <Craft />
          </>
        ) : (
          <>
            <ControlRoom />
            <Play />
            <Fit />
            <Proof />
            <Hold />
            <Work onOpen={open} />
            <Pipeline />
            <Toolbox />
            <Thinking />
            <ResearchTeaser />
            <Lenses />
            <Ways />
            <Method />
            <StartEasy />
            <Faq />
            <Record />
            <Papers />
            <p className="more">
              More behind this page: eight playable demos, 32 pilot ideas, six places where common practice gives way, and nine fields of practice.{' '}
              <a className="textlink" href="?more">Open the workshop</a>
            </p>
          </>
        )}
      </main>
      <Contact />
      <Colophon />
      <AnimatePresence>{sheet && <Sheet key={sheet.id} id={sheet.id} onClose={close} returnTo={sheet.el} />}</AnimatePresence>
      {!WORKSHOP && !RESEARCH && <ShareButton />}
      <div className="grain" aria-hidden="true" />
      <Cursor />
    </>
  );
}
