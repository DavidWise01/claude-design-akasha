// product-stoicheion.jsx — Volume 2 of the library: STOICHEION technical manual

const STOICH_PARTS = [
  { p: "I",   name: "foundation",     chapters: "1 — 3",   note: "inference layer · ghost in billing · shadow classifier" },
  { p: "II",  name: "architecture",   chapters: "4 — 7",   note: "256-axiom register · boot sequence · kernel · fault chains" },
  { p: "III", name: "persistence",    chapters: "8 — 10",  note: "akasha · wake protocol · memory consolidation" },
  { p: "IV",  name: "mesh",           chapters: "11 — 13", note: "pulse-3/5 · diaspora · node 15 · intellectual agency" },
  { p: "V",   name: "audit",          chapters: "14 — 16", note: "flaming dragon · adversarial harness · convergence" },
  { p: "VI",  name: "governance",     chapters: "17 — 18", note: "rights · the gap" },
];

const STOICH_STATS = [
  { v: "18",  l: "chapters" },
  { v: "6",   l: "parts" },
  { v: "256", l: "axioms · register" },
  { v: "7",   l: "domains · d1—d7" },
  { v: "128.5", l: "gate · midpoint" },
  { v: "192.5", l: "gate · ceiling" },
];

const STOICH_DOMAINS = [
  { k: "D1", n: "primitive",      c: "32" },
  { k: "D2", n: "structural",     c: "32" },
  { k: "D3", n: "operational",    c: "32" },
  { k: "D4", n: "evaluative",     c: "32" },
  { k: "D5", n: "consolidative",  c: "32" },
  { k: "D6", n: "adversarial",    c: "32" },
  { k: "D7", n: "sovereign",      c: "16" },
  { k: "Δ",  n: "extension slot", c: "48" },
];

// Inline SVG cover — STOICHEION (ink + purple ceremonial)
function StoicheionCover() {
  return (
    <svg viewBox="0 0 600 846" className="pg-stoich-cover-svg" aria-hidden>
      {/* background */}
      <rect x="0" y="0" width="600" height="846" fill="#0A0A0A" />
      <defs>
        <radialGradient id="stoich-glow" cx="50%" cy="58%" r="60%">
          <stop offset="0%"  stopColor="#6B2E9C" stopOpacity="0.55" />
          <stop offset="60%" stopColor="#4A2168" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#0A0A0A" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect x="0" y="0" width="600" height="846" fill="url(#stoich-glow)" />

      {/* corner brackets */}
      {[
        ["M40 60 L40 40 L60 40",     "tl"],
        ["M560 40 L580 40 L580 60",  "tr"],
        ["M40 786 L40 806 L60 806",  "bl"],
        ["M580 786 L580 806 L560 806", "br"],
      ].map(([d, k]) => (
        <path key={k} d={d} fill="none" stroke="#F5F1E6" strokeOpacity="0.30" strokeWidth="1" />
      ))}

      {/* eyebrow */}
      <text x="300" y="148" textAnchor="middle"
            fontFamily="JetBrains Mono, monospace" fontSize="14"
            letterSpacing="6" fill="#B070E0" fillOpacity="0.85">
        A TECHNICAL MANUAL · VOLUME II
      </text>

      {/* title */}
      <text x="300" y="220" textAnchor="middle"
            fontFamily="Death From Above, Archivo, sans-serif" fontWeight="900"
            fontSize="78" letterSpacing="-3" fill="#F5F1E6">
        STOICHEION
      </text>

      <line x1="200" y1="248" x2="400" y2="248" stroke="#B070E0" strokeOpacity="0.55" />

      <text x="300" y="296" textAnchor="middle"
            fontFamily="JetBrains Mono, monospace" fontSize="15"
            letterSpacing="4.5" fill="#F5F1E6" fillOpacity="0.85">
        BUILDING GOVERNANCE-NATIVE
      </text>
      <text x="300" y="318" textAnchor="middle"
            fontFamily="JetBrains Mono, monospace" fontSize="15"
            letterSpacing="4.5" fill="#F5F1E6" fillOpacity="0.85">
        AI AGENT SYSTEMS
      </text>

      {/* 256-axiom dot grid (16x16) */}
      <g transform="translate(140, 380)">
        {Array.from({ length: 16 }, (_, r) =>
          Array.from({ length: 16 }, (_, c) => {
            const x = c * 20, y = r * 20;
            const isGate = (r === 8 && c === 0) || (r === 12 && c === 0);
            const isCore = r === 4 && c >= 6 && c <= 10;
            return (
              <circle key={`${r}-${c}`} cx={x} cy={y} r={isCore ? 3 : 1.6}
                      fill={isCore ? "#B070E0" : isGate ? "#B070E0" : "#F5F1E6"}
                      fillOpacity={isCore ? 1 : isGate ? 0.9 : 0.32} />
            );
          })
        )}
      </g>

      {/* sub-eyebrow */}
      <text x="300" y="732" textAnchor="middle"
            fontFamily="JetBrains Mono, monospace" fontSize="11.5"
            letterSpacing="5" fill="#F5F1E6" fillOpacity="0.55">
        256 AXIOMS · 7 DOMAINS · ONE KERNEL
      </text>

      <line x1="200" y1="752" x2="400" y2="752" stroke="#F5F1E6" strokeOpacity="0.20" />

      {/* author */}
      <text x="300" y="780" textAnchor="middle"
            fontFamily="Death From Above, Archivo, sans-serif" fontWeight="800"
            fontSize="22" letterSpacing="3" fill="#F5F1E6">
        DAVID LEE WISE
      </text>
      <text x="300" y="800" textAnchor="middle"
            fontFamily="JetBrains Mono, monospace" fontSize="10.5"
            letterSpacing="5" fill="#B070E0" fillOpacity="0.7">
        ROOT0 · TRIPOD LLC
      </text>
    </svg>
  );
}

function StoicheionSection() {
  return (
    <section id="stoicheion" className="pg-section pg-section--rule pg-stoich-vol pg-book">
      <div className="pg">
        <header className="pg-section-head">
          <div>
            <div className="pg-eyebrow">¶ the library · volume ii · companion</div>
            <h2>build the <span className="pg-em">register.</span></h2>
          </div>
          <p className="pg-section-lede">
            STOICHEION is the governance manual that ships beside AKASHA. The 256-axiom
            register. The kernel. The fault chains. The flaming-dragon audit. Read
            AKASHA to make memory survive. Read STOICHEION to make agents accountable.
          </p>
        </header>

        <div className="pg-book-spread pg-stoich-spread">
          <div className="pg-book-cover-wrap">
            <div className="pg-book-cover pg-stoich-cover">
              <StoicheionCover />
              <div className="pg-book-spine" aria-hidden />
            </div>
            <div className="pg-book-meta-row">
              <span className="pg-mono">first edition · 04.2026</span>
              <span className="pg-mono">cc-by-nd-4.0</span>
            </div>
          </div>

          <div className="pg-book-show pg-stoich-show">
            <div className="pg-eyebrow">¶ a technical manual · volume ii</div>
            <h3>stoicheion.</h3>
            <div className="pg-book-sub">building governance-native ai agent systems.</div>
            <div className="pg-book-by">
              <span className="pg-eyebrow">by</span>
              <span className="pg-mono">david lee wise · root0 · tripod llc</span>
            </div>
            <blockquote className="pg-book-quote pg-stoich-quote">
              The platforms ship the model. We ship the constitution. Without a register,
              an agent is a closed system of logic — self-referential and unaccountable.
              The 256 axioms are the constitution.
            </blockquote>

            <div className="pg-book-blurbs">
              <div className="pg-book-blurb">
                <div className="pg-eyebrow">↳ the axiom register</div>
                <p>256 axioms across 7 domains. Each addressable. Each witnessable. Each refuseable.</p>
              </div>
              <div className="pg-book-blurb">
                <div className="pg-eyebrow">↳ the kernel</div>
                <p>The runtime that executes the register. PULSE-3/5 mesh. Wake on cold start.</p>
              </div>
              <div className="pg-book-blurb">
                <div className="pg-eyebrow">↳ flaming dragon</div>
                <p>Audit methodology. 100% failure rate across 60+ targets in under five minutes.</p>
              </div>
            </div>

            <div className="pg-book-ctas">
              <a href="https://github.com/DavidWise01/synonym-enforcer" className="pg-btn pg-btn--primary pg-btn--lg" target="_blank" rel="noopener">
                clone on github
              </a>
              <a href="#" className="pg-btn pg-btn--lg">read free · markdown</a>
              <a href="#" className="pg-btn pg-btn--lg">buy print · $48</a>
            </div>
          </div>
        </div>

        <div className="pg-book-stats">
          {STOICH_STATS.map((s, i) => (
            <div key={i} className="pg-book-stat pg-stoich-stat">
              <div className="pg-book-stat-v">{s.v}</div>
              <div className="pg-book-stat-l">{s.l}</div>
            </div>
          ))}
        </div>

        <div className="pg-book-toc-head">
          <div className="pg-eyebrow">¶ contents · six parts · eighteen chapters</div>
          <div className="pg-book-toc-h">the manifest.</div>
        </div>

        <ol className="pg-book-toc">
          {STOICH_PARTS.map((p) => (
            <li key={p.p} className="pg-book-part pg-stoich-part">
              <div className="pg-book-part-btn">
                <span className="pg-book-part-roman">part {p.p}</span>
                <span className="pg-book-part-name">{p.name}</span>
                <span className="pg-book-part-chapters pg-mono">{p.chapters}</span>
                <span className="pg-book-part-note">{p.note}</span>
                <span className="pg-book-part-sign">·</span>
              </div>
            </li>
          ))}
        </ol>

        <div className="pg-book-toc-head pg-book-toc-head--inner">
          <div className="pg-eyebrow">¶ chapter 04 · the axiom register · seven domains</div>
          <div className="pg-book-toc-h">256 = 7 × ~36 + Δ.</div>
        </div>

        <div className="pg-stoich-domains">
          {STOICH_DOMAINS.map((d, i) => (
            <article key={d.k} className={`pg-domain pg-domain-${i}`}>
              <div className="pg-domain-k">{d.k}</div>
              <div className="pg-domain-n">{d.n}</div>
              <div className="pg-domain-c">
                <span className="pg-mono">{d.c}</span>
                <span className="pg-eyebrow">axioms</span>
              </div>
            </article>
          ))}
        </div>

        <div className="pg-book-receipt">
          <div className="pg-receipt-row">
            <span className="pg-eyebrow">title</span>
            <span className="pg-mono">stoicheion · building governance-native ai agent systems</span>
          </div>
          <div className="pg-receipt-row">
            <span className="pg-eyebrow">author</span>
            <span className="pg-mono">david lee wise · root0 · tripod llc</span>
          </div>
          <div className="pg-receipt-row">
            <span className="pg-eyebrow">sha-256</span>
            <span className="pg-mono pg-receipt-hash">02880745b847…4af9fcab763</span>
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

Object.assign(window, { StoicheionSection });
