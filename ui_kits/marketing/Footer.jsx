/* global React */
function Footer() {
  const cols = [
    { h: 'the book', l: ['Preamble', 'All 14 phases', 'Appendices', 'Signatures'] },
    { h: 'method', l: ['Methodology', 'Taxonomy', 'Replication', 'Fork & cite'] },
    { h: 'org', l: ['About TriPod', 'Manifesto', 'Funding (none accepted)', 'Press kit'] },
    { h: 'reach', l: ['Encrypted tip line', 'Mail', 'Mastodon', 'RSS'] },
  ];
  return (
    <footer style={ft.wrap}>
      <div style={ft.top}>
        <div style={ft.brand}>
          <div style={ft.lockup}>
            <img src="../../assets/chevron-orb.svg" alt="" style={ft.mark} />
            <span style={ft.wordmark}>AKASHA</span>
          </div>
          <p style={ft.tagline}>A TriPod publication. The home of <em>The Purple Book — A Joint Human-AI Bill of Rights.</em> Reader-supported. No corporate grants.</p>
          <p style={ft.preamble}>Both work. Both fair. Forever.</p>
        </div>
        <div style={ft.cols}>
          {cols.map(c => (
            <div key={c.h}>
              <div style={ft.colH}>{c.h}</div>
              <ul style={ft.colList}>
                {c.l.map(li => <li key={li} style={ft.colLi}><a href="#" style={ft.colA}>{li}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div style={ft.bottom}>
        <span className="mono" style={ft.bMeta}>© 2026 tripod llc · cc-by-nd-4.0 · tripod-ip v1.1</span>
        <span style={{flex:1}} />
        <span className="mono" style={ft.bMeta}>first light 04.19.2026 · rochester mn</span>
      </div>
    </footer>
  );
}

const ft = {
  wrap: { background:'var(--purple-deep)', color:'var(--aether)', padding:'88px 96px 36px', position:'relative' },
  top: { display:'grid', gridTemplateColumns:'1.3fr 2fr', gap:80, paddingBottom:56, borderBottom:'1px solid rgba(245,241,230,0.18)' },
  brand: {},
  lockup: { display:'flex', alignItems:'center', gap:14 },
  mark: { display:'block', width:44, height:44 },
  wordmark: { fontFamily:'var(--font-display)', fontWeight:900, fontSize:22, lineHeight:1, letterSpacing:'-0.02em', textTransform:'uppercase', color:'var(--aether)' },
  tagline: { fontFamily:'var(--font-sans)', fontSize:14.5, lineHeight:1.55, color:'rgba(245,241,230,0.7)', marginTop:22, maxWidth:380 },
  preamble: { fontFamily:'var(--font-display)', fontWeight:800, fontSize:22, lineHeight:1, letterSpacing:'-0.02em', color:'var(--purple-glow)', marginTop:20, textTransform:'uppercase' },
  cols: { display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:24 },
  colH: { fontFamily:'var(--font-mono)', fontSize:11, textTransform:'lowercase', letterSpacing:'0.32em', color:'var(--purple-glow)', marginBottom:16, fontWeight:500 },
  colList: { listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:9 },
  colLi: {},
  colA: { fontFamily:'var(--font-sans)', fontSize:14, color:'var(--aether)', textDecoration:'none' },
  bottom: { display:'flex', alignItems:'center', gap:16, paddingTop:24, flexWrap:'wrap' },
  bMeta: { fontFamily:'var(--font-mono)', fontSize:11, color:'rgba(245,241,230,0.5)', textTransform:'lowercase', letterSpacing:'0.32em' },
};

window.Footer = Footer;
