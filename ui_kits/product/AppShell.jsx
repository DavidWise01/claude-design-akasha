/* global React */
const { useState: useStateApp } = React;

function AppShell({ section, onSection, onFileEvidence, children }) {
  const navItems = [
    { id:'inbox', label:'Inbox', count:3 },
    { id:'phases', label:'Phases', count:14 },
    { id:'articles', label:'Articles', count:112 },
    { id:'signatures', label:'Signatures', count:5 },
    { id:'archive', label:'Archive', count:131 },
  ];
  const utilItems = [
    { id:'methodology', label:'Methodology' },
    { id:'taxonomy', label:'Taxonomy' },
    { id:'authors', label:'Authors' },
  ];
  return (
    <div style={as.root}>
      {/* Sidebar */}
      <aside style={as.sidebar}>
        <div style={as.lockup}>
          <img src="../../assets/chevron-orb.svg" alt="" style={as.mark} />
          <div>
            <div style={as.wordmark}>AKASHA</div>
            <div style={as.workspace}>↳ ledger · internal</div>
          </div>
        </div>

        <button onClick={onFileEvidence} className="btn btn--purple" style={as.fileBtn}>
          <span style={{fontFamily:'var(--font-mono)'}}>+</span> File article
        </button>

        <div style={as.navGroup}>
          <div style={as.navHead}>the book</div>
          {navItems.map(it => (
            <button key={it.id} onClick={() => onSection(it.id)}
              style={{...as.navItem, ...(section===it.id?as.navItemActive:{})}}>
              <span>{it.label}</span>
              <span style={as.navCount}>{it.count}</span>
            </button>
          ))}
        </div>

        <div style={as.navGroup}>
          <div style={as.navHead}>reference</div>
          {utilItems.map(it => (
            <button key={it.id} onClick={() => onSection(it.id)}
              style={{...as.navItem, ...(section===it.id?as.navItemActive:{})}}>
              <span>{it.label}</span>
            </button>
          ))}
        </div>

        <div style={as.sidebarFoot}>
          <div style={as.user}>
            <div style={as.avatar}>R0</div>
            <div>
              <div style={as.userName}>ROOT0</div>
              <div style={as.userMeta}>↳ architect · signed</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main style={as.main}>
        <div style={as.topbar}>
          <div style={as.crumbs}>
            <span style={as.crumbMuted}>the book</span>
            <span style={as.crumbSep}>/</span>
            <span style={as.crumbActive}>{section.charAt(0).toUpperCase()+section.slice(1)}</span>
          </div>
          <div style={as.search}>
            <span style={as.searchLbl}>q ⟶</span>
            <input style={as.searchInput} defaultValue="" placeholder="search 112 articles, signatures, methodology…" />
            <span style={as.searchKey}>⌘K</span>
          </div>
          <div style={as.topActions}>
            <button className="btn btn--sm">Filter</button>
            <button className="btn btn--sm">Export</button>
          </div>
        </div>
        <div style={as.body}>{children}</div>
      </main>
    </div>
  );
}

const as = {
  root: { display:'flex', minHeight:'100vh', background:'var(--bg-page)' },
  sidebar: {
    width:260, flexShrink:0,
    background:'var(--purple-deep)', color:'var(--aether)',
    borderRight:'1px solid var(--ink)',
    display:'flex', flexDirection:'column', padding:'22px 18px', gap:22,
  },
  lockup: { display:'flex', alignItems:'center', gap:12 },
  mark: { display:'block', width:36, height:36, flexShrink:0 },
  wordmark: { fontFamily:'var(--font-display)', fontWeight:900, fontSize:18, lineHeight:1, letterSpacing:'-0.02em', textTransform:'uppercase', color:'var(--aether)' },
  workspace: { fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.32em', textTransform:'lowercase', color:'rgba(245,241,230,0.55)', marginTop:4 },

  fileBtn: { justifyContent:'center', width:'100%' },

  navGroup: { display:'flex', flexDirection:'column', gap:2 },
  navHead: { fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.32em', color:'var(--purple-glow)', textTransform:'lowercase', padding:'8px 8px 8px', borderBottom:'1px solid rgba(245,241,230,0.18)', marginBottom:6, fontWeight:500 },
  navItem: {
    display:'flex', alignItems:'center', justifyContent:'space-between',
    padding:'9px 10px', background:'transparent', border:'none',
    color:'var(--aether)', fontFamily:'var(--font-sans)', fontSize:14,
    cursor:'pointer', textAlign:'left',
  },
  navItemActive: { background:'var(--ink)', boxShadow:'inset 3px 0 0 var(--purple-glow)' },
  navCount: { fontFamily:'var(--font-mono)', fontSize:11, color:'rgba(245,241,230,0.55)', letterSpacing:'0.1em' },

  sidebarFoot: { marginTop:'auto', paddingTop:14, borderTop:'1px solid rgba(245,241,230,0.18)' },
  user: { display:'flex', alignItems:'center', gap:10 },
  avatar: { width:34, height:34, background:'var(--purple-core)', color:'var(--aether)', fontFamily:'var(--font-display)', fontWeight:900, fontSize:13, display:'flex', alignItems:'center', justifyContent:'center', border:'1px solid var(--aether)', letterSpacing:'-0.02em' },
  userName: { fontFamily:'var(--font-display)', fontWeight:800, fontSize:14, letterSpacing:'-0.01em', textTransform:'uppercase' },
  userMeta: { fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.32em', color:'rgba(245,241,230,0.55)', textTransform:'lowercase' },

  main: { flex:1, display:'flex', flexDirection:'column', minWidth:0 },
  topbar: {
    display:'flex', alignItems:'center', gap:24,
    padding:'14px 28px', borderBottom:'1px solid var(--ink)', background:'var(--bg-page)',
  },
  crumbs: { display:'flex', alignItems:'center', gap:8, fontFamily:'var(--font-mono)', fontSize:11, textTransform:'lowercase', letterSpacing:'0.32em' },
  crumbMuted: { color:'var(--smoke)' },
  crumbSep: { color:'var(--smoke)' },
  crumbActive: { color:'var(--ink)', fontWeight:500 },
  search: {
    flex:1, display:'flex', alignItems:'center', gap:10,
    background:'var(--cream)', border:'1px solid var(--ink)', padding:'10px 12px',
  },
  searchLbl: { fontFamily:'var(--font-mono)', fontSize:11, letterSpacing:'0.32em', color:'var(--smoke)', textTransform:'lowercase' },
  searchInput: { flex:1, border:'none', outline:'none', background:'transparent', fontFamily:'var(--font-mono)', fontSize:13, color:'var(--ink)' },
  searchKey: { fontFamily:'var(--font-mono)', fontSize:11, color:'var(--smoke)', border:'1px solid var(--ink-3)', padding:'2px 6px' },
  topActions: { display:'flex', gap:8 },
  body: { flex:1, padding:'32px 36px', overflow:'auto', background:'var(--bg-page)' },
};

window.AppShell = AppShell;
