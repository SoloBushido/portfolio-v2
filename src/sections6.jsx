import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { moves, bets, gaps, builtOn } from './thinking.js';
import { EASE, SplitWords, Reveal, useSpot } from './ui.jsx';

function GapCard({ g, i }) {
  const spot = useSpot();
  return (
    <Reveal className="bezel gapcard" delay={(i % 4) * 0.06}>
      <div className="bezel__in" {...spot}>
        <p className="gapcard__ind">{g.industry}</p>
        <p className="gapcard__gap">{g.gap}</p>
        <p className="gapcard__why">
          <b>Why it persists.</b> {g.why}
        </p>
        <p className="gapcard__fix">
          <b>The fix.</b> {g.fix}
        </p>
        <p className="gapcard__m">{g.measure}</p>
      </div>
    </Reveal>
  );
}

export function Thinking() {
  const [id, setId] = useState(bets[0].id);
  const b = bets.find((x) => x.id === id);
  return (
    <section id="thinking" className="sec sec--paper" aria-labelledby="think-h">
      <div className="wrap">
        <SplitWords as="h2" id="think-h" className="h2" data-store="Developer notes" text="Thinking, shown, not claimed." />
        <Reveal as="p" className="lede" delay={0.15}>
          Seven moves made on every problem, seven bets that follow from them, and the daily gaps where the official number and the real incentive part ways. Each bet has a kill test, and none is a result.
        </Reveal>

        <ol className="moves" role="list">
          {moves.map((m, i) => (
            <Reveal as="li" key={m} className="moves__item" delay={i * 0.05}>
              {m}
            </Reveal>
          ))}
        </ol>

        <h3 className="think__sub">Seven bets, each with a way to prove it wrong</h3>
        <div className="bets">
          <ul className="bets__list" role="list">
            {bets.map((x) => (
              <li key={x.id}>
                <button type="button" className="bets__btn" aria-pressed={id === x.id} onClick={() => setId(x.id)} data-cursor="Open">
                  <span className="bets__ind">{x.industry}</span>
                  <span className="bets__name">{x.name}</span>
                </button>
              </li>
            ))}
          </ul>
          <div className="bets__panel" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.div key={b.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.45, ease: EASE }}>
                <p className="bets__tag">Hypothesis, not a result</p>
                <h4 className="bets__h">{b.name}</h4>
                <dl className="bets__dl">
                  <div>
                    <dt>What is actually true</dt>
                    <dd>{b.truth}</dd>
                  </div>
                  <div>
                    <dt>The move</dt>
                    <dd>{b.move}</dd>
                  </div>
                  <div>
                    <dt>Who it threatens</dt>
                    <dd>{b.threatens}</dd>
                  </div>
                  <div className="bets__kill">
                    <dt>The kill test</dt>
                    <dd>{b.kill}</dd>
                  </div>
                </dl>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <h3 className="think__sub">What people actually do when the number is at risk</h3>
        <div className="gapgrid">
          {gaps.map((g, i) => (
            <GapCard key={g.industry} g={g} i={i} />
          ))}
        </div>

        <h3 className="think__sub">Built on</h3>
        <ul className="tags tags--lg builton" role="list">
          {builtOn.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
