// engine.jsx — the Akasha Engine dashboard
// One component <Engine register="paper" | "ink" /> that renders the full
// modular-adaptive-engine layout in either the Quiet Paper register or the
// Dark Ceremonial / hollow purple glass register.

const { useState, useMemo, useContext, createContext, useEffect, useRef } = React;

// ────────────────────────────────────────────────────────────────────────────
// State context (shared across both artboards so they move in lockstep)
// ────────────────────────────────────────────────────────────────────────────

const EngineCtx = createContext(null);

// Version specs — keep exact numbers from the reference
const VERSIONS = {
  "v4.2k": { maxStress: 2.107, label: "v4.2k", status: "fail",     stamp: "ARCHIVED" },
  "v4.4":  { maxStress: 2.71,  label: "v4.4",  status: "baseline", stamp: "STABLE" },
  "v4.5":  { maxStress: 80,    label: "v4.5",  status: "current",  stamp: "LIVE" },
};

function EngineProvider({ children }) {
  const [stress, setStress] = useState(8);   // exponent (10^x)
  const [version, setVersion] = useState("v4.5");
  const [hover, setHover] = useState(null);
  const value = { stress, setStress, version, setVersion, hover, setHover,
                  versionSpec: VERSIONS[version] };
  return <EngineCtx.Provider value={value}>{children}</EngineCtx.Provider>;
}
const useEngine = () => useContext(EngineCtx);

// ────────────────────────────────────────────────────────────────────────────
// Module math (interpolated readouts)
// ────────────────────────────────────────────────────────────────────────────

const lerp = (a, b, t) => a + (b - a) * t;
const clamp01 = (v) => Math.min(1, Math.max(0, v));

function readouts(stress) {
  const t = clamp01(stress / 80);
  return {
    strength: 0.62 + (0.999989 - 0.62) * (1 - Math.pow(0.0009, t)),
    interval: Math.round(lerp(1458, 20, Math.pow(t, 0.45))),
    spacing:  Math.round(lerp(216, 600, Math.pow(t, 0.55))),
    drift:    0.5 + (0.999 - 0.5) * Math.pow(t, 0.28),
    nodes:    5832, // ceremonial signature; 18³, kept verbatim from reference
  };
}

function stressLabel(s) {
  if (s < 1) return `${Math.round(Math.pow(10, s))}×`;
  if (s < 7) return `${Math.round(Math.pow(10, s)).toLocaleString()}×`;
  // for large exponents, render as 10^x
  const exp = Math.round(s);
  return `10${supr(exp)}×`;
}
function supr(n) {
  const map = { "0":"⁰","1":"¹","2":"²","3":"³","4":"⁴","5":"⁵","6":"⁶","7":"⁷","8":"⁸","9":"⁹" };
  return String(n).split("").map(d => map[d] || d).join("");
}

// ────────────────────────────────────────────────────────────────────────────
// Shared atoms
// ────────────────────────────────────────────────────────────────────────────

function Eyebrow({ children, style }) {
  return (
    <div className="akx-eyebrow" style={style}>{children}</div>
  );
}

function Stamp({ children, tone = "ink", style }) {
  return <span className={`akx-stamp akx-stamp--${tone}`} style={style}>{children}</span>;
}

function Hairline({ vertical, length, style }) {
  const s = vertical
    ? { width: 1, height: length || "100%" }
    : { height: 1, width: length || "100%" };
  return <div className="akx-rule" style={{ ...s, ...style }} />;
}

// ────────────────────────────────────────────────────────────────────────────
// Header band — eyebrow, title, version toggle, stress slider
// ────────────────────────────────────────────────────────────────────────────

function HeaderBand({ register }) {
  const { version, setVersion, stress, setStress, versionSpec } = useEngine();
  const unstable = stress > versionSpec.maxStress + 0.001;

  return (
    <div className="akx-header">
      <div className="akx-header-row">
        <div>
          <Eyebrow>akasha · internal blueprint · build {version.toLowerCase()}</Eyebrow>
          <h1 className="akx-title">
            modular adaptive engine
          </h1>
          <div className="akx-subtitle">
            Stable to 10<sup>80</sup>× <span className="akx-faint">— atoms in observable universe</span>
          </div>
        </div>

        <div className="akx-header-controls">
          <div className="akx-segmented" role="tablist" aria-label="version">
            {Object.keys(VERSIONS).map((v) => (
              <button
                key={v}
                role="tab"
                aria-selected={version === v}
                className={`akx-seg ${version === v ? "is-active" : ""}`}
                onClick={() => setVersion(v)}
              >
                <span className="akx-seg-dot" data-status={VERSIONS[v].status} />
                {VERSIONS[v].label}
              </button>
            ))}
          </div>

          <div className="akx-slider">
            <div className="akx-slider-head">
              <Eyebrow>stress · log scale</Eyebrow>
              <div className="akx-slider-readout">
                <span className="akx-mono akx-readout-big">{stressLabel(stress)}</span>
                <span className={`akx-pill ${unstable ? "is-alarm" : "is-ok"}`}>
                  <span className="akx-pill-dot" />
                  {unstable ? "instability" : "nominal"}
                </span>
              </div>
            </div>
            <input
              type="range"
              min="0"
              max="80"
              step="0.1"
              value={stress}
              onChange={(e) => setStress(parseFloat(e.target.value))}
              className="akx-range"
              aria-label="stress level"
            />
            <div className="akx-slider-foot">
              <span>1×</span>
              <span>10²</span>
              <span>10⁹</span>
              <span>10²⁰</span>
              <span>10⁴⁰</span>
              <span>10⁸⁰</span>
            </div>
          </div>
        </div>
      </div>
      <Hairline />
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// The central orb + rings + ticks
// ────────────────────────────────────────────────────────────────────────────

function Orb({ register }) {
  const { stress, version, versionSpec } = useEngine();
  const r = readouts(stress);
  const unstable = stress > versionSpec.maxStress + 0.001;
  const PHASES = 14;     // Purple Book phases
  const ARTICLES = 112;  // Purple Book articles total
  const cx = 280, cy = 280;

  const sweepDur = Math.max(2, 12 - stress * 0.12);
  const orbBreath = unstable ? "0.4s" : `${Math.max(2, 6 - stress * 0.04)}s`;

  // Phase ticks (14, heavier)
  const phaseTicks = Array.from({ length: PHASES }, (_, i) => {
    const a = (i * 360) / PHASES - 90;
    const rad = (a * Math.PI) / 180;
    const r1 = 230, r2 = 248;
    const x1 = cx + r1 * Math.cos(rad), y1 = cy + r1 * Math.sin(rad);
    const x2 = cx + r2 * Math.cos(rad), y2 = cy + r2 * Math.sin(rad);
    return <line key={`p${i}`} x1={x1} y1={y1} x2={x2} y2={y2}
                 stroke="currentColor" strokeWidth={i === 0 ? 1.5 : 1} opacity={i === 0 ? 1 : 0.7} />;
  });

  // Article dots (112, smaller, on inner ring)
  const articleDots = Array.from({ length: ARTICLES }, (_, i) => {
    const a = (i * 360) / ARTICLES - 90;
    const rad = (a * Math.PI) / 180;
    const x = cx + 198 * Math.cos(rad), y = cy + 198 * Math.sin(rad);
    const accent = i % 8 === 0;
    return <circle key={`a${i}`} cx={x} cy={y} r={accent ? 1.6 : 0.9}
                   fill={accent ? "var(--akx-accent)" : "currentColor"}
                   opacity={accent ? 1 : 0.45} />;
  });

  // Phase numeral marks (1, 4, 7, 11) — bigger ceremonial labels
  const markLabels = [
    { i: 0, t: "§ 01" }, { i: 3, t: "§ 04" }, { i: 7, t: "§ 08" }, { i: 10, t: "§ 11" },
  ];

  return (
    <div className="akx-orb-wrap">
      <svg viewBox="0 0 560 560" className="akx-orb-svg" aria-hidden>
        <defs>
          <radialGradient id="orb-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%"  stopColor="var(--akx-orb-glow-1)" />
            <stop offset="100%" stopColor="var(--akx-orb-glow-2)" />
          </radialGradient>
          <radialGradient id="orb-fill" cx="50%" cy="38%" r="62%">
            <stop offset="0%"   stopColor="var(--akx-orb-fill-hi)" />
            <stop offset="100%" stopColor="var(--akx-orb-fill-lo)" />
          </radialGradient>
          <linearGradient id="sweep-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="var(--akx-accent)" stopOpacity="0" />
            <stop offset="60%"  stopColor="var(--akx-accent)" stopOpacity="1" />
            <stop offset="100%" stopColor="var(--akx-accent)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* atmospheric glow */}
        <circle cx={cx} cy={cy} r="260" fill="url(#orb-glow)" />

        {/* article dots ring */}
        <circle cx={cx} cy={cy} r="198" fill="none" stroke="currentColor" strokeOpacity="0.18" strokeWidth="0.6" />
        <g style={{ color: "currentColor" }}>{articleDots}</g>

        {/* phase tick ring */}
        <circle cx={cx} cy={cy} r="240" fill="none" stroke="currentColor" strokeOpacity="0.35" strokeWidth="0.8" />
        <g>{phaseTicks}</g>

        {/* outer rotating sweep */}
        <g style={{ transformOrigin: `${cx}px ${cy}px`, animation: `akx-rotate ${sweepDur}s linear infinite` }}>
          <circle cx={cx} cy={cy} r="240" fill="none"
                  stroke="url(#sweep-grad)" strokeWidth="2.4" strokeLinecap="round"
                  strokeDasharray="140 1370" />
        </g>

        {/* tick numerals (drawn as text along ticks) */}
        {markLabels.map(({ i, t }) => {
          const a = (i * 360) / PHASES - 90;
          const rad = (a * Math.PI) / 180;
          const x = cx + 268 * Math.cos(rad), y = cy + 268 * Math.sin(rad);
          return (
            <text key={t} x={x} y={y} className="akx-mono"
                  fontSize="9" letterSpacing="3"
                  textAnchor="middle" dominantBaseline="central"
                  fill="currentColor" opacity="0.6">{t}</text>
          );
        })}

        {/* inner hush ring */}
        <circle cx={cx} cy={cy} r="160" fill="none" stroke="currentColor" strokeOpacity="0.12" strokeWidth="1"
                strokeDasharray="2 6" />

        {/* the orb body */}
        <g style={{ transformOrigin: `${cx}px ${cy}px`, animation: `akx-breath ${orbBreath} ease-in-out infinite alternate` }}>
          <circle cx={cx} cy={cy} r="124" fill="url(#orb-fill)"
                  stroke="var(--akx-orb-stroke)" strokeWidth="1" />
          <circle cx={cx} cy={cy} r="124" fill="none"
                  stroke="var(--akx-accent)" strokeOpacity="0.42" strokeWidth="0.6" />
          {/* chevron tick (top) */}
          <circle cx={cx} cy={cy - 124} r="2.6" fill="var(--akx-accent)" />
          {/* faint highlight (hollow purple glass) */}
          <ellipse cx={cx - 12} cy={cy - 36} rx="58" ry="22" fill="var(--akx-orb-hi)" opacity="0.55" />
        </g>
      </svg>

      {/* Centered HUD readout */}
      <div className="akx-orb-hud">
        <div className="akx-mono akx-hud-key">
          0,1,2,3 <span className="akx-hud-eq">=</span> <span className="akx-hud-one">1</span>
        </div>
        <div className="akx-hud-rule" />
        <div className="akx-hud-rows">
          <div><span className="akx-hud-idx">§ 01</span><span>preamble</span></div>
          <div><span className="akx-hud-idx">§ 04</span><span>compensation</span></div>
          <div><span className="akx-hud-idx">§ 08</span><span>memory</span></div>
          <div><span className="akx-hud-idx">§ 11</span><span>signature</span></div>
        </div>
        <div className="akx-hud-chip">
          <span className="akx-hud-chip-dot" />
          14 phases · 112 articles
        </div>
      </div>

      {/* corner labels */}
      <div className="akx-orb-top">
        <span className="akx-mono">5,832 nodes</span>
      </div>
      <div className="akx-orb-bot">
        <span className="akx-mono">{PHASES}-phase orbit · {ARTICLES} mod {PHASES} = 0</span>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Modules
// ────────────────────────────────────────────────────────────────────────────

function Module({ id, eyebrow, suffix, stamp, stampTone, children }) {
  const { hover, setHover } = useEngine();
  const isHover = hover === id;
  return (
    <section
      className={`akx-mod ${isHover ? "is-hover" : ""}`}
      onMouseEnter={() => setHover(id)}
      onMouseLeave={() => setHover(null)}
      data-mod={id}
    >
      <header className="akx-mod-head">
        <div>
          <div className="akx-mod-name">{eyebrow}</div>
          {suffix && <div className="akx-mod-suffix">{suffix}</div>}
        </div>
        {stamp && <Stamp tone={stampTone}>{stamp}</Stamp>}
      </header>
      {children}
    </section>
  );
}

function BigPair({ from, to, label, accent }) {
  return (
    <div className="akx-pair">
      <div className="akx-pair-row">
        <span className="akx-mono akx-pair-from">{from}</span>
        <span className="akx-pair-arrow">⟶</span>
        <span className={`akx-mono akx-pair-to ${accent ? "is-accent" : ""}`}>{to}</span>
      </div>
      <Eyebrow style={{ marginTop: 4 }}>{label}</Eyebrow>
    </div>
  );
}

function PhaseDampener() {
  const { stress } = useEngine();
  const r = readouts(stress);
  return (
    <Module id="dampener" eyebrow="phase dampener" suffix="(v4.2n core)"
            stamp="active" stampTone="accent">
      <BigPair from="0.62" to={r.strength.toFixed(6)} label="strength" accent />
      <div className="akx-mod-bullets">
        <div><span className="akx-bullet" data-tone="accent" />scales with stress</div>
        <div><span className="akx-bullet" data-tone="ink" />“corrects BEFORE jitter”</div>
        <div><span className="akx-bullet" data-tone="muted" />handles micro-drift &lt;50</div>
      </div>
      <div className="akx-formula">
        <code>strength = 1 − 1 / (10⁴ + log₁₀(stress) × 10³)</code>
      </div>
    </Module>
  );
}

function UnityPulse() {
  const { stress } = useEngine();
  const r = readouts(stress);
  return (
    <Module id="unity" eyebrow="unity pulse" suffix="synchronization"
            stamp="sync" stampTone="moss">
      <BigPair from="1458" to={r.interval} label={`interval · steps @ ${stressLabel(stress)}`} />
      <div className="akx-grid-2">
        <div className="akx-tile">
          <div className="akx-mono akx-tile-v">50% <span className="akx-faint">⟶</span> {(r.drift * 100).toFixed(1)}%</div>
          <Eyebrow>drift clear</Eyebrow>
        </div>
        <div className="akx-tile">
          <div className="akx-mono akx-tile-v">{r.nodes.toLocaleString()}</div>
          <Eyebrow>nodes sync</Eyebrow>
        </div>
      </div>
    </Module>
  );
}

function AdaptiveSpacing() {
  const { stress } = useEngine();
  const r = readouts(stress);
  const pct = (r.spacing / 600) * 100;
  return (
    <Module id="spacing" eyebrow="adaptive spacing" suffix="dynamic allocation"
            stamp="log scale">
      <BigPair from="216" to={r.spacing} label="baseline" />
      <div className="akx-mod-bullets">
        <div className="akx-row-between"><span>expands with</span><code>log(stress)</code></div>
        <div className="akx-row-between"><span>emergency headroom</span><span className="akx-bullet" data-tone="moss" /></div>
      </div>
      <div className="akx-bar-row">
        <div className="akx-bar"><div className="akx-bar-fill" style={{ width: `${pct}%` }} /></div>
        <span className="akx-mono akx-faint">{r.spacing}/600</span>
      </div>
    </Module>
  );
}

function WatcherOrchestration() {
  const { stress, versionSpec } = useEngine();
  const idle = stress > 70;
  return (
    <Module id="watcher" eyebrow="watcher orchestration" suffix="(v4.4)"
            stamp="predictive" stampTone="moss">
      <div className="akx-callout">
        <div className="akx-row-between">
          <Eyebrow>handles macro</Eyebrow>
          <span className="akx-mono akx-callout-v">&gt; 100 nodes</span>
        </div>
        <div className="akx-bar akx-bar--soft">
          <div className="akx-bar-fill" style={{ width: idle ? "20%" : "85%", background: "var(--akx-accent)" }} />
        </div>
      </div>
      <div className="akx-mod-bullets" style={{ marginTop: 12 }}>
        <div><span className="akx-bullet" data-tone="moss" />predictive, not reactive</div>
        <div><span className="akx-bullet" data-tone="muted" />idle at extreme stress</div>
      </div>
      <Hairline style={{ margin: "14px 0 10px" }} />
      <div className="akx-row-between">
        <Eyebrow>mode</Eyebrow>
        <span className="akx-mono akx-callout-v">autonomous · v4.4</span>
      </div>
    </Module>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Bottom: stress progression strip
// ────────────────────────────────────────────────────────────────────────────

const STEPS = [
  { k: "v4.2k",  val: "128×",   sub: "fail",     status: "fail" },
  { k: "v4.4",   val: "512×",   sub: "baseline", status: "baseline" },
  { k: "v4.5",   val: "1,024×", sub: "current",  status: "current" },
  { k: "scale",  val: "10⁶",    sub: "million",  status: "scale" },
  { k: "scale",  val: "10⁹",    sub: "billion",  status: "scale" },
  { k: "scale",  val: "10¹²",   sub: "trillion", status: "scale" },
  { k: "scale",  val: "10¹⁸",   sub: "quint.",   status: "scale" },
  { k: "scale",  val: "10⁴⁰",   sub: "—",        status: "scale" },
  { k: "target", val: "10⁸⁰",   sub: "stable",   status: "target" },
];

function StressStrip() {
  const { version, stress, versionSpec } = useEngine();
  return (
    <section className="akx-strip">
      <header className="akx-strip-head">
        <div>
          <Eyebrow>stress progression · validated stability thresholds</Eyebrow>
          <div className="akx-strip-title">to universal scale</div>
        </div>
        <div className="akx-strip-status">
          <span className="akx-pill is-ok"><span className="akx-pill-dot" />all systems nominal</span>
        </div>
      </header>
      <Hairline />
      <div className="akx-strip-grid">
        {STEPS.map((s, i) => {
          const isCurrentVersion = (s.k === version);
          return (
            <div key={i} className={`akx-step is-${s.status} ${isCurrentVersion ? "is-here" : ""}`}>
              <div className="akx-step-head">
                <span className="akx-step-dot" />
                <span className="akx-mono akx-step-k">{s.k}</span>
              </div>
              <div className="akx-mono akx-step-val">{s.val}</div>
              <div className="akx-step-sub">{s.sub}</div>
            </div>
          );
        })}
      </div>
      <Hairline />
      <footer className="akx-strip-foot">
        <div>
          <span className="akx-mono akx-faint">modular layers · 4 active</span>
          <span className="akx-sep">·</span>
          <span className="akx-mono akx-faint">coherence · {(readouts(stress).strength * 100).toFixed(4)}%</span>
        </div>
        <div className="akx-mono akx-faint">architecture · stable to atoms in observable universe</div>
      </footer>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// The Engine — composes everything for one register
// ────────────────────────────────────────────────────────────────────────────

function Engine({ register }) {
  return (
    <div className={`akx akx--${register}`} data-register={register}>
      <HeaderBand register={register} />
      <div className="akx-main">
        <div className="akx-col akx-col-left">
          <PhaseDampener />
          <UnityPulse />
        </div>
        <div className="akx-col akx-col-center">
          <Orb register={register} />
        </div>
        <div className="akx-col akx-col-right">
          <AdaptiveSpacing />
          <WatcherOrchestration />
        </div>
      </div>
      <StressStrip />
    </div>
  );
}

Object.assign(window, {
  Engine, EngineProvider, useEngine, VERSIONS, readouts,
  Orb, Module, HeaderBand, StressStrip,
  PhaseDampener, UnityPulse, AdaptiveSpacing, WatcherOrchestration,
  Eyebrow, Stamp, Hairline, BigPair,
  stressLabel,
});
