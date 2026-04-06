import { claimsByType, resolutionSLA } from '../../data/mockData'

const alerts = [
  {
    severity: 'high',
    title: 'Theft spike in Hamburg & Munich',
    text: '11 e-bike theft claims filed in 7 days, 3.4× the weekly average for these regions. Fraud team notified; 3 cases under manual review.',
    time: 'Detected 2h ago'
  },
  {
    severity: 'mid',
    title: 'Escalation rate climbing',
    text: 'Up to 6.3% from 4.1% last month. Concentrated in hearing aid claims routed through Kind Hörakustik. Possible comms gap post-submission.',
    time: 'Detected yesterday'
  },
  {
    severity: 'low',
    title: 'Resolution time stable',
    text: '4.1 day average is within the 5-day SLA target, even with increased volume. No capacity escalation needed this week.',
    time: 'Updated 07:42 today'
  },
]

const severityConfig = {
  high: { border: '#E24B4A', bg: '#FCEBEB', color: '#A32D2D', symbol: '!' },
  mid:  { border: '#EF9F27', bg: '#FAEEDA', color: '#854F0B', symbol: '~' },
  low:  { border: '#1D9E75', bg: '#E1F5EE', color: '#0F6E56', symbol: '✓' },
}

export default function Claims() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>

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
            Claims by product type
          </div>

          {claimsByType.map(item => (
            <div key={item.label} style={{
              display: 'flex', alignItems: 'center',
              gap: '10px', marginBottom: '12px'
            }}>
              <div style={{ fontSize: '12px', color: '#888780', width: '120px', flexShrink: 0 }}>
                {item.label}
              </div>
              <div style={{
                flex: 1, height: '6px', background: '#eceae5',
                borderRadius: '3px', overflow: 'hidden'
              }}>
                <div style={{
                  width: `${(item.value / 70) * 100}%`,
                  height: '100%', background: item.color, borderRadius: '3px'
                }} />
              </div>
              <div style={{
                fontSize: '12px', fontFamily: 'DM Mono, monospace',
                width: '24px', textAlign: 'right'
              }}>
                {item.value}
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
            Resolution SLA tracking
          </div>

          {resolutionSLA.map((item, i) => (
            <div key={item.label} style={{
              display: 'flex', justifyContent: 'space-between',
              alignItems: 'center', padding: '8px 0',
              borderBottom: i < resolutionSLA.length - 1 ? '0.5px solid #eceae5' : 'none'
            }}>
              <div style={{ fontSize: '12px', color: '#888780' }}>{item.label}</div>
              <div style={{ fontSize: '13px', fontWeight: 500, fontFamily: 'DM Mono, monospace' }}>
                {item.value}{item.label.includes('rate') ? '%' : '%'}{' '}
                {item.target && (
                  <span style={{ fontSize: '11px', color: '#888780', fontWeight: 400 }}>
                    target: {item.lowerIsBetter ? '<' : ''}{item.target}%
                  </span>
                )}
              </div>
            </div>
          ))}

          <div style={{ marginTop: '12px', paddingTop: '8px', borderTop: '0.5px solid #eceae5' }}>
            {[
              { label: 'Avg payout (e-bike)', value: '€847' },
              { label: 'Loss ratio (rolling 90d)', value: '61%', target: 'target: <65%' },
            ].map((item, i) => (
              <div key={item.label} style={{
                display: 'flex', justifyContent: 'space-between',
                alignItems: 'center', padding: '8px 0',
                borderBottom: i === 0 ? '0.5px solid #eceae5' : 'none'
              }}>
                <div style={{ fontSize: '12px', color: '#888780' }}>{item.label}</div>
                <div style={{ fontSize: '13px', fontWeight: 500, fontFamily: 'DM Mono, monospace' }}>
                  {item.value}{' '}
                  {item.target && (
                    <span style={{ fontSize: '11px', color: '#888780', fontWeight: 400 }}>
                      {item.target}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
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
          Active alerts — claims
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {alerts.map(alert => {
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
                    {alert.time}
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