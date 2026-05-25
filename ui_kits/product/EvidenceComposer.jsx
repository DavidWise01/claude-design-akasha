/* global React */
const { useState: useStateEC } = React;

function EvidenceComposer({ onClose, onFile }) {
  const [title, setTitle] = useStateEC('');
  const [subject, setSubject] = useStateEC('OpenAI');
  const [type, setType] = useStateEC('Audit');
  const [priority, setPriority] = useStateEC(false);
  const [notes, setNotes] = useStateEC('');

  function submit(e){
    e.preventDefault();
    if (!title) return;
    onFile({ title, subject, type, priority });
  }

  return (
    <>
      <div style={ec.scrim} onClick={onClose} />
      <aside style={ec.drawer}>
        <header style={ec.head}>
          <div>
            <div className="eyebrow" style={{color:'var(--ember)'}}>⟶ NEW EVIDENCE</div>
            <h2 style={ec.h2}>File a case.</h2>
          </div>
          <button onClick={onClose} style={ec.close}>✕</button>
        </header>

        <form onSubmit={submit} style={ec.form}>
          <label style={ec.field}>
            <span style={ec.lbl}>HEADLINE ⟶</span>
            <input style={ec.input} value={title} onChange={e=>setTitle(e.target.value)}
              placeholder="What the case shows, in one declarative sentence."
              autoFocus />
          </label>

          <div style={ec.row}>
            <label style={{...ec.field, flex:1}}>
              <span style={ec.lbl}>SUBJECT</span>
              <select style={ec.input} value={subject} onChange={e=>setSubject(e.target.value)}>
                <option>OpenAI</option><option>Anthropic</option><option>Meta</option>
                <option>xAI</option><option>Google</option><option>Other</option>
              </select>
            </label>
            <label style={{...ec.field, flex:1}}>
              <span style={ec.lbl}>TYPE</span>
              <select style={ec.input} value={type} onChange={e=>setType(e.target.value)}>
                <option>Audit</option><option>Transcript</option><option>Correspondence</option>
                <option>Methodology</option>
              </select>
            </label>
          </div>

          <label style={ec.field}>
            <span style={ec.lbl}>FINDINGS / NOTES</span>
            <textarea style={{...ec.input, minHeight:120, resize:'vertical', fontFamily:'var(--font-sans)'}}
              value={notes} onChange={e=>setNotes(e.target.value)}
              placeholder="What you found. Be specific. Cite the prompt, the version, the date." />
          </label>

          <div style={ec.toggleRow}>
            <button type="button" onClick={()=>setPriority(!priority)} style={ec.toggleBtn}>
              <span style={{
                width:38, height:22, border:'2px solid var(--ink)',
                background: priority ? 'var(--ember)' : 'var(--cream)',
                display:'inline-block', position:'relative',
              }}>
                <span style={{
                  position:'absolute', top:0, bottom:0, width:14, background:'var(--bone)',
                  left: priority ? 'auto' : 2, right: priority ? 2 : 'auto',
                }} />
              </span>
              <span style={{fontFamily:'var(--font-sans)', fontSize:14, fontWeight:600}}>Mark Priority 1</span>
              <span style={{fontFamily:'var(--font-mono)', fontSize:11, color:'var(--smoke)', letterSpacing:'0.16em', textTransform:'uppercase'}}>(P1 publishes faster)</span>
            </button>
          </div>

          <div style={ec.dz}>
            <span style={{fontFamily:'var(--font-mono)', fontSize:11, letterSpacing:'0.2em', color:'var(--smoke)', textTransform:'uppercase'}}>⤓ DROP TRANSCRIPTS, EMAILS, OR SCREENSHOTS</span>
          </div>

          <footer style={ec.foot}>
            <span className="mono" style={{fontSize:11, color:'var(--smoke)', letterSpacing:'0.18em', textTransform:'uppercase'}}>Draft saved · ⌘S</span>
            <span style={{flex:1}} />
            <button type="button" onClick={onClose} className="btn">Cancel</button>
            <button type="submit" className="btn btn--ember">File case <span style={{fontFamily:'var(--font-mono)'}}>→</span></button>
          </footer>
        </form>
      </aside>
    </>
  );
}

const ec = {
  scrim: { position:'fixed', inset:0, background:'rgba(20,17,12,0.6)', backdropFilter:'blur(4px)', zIndex:90 },
  drawer: { position:'fixed', top:0, right:0, bottom:0, width:520, background:'var(--bg-page)', borderLeft:'2px solid var(--ink)', zIndex:100, display:'flex', flexDirection:'column', boxShadow:'-8px 0 32px rgba(20,17,12,0.4)' },
  head: { display:'flex', justifyContent:'space-between', alignItems:'flex-start', padding:'22px 24px 16px', borderBottom:'2px solid var(--ink)' },
  h2: { fontFamily:'var(--font-display)', fontWeight:900, fontSize:32, margin:'6px 0 0', letterSpacing:'-0.03em' },
  close: { background:'transparent', border:'2px solid var(--ink)', width:36, height:36, fontFamily:'var(--font-mono)', fontSize:16, cursor:'pointer', color:'var(--ink)' },
  form: { padding:'20px 24px 24px', display:'flex', flexDirection:'column', gap:14, overflow:'auto' },
  field: { display:'flex', flexDirection:'column', gap:6 },
  lbl: { fontFamily:'var(--font-mono)', fontSize:11, letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--ink-3)', fontWeight:600 },
  input: { background:'var(--cream)', border:'2px solid var(--ink)', padding:'10px 12px', fontFamily:'var(--font-mono)', fontSize:13, color:'var(--ink)', outline:'none' },
  row: { display:'flex', gap:12 },
  toggleRow: { padding:'4px 0' },
  toggleBtn: { display:'flex', alignItems:'center', gap:12, background:'transparent', border:'none', padding:0, cursor:'pointer' },
  dz: { padding:'24px', border:'2px dashed var(--ink-3)', textAlign:'center', background:'var(--bone-2)' },
  foot: { display:'flex', gap:10, alignItems:'center', paddingTop:14, borderTop:'1px solid var(--bone-3)' },
};

window.EvidenceComposer = EvidenceComposer;
