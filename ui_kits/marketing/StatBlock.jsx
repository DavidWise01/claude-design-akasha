/* global React */
function StatBlock() {
  const stats = [
    { n: '14', l: 'Phases', sub: 'Foundation → Evolution. Each phase a separable module.' },
    { n: '112', l: 'Articles', sub: 'Each article a single declarative principle.' },
    { n: '5', l: 'AI systems', sub: 'Co-authored with AVAN; reviewed by Gemini, Grok, Hinge.' },
    { n: '$0', l: 'Industry funding', sub: 'Reader-supported. No corporate grants.' },
  ];
  return (
    <section style={sb.wrap}>
      {stats.map((st, i) => (
        <div key={i} style={sb.cell}>
          <div style={sb.n}>{st.n}</div>
          <div style={sb.l}>{st.l}</div>
          <div style={sb.sub}>{st.sub}</div>
        </div>
      ))}
    </section>
  );
}

const sb = {
  wrap: {
    display:'grid', gridTemplateColumns:'repeat(4, 1fr)',
    borderBottom:'1px solid var(--ink)',
  },
  cell: { padding:'48px 36px', borderRight:'1px solid var(--line-3)' },
  n: {
    fontFamily:'var(--font-display)', fontWeight:900,
    fontSize:'clamp(56px, 5.5vw, 84px)', lineHeight:0.95,
    letterSpacing:'-0.04em', color:'var(--purple)',
  },
  l: {
    fontFamily:'var(--font-display)', fontWeight:700,
    fontSize:18, color:'var(--ink)', marginTop:8,
    letterSpacing:'-0.01em', textTransform:'uppercase',
  },
  sub: {
    fontFamily:'var(--font-mono)', fontSize:11,
    textTransform:'lowercase', letterSpacing:'0.22em',
    color:'var(--smoke)', marginTop:10, lineHeight:1.5,
  },
};

window.StatBlock = StatBlock;
