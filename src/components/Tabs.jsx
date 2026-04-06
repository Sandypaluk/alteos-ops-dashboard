export default function Tabs({ active, onChange }) {
  const tabs = ['Partner ops', 'Claims', 'Support']

  return (
    <div style={{
      display: 'flex',
      borderBottom: '0.5px solid rgba(255,255,255,0.15)',
      marginBottom: '20px'
    }}>
      {tabs.map(tab => (
        <div
          key={tab}
          onClick={() => onChange(tab)}
          style={{
            padding: '6px 16px 10px',
            fontSize: '15px',
            fontWeight: active === tab ? 500 : 400,
            color: active === tab ? '#fff' : 'rgba(255,255,255,0.45)',
            cursor: 'pointer',
            borderBottom: active === tab ? '2px solid #4d9ef6' : '2px solid transparent',
            marginBottom: '-0.5px',
            transition: 'color 0.15s'
          }}
        >
          {tab}
        </div>
      ))}
    </div>
  )
}