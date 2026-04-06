export default function IntelligenceBanner({ text }) {
  return (
    <div style={{
      background: '#eceae5',
      borderRadius: '12px',
      border: '0.5px solid #d4d2cc',
      padding: '14px 16px',
      marginBottom: '20px'
    }}>

      <div style={{
        display: 'flex', alignItems: 'center', gap: '6px',
        fontFamily: 'DM Mono, monospace', fontSize: '10px',
        letterSpacing: '0.1em', color: '#888780',
        textTransform: 'uppercase', marginBottom: '6px'
      }}>
        <span style={{
          width: '6px', height: '6px', borderRadius: '50%',
          background: '#1D9E75', display: 'inline-block',
          animation: 'pulse 2.5s infinite'
        }} />
        Intelligence layer
      </div>

      <p style={{ fontSize: '13px', lineHeight: 1.65, color: '#1a1a1a' }}>
        {text}
      </p>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>

    </div>
  )
}