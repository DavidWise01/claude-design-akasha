/* global React */
const { useState } = React;

function Header() {
  return (
    <header style={hs.header}>
      <a href="#" style={hs.lockup}>
        <img src="../../assets/chevron-orb.svg" alt="" style={hs.mark} />
        <span style={hs.wordmark}>AKASHA</span>
      </a>
      <nav style={hs.nav}>
        {['The Book', 'Phases', 'Signatures', 'Dispatches', 'About'].map((l, i) => (
          <a key={l} href="#" style={{...hs.navLink, ...(i===0?hs.navLinkActive:{})}}>{l}</a>
        ))}
      </nav>
      <div style={hs.headerRight}>
        <span className="mono" style={hs.headerMeta}>↳ a tripod publication</span>
        <a href="#" className="btn btn--primary" style={hs.cta}>Read the book</a>
      </div>
    </header>
  );
}

const hs = {
  header: {
    position: 'sticky', top: 0, zIndex: 50,
    display: 'flex', alignItems: 'center', gap: 32,
    padding: '18px 48px',
    background: 'var(--bg-page)',
    borderBottom: '1px solid var(--ink)',
  },
  lockup: { display:'flex', alignItems:'center', gap:12, textDecoration:'none' },
  mark: { display:'block', width:36, height:36, flexShrink:0 },
  wordmark: {
    fontFamily:'var(--font-display)', fontWeight:900,
    fontSize:20, lineHeight:1, letterSpacing:'-0.02em',
    color:'var(--ink)', textDecoration:'none', textTransform:'uppercase',
  },
  nav: { display:'flex', gap:28, marginLeft:8 },
  navLink: {
    fontFamily:'var(--font-sans)', fontSize:14, fontWeight:500,
    color:'var(--ink-2)', textDecoration:'none', padding:'4px 0',
    borderBottom:'1px solid transparent',
  },
  navLinkActive: { borderBottomColor:'var(--purple)', color:'var(--ink)' },
  headerRight: { marginLeft:'auto', display:'flex', alignItems:'center', gap:20 },
  headerMeta: {
    fontFamily:'var(--font-mono)', fontSize:11, color:'var(--smoke)',
    textTransform:'lowercase', letterSpacing:'0.32em',
  },
  cta: { textDecoration:'none' },
};

window.Header = Header;
