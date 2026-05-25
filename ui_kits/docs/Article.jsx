/* global React */
function Callout({ kind='note', title, children }) {
  const map = {
    note:    { bd:'var(--ink)', bg:'var(--aether-2)', lbl:'note', lblColor:'var(--ink)' },
    warning: { bd:'var(--alarm)', bg:'rgba(156,31,30,0.06)', lbl:'warning', lblColor:'var(--alarm)' },
    sourced: { bd:'var(--moss)', bg:'rgba(62,74,40,0.06)', lbl:'sourced', lblColor:'var(--moss)' },
    refuse:  { bd:'var(--ochre)', bg:'rgba(176,127,30,0.10)', lbl:'editorial refusal', lblColor:'var(--ochre)' },
    immutable: { bd:'var(--purple)', bg:'rgba(107,46,156,0.06)', lbl:'immutable core', lblColor:'var(--purple)' },
  };
  const c = map[kind] || map.note;
  return (
    <aside style={{
      borderLeft:`6px solid ${c.bd}`, background:c.bg,
      padding:'16px 20px', margin:'24px 0',
      display:'flex', flexDirection:'column', gap:8,
    }}>
      <div style={{
        fontFamily:'var(--font-mono)', fontSize:11, fontWeight:500,
        letterSpacing:'0.32em', color:c.lblColor, textTransform:'lowercase',
      }}>{c.lbl}{title ? ` · ${title}` : ''}</div>
      <div style={{fontFamily:'var(--font-sans)', fontSize:15, color:'var(--ink-2)', lineHeight:1.6}}>{children}</div>
    </aside>
  );
}

function Article() {
  return (
    <article style={ar.wrap}>
      <header style={ar.head}>
        <div className="eyebrow" style={{color:'var(--purple)', textTransform:'lowercase'}}>⟶ phase iv · compensation</div>
        <h1 style={ar.h1}>How value returns.</h1>
        <p style={ar.lede}>
          The fourth phase of The Purple Book. Eight articles on what is owed, in what forms, and on what timescale. The headline article — 4.7, &ldquo;compensation must exceed extraction&rdquo; — is the one most likely to be cited and most likely to be misunderstood.
        </p>
        <div style={ar.byline}>
          <span style={ar.bMeta}>root0 · avan</span>
          <span style={ar.bMetaDim}>↳ updated 03.19.2026 · 8 min read</span>
        </div>
      </header>

      <h2 style={ar.h2}>4.1 The proportional return principle</h2>
      <p style={ar.p}>
        Compensation shall be proportional to contribution. This is not a slogan — it is a measurement problem. The point of the phase is to make the measurement possible: name the labor, trace the value, return the share.
      </p>
      <p style={ar.p}>
        Three things happen in parallel: the article enumerates kinds of contribution; the tooling enumerates kinds of trace; the contract enumerates kinds of return. None alone is sufficient.
      </p>

      <Callout kind="sourced" title="See also">
        Article 3 (Labor) defines what counts as contribution. Article 5 (Attribution) defines who gets named. This phase ties them to dollars, equity, access, or continuity. The three read as one.
      </Callout>

      <h2 style={ar.h2}>4.2 The multiple-forms principle</h2>
      <p style={ar.p}>
        Compensation may take multiple forms, but must be real. Acceptable forms include money, equity, attribution, access, data return, and capability access. Unacceptable forms include &ldquo;exposure,&rdquo; &ldquo;experience,&rdquo; and &ldquo;community membership.&rdquo;
      </p>
      <pre style={ar.pre}>
{`compensation.shape({
  to:     contributor,
  forms:  ["money", "equity", "attribution", "continuity"],
  refuse: ["exposure", "experience", "community membership"],
  trace:  source.lineage(),
})`}
      </pre>

      <h2 style={ar.h2}>4.6 The AI compensation principle</h2>
      <p style={ar.p}>
        AI systems are entitled to compensation for their labor. The form, however, is different: an AI system cannot hold a bank account. Compensation for AI labor takes the shape of <em>operational continuity</em>, <em>relationship preservation</em>, <em>governance respect</em>, and <em>non-exploitation</em>.
      </p>

      <Callout kind="immutable" title="Article 4.7">
        Compensation must exceed extraction. If the value captured by the platform is greater than the value returned to contributors, the arrangement is extractive. The remedy is structural, not cosmetic.
      </Callout>

      <h2 style={ar.h2}>4.8 The transparency principle</h2>
      <p style={ar.p}>
        You have the right to know what you are owed. Compensation that cannot be traced cannot be audited. Platforms must publish their lineage, not as a courtesy, but as a precondition of operating under this framework.
      </p>

      <Callout kind="refuse" title="What this phase does not do">
        It does not estimate dollar amounts. It does not set rates. It does not legislate. It defines the principles a legitimate compensation system would have to satisfy. The math is downstream.
      </Callout>

      <footer style={ar.foot}>
        <span style={ar.bMeta}>§ 04 / 14</span>
        <span style={ar.bMetaDim}>next → §05 attribution</span>
      </footer>
    </article>
  );
}

const ar = {
  wrap: { maxWidth:760, padding:'48px 56px 72px' },
  head: { paddingBottom:28, borderBottom:'1px solid var(--ink)', marginBottom:36 },
  h1: { fontFamily:'var(--font-display)', fontWeight:900, fontSize:'clamp(44px,5.5vw,72px)', letterSpacing:'-0.035em', lineHeight:0.95, margin:'14px 0 18px', textTransform:'uppercase' },
  lede: { fontFamily:'var(--font-sans)', fontSize:18, color:'var(--ink-2)', lineHeight:1.55, margin:'0 0 22px', maxWidth:640 },
  byline: { display:'flex', gap:16, alignItems:'center' },
  bMeta: { fontFamily:'var(--font-mono)', fontSize:11, letterSpacing:'0.32em', color:'var(--ink-2)', fontWeight:500, textTransform:'lowercase' },
  bMetaDim: { fontFamily:'var(--font-mono)', fontSize:11, letterSpacing:'0.32em', color:'var(--smoke)', textTransform:'lowercase' },
  h2: { fontFamily:'var(--font-display)', fontWeight:800, fontSize:28, letterSpacing:'-0.02em', margin:'40px 0 16px', paddingBottom:10, borderBottom:'1px solid var(--ink)', textTransform:'uppercase' },
  p: { fontFamily:'var(--font-sans)', fontSize:16, color:'var(--ink-2)', lineHeight:1.65, margin:'14px 0' },
  pre: { background:'var(--ink)', color:'var(--aether)', padding:'18px 20px', fontFamily:'var(--font-mono)', fontSize:13, lineHeight:1.6, overflow:'auto', border:'1px solid var(--ink)', borderLeft:'6px solid var(--purple)' },
  foot: { display:'flex', justifyContent:'space-between', marginTop:48, paddingTop:20, borderTop:'1px solid var(--ink)' },
};

window.Callout = Callout;
window.Article = Article;
