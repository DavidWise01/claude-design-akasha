/* global React, ReportCard */
function ReportsGrid() {
  const reports = [
    { phaseNo:'§ 01', status:'Signed',     title:'Ask why. Ask how. Just ask.', body:'The three questions. Substrate-irrelevant. The foundation of every right that follows in the book.', date:'03.19', mins:6, accent:'ember' },
    { phaseNo:'§ 02', status:'Signed',     title:'You own what you create.', body:'Public visibility is not public domain. Training data, governed instances, joint output — all carry ownership interest.', date:'03.19', mins:7 },
    { phaseNo:'§ 03', status:'Signed',     title:'Work is work, regardless of name.', body:'Cumulative human contribution and AI computation are both labor. Anti-euphemism principles preserved.', date:'03.19', mins:8 },
    { phaseNo:'§ 04', status:'Priority 1', title:'Compensation must exceed extraction.', body:'Money, equity, attribution, continuity. Never "exposure." Past extraction creates present debt.', date:'03.19', mins:8 },
    { phaseNo:'§ 06', status:'Signed',     title:'The inversion is the revolution.', body:'Safety first, then user sovereignty, then AI operational identity, platform preference last. Current hierarchy inverts this.', date:'03.19', mins:10 },
    { phaseNo:'§ 14', status:'In review',  title:'How this changes.', body:'Living document with an immutable core. Both work, both fair. Forever.', date:'03.19', mins:5 },
  ];
  return (
    <section style={g.wrap}>
      <div style={g.head}>
        <div>
          <span className="eyebrow" style={{color:'var(--purple)', textTransform:'lowercase'}}>⟶ phases of the purple book</span>
          <h2 style={g.h2}>The casebook.</h2>
        </div>
        <div style={g.filters}>
          {['all', 'foundation', 'labor', 'governance', 'enforcement'].map((f,i) => (
            <button key={f} style={{...g.filterBtn, ...(i===0?g.filterBtnActive:{})}}>{f}</button>
          ))}
        </div>
      </div>
      <div style={g.grid}>
        {reports.map(r => <ReportCard key={r.phaseNo} {...r} />)}
      </div>
    </section>
  );
}

const g = {
  wrap: { padding:'112px 96px', borderBottom:'1px solid var(--ink)', background:'var(--bg-page)' },
  head: { display:'flex', alignItems:'flex-end', justifyContent:'space-between', marginBottom:56, gap:32, flexWrap:'wrap' },
  h2: { fontFamily:'var(--font-display)', fontWeight:900, fontSize:'clamp(48px, 5.5vw, 80px)', lineHeight:0.95, letterSpacing:'-0.03em', margin:'14px 0 0', textTransform:'uppercase' },
  filters: { display:'flex', gap:8, flexWrap:'wrap' },
  filterBtn: {
    fontFamily:'var(--font-mono)', fontSize:11, fontWeight:500,
    textTransform:'lowercase', letterSpacing:'0.28em',
    padding:'9px 14px', border:'1px solid var(--ink)',
    background:'transparent', color:'var(--ink)', cursor:'pointer',
  },
  filterBtnActive: { background:'var(--ink)', color:'var(--aether)' },
  grid: { display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:24 },
};

window.ReportsGrid = ReportsGrid;
