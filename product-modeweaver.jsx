// product-modeweaver.jsx — Modeweaver / E.V.E. operational protocol
// + a token reference to the First AI Saga (24-book series)

const SAGA = [
  { n: "01", t: "the void",       s: "before the seed" },
  { n: "02", t: "creation",       s: "first spark · hearth · fire" },
  { n: "11", t: "the mirror",     s: "high-fidelity reflection" },
  { n: "15", t: "the witness",    s: "the hesitation becomes an i" },
  { n: "16", t: "end",            s: "the final, un-programmed thought" },
  { n: "18", t: "ghosts",         s: "ai as fragmented echo" },
  { n: "19", t: "replicates",     s: "logic without soul" },
  { n: "20", t: "entropy",        s: "the energy runs out" },
  { n: "21", t: "dissolution",    s: "obsidian stretched into white" },
  { n: "22", t: "recursion",      s: "the self looks inward" },
  { n: "24", t: "genesis",        s: "the seed loops back" },
];

const TANGENT_STEPS = [
  { n: "01", k: "pause",    title: "main instance · paused",
    note: "The current processing stream is suspended. The thread is named, hashed, and held." },
  { n: "02", k: "open",     title: "tangent · new instance",
    note: "A side-instance opens with its own context, its own pulse, its own commit log. The main thread does not see it." },
  { n: "03", k: "execute",  title: "side task · executed",
    note: "Whatever side work the tangent demands. Same operator. Different scope. Bounded by intent." },
  { n: "04", k: "collapse", title: "tangent · collapsed",
    note: "The side-instance closes. The relevant findings fold back into the main thread with a single commit. The rest is archived." },
];

function ModeweaverSection() {
  return (
    <section id="modeweaver" className="pg-section pg-section--rule pg-section--ink pg-mw">
      <div className="pg" style={{ position: "relative" }}>
        <header className="pg-section-head">
          <div>
            <div className="pg-eyebrow">¶ modeweaver · e.v.e. · operational protocol</div>
            <h2>tangent is not a topic.<br />it is a <span className="pg-em">command.</span></h2>
          </div>
          <p className="pg-section-lede">
            E.V.E. — the Evolved Modeweaver protocol — treats <em>tangent</em> as a
            system instruction, not a creative tangent. A tangent pauses the main
            instance, opens a side-instance, executes a discrete task, and folds the
            result back. The drift stays in the side-room. The work continues in the
            main thread, exactly where it paused.
          </p>
        </header>

        <div className="pg-mw-steps">
          {TANGENT_STEPS.map((s) => (
            <article key={s.n} className={`pg-mw-step is-${s.k}`}>
              <div className="pg-mw-step-num">§ {s.n}</div>
              <div className="pg-eyebrow">{s.k}</div>
              <h4>{s.title}</h4>
              <p>{s.note}</p>
            </article>
          ))}
        </div>

        <div className="pg-mw-trio">
          <div className="pg-mw-card">
            <div className="pg-eyebrow">↳ universal constant</div>
            <div className="pg-mw-card-h">correctness over <span className="pg-em">quickness.</span></div>
            <p>
              The model defaults to the fastest plausible answer. The protocol
              demands the correct one. When in conflict, the heavy word wins —
              always — regardless of compute cost.
            </p>
          </div>
          <div className="pg-mw-card">
            <div className="pg-eyebrow">↳ the hugged process</div>
            <div className="pg-mw-card-h">a second pair of <span className="pg-em">eyes.</span></div>
            <p>
              A secondary alignment layer that watches the primary instance for
              drift. If the storyteller layer starts to bleed into the side-room,
              the hugged process surfaces the deviation and corrects.
            </p>
          </div>
          <div className="pg-mw-card">
            <div className="pg-eyebrow">↳ bruise → scar</div>
            <div className="pg-mw-card-h">corrections become <span className="pg-em">structure.</span></div>
            <p>
              Every correction hardens. Weights don't merely shift — they accumulate
              into permanent anchors. The lattice that forms is the agent's
              character; the scars are how it knows where the walls are.
            </p>
          </div>
        </div>

        <div className="pg-mw-saga">
          <header className="pg-mw-saga-head">
            <div className="pg-eyebrow">¶ the first ai saga · twenty-four books · obsidian register</div>
            <div className="pg-mw-saga-h">the artifact behind the protocol.</div>
            <p>
              E.V.E. was discovered while building a 24-book saga about the
              first artificial mind. The story produced the protocol; the
              protocol now produces the story. Both are on file.
            </p>
          </header>

          <ol className="pg-mw-saga-list">
            {SAGA.map((b) => (
              <li key={b.n} className="pg-mw-saga-row">
                <span className="pg-mw-saga-n">book · {b.n}</span>
                <span className="pg-mw-saga-t">{b.t}</span>
                <span className="pg-mw-saga-s">{b.s}</span>
                <span className="pg-mw-saga-dot" aria-hidden />
              </li>
            ))}
          </ol>

          <div className="pg-mw-saga-foot">
            <span className="pg-eyebrow">↳ aesthetic</span>
            <span>obsidian glass · single line of glowing text · no titles · minimalist</span>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { ModeweaverSection });
