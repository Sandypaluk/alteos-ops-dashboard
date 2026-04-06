import { useState } from 'react'
import './index.css'
import TopBar from './components/TopBar'
import IntelligenceBanner from './components/IntelligenceBanner'
import MetricsRow from './components/MetricsRow'
import Tabs from './components/Tabs'
import { intelligence, cooDigest, partnerMetrics, claimsMetrics, supportMetrics } from './data/mockData'
import PartnerOps from './components/tabs/PartnerOps'
import Claims from './components/tabs/Claims'
import Support from './components/tabs/Support'

const partnerMetricCards = [
  { label: 'Active partners', value: partnerMetrics.activePartners, delta: `+${partnerMetrics.newThisQuarter} this quarter`, deltaType: 'up' },
  { label: 'Policies issued (7d)', value: partnerMetrics.policies7d.toLocaleString(), delta: `+${partnerMetrics.policiesChange}% vs prior week`, deltaType: 'up' },
  { label: 'Avg attach rate', value: `${partnerMetrics.avgAttachRate}%`, delta: `target: ${partnerMetrics.attachTarget}%`, deltaType: 'neutral' },
  { label: 'SLA compliance', value: `${partnerMetrics.slaCompliance}%`, delta: `↓ from ${partnerMetrics.slaCompliancePrior}% last wk`, deltaType: 'down' },
]

const claimsMetricCards = [
  { label: 'Open claims', value: claimsMetrics.openClaims, delta: `+${claimsMetrics.openClaimsChange} vs last week`, deltaType: 'down' },
  { label: 'Avg resolution (days)', value: claimsMetrics.avgResolutionDays, delta: `target: ${claimsMetrics.resolutionTarget}d`, deltaType: 'up' },
  { label: 'Escalation rate', value: `${claimsMetrics.escalationRate}%`, delta: `↑ from ${claimsMetrics.escalationPrior}% last mo`, deltaType: 'down' },
  { label: 'Fraud flagged (7d)', value: claimsMetrics.fraudFlagged, delta: 'manual review', deltaType: 'neutral' },
]

const supportMetricCards = [
  { label: 'Open tickets', value: supportMetrics.openTickets, delta: `+${supportMetrics.openTicketsChange} vs last week`, deltaType: 'down' },
  { label: 'CSAT score', value: `${supportMetrics.csat}%`, delta: `↓ target: ${supportMetrics.csatTarget}%`, deltaType: 'down' },
  { label: 'First contact resolution', value: `${supportMetrics.firstContactResolution}%`, delta: `target: ${supportMetrics.fcrTarget}%`, deltaType: 'up' },
  { label: 'Avg response time', value: `${supportMetrics.avgResponseHours}h`, delta: `target: ${supportMetrics.responseTarget}h`, deltaType: 'neutral' },
]

const tabMetrics = {
  'Partner ops': partnerMetricCards,
  'Claims': claimsMetricCards,
  'Support': supportMetricCards,
}

const tabIntelligence = {
  'Partner ops': intelligence.partners,
  'Claims': intelligence.claims,
  'Support': intelligence.support,
}

export default function App() {
  const [digestOpen, setDigestOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('Partner ops')

  return (
    <div>
      <TopBar
        onDigestClick={() => setDigestOpen(!digestOpen)}
        digestOpen={digestOpen}
      />

      {digestOpen && (
        <div style={{
          marginBottom: '20px', padding: '18px 20px',
          background: '#eceae5', borderRadius: '12px',
          border: '0.5px solid #d4d2cc'
        }}>
          <div style={{
            fontFamily: 'DM Mono, monospace', fontSize: '10px',
            letterSpacing: '0.1em', color: '#888780',
            textTransform: 'uppercase', marginBottom: '12px'
          }}>
            Morning briefing — 6 Apr 2026
          </div>
          {cooDigest.map((para, i) => (
            <p key={i} style={{
              fontSize: '13px', lineHeight: 1.7,
              color: '#1a1a1a', marginBottom: i < cooDigest.length - 1 ? '10px' : 0
            }}>
              {para}
            </p>
          ))}
        </div>
      )}

      <Tabs active={activeTab} onChange={setActiveTab} />
      <IntelligenceBanner text={tabIntelligence[activeTab]} />
      <MetricsRow metrics={tabMetrics[activeTab]} />
      {activeTab === 'Partner ops' && <PartnerOps />}
      {activeTab === 'Claims' && <Claims />}
      {activeTab === 'Support' && <Support />}

    </div>
  )
}