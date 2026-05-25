/* global React */
function StatusPill({ status }) {
  const map = {
    'priority 1': { bg:'var(--purple)', fg:'var(--aether)', bd:'var(--purple)' },
    'signed':     { bg:'transparent', fg:'var(--moss)', bd:'var(--moss)' },
    'published':  { bg:'transparent', fg:'var(--moss)', bd:'var(--moss)' },
    'embargoed':  { bg:'transparent', fg:'var(--ochre)', bd:'var(--ochre)' },
    'in review':  { bg:'transparent', fg:'var(--ink-3)', bd:'var(--ink-3)' },
    'sealed':     { bg:'var(--ink)', fg:'var(--aether)', bd:'var(--ink)' },
    'archived':   { bg:'var(--aether-3)', fg:'var(--ink-3)', bd:'var(--ink-3)' },
  };
  const c = map[status.toLowerCase()] || map['in review'];
  return (
    <span style={{
      display:'inline-block',
      fontFamily:'var(--font-mono)', fontSize:10, fontWeight:500,
      textTransform:'uppercase', letterSpacing:'0.32em',
      padding:'4px 10px',
      border:`1px solid ${c.bd}`, background:c.bg, color:c.fg,
    }}>{status.toUpperCase()}</span>
  );
}
window.StatusPill = StatusPill;
