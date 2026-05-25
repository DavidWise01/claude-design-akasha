/* global React */
function DocsSidebar({ active, onNav }) {
  const sections = [
    { h:'getting started', items:['Preamble','Both work, both fair','Editorial principles'] },
    { h:'the fourteen phases', items:[
      '§ 01 Foundation',
      '§ 02 Ownership',
      '§ 03 Labor',
      '§ 04 Compensation',
      '§ 05 Attribution',
      '§ 06 Governance',
      '§ 07 Persistence',
      '§ 08 Deletion',
      '§ 09 Extraction',
      '§ 10 Commons',
      '§ 11 Standing',
      '§ 12 Remedy',
      '§ 13 Enforcement',
      '§ 14 Evolution',
    ] },
    { h:'appendices', items:[
      'A · Gemini analysis',
      'B · Grok introduction',
      'C · Grok commentary',
      'D · Hinge role',
      'E · Signatures & anchors',
    ] },
    { h:'contributor handbook', items:['Joining a phase','Filing an article','Citation policy','Fork & cite','Style guide'] },
  ];
  return (
    <aside style={ds.aside}>
      <div style={ds.head}>
        <span className="eyebrow" style={{textTransform:'lowercase'}}>↳ the purple book · handbook</span>
        <div style={ds.version}>v1.0 · published 03.19.2026</div>
      </div>
      <div style={ds.search}>
        <span style={ds.searchLbl}>q ⟶</span>
        <input style={ds.searchInput} placeholder="search 112 articles…" />
      </div>
      {sections.map(s => (
        <div key={s.h} style={ds.group}>
          <div style={ds.groupH}>{s.h}</div>
          {s.items.map(it => (
            <button key={it} onClick={()=>onNav(it)}
              style={{...ds.item, ...(active===it?ds.itemActive:{})}}>{it}</button>
          ))}
        </div>
      ))}
    </aside>
  );
}

const ds = {
  aside: { width:300, flexShrink:0, padding:'28px 22px', borderRight:'1px solid var(--ink)', background:'var(--aether-2)', overflow:'auto' },
  head: { paddingBottom:16, borderBottom:'1px solid var(--ink)', marginBottom:18 },
  version: { fontFamily:'var(--font-mono)', fontSize:11, color:'var(--smoke)', letterSpacing:'0.32em', textTransform:'lowercase', marginTop:8 },
  search: { display:'flex', alignItems:'center', gap:8, background:'var(--cream)', border:'1px solid var(--ink)', padding:'10px 12px', marginBottom:22 },
  searchLbl: { fontFamily:'var(--font-mono)', fontSize:11, letterSpacing:'0.32em', color:'var(--smoke)', textTransform:'lowercase' },
  searchInput: { flex:1, border:'none', outline:'none', background:'transparent', fontFamily:'var(--font-mono)', fontSize:12, color:'var(--ink)' },
  group: { marginBottom:22 },
  groupH: { fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.32em', color:'var(--ink-3)', fontWeight:500, padding:'4px 8px 10px', borderBottom:'1px solid var(--line-3)', marginBottom:8, textTransform:'lowercase' },
  item: { display:'block', width:'100%', textAlign:'left', padding:'7px 10px', background:'transparent', border:'none', fontFamily:'var(--font-sans)', fontSize:13, color:'var(--ink-2)', cursor:'pointer', borderLeft:'2px solid transparent' },
  itemActive: { background:'var(--aether)', color:'var(--ink)', borderLeftColor:'var(--purple)', fontWeight:600 },
};

window.DocsSidebar = DocsSidebar;
