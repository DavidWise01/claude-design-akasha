/* global React, StatusPill */
function CaseList({ cases, onOpen }) {
  return (
    <div>
      <div style={cl.head}>
        <div>
          <div className="eyebrow" style={{color:'var(--purple)', textTransform:'lowercase'}}>⟶ active</div>
          <h1 style={cl.h1}>Phases</h1>
        </div>
        <div style={cl.stats}>
          <div style={cl.statCell}>
            <div style={cl.statN}>{cases.filter(c=>c.status==='Signed').length}</div>
            <div style={cl.statL}>Signed</div>
          </div>
          <div style={cl.statCell}>
            <div style={cl.statN}>{cases.filter(c=>c.status==='Priority 1').length}</div>
            <div style={cl.statL}>Priority 1</div>
          </div>
          <div style={cl.statCell}>
            <div style={cl.statN}>{cases.filter(c=>c.status==='In review').length}</div>
            <div style={cl.statL}>In review</div>
          </div>
          <div style={cl.statCell}>
            <div style={cl.statN}>{cases.filter(c=>c.status==='Embargoed').length}</div>
            <div style={cl.statL}>Embargoed</div>
          </div>
        </div>
      </div>

      <table style={cl.table}>
        <thead>
          <tr style={cl.headRow}>
            {['Phase','Article','Tags','Status','Author','Filed',''].map((h,i) => (
              <th key={i} style={cl.th}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {cases.map(c => (
            <tr key={c.caseNo} style={cl.tr} onClick={() => onOpen(c)}
                onMouseEnter={(e)=>e.currentTarget.style.background='var(--cream)'}
                onMouseLeave={(e)=>e.currentTarget.style.background='transparent'}>
              <td style={{...cl.td, ...cl.tdCase}}>{c.caseNo}</td>
              <td style={cl.td}>
                <div style={cl.subjectTitle}>{c.title}</div>
                <div style={cl.subjectSub}>{c.sub}</div>
              </td>
              <td style={cl.td}>
                <div style={{display:'flex', gap:4, flexWrap:'wrap'}}>
                  {c.tags.map(t => <span key={t} style={cl.tag}>{t}</span>)}
                </div>
              </td>
              <td style={cl.td}><StatusPill status={c.status} /></td>
              <td style={cl.td}>
                <div style={cl.author}>
                  <span style={cl.avatar}>{c.author.slice(0,2)}</span>
                  <span>{c.author}</span>
                </div>
              </td>
              <td style={{...cl.td, fontFamily:'var(--font-mono)', fontSize:12, color:'var(--smoke)'}}>{c.filed}</td>
              <td style={cl.td}><span style={cl.arrow}>→</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const cl = {
  head: { display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom:32, gap:24, flexWrap:'wrap' },
  h1: { fontFamily:'var(--font-display)', fontWeight:900, fontSize:56, letterSpacing:'-0.03em', lineHeight:0.95, margin:'10px 0 0', textTransform:'uppercase' },
  stats: { display:'flex', gap:28 },
  statCell: { borderLeft:'1px solid var(--ink)', paddingLeft:16 },
  statN: { fontFamily:'var(--font-display)', fontWeight:900, fontSize:36, color:'var(--purple)', lineHeight:1 },
  statL: { fontFamily:'var(--font-mono)', fontSize:10, textTransform:'lowercase', letterSpacing:'0.32em', color:'var(--smoke)', marginTop:6 },

  table: { width:'100%', borderCollapse:'collapse', background:'var(--cream)', border:'1px solid var(--ink)' },
  headRow: { background:'var(--aether-2)', borderBottom:'1px solid var(--ink)' },
  th: { padding:'14px 16px', textAlign:'left', fontFamily:'var(--font-mono)', fontSize:10, fontWeight:500, textTransform:'lowercase', letterSpacing:'0.32em', color:'var(--ink-2)' },
  tr: { borderBottom:'1px solid var(--line-3)', cursor:'pointer', transition:'background 120ms' },
  td: { padding:'16px', verticalAlign:'middle' },
  tdCase: { fontFamily:'var(--font-mono)', fontSize:13, fontWeight:600, color:'var(--purple)', letterSpacing:'0.04em' },
  subjectTitle: { fontFamily:'var(--font-display)', fontWeight:700, fontSize:16, color:'var(--ink)', letterSpacing:'-0.01em', textTransform:'uppercase' },
  subjectSub: { fontFamily:'var(--font-sans)', fontSize:13, color:'var(--smoke)', marginTop:3 },
  tag: { fontFamily:'var(--font-mono)', fontSize:10, fontWeight:500, padding:'2px 7px', background:'var(--aether-3)', color:'var(--ink-2)', textTransform:'lowercase', letterSpacing:'0.18em' },
  author: { display:'flex', alignItems:'center', gap:10, fontFamily:'var(--font-sans)', fontSize:13 },
  avatar: { minWidth:30, height:24, padding:'0 6px', background:'var(--purple-core)', color:'var(--aether)', fontFamily:'var(--font-mono)', fontWeight:600, fontSize:11, display:'inline-flex', alignItems:'center', justifyContent:'center', border:'1px solid var(--ink)', letterSpacing:'0.04em' },
  arrow: { fontFamily:'var(--font-mono)', color:'var(--smoke)', fontSize:16 },
};

window.CaseList = CaseList;
