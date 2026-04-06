export default function MetricsRow({ metrics }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
      gap: '10px',
      marginBottom: '20px'
    }}>
      {metrics.map((m, i) => (
        <div key={i} style={{
          background: '#eceae5',
          borderRadius: '8px',
          padding: '12px 14px'
        }}>
          <div style={{
            fontFamily: 'DM Mono, monospace',
            fontSize: '11px', letterSpacing: '0.04em',
            color: '#888780', marginBottom: '4px'
          }}>
            {m.label}
          </div>
          <div style={{ fontSize: '22px', fontWeight: 500, lineHeight: 1.1 }}>
            {m.value}
          </div>
          {m.delta && (
            <div style={{
              fontSize: '11px', marginTop: '3px',
              fontFamily: 'DM Mono, monospace',
              color: m.deltaType === 'up' ? '#1D9E75'
                   : m.deltaType === 'down' ? '#E24B4A'
                   : '#888780'
            }}>
              {m.delta}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}