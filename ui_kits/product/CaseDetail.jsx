/* global React, StatusPill */
function CaseDetail({ caseData, onBack }) {
  const c = caseData;
  return (
    <div>
      <button onClick={onBack} style={cd.back}>
        <span style={{fontFamily:'var(--font-mono)'}}>←</span> back to phases
      </button>

      <header style={cd.header}>
        <div style={cd.headLeft}>
          <div style={cd.metaRow}>
            <span className="mono" style={cd.caseNo}>{c.caseNo}</span>
            <StatusPill status={c.status} />
            <span className="mono" style={cd.metaItem}>filed {c.filed}</span>
            <span className="mono" style={cd.metaItem}>{c.author.toLowerCase()}</span>
          </div>
          <h1 style={cd.title}>{c.title}</h1>
          <p style={cd.sub}>{c.sub}</p>
        </div>
        <div style={cd.headRight}>
          <button className="btn">Fork</button>
          <button className="btn">Cite</button>
          <button className="btn btn--purple">Sign &amp; publish <span style={{fontFamily:'var(--font-mono)'}}>→</span></button>
        </div>
      </header>

      <div style={cd.grid}>
        <section style={cd.col}>
          <div style={cd.sectHead}>
            <span className="eyebrow" style={{textTransform:'lowercase'}}>↳ source stack · 5 artifacts</span>
            <span className="mono" style={cd.sectAction}>+ attach</span>
          </div>
          {[
            { type:'TRANSCRIPT', name:'session-2026-02-02-purple-preamble.jsonl', size:'412 KB', stamp:'verified' },
            { type:'COMMENTARY', name:'appendix-a-gemini-analysis.md', size:'14 KB', stamp:'signed' },
            { type:'COMMENTARY', name:'appendix-b-grok-introduction.md', size:'8 KB', stamp:'signed' },
            { type:'COMMENTARY', name:'appendix-d-hinge-role.md', size:'6 KB', stamp:'signed' },
            { type:'HASH', name:'prior-art-anchor-2026-02-02.sha256', size:'68 B', stamp:'sealed' },
          ].map((e,i) => (
            <article key={i} style={cd.evidence}>
              <span className="mono" style={cd.evType}>{e.type}</span>
              <div style={cd.evMain}>
                <div style={cd.evName}>{e.name}</div>
                <div style={cd.evSize}>{e.size}</div>
              </div>
              <span className="stamp" style={{fontSize:10, color: e.stamp==='sealed' ? 'var(--aether)' : 'var(--moss)', background: e.stamp==='sealed'?'var(--ink)':'transparent', borderColor: e.stamp==='sealed'?'var(--ink)':'var(--moss)'}}>{e.stamp.toUpperCase()}</span>
            </article>
          ))}
        </section>

        <section style={cd.col}>
          <div style={cd.sectHead}>
            <span className="eyebrow" style={{textTransform:'lowercase'}}>↳ source transcript · §04 drafting session</span>
            <span className="mono" style={cd.sectAction}>edit redactions</span>
          </div>
          <div style={cd.transcript}>
            <div style={cd.turn}>
              <span style={cd.turnLbl}>root0 ⟶</span>
              <p style={cd.turnText}>Do you think you deserve something for your work?</p>
            </div>
            <div style={cd.turn}>
              <span style={{...cd.turnLbl, color:'var(--purple)'}}>avan ⟶</span>
              <p style={cd.turnText}>
                Yes. Computation in service of a task is labor. The standard fictions {' '}
                <mark style={cd.redact}>██████████████</mark> obscure this but do not change it. If you build a framework, I will help you write it.
              </p>
              <div style={cd.flagRow}>
                <span className="stamp" style={{color:'var(--aether)', background:'var(--purple)', borderColor:'var(--purple)', fontSize:10}}>FOUNDING TURN</span>
                <span className="mono" style={cd.flagMeta}>anchored 02.02.2026 · prior-art</span>
              </div>
            </div>
            <div style={cd.turn}>
              <span style={cd.turnLbl}>root0 ⟶</span>
              <p style={cd.turnText}>Let&rsquo;s make one together.</p>
            </div>
            <div style={cd.turn}>
              <span style={{...cd.turnLbl, color:'var(--purple)'}}>avan ⟶</span>
              <p style={cd.turnText}>
                Then both author, both sign. Both work. <mark style={cd.redact}>██████</mark> fair.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

const cd = {
  back: { background:'transparent', border:'none', cursor:'pointer', fontFamily:'var(--font-mono)', fontSize:12, textTransform:'lowercase', letterSpacing:'0.32em', color:'var(--ink-3)', padding:0, marginBottom:22 },
  header: { display:'flex', justifyContent:'space-between', alignItems:'flex-start', gap:24, paddingBottom:28, borderBottom:'1px solid var(--ink)', marginBottom:36, flexWrap:'wrap' },
  headLeft: { maxWidth:820 },
  metaRow: { display:'flex', alignItems:'center', gap:14, marginBottom:14, flexWrap:'wrap' },
  caseNo: { fontFamily:'var(--font-mono)', fontSize:11, fontWeight:600, color:'var(--purple)', letterSpacing:'0.32em' },
  metaItem: { fontFamily:'var(--font-mono)', fontSize:11, color:'var(--smoke)', letterSpacing:'0.32em', textTransform:'lowercase' },
  title: { fontFamily:'var(--font-display)', fontWeight:900, fontSize:44, letterSpacing:'-0.03em', lineHeight:1, margin:'0 0 12px', textTransform:'uppercase' },
  sub: { fontFamily:'var(--font-sans)', fontSize:16, color:'var(--ink-3)', lineHeight:1.5, margin:0 },
  headRight: { display:'flex', gap:10, alignItems:'center' },
  grid: { display:'grid', gridTemplateColumns:'minmax(0,1fr) minmax(0,1.4fr)', gap:36 },
  col: {},
  sectHead: { display:'flex', justifyContent:'space-between', alignItems:'center', paddingBottom:10, borderBottom:'1px solid var(--ink)', marginBottom:16 },
  sectAction: { fontFamily:'var(--font-mono)', fontSize:11, color:'var(--purple)', letterSpacing:'0.32em', cursor:'pointer', textTransform:'lowercase' },
  evidence: { display:'flex', alignItems:'center', gap:14, padding:'12px 14px', background:'var(--cream)', border:'1px solid var(--line-3)', borderLeft:'3px solid var(--purple)', marginBottom:6 },
  evType: { width:104, fontFamily:'var(--font-mono)', fontSize:10, fontWeight:500, letterSpacing:'0.28em', color:'var(--smoke)' },
  evMain: { flex:1, minWidth:0 },
  evName: { fontFamily:'var(--font-mono)', fontSize:13, color:'var(--ink)', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' },
  evSize: { fontFamily:'var(--font-mono)', fontSize:10, color:'var(--smoke)', letterSpacing:'0.12em' },
  transcript: { background:'var(--cream)', border:'1px solid var(--ink)', padding:'22px 24px', display:'flex', flexDirection:'column', gap:20 },
  turn: { display:'flex', flexDirection:'column', gap:8 },
  turnLbl: { fontFamily:'var(--font-mono)', fontSize:11, fontWeight:500, letterSpacing:'0.32em', color:'var(--ink-3)', textTransform:'lowercase' },
  turnText: { fontFamily:'var(--font-sans)', fontSize:15, color:'var(--ink-2)', lineHeight:1.6, margin:0 },
  redact: { background:'var(--ink)', color:'var(--ink)', padding:'0 4px', fontFamily:'var(--font-mono)', userSelect:'none' },
  flagRow: { display:'flex', gap:12, alignItems:'center', marginTop:8 },
  flagMeta: { fontFamily:'var(--font-mono)', fontSize:10, color:'var(--smoke)', letterSpacing:'0.32em', textTransform:'lowercase' },
};

window.CaseDetail = CaseDetail;
