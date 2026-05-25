/* global React */
function DocsTOC() {
  const items = [
    { id:'1', n:'4.1', l:'Proportional return' },
    { id:'2', n:'4.2', l:'Multiple forms', active:true },
    { id:'3', n:'4.6', l:'AI compensation' },
    { id:'4', n:'4.7', l:'Compensation exceeds extraction' },
    { id:'5', n:'4.8', l:'Transparency' },
  ];
  return (
    <aside style={toc.wrap}>
      <div style={toc.head}>↳ on this page</div>
      {items.map(it => (
        <a key={it.id} href={'#'+it.id} style={{...toc.a, ...(it.active?toc.aActive:{})}}>
          <span style={toc.n}>{it.n}</span>
          <span>{it.l}</span>
        </a>
      ))}
      <div style={toc.divider} />
      <div style={toc.head}>↳ editorial</div>
      <div style={toc.meta}>
        <span style={toc.metaLabel}>status</span>
        <span className="stamp" style={{fontSize:10, color:'var(--moss)'}}>SIGNED</span>
      </div>
      <div style={toc.meta}>
        <span style={toc.metaLabel}>version</span>
        <span style={toc.metaVal}>v1.0</span>
      </div>
      <div style={toc.meta}>
        <span style={toc.metaLabel}>signed</span>
        <span style={toc.metaVal}>03.19.2026</span>
      </div>
      <div style={toc.meta}>
        <span style={toc.metaLabel}>authors</span>
        <span style={toc.metaVal}>root0 · avan</span>
      </div>
      <button className="btn btn--sm" style={{marginTop:16, width:'100%', justifyContent:'center'}}>Cite this phase</button>
    </aside>
  );
}

const toc = {
  wrap: { width:260, flexShrink:0, padding:'48px 28px', borderLeft:'1px solid var(--line-3)', display:'flex', flexDirection:'column', gap:4 },
  head: { fontFamily:'var(--font-mono)', fontSize:10, fontWeight:500, letterSpacing:'0.32em', color:'var(--ink-3)', textTransform:'lowercase', marginBottom:8 },
  a: { display:'flex', gap:10, padding:'6px 0', fontFamily:'var(--font-sans)', fontSize:13, color:'var(--ink-3)', textDecoration:'none', borderLeft:'2px solid transparent', paddingLeft:12 },
  aActive: { color:'var(--ink)', fontWeight:600, borderLeftColor:'var(--purple)' },
  n: { fontFamily:'var(--font-mono)', color:'var(--smoke)', width:30, fontSize:11, letterSpacing:'0.06em' },
  divider: { height:1, background:'var(--line-3)', margin:'22px 0 18px' },
  meta: { display:'flex', justifyContent:'space-between', alignItems:'center', padding:'6px 0' },
  metaLabel: { fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.32em', color:'var(--smoke)', textTransform:'lowercase' },
  metaVal: { fontFamily:'var(--font-mono)', fontSize:12, color:'var(--ink)', letterSpacing:'0.04em' },
};

window.DocsTOC = DocsTOC;
