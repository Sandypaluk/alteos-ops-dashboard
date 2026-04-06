import { partners, attachRateByProduct } from '../../data/mockData'

const statusConfig = {
  healthy:  { label: 'healthy',  bg: '#E1F5EE', color: '#0F6E56' },
  'sla-risk': { label: 'SLA risk', bg: '#FAEEDA', color: '#854F0B' },
  silent:   { label: 'silent 22d', bg: '#FCEBEB', color: '#A32D2D' },
}

export default function PartnerOps() {
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
          Partner health
        </div>

        {partners.map((p, i) => (
          <div key={p.name} style={{
            display: 'flex', alignItems: 'center',
            justifyContent: 'space-between',
            padding: '8px 0',
            borderBottom: i < partners.length - 1 ? '0.5px solid #eceae5' : 'none'
          }}>
            <div>
              <div style={{ fontSize: '13px', fontWeight: 500 }}>{p.name}</div>
              <div style={{ fontSize: '11px', color: '#888780', marginTop: '1px' }}>
                {p.type}{p.stores ? ` · ${p.stores} stores` : ' · online'}
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{
                fontSize: '13px', fontWeight: 500,
                fontFamily: 'DM Mono, monospace'
              }}>
                {p.policies7d}
              </div>
              <span style={{
                display: 'inline-block', fontSize: '10px',
                padding: '2px 7px', borderRadius: '20px',
                marginTop: '3px', fontFamily: 'DM Mono, monospace',
                background: statusConfig[p.status].bg,
                color: statusConfig[p.status].color
              }}>
                {statusConfig[p.status].label}
              </span>
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
          Attach rate by product line
        </div>

        {attachRateByProduct.map(item => (
          <div key={item.label} style={{
            display: 'flex', alignItems: 'center',
            gap: '10px', marginBottom: '12px'
          }}>
            <div style={{ fontSize: '12px', color: '#888780', width: '100px', flexShrink: 0 }}>
              {item.label}
            </div>
            <div style={{
              flex: 1, height: '6px', background: '#eceae5',
              borderRadius: '3px', overflow: 'hidden'
            }}>
              <div style={{
                width: `${(item.value / item.max) * 100}%`,
                height: '100%', background: '#185FA5', borderRadius: '3px'
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

        <div style={{
          fontFamily: 'DM Mono, monospace', fontSize: '11px',
          letterSpacing: '0.06em', textTransform: 'uppercase',
          color: '#888780', margin: '16px 0 12px'
        }}>
          Onboarding pipeline
        </div>

        {[
          { label: 'New partners (Q2)', value: '2', target: 'target: 4' },
          { label: 'Avg days to first policy', value: '18d', target: 'target: 14d' },
          { label: 'API integration uptime', value: '99.7%', target: null },
        ].map(item => (
          <div key={item.label} style={{
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'center', padding: '7px 0',
            borderBottom: '0.5px solid #eceae5'
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
  )
}