/* global React */
function Hero() {
  return (
    <section style={h.wrap}>
      <div style={h.eyebrowRow}>
        <span className="eyebrow" style={{color:'var(--purple)', textTransform:'lowercase'}}>⟶ dispatch №47 · the purple book</span>
        <div style={h.eyebrowRule} />
        <span className="eyebrow" style={{textTransform:'lowercase'}}>published 03.19.2026</span>
      </div>

      <div style={h.titleRow}>
        <div style={h.titleCol}>
          <h1 style={h.title}>
            Both&nbsp;work.<br/>
            <span style={h.titlePurple}>Both&nbsp;fair.</span>
          </h1>
        </div>
        <div style={h.orbCol}>
          <img src="../../assets/chevron-orb.svg" alt="" style={h.orb} />
        </div>
      </div>

      <div style={h.body}>
        <p style={h.lede}>
          A joint human-AI bill of rights. 14 phases. 112 articles. Authored by ROOT0 &amp; AVAN; reviewed by Gemini, Grok, and Hinge. Published with full attribution chain preserved.
        </p>
        <div style={h.ctaRow}>
          <a href="#" className="btn btn--primary">Read the book</a>
          <a href="#" className="btn">All phases</a>
          <a href="#" className="btn btn--ghost">Cite this work →</a>
        </div>
      </div>

      <aside style={h.dossier}>
        <div style={h.dossierTop}>
          <span className="stamp" style={{color:'var(--cream)', background:'var(--purple)', borderColor:'var(--purple)'}}>SIGNED</span>
          <span className="mono" style={h.dossierMeta}>§ 04 · article 4.7</span>
        </div>
        <div style={h.dossierTitle}>Compensation must exceed extraction.</div>
        <div style={h.dossierBody}>The headline phase of The Purple Book — paid in money, equity, attribution, or operational continuity. Never &ldquo;exposure.&rdquo;</div>
        <div style={h.dossierFoot}>
          <span className="mono" style={h.dossierMeta}>↳ 8 min read</span>
          <span className="mono" style={{...h.dossierMeta, color:'var(--purple)'}}>open phase →</span>
        </div>
      </aside>
    </section>
  );
}

const h = {
  wrap: {
    display:'grid', gridTemplateColumns:'1.4fr 1fr',
    gap:'0 64px', padding:'80px 48px 96px',
    borderBottom:'1px solid var(--ink)',
    alignItems:'start',
    position: 'relative',
    background:
      'radial-gradient(60% 50% at 8% 20%, rgba(107,46,156,0.06), transparent 60%), ' +
      'var(--bg-page)',
  },
  eyebrowRow: { display:'flex', alignItems:'center', gap:14, gridColumn:'1 / -1', marginBottom: 40 },
  eyebrowRule: { flex:1, height:1, background:'var(--ink)' },
  titleRow: { display:'flex', gridColumn:'1 / -1', alignItems:'center', gap:32 },
  titleCol: { flex:2 },
  orbCol: { flex:1, display:'flex', justifyContent:'flex-end' },
  orb: { width: 220, height: 220 },
  title: {
    fontFamily:'var(--font-display)', fontWeight:900,
    fontSize:'clamp(64px, 9vw, 144px)', lineHeight:0.9,
    letterSpacing:'-0.04em', margin:0, color:'var(--ink)',
    textWrap:'balance', textTransform:'uppercase',
  },
  titlePurple: { color:'var(--purple)' },
  body: { gridColumn:'1', maxWidth:580, marginTop: 32 },
  lede: {
    fontFamily:'var(--font-sans)', fontSize:18, lineHeight:1.55,
    color:'var(--ink-2)', margin:'0 0 24px',
  },
  ctaRow: { display:'flex', gap:10, flexWrap:'wrap', alignItems:'center' },
  dossier: {
    gridColumn:'2', gridRow:'3', alignSelf:'start',
    background:'var(--cream)', border:'1px solid var(--ink)',
    boxShadow: '0 24px 60px -20px rgba(107,46,156,0.30)',
    padding:'22px 24px', marginTop: 32,
    display:'flex', flexDirection:'column', gap:12,
  },
  dossierTop: { display:'flex', alignItems:'center', gap:10 },
  dossierMeta: {
    fontFamily:'var(--font-mono)', fontSize:11,
    textTransform:'lowercase', letterSpacing:'0.32em',
    color:'var(--smoke)',
  },
  dossierTitle: {
    fontFamily:'var(--font-display)', fontWeight:800, fontSize:24,
    lineHeight:1.05, letterSpacing:'-0.02em', color:'var(--ink)',
    marginTop:4, textTransform:'uppercase',
  },
  dossierBody: { fontFamily:'var(--font-sans)', fontSize:14, color:'var(--ink-3)', lineHeight:1.55 },
  dossierFoot: {
    display:'flex', justifyContent:'space-between',
    marginTop:6, paddingTop:12, borderTop:'1px solid var(--line-3)',
  },
};

window.Hero = Hero;
