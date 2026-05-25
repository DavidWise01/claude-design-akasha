/* global React */
const { useState: useState_n } = React;

function Newsletter() {
  const [v, setV] = useState_n('');
  const [done, setDone] = useState_n(false);
  return (
    <section style={ns.wrap}>
      <div style={ns.inner}>
        <div style={ns.left}>
          <span className="eyebrow" style={{color:'var(--purple)', textTransform:'lowercase'}}>⟶ dispatch</span>
          <h2 style={ns.h2}>Receive every phase. Read no advertorial.</h2>
          <p style={ns.body}>One email when we file. No tracking pixels. No trend pieces. Unsubscribe is one click in the header.</p>
        </div>
        <form style={ns.form} onSubmit={(e)=>{e.preventDefault(); if(v) setDone(true);}}>
          {!done ? (
            <>
              <div style={ns.field}>
                <span style={ns.fieldLbl}>email ⟶</span>
                <input
                  style={ns.input}
                  value={v}
                  onChange={(e)=>setV(e.target.value)}
                  placeholder="you@domain.org"
                />
              </div>
              <button type="submit" className="btn btn--purple">Subscribe</button>
              <p style={ns.fine}>we will never sell, rent, or "partner" with this list</p>
            </>
          ) : (
            <div style={ns.done}>
              <div className="stamp" style={{color:'var(--moss)', fontSize:11}}>FILED</div>
              <div style={ns.doneTitle}>Confirmation sent.</div>
              <div style={ns.doneBody}>Open the dispatch and click the link to finish.</div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

const ns = {
  wrap: { padding:'112px 96px', background:'var(--cream)', borderBottom:'1px solid var(--ink)', position:'relative' },
  inner: { display:'grid', gridTemplateColumns:'1.3fr 1fr', gap:80, alignItems:'center' },
  left: {},
  h2: { fontFamily:'var(--font-display)', fontWeight:900, fontSize:'clamp(40px, 5vw, 64px)', lineHeight:0.95, letterSpacing:'-0.03em', margin:'14px 0 16px', textTransform:'uppercase' },
  body: { fontFamily:'var(--font-sans)', fontSize:17, color:'var(--ink-2)', maxWidth:480, lineHeight:1.55 },
  form: { display:'flex', flexDirection:'column', gap:14 },
  field: { display:'flex', alignItems:'center', gap:10, background:'var(--aether)', border:'1px solid var(--ink)', padding:'14px 16px' },
  fieldLbl: { fontFamily:'var(--font-mono)', fontSize:11, letterSpacing:'0.32em', textTransform:'lowercase', color:'var(--smoke)' },
  input: { flex:1, border:'none', outline:'none', background:'transparent', fontFamily:'var(--font-mono)', fontSize:14, color:'var(--ink)' },
  fine: { fontFamily:'var(--font-mono)', fontSize:11, color:'var(--ink-3)', margin:0, textTransform:'lowercase', letterSpacing:'0.32em' },
  done: { background:'var(--aether)', border:'1px solid var(--ink)', padding:'22px', display:'flex', flexDirection:'column', gap:8 },
  doneTitle: { fontFamily:'var(--font-display)', fontWeight:800, fontSize:24, letterSpacing:'-0.02em', textTransform:'uppercase' },
  doneBody: { fontFamily:'var(--font-sans)', fontSize:14, color:'var(--ink-3)' },
};

window.Newsletter = Newsletter;
