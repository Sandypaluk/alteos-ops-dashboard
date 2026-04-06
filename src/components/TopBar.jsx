export default function TopBar({ onDigestClick, digestOpen }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      paddingBottom: '12px',
      borderBottom: '0.5px solid #d4d2cc',
      marginBottom: '20px'
    }}>

      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span style={{
          fontFamily: 'DM Mono, monospace', fontSize: '10px', fontWeight: 500,
          letterSpacing: '0.08em', padding: '3px 8px', borderRadius: '4px',
          background: '#E6F1FB', color: '#185FA5'
        }}>
          ALTEOS OPS
        </span>
        <span style={{ fontSize: '15px', fontWeight: 500, color: '#fff' }}>
          Partner Intelligence Hub
        </span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <button
  onClick={onDigestClick}
  style={{
    display: 'flex', alignItems: 'center', gap: '6px',
    padding: '7px 14px', fontSize: '12px', fontWeight: 500,
    fontFamily: 'DM Sans, sans-serif',
    color: '#fff',
    background: 'rgba(255,255,255,0.1)',
    border: '0.5px solid rgba(255,255,255,0.2)',
    borderRadius: '8px', cursor: 'pointer'
  }}
>
  {digestOpen ? 'Close digest' : 'COO digest'}
</button>
        <span style={{
          fontSize: '11px',
          color: 'rgba(255,255,255,0.5)',
          fontFamily: 'DM Mono, monospace'
        }}>
          Updated 07:42 today
        </span>

      </div>
    </div>
  )
}