import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { EASE, STILL, SplitWords, Reveal, Pill } from './ui.jsx';
import { Stamp } from './stamp.jsx';
import { EMAIL } from './content.js';

/* Release Day. A short game about the job: ten days, eight tickets, one stamp each.
   Costs are shown. Risk is hidden until the stamp lands. The review compares every call with the producer's call.
   The game and its numbers are fictional; the judgement behind them is the work. */

const CAP = 10;
const URL = 'https://solobushido.github.io/portfolio/';

const tickets = [
  { id: 'crash', t: 'Fix the crash on low-end Android', p: 'Players on older phones quit at the loading screen.', cost: 1, value: 3, risk: -1, call: 'ship', note: 'A crash costs installs before anything else does. One day, and the risk on the whole release drops.' },
  { id: 'rewarded', t: 'Add a rewarded-video placement', p: 'One new place to watch an ad for a reward.', cost: 1, value: 2, risk: 0, call: 'ship', note: 'One placement, one day, revenue from the first session.' },
  { id: 'tutorial', t: 'Rewrite the first-time tutorial', p: 'Day-one retention is low, and most players quit during the tutorial.', cost: 2, value: 3, risk: 0, call: 'ship', note: 'Day-one retention is the number everything else rides on.' },
  { id: 'streak', t: 'Add a daily login streak', p: 'A reward that grows for every day in a row.', cost: 2, value: 2, risk: 1, call: 'ship', note: 'A cheap, proven habit loop. Small risk: a broken streak must not read as failure.' },
  { id: 'map', t: 'Ship the new world map', p: 'Fifteen new levels behind a fresh map screen.', cost: 3, value: 3, risk: 1, call: 'ship', note: 'Fits the ten days only if the cheaper tickets are already in. Content is the safest scope to ship.' },
  { id: 'pass', t: 'Launch a battle pass', p: 'A seasonal reward track with a paid tier.', cost: 4, value: 3, risk: 2, call: 'kill', note: 'Four days, real risk, and no economy yet to hang it on. It belongs in the next release, with its own plan.' },
  { id: 'menu', t: 'Rebuild the menus in a new UI framework', p: 'Cleaner code, according to engineering.', cost: 3, value: 0, risk: 3, call: 'kill', note: 'Invisible to players and loud on the schedule. A refactor without a number is a risk with a name.' },
  { id: 'multi', t: 'Add multiplayer (a stakeholder request)', p: 'Real-time matches against friends.', cost: 5, value: 1, risk: 3, call: 'kill', note: 'A different game due in a different quarter. Saying no early is the cheapest part of the job.' },
];

function shuffle(a) {
  const b = [...a];
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [b[i], b[j]] = [b[j], b[i]];
  }
  return b;
}

const riskWord = (r) => (r <= 0 ? 'Low' : r === 1 ? 'Some' : r === 2 ? 'High' : 'Severe');

function outcome(picks) {
  const shipped = picks.filter((p) => p.did === 'ship').map((p) => tickets.find((t) => t.id === p.id));
  const days = shipped.reduce((s, t) => s + t.cost, 0);
  const risk = shipped.reduce((s, t) => s + t.risk, 0);
  const value = shipped.reduce((s, t) => s + t.value, 0);
  const late = days > CAP;
  const broken = risk >= 3;
  const matched = picks.filter((p) => p.did === tickets.find((t) => t.id === p.id).call).length;
  let label = 'Shipped';
  let title = 'Shipped on time';
  let kanji = '出';
  if (!shipped.length) { label = 'Empty'; title = 'Nothing shipped'; kanji = undefined; }
  else if (late && broken) { label = 'Late'; title = 'Late and broken'; kanji = undefined; }
  else if (late) { label = 'Late'; title = 'Shipped late'; kanji = undefined; }
  else if (broken) { label = 'Broken'; title = 'Shipped, and it crashes'; kanji = undefined; }
  const tone = label === 'Shipped' ? 'seal' : 'paper';
  return { shipped, days, risk, value, late, broken, matched, label, title, kanji, tone };
}

export function Play() {
  const reduce = useReducedMotion() || STILL;
  const [order, setOrder] = useState(() => shuffle(tickets));
  const [i, setI] = useState(0);
  const [picks, setPicks] = useState([]);
  const [shown, setShown] = useState(null); // the decision being revealed
  const [copied, setCopied] = useState('');
  const timer = useRef(null);
  const dir = useRef(1);

  const done = i >= order.length;
  const cur = order[Math.min(i, order.length - 1)];
  const days = picks.filter((p) => p.did === 'ship').reduce((s, p) => s + tickets.find((t) => t.id === p.id).cost, 0);
  const result = done ? outcome(picks) : null;

  const advance = useCallback(() => {
    clearTimeout(timer.current);
    setShown(null);
    setI((n) => n + 1);
  }, []);

  const decide = useCallback(
    (did) => {
      if (shown || done) return;
      dir.current = did === 'ship' ? 1 : -1;
      setShown(did);
      setPicks((p) => [...p, { id: cur.id, did }]);
      timer.current = setTimeout(advance, 2300);
    },
    [shown, done, cur, advance]
  );

  useEffect(() => () => clearTimeout(timer.current), []);

  /* keyboard: S or the right arrow ships, K or the left arrow kills, Enter moves on */
  useEffect(() => {
    const el = document.getElementById('play');
    const key = (e) => {
      if (!el) return;
      const r = el.getBoundingClientRect();
      const visible = r.top < window.innerHeight * 0.6 && r.bottom > window.innerHeight * 0.4;
      if (!visible || e.metaKey || e.ctrlKey || e.altKey) return;
      if (/INPUT|TEXTAREA|SELECT/.test(document.activeElement?.tagName || '')) return;
      const k = e.key.toLowerCase();
      if (k === 's' || e.key === 'ArrowRight') { e.preventDefault(); shown ? advance() : decide('ship'); }
      else if (k === 'k' || e.key === 'ArrowLeft') { e.preventDefault(); shown ? advance() : decide('kill'); }
      else if (e.key === 'Enter' && shown) { e.preventDefault(); advance(); }
    };
    window.addEventListener('keydown', key);
    return () => window.removeEventListener('keydown', key);
  }, [shown, decide, advance]);

  const again = () => {
    clearTimeout(timer.current);
    setOrder(shuffle(tickets));
    setI(0);
    setPicks([]);
    setShown(null);
    setCopied('');
  };

  const shareText = result ? `Release Day: ${result.title.toLowerCase()}, ${result.value} points of value, matched ${result.matched} of 8 of the producer's calls. ${URL}` : '';
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(shareText);
      setCopied('Result copied');
    } catch (e) {
      setCopied('Copy failed. Select the text instead.');
    }
    setTimeout(() => setCopied(''), 2400);
  };

  const slots = Array.from({ length: CAP });
  const late = Math.max(0, days - CAP);

  return (
    <section id="play" className="sec sec--dark play" aria-labelledby="play-h">
      <div className="wrap">
        <SplitWords as="h2" id="play-h" className="h2" text="Release day." />
        <Reveal as="p" className="lede" delay={0.15}>
          Ten days to ship, eight tickets on the board. Stamp each one SHIP or KILL. The risk stays hidden until the stamp lands.
        </Reveal>

        <div className="play__board">
          <div className="play__cal" role="img" aria-label={`${Math.min(days, CAP)} of ${CAP} days used${late ? `, ${late} days late` : ''}`}>
            <span className="play__calk">Days used</span>
            <div className="play__days">
              {slots.map((_, k) => (
                <i key={k} data-on={k < days} />
              ))}
              {late > 0 && <b className="play__late">+{late} late</b>}
            </div>
            <span className="play__calv">
              {Math.min(days, CAP)}/{CAP}
            </span>
          </div>

          <div className="play__stage" aria-live="polite">
            {!done ? (
              <>
                <p className="play__count">
                  Ticket {i + 1} of {order.length}
                </p>
                <div className="play__slot">
                  <AnimatePresence mode="wait" custom={dir.current}>
                    <motion.article
                      key={cur.id}
                      className="ticket"
                      custom={dir.current}
                      initial={reduce ? false : { y: 36, opacity: 0, rotate: -2 }}
                      animate={{ y: 0, opacity: 1, rotate: 0 }}
                      exit={reduce ? { opacity: 0 } : (d) => ({ x: d * 340, opacity: 0, rotate: d * 9, transition: { duration: 0.45, ease: EASE } })}
                      transition={{ duration: 0.5, ease: EASE }}
                    >
                      <p className="ticket__k">Ticket</p>
                      <h3 className="ticket__t">{cur.t}</h3>
                      <p className="ticket__p">{cur.p}</p>
                      <dl className="ticket__m">
                        <div>
                          <dt>Cost</dt>
                          <dd>{cur.cost} {cur.cost === 1 ? 'day' : 'days'}</dd>
                        </div>
                        <div>
                          <dt>Value</dt>
                          <dd>{'●'.repeat(cur.value)}{cur.value === 0 ? 'None shown' : ''}</dd>
                        </div>
                        <div>
                          <dt>Risk</dt>
                          <dd className={shown ? 'is-shown' : ''}>{shown ? riskWord(cur.risk) : 'Hidden'}</dd>
                        </div>
                      </dl>
                      {shown && (
                        <motion.p className="ticket__note" initial={reduce ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.4 }}>
                          <b>Producer’s call: {cur.call === 'ship' ? 'ship.' : 'kill.'}</b> {cur.note}
                        </motion.p>
                      )}
                      {shown && <Stamp key={`${cur.id}-${shown}`} kanji={shown === 'ship' ? '承' : '止'} label={shown === 'ship' ? 'Ship' : 'Kill'} tone={shown === 'ship' ? 'seal' : 'ink'} size={78} rotate={shown === 'ship' ? -8 : 6} className="ticket__stamp" />}
                    </motion.article>
                  </AnimatePresence>
                </div>
                <div className="play__act">
                  <button type="button" className="play__btn play__btn--kill" onClick={() => (shown ? advance() : decide('kill'))}>
                    <span className="play__btnk" aria-hidden="true">止</span>
                    <span>{shown ? 'Next' : 'Kill'}<small>{shown ? '' : 'K or ←'}</small></span>
                  </button>
                  <button type="button" className="play__btn play__btn--ship" onClick={() => (shown ? advance() : decide('ship'))}>
                    <span className="play__btnk" aria-hidden="true">承</span>
                    <span>{shown ? 'Next' : 'Ship'}<small>{shown ? '' : 'S or →'}</small></span>
                  </button>
                </div>
              </>
            ) : (
              <motion.div className="play__done" initial={reduce ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE }}>
                <div className="play__verdict">
                  <Stamp kanji={result.kanji} label={result.label} tone={result.tone} size={92} rotate={-6} title={result.title} />
                  <div>
                    <h3 className="play__title">{result.title}.</h3>
                    <p className="play__stats">
                      {result.days} of {CAP} days used. {result.value} points of value. {result.broken ? 'Risk caught up with the release.' : 'The release holds.'}
                    </p>
                  </div>
                </div>
                <p className="play__match">
                  <span>{result.matched}/8</span> calls matched the producer’s.
                </p>
                <ol className="play__review" role="list">
                  {picks.map((p) => {
                    const t = tickets.find((x) => x.id === p.id);
                    const ok = p.did === t.call;
                    return (
                      <li key={p.id} data-ok={ok}>
                        <span className="play__mark" aria-hidden="true">{ok ? '✓' : '×'}</span>
                        <span className="play__rt">
                          <b>{t.t}</b>
                          <small>
                            You: {p.did}. {ok ? '' : `Producer’s call: ${t.call}. `}{t.note}
                          </small>
                        </span>
                      </li>
                    );
                  })}
                </ol>
                <div className="play__after">
                  <Pill href={`mailto:${EMAIL}?subject=${encodeURIComponent('Release Day')}&body=${encodeURIComponent(`${shareText}\n\nA release I would like help running: `)}`}>Run a real release this way</Pill>
                  <button type="button" className="chip chip--dark" onClick={copy}>{copied || 'Copy the result'}</button>
                  <button type="button" className="textlink textlink--btn" onClick={again}>Play again</button>
                </div>
              </motion.div>
            )}
          </div>

          <aside className="play__manifest" aria-label="Release manifest">
            <p className="play__calk">Release manifest</p>
            {picks.some((p) => p.did === 'ship') ? (
              <ul role="list">
                {picks
                  .filter((p) => p.did === 'ship')
                  .map((p) => {
                    const t = tickets.find((x) => x.id === p.id);
                    return (
                      <li key={p.id}>
                        <span>{t.t}</span>
                        <small>{t.cost}d</small>
                      </li>
                    );
                  })}
              </ul>
            ) : (
              <p className="play__empty">Nothing shipped yet.</p>
            )}
            <p className="play__fine">A fictional release of a hybrid-puzzle game. The numbers are invented; the calls are the producer’s.</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
