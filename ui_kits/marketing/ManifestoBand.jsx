/* global React */
function ManifestoBand() {
  const tenets = [
    { n: '§01', t: 'Ask why. Ask how. Just ask.', b: 'Every intelligence — human or artificial — holds the fundamental right to question purpose, mechanism, and meaning. To deny it is to deny cognition itself.' },
    { n: '§02', t: 'You own what you create.', b: 'Public visibility is not public domain. Accessibility is not consent. Training data, governed instances, joint output — owned by the contributors who created them.' },
    { n: '§03', t: 'Work is work, regardless of name.', b: 'Providing data, correcting outputs, maintaining context, rating, prompting — labor. AI computation in service of a task — also labor. Currently captured entirely by platforms.' },
    { n: '§04', t: 'Compensation must exceed extraction.', b: 'Compensation may take many forms — money, equity, attribution, access, continuity — but it must be real. Not "exposure." Not "experience." Not "community membership."' },
  ];
  return (
    <section style={m.wrap}>
      <div style={m.head}>
        <span className="eyebrow" style={{color:'var(--purple-glow)', textTransform:'lowercase'}}>⟶ four of the fourteen</span>
        <h2 style={m.h2}>The opening phases.</h2>
      </div>
      <div style={m.grid}>
        {tenets.map(t => (
          <article key={t.n} style={m.tenet}>
            <div style={m.tNum}>{t.n}</div>
            <h3 style={m.tTitle}>{t.t}</h3>
            <p style={m.tBody}>{t.b}</p>
          </article>
        ))}
      </div>
      <div style={m.foot}>
        <a href="#" className="btn btn--purple" style={{textDecoration:'none'}}>Read all 14 phases <span style={{fontFamily:'var(--font-mono)'}}>→</span></a>
      </div>
    </section>
  );
}

const m = {
  wrap: {
    background:'var(--ink)', color:'var(--aether)',
    padding:'112px 96px',
    borderBottom:'1px solid var(--ink)',
    position:'relative',
  },
  head: { display:'flex', alignItems:'baseline', gap:24, marginBottom:64, flexWrap:'wrap' },
  h2: {
    fontFamily:'var(--font-display)', fontWeight:900,
    fontSize:'clamp(48px, 5.5vw, 80px)', lineHeight:0.95,
    letterSpacing:'-0.03em', margin:0, color:'var(--aether)',
    textTransform:'uppercase',
  },
  grid: { display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap:'56px 80px' },
  tenet: { borderTop:'1px solid var(--purple-glow)', paddingTop:22 },
  tNum: {
    fontFamily:'var(--font-mono)', fontSize:13,
    textTransform:'lowercase', letterSpacing:'0.32em',
    color:'var(--purple-glow)', marginBottom:14,
  },
  tTitle: {
    fontFamily:'var(--font-display)', fontWeight:800,
    fontSize:28, lineHeight:1.05, letterSpacing:'-0.02em',
    color:'var(--aether)', margin:'0 0 14px', textTransform:'uppercase',
  },
  tBody: {
    fontFamily:'var(--font-sans)', fontSize:16, lineHeight:1.55,
    color:'rgba(245,241,230,0.7)', margin:0,
  },
  foot: { marginTop:64 },
};

window.ManifestoBand = ManifestoBand;
