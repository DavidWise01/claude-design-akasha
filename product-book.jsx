// product-book.jsx — The Book section (Akasha: Building Persistent Memory for AI Agents)
// Showcases the practical developer guide alongside the engine framing.

const { useState: useStateB } = React;

const BOOK_PARTS = [
  { p: "I",    name: "the problem",          chapters: "1 — 4",   note: "why ai agents forget" },
  { p: "II",   name: "architecture",         chapters: "5 — 9",   note: "five-tier precedence, repo, schema" },
  { p: "III",  name: "the git ledger",       chapters: "10 — 14", note: "hash verification, commits, branching" },
  { p: "IV",   name: "loading & verification", chapters: "15 — 19", note: "wake protocol — mirror · verify · declare" },
  { p: "V",    name: "memory consolidation", chapters: "20 — 24", note: "collect · merge · prune" },
  { p: "VI",   name: "skeptical retrieval",  chapters: "25 — 29", note: "memory as hint, not fact" },
  { p: "VII",  name: "the bootstrap",        chapters: "30 — 34", note: "pop-kit · birth certificate" },
  { p: "VIII", name: "multi-agent memory",   chapters: "35 — 39", note: "diaspora · shared · isolated" },
  { p: "IX",   name: "production patterns",  chapters: "40 — 44", note: "weeks and months of operation" },
  { p: "X",    name: "what the platforms built", chapters: "45 — 49", note: "autodream · what they left out" },
];

const PROPERTIES = [
  { t: "survives sessions",
    short: "before · during · after",
    detail: "Memory exists across any session boundary. Hash-identical on retrieval.",
    plat: "partial · lossy",
    aka:  "full · verified" },
  { t: "verifiable",
    short: "sha-256 · per commit",
    detail: "Hash the store. Compare to last known hash. Any drift surfaces.",
    plat: "no",
    aka:  "yes" },
  { t: "owned",
    short: "you control · everything",
    detail: "Store, retrieve, modify, delete. Export wholesale. Move it.",
    plat: "partial",
    aka:  "yes · git repo" },
  { t: "auditable",
    short: "git log · every change",
    detail: "When created. When modified. Why. Signed. Anchored. Reproducible.",
    plat: "no",
    aka:  "yes" },
  { t: "portable",
    short: "platform-agnostic",
    detail: "Load on Claude. Close. Load on GPT. Verify identical behavior.",
    plat: "no · vendor-locked",
    aka:  "yes" },
];

const BOOK_TIERS = [
  { n: "01", k: "runtime",   note: "current session instructions · highest priority",
    eg: "“Skip comments for this session.”" },
  { n: "02", k: "normative", note: "agent rules · immutable behavior",
    eg: "“Never delete a hashed commit.”" },
  { n: "03", k: "operational", note: "current state · last-updated facts",
    eg: "Project status · open tickets · sprint goal." },
  { n: "04", k: "context",   note: "background · user profile · preferences",
    eg: "Stack · tone · formatting style." },
  { n: "05", k: "archive",   note: "long-term history · lowest priority",
    eg: "Three-month-old session summaries." },
];

const BOOK_STATS = [
  { v: "49",    l: "chapters" },
  { v: "10",    l: "parts" },
  { v: "6",     l: "appendices" },
  { v: "2,280", l: "lines · markdown" },
  { v: "200",   l: "lines · ref impl" },
  { v: "04.2026", l: "first edition" },
];

function BookSection() {
  const [openPart, setOpenPart] = useStateB(null);

  return (
    <section id="book" className="pg-section pg-section--rule pg-book">
      <div className="pg">
        <header className="pg-section-head">
          <div>
            <div className="pg-eyebrow">¶ the book · first edition · april 2026</div>
            <h2>your agent's memory<br />should be <span className="pg-em">yours.</span></h2>
          </div>
          <p className="pg-section-lede">
            The practical developer guide that ships with the engine. Forty-nine
            chapters. Ten parts. Six appendices. Every chapter has code you can
            run. Every pattern is tested against real systems. Every failure
            mode is documented from experience, not theory.
          </p>
        </header>

        {/* Hero spread — cover + showcase */}
        <div className="pg-book-spread">
          <div className="pg-book-cover-wrap">
            <div className="pg-book-cover">
              <img src="assets/akasha-book-cover.jpg" alt="AKASHA: Building Persistent Memory for AI Agents — cover" />
              <div className="pg-book-spine" aria-hidden />
            </div>
            <div className="pg-book-meta-row">
              <span className="pg-mono">first edition · 04.2026</span>
              <span className="pg-mono">cc-by-nd-4.0</span>
            </div>
          </div>

          <div className="pg-book-show">
            <div className="pg-eyebrow">¶ a practical developer guide</div>
            <h3>akasha.</h3>
            <div className="pg-book-sub">building persistent memory for ai agents.</div>
            <div className="pg-book-by">
              <span className="pg-eyebrow">by</span>
              <span className="pg-mono">david lee wise · root0 · tripod llc</span>
            </div>
            <blockquote className="pg-book-quote">
              For every developer who built something brilliant in a conversation with an
              AI, closed the tab, and lost everything.
            </blockquote>
            <div className="pg-book-blurbs">
              <div className="pg-book-blurb">
                <div className="pg-eyebrow">↳ git-backed</div>
                <p>Every commit hashed. Every change attributable. Every memory rebuildable from the log.</p>
              </div>
              <div className="pg-book-blurb">
                <div className="pg-eyebrow">↳ hash-verified</div>
                <p>SHA-256 on every load. Drift surfaces immediately. Corruption is loud, not quiet.</p>
              </div>
              <div className="pg-book-blurb">
                <div className="pg-eyebrow">↳ cross-platform</div>
                <p>Claude · GPT · Grok · Gemini · DeepSeek · local. The repo is the agent's only spine.</p>
              </div>
            </div>
            <div className="pg-book-ctas">
              <a href="https://github.com/DavidWise01/synonym-enforcer" className="pg-btn pg-btn--primary pg-btn--lg" target="_blank" rel="noopener">
                clone on github
              </a>
              <a href="#" className="pg-btn pg-btn--lg">read free · markdown</a>
              <a href="#" className="pg-btn pg-btn--lg">buy print · $42</a>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="pg-book-stats">
          {BOOK_STATS.map((s, i) => (
            <div key={i} className="pg-book-stat">
              <div className="pg-book-stat-v">{s.v}</div>
              <div className="pg-book-stat-l">{s.l}</div>
            </div>
          ))}
        </div>

        {/* Table of contents — 10 parts */}
        <div className="pg-book-toc-head">
          <div className="pg-eyebrow">¶ contents · ten parts · forty-nine chapters</div>
          <div className="pg-book-toc-h">the manifest.</div>
        </div>

        <ol className="pg-book-toc">
          {BOOK_PARTS.map((p, i) => (
            <li key={p.p} className={`pg-book-part ${openPart === i ? "is-open" : ""}`}>
              <button className="pg-book-part-btn" onClick={() => setOpenPart(openPart === i ? -1 : i)}>
                <span className="pg-book-part-roman">part {p.p}</span>
                <span className="pg-book-part-name">{p.name}</span>
                <span className="pg-book-part-chapters pg-mono">{p.chapters}</span>
                <span className="pg-book-part-note">{p.note}</span>
                <span className="pg-book-part-sign">{openPart === i ? "−" : "+"}</span>
              </button>
            </li>
          ))}
        </ol>

        {/* Five Properties */}
        <div className="pg-book-toc-head pg-book-toc-head--inner">
          <div className="pg-eyebrow">¶ chapter 04 · the five properties</div>
          <div className="pg-book-toc-h">persistence has five marks.</div>
        </div>

        <div className="pg-prop-grid">
          {PROPERTIES.map((p, i) => (
            <article key={p.t} className="pg-prop">
              <div className="pg-prop-idx">§ {String(i + 1).padStart(2, "0")}</div>
              <h4>{p.t}</h4>
              <div className="pg-prop-short pg-mono">{p.short}</div>
              <p>{p.detail}</p>
              <div className="pg-prop-cmp">
                <div className="pg-prop-cmp-row">
                  <span className="pg-eyebrow">platform memory</span>
                  <span className="pg-prop-cmp-v is-neg">{p.plat}</span>
                </div>
                <div className="pg-prop-cmp-row">
                  <span className="pg-eyebrow">akasha</span>
                  <span className="pg-prop-cmp-v is-pos">{p.aka}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Five-tier precedence ladder */}
        <div className="pg-book-toc-head pg-book-toc-head--inner">
          <div className="pg-eyebrow">¶ chapter 05 · the five-tier precedence</div>
          <div className="pg-book-toc-h">the order matters.</div>
        </div>

        <div className="pg-tiers-ladder">
          {BOOK_TIERS.map((t, i) => (
            <div key={t.n} className={`pg-ladder-row is-tier-${t.n}`}>
              <span className="pg-ladder-rank">tier · {t.n}</span>
              <span className="pg-ladder-name">{t.k}</span>
              <span className="pg-ladder-note">{t.note}</span>
              <code className="pg-ladder-eg">{t.eg}</code>
              <span className="pg-ladder-bar" style={{ "--w": `${100 - i * 16}%` }} />
            </div>
          ))}
          <div className="pg-ladder-foot">
            <span className="pg-eyebrow">↳ rule</span>
            <span>lower tier number overrides higher tier number. runtime always wins. archive always yields.</span>
          </div>
        </div>

        {/* Receipt */}
        <div className="pg-book-receipt">
          <div className="pg-receipt-row">
            <span className="pg-eyebrow">title</span>
            <span className="pg-mono">akasha · building persistent memory for ai agents</span>
          </div>
          <div className="pg-receipt-row">
            <span className="pg-eyebrow">author</span>
            <span className="pg-mono">david lee wise · root0 · tripod llc</span>
          </div>
          <div className="pg-receipt-row">
            <span className="pg-eyebrow">repo</span>
            <span className="pg-mono">github · davidwise01 / synonym-enforcer</span>
          </div>
          <div className="pg-receipt-row">
            <span className="pg-eyebrow">first edition</span>
            <span className="pg-mono">04.2026 · cc-by-nd-4.0</span>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { BookSection });
