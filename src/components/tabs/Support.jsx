import { ticketReasons } from '../../data/mockData'

const feedbackAlerts = [
  {
    severity: 'high',
    title: '38% of tickets are claim status requests',
    text: 'Customers don\'t know where their claim stands. Automated status push notifications could deflect ~80 tickets/week.',
    action: 'Action: Product & Tech'
  },
  {
    severity: 'mid',
    title: 'Cancellation rate up slightly',
    text: '12% of tickets. Cross-ref with partner offboarding data to identify if partner-specific; may be a retention signal.',
    action: 'Action: Partner ops review'
  },
]

const severityConfig = {
  high: { border: '#E24B4A', bg: '#FCEBEB', color: '#A32D2D', symbol: '!' },
  mid:  { border: '#EF9F27', bg: '#FAEEDA', color: '#854F0B', symbol: '~' },
}

export default function Support() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>

      <div style={{
        background: '#fff', border: '0.5px solid #d4d2cc',
        borderRadius: '12px', padding: '14px 16px'
      }}>
        <div style={{
          fontFamily: 'DM Mono, monospace', fontSize: '11px',
          letterSpacing: '0.06em', textTransform: 'uppercase',
          color: '#888780', marginBottom: '12px'
        }}>
          Ticket reasons (top 5)
        </div>

        {ticketReasons.map(item => (
          <div key={item.label} style={{
            display: 'flex', alignItems: 'center',
            gap: '10px', marginBottom: '12px'
          }}>
            <div style={{ fontSize: '12px', color: '#888780', width: '110px', flexShrink: 0 }}>
              {item.label}
            </div>
            <div style={{
              flex: 1, height: '6px', background: '#eceae5',
              borderRadius: '3px', overflow: 'hidden'
            }}>
              <div style={{
                width: `${(item.value / 45) * 100}%`,
                height: '100%', background: item.color, borderRadius: '3px'
              }} />
            </div>
            <div style={{
              fontSize: '12px', fontFamily: 'DM Mono, monospace',
              width: '32px', textAlign: 'right'
            }}>
              {item.value}%
            </div>
          </div>
        ))}
      </div>

      <div style={{
        background: '#fff', border: '0.5px solid #d4d2cc',
        borderRadius: '12px', padding: '14px 16px'
      }}>
        <div style={{
          fontFamily: 'DM Mono, monospace', fontSize: '11px',
          letterSpacing: '0.06em', textTransform: 'uppercase',
          color: '#888780', marginBottom: '12px'
        }}>
          Feedback loop signals
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {feedbackAlerts.map(alert => {
            const s = severityConfig[alert.severity]
            return (
              <div key={alert.title} style={{
                display: 'flex', gap: '10px', alignItems: 'flex-start',
                padding: '10px 12px', borderRadius: '8px',
                border: '0.5px solid #d4d2cc',
                borderLeft: `3px solid ${s.border}`
              }}>
                <div style={{
                  width: '18px', height: '18px', flexShrink: 0,
                  borderRadius: '50%', display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  fontSize: '9px', fontWeight: 500, marginTop: '1px',
                  background: s.bg, color: s.color
                }}>
                  {s.symbol}
                </div>
                <div>
                  <div style={{ fontSize: '12px', lineHeight: 1.55, color: '#1a1a1a' }}>
                    <strong style={{ fontWeight: 500 }}>{alert.title}</strong>
                    {' — '}{alert.text}
                  </div>
                  <div style={{
                    fontSize: '10px', color: '#888780', marginTop: '2px',
                    fontFamily: 'DM Mono, monospace'
                  }}>
                    → {alert.action}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

    </div>
  )
}