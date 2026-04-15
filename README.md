# Alteos Partner Intelligence Hub

A operational intelligence dashboard built specifically for Alteos — an AXA-backed embedded InsurTech that sells insurance through retail partners across Germany.

**Live:** https://ornate-croissant-d94890.netlify.app  
**Built with:** React, Vite, JavaScript

---

## The Problem This Solves

Most operational dashboards exist but don't get used. The reason is simple: they make you find the insight yourself. A COO opens a dashboard, scans through charts, and has to figure out what matters — by which point they've already lost focus.

This dashboard was built around a different philosophy:

> **The insight should come to you. Not the other way around.**

---

## What It Does

The hub covers Alteos' three core operational areas — partner ops, claims, and support — each modelled on their actual business: e-bike insurance, eyewear protection, and hearing aid coverage sold through retail partners like Fielmann, Kind Hörakustik, and Rose Bikes.

### Intelligence Layer
Every tab opens with a plain-English AI briefing before a single chart appears. Instead of "here is your data", it says: *"2 partners are underperforming this week. Hearly has had zero activations for 22 days. Bike24 dropped below SLA threshold."* The data below confirms it.

### Three Operational Tabs

**Partner Ops**
- Partner health status across 13 active partners
- Policy volume by partner (7-day rolling)
- Attach rate by product line: eyewear, e-bike, hearing aids
- Onboarding pipeline KPIs: days to first policy, API uptime, new partner targets

**Claims**
- Open claims by product type with volume bars
- Resolution SLA tracking: 3-day, 5-day, 10-day targets
- Loss ratio, average payout, and reopened claim rate
- Active alerts with severity levels: fraud spikes, escalation trends, capacity signals

**Support**
- Ticket volume and CSAT score vs target
- First contact resolution rate
- Ticket reasons breakdown: claim status, policy questions, cancellations, payment issues
- Feedback loop signals — each alert routes to a named action owner (Product, Partner Ops, Service)

### COO Digest
A single button collapses all three tabs into one narrative morning briefing — designed so a COO can assess full operational health in under 60 seconds without switching tabs.

---

## Key Design Decisions

**Narrative first, data second.** Every tab leads with a 2–3 sentence intelligence briefing. This is a deliberate architectural choice: insight delivery is an ops problem, not just a reporting problem.

**Alteos-specific data.** The mock data uses real Alteos partner names, real product lines, and real claim types — not generic placeholder content. The dashboard was built to feel like it already understands their world.

**Feedback loops built in.** Support and claims alerts don't just surface problems — they name the team responsible for acting on them. This maps directly to turning operational insights into cross-functional improvements.

**Separated data layer.** All mock data lives in `src/data/mockData.js`, cleanly separated from the UI. This makes it straightforward to connect a real CRM or data warehouse — HubSpot, Salesforce, or a custom API — without touching the component layer.

---

## Project Structure

```
alteos-ops-dashboard/
├── src/
│   ├── data/
│   │   └── mockData.js          # All Alteos mock data — partners, claims, support, KPIs
│   ├── components/
│   │   ├── TopBar.jsx           # Header with COO Digest toggle
│   │   ├── IntelligenceBanner.jsx  # AI narrative briefing per tab
│   │   ├── MetricsRow.jsx       # 4-card KPI summary row
│   │   ├── Tabs.jsx             # Tab navigation
│   │   └── tabs/
│   │       ├── PartnerOps.jsx   # Partner health + attach rate
│   │       ├── Claims.jsx       # Claims breakdown + alerts
│   │       └── Support.jsx      # Ticket reasons + feedback signals
│   ├── App.jsx                  # Root component, tab state, digest logic
│   └── index.css                # Global styles
```

---

## Running Locally

```bash
git clone https://github.com/Sandypaluk/alteos-ops-dashboard
cd alteos-ops-dashboard
npm install
npm run dev
```

Open `http://localhost:5173`

---

## What This Would Look Like With Real Data

The current version uses structured mock data that mirrors Alteos' actual operational model. Connecting it to live data would require:

- **HubSpot API** — for CRM partner records, contact activity, and pipeline data
- **Claims system API** — for real-time claim status, resolution times, and fraud flags
- **Support platform API** — Zendesk or equivalent, for ticket volume and CSAT feeds
- **Scheduled refresh** — a lightweight backend (Node.js or Python) to pull and cache data on a defined interval

The component and data layer are already separated to make this straightforward.

---

## Context

This dashboard was built as part of an application for the Head of Operations — Intelligence & Process Enablement role at Alteos. Rather than describing what I would build in the role, I built it.

The design reflects the core belief behind the job description: that operational intelligence should empower decision-making, not just report on it.

---

*Built by Sandra K. Paluku — [LinkedIn](https://www.linkedin.com/in/sk-paluku) · [GitHub](https://github.com/Sandypaluk)*
