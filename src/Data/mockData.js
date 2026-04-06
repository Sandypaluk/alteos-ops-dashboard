export const partners = [
  { name: "Fielmann", type: "Eyewear", stores: 48, policies7d: 841, attachRate: 38, slaCompliance: 99, status: "healthy" },
  { name: "Rose Bikes", type: "E-bike", stores: 12, policies7d: 612, attachRate: 34, slaCompliance: 98, status: "healthy" },
  { name: "Bike24", type: "E-bike", stores: null, policies7d: 488, attachRate: 31, slaCompliance: 94, status: "sla-risk" },
  { name: "Kind Hörakustik", type: "Hearing aids", stores: 31, policies7d: 374, attachRate: 22, slaCompliance: 97, status: "healthy" },
  { name: "Hearly", type: "Hearing aids", stores: 9, policies7d: 0, attachRate: 0, slaCompliance: null, status: "silent" },
]

export const partnerMetrics = {
  activePartners: 13,
  newThisQuarter: 2,
  policies7d: 2841,
  policiesChange: 8,
  avgAttachRate: 31,
  attachTarget: 35,
  slaCompliance: 96,
  slaCompliancePrior: 98,
}

export const attachRateByProduct = [
  { label: "Eyewear", value: 38, max: 50 },
  { label: "E-bike", value: 31, max: 50 },
  { label: "Hearing aids", value: 22, max: 50 },
]

export const claimsMetrics = {
  openClaims: 143,
  openClaimsChange: 18,
  avgResolutionDays: 4.1,
  resolutionTarget: 5.0,
  escalationRate: 6.3,
  escalationPrior: 4.1,
  fraudFlagged: 3,
}

export const claimsByType = [
  { label: "E-bike theft", value: 58, color: "#E24B4A" },
  { label: "E-bike damage", value: 31, color: "#EF9F27" },
  { label: "Hearing aid loss", value: 21, color: "#378ADD" },
  { label: "Glasses damage", value: 14, color: "#378ADD" },
  { label: "Other", value: 19, color: "#888780" },
]

export const resolutionSLA = [
  { label: "Closed within 3 days", value: 41, target: 50 },
  { label: "Closed within 5 days", value: 79, target: 80 },
  { label: "Closed within 10 days", value: 96, target: null },
  { label: "Reopened claims", value: 2.1, target: 3, lowerIsBetter: true },
]

export const supportMetrics = {
  openTickets: 217,
  openTicketsChange: 31,
  csat: 81,
  csatTarget: 85,
  firstContactResolution: 73,
  fcrTarget: 70,
  avgResponseHours: 3.2,
  responseTarget: 4,
}

export const ticketReasons = [
  { label: "Claim status", value: 38, color: "#185FA5" },
  { label: "Policy question", value: 21, color: "#185FA5" },
  { label: "Cancellation", value: 12, color: "#EF9F27" },
  { label: "Payment issue", value: 9, color: "#EF9F27" },
  { label: "Other", value: 20, color: "#888780" },
]

export const intelligence = {
  partners: "2 partners underperforming this week. Hearly (hearing aids) has had zero policy activations for 22 days — last active 14 Mar. Bike24 dropped to 94% SLA compliance against a 97% target. All other 11 active partners are within range. Top performer: Fielmann, up 12% attach rate week-on-week.",
  claims: "E-bike theft claims spiked 40% in the last 7 days — 11 new cases, concentrated in Hamburg and Munich postcodes. Fraud scoring flagged 3 for manual review. Resolution time is holding at 4.1 days against a 5-day target, but capacity risk is rising if volume sustains.",
  support: "CSAT dropped to 81% this week (target: 85%). Post-claim support tickets are up 18% month-on-month — suggesting customers aren't getting proactive status updates after filing. First-contact resolution is healthy at 73%. Recommend a Product feedback loop on automated claims status notifications.",
}

export const cooDigest = [
  "Partner ops are broadly stable, but two signals need attention: Hearly has gone quiet for 22 days — no new policy activations — while Bike24 is running at 94% SLA compliance, below the 97% threshold. Both warrant a check-in this week before they become churn risks.",
  "Claims are performing well on volume and resolution speed, but e-bike theft claims spiked 40% in the last 7 days, concentrated in Hamburg and Munich postcodes. Fraud scoring flagged 3 of the 11 new cases for manual review. Average resolution is 4.1 days against a 5-day target — holding.",
  "Support shows a CSAT dip to 81% this week (target: 85%). First-contact resolution is healthy at 73%, but post-claim support tickets have risen 18% month-on-month — suggesting the claims comms flow may need a revision. Recommend a loop back to Product on automated status updates.",
]