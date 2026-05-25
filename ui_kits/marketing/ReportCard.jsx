/* global React */
function ReportCard({ phaseNo, status, title, body, date, mins, accent='soft' }) {
  const shadow = accent === 'soft'
    ? '0 24px 60px -20px rgba(107,46,156,0.30)'
    : '4px 4px 0 var(--purple)';
  return (
    <article style={{...rc.card, boxShadow: shadow}}>
      <div style={rc.top}>
        <span className="eyebrow" style={{color:'var(--purple)', textTransform:'lowercase'}}>⟶ phase {phaseNo}</span>
        <span className="stamp" style={statusStyle(status)}>{status.toUpperCase()}</span>
      </div>
      <h3 style={rc.title}>{title}</h3>
      <p style={rc.body}>{body}</p>
      <div style={rc.foot}>
        <span className="mono" style={rc.meta}>{date}</span>
        <span className="mono" style={rc.meta}>{mins} min read</span>
        <span style={{flex:1}} />
        <span className="mono" style={{...rc.meta, color:'var(--purple)'}}>open ↗</span>
      </div>
    </article>
  );
}

function statusStyle(s){
  const map = {
    'signed':     { color:'var(--moss)' },
    'priority 1': { color:'var(--cream)', background:'var(--purple)', borderColor:'var(--purple)' },
    'embargoed':  { color:'var(--ochre)' },
    'in review':  { color:'var(--ink-3)' },
  };
  return map[s.toLowerCase()] || {};
}

const rc = {
  card: {
    background:'var(--cream)', border:'1px solid var(--ink)',
    padding:'22px 24px', display:'flex', flexDirection:'column', gap:12,
    transition:'transform 200ms ease-out, box-shadow 200ms ease-out',
    cursor:'pointer',
  },
  top: { display:'flex', justifyContent:'space-between', alignItems:'center', gap:12 },
  title: {
    fontFamily:'var(--font-display)', fontWeight:800, fontSize:24,
    lineHeight:1.05, letterSpacing:'-0.02em', color:'var(--ink)', margin:0,
    textTransform:'uppercase',
  },
  body: { fontFamily:'var(--font-sans)', fontSize:14, lineHeight:1.55, color:'var(--ink-3)', margin:0 },
  foot: {
    display:'flex', gap:14, alignItems:'center',
    marginTop:6, paddingTop:14, borderTop:'1px solid var(--line-3)',
  },
  meta: {
    fontFamily:'var(--font-mono)', fontSize:11,
    textTransform:'lowercase', letterSpacing:'0.32em', color:'var(--smoke)',
  },
};

window.ReportCard = ReportCard;
