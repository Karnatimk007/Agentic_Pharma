import { MarketInsight, EXIMData, PatentData, ClinicalTrialData, InternalKnowledge, WebIntelligence } from '../types';

export const mockMarketData: Record<string, MarketInsight> = {
  'chronic respiratory diseases': {
    disease: 'Chronic Respiratory Diseases',
    marketSize: '$12.4 Billion (India, 2024)',
    cagr: '8.2% (2024-2029)',
    competition: 'Low-Medium (Fragmented)',
    topCompetitors: ['Cipla', 'Sun Pharma', 'Dr. Reddy\'s', 'Lupin', 'Glenmark'],
    unmetNeed: 'Affordable nebulizer solutions and improved adherence for rural populations',
    patientPopulation: '~65M chronic respiratory patients in India'
  },
  'copd': {
    disease: 'Chronic Obstructive Pulmonary Disease (COPD)',
    marketSize: '$4.8 Billion (India, 2024)',
    cagr: '9.1% (2024-2029)',
    competition: 'Medium',
    topCompetitors: ['Cipla', 'GSK', 'AstraZeneca', 'Boehringer Ingelheim'],
    unmetNeed: 'Long-acting bronchodilators at accessible price points',
    patientPopulation: '~30M diagnosed COPD patients'
  },
  'asthma': {
    disease: 'Asthma',
    marketSize: '$7.6 Billion (India, 2024)',
    cagr: '7.8% (2024-2029)',
    competition: 'High',
    topCompetitors: ['Cipla', 'GSK', 'AstraZeneca', 'Zydus'],
    unmetNeed: 'Pediatric formulations and adherence tools',
    patientPopulation: '~35M asthma patients'
  }
};

export const mockPatentData: Record<string, PatentData> = {
  'budesonide': {
    molecule: 'Budesonide',
    activePatents: 3,
    expiryTimeline: 'Primary patents expired; formulation patents expire 2026-2027',
    ftoRisk: 'Low',
    filingDensity: 'Moderate (18 filings in last 5 years)',
    keyPatents: [
      { id: 'US10987654', title: 'Extended-release budesonide formulation', expiry: '2027-03', owner: 'AstraZeneca' },
      { id: 'IN234567', title: 'Nebulizer suspension of budesonide', expiry: '2026-08', owner: 'Cipla' },
      { id: 'EP2345678', title: 'Dry powder inhaler with budesonide', expiry: '2028-12', owner: 'GSK' }
    ]
  },
  'formoterol': {
    molecule: 'Formoterol',
    activePatents: 1,
    expiryTimeline: 'All primary patents expired; combination patents expire 2025',
    ftoRisk: 'Very Low',
    filingDensity: 'Low (6 filings in last 5 years)',
    keyPatents: [
      { id: 'US10123456', title: 'Formoterol/ICS combination inhaler', expiry: '2025-06', owner: 'AstraZeneca' }
    ]
  },
  'tiotropium': {
    molecule: 'Tiotropium',
    activePatents: 5,
    expiryTimeline: 'Primary patents expired 2023; device patents expire 2029',
    ftoRisk: 'Low-Medium',
    filingDensity: 'High (24 filings in last 5 years)',
    keyPatents: [
      { id: 'US11234567', title: 'Respimat device for tiotropium', expiry: '2029-09', owner: 'Boehringer Ingelheim' },
      { id: 'IN345678', title: 'Tiotropium DPI formulation', expiry: '2027-11', owner: 'Cipla' }
    ]
  }
};

export const mockClinicalTrials: Record<string, ClinicalTrialData> = {
  'budesonide-copd': {
    molecule: 'Budesonide',
    indication: 'COPD',
    ongoingTrials: 47,
    phases: { phase1: 3, phase2: 12, phase3: 24, phase4: 8 },
    topSponsors: ['AstraZeneca', 'Cipla', 'University of Delhi', 'ICMR'],
    geographies: ['India', 'China', 'USA', 'EU', 'Brazil'],
    successRate: '68% (Phase 2 to Phase 3 transition)'
  },
  'formoterol-asthma': {
    molecule: 'Formoterol',
    indication: 'Asthma',
    ongoingTrials: 62,
    phases: { phase1: 5, phase2: 18, phase3: 31, phase4: 8 },
    topSponsors: ['GSK', 'AstraZeneca', 'AIIMS', 'Cipla'],
    geographies: ['India', 'USA', 'EU', 'Japan', 'Australia'],
    successRate: '71% (Phase 2 to Phase 3 transition)'
  },
  'tiotropium-copd': {
    molecule: 'Tiotropium',
    indication: 'COPD',
    ongoingTrials: 38,
    phases: { phase1: 2, phase2: 9, phase3: 19, phase4: 8 },
    topSponsors: ['Boehringer Ingelheim', 'Sun Pharma', 'CMC Vellore'],
    geographies: ['India', 'China', 'USA', 'EU', 'Russia'],
    successRate: '73% (Phase 2 to Phase 3 transition)'
  }
};

export const mockEXIMData: Record<string, EXIMData> = {
  'budesonide': {
    molecule: 'Budesonide',
    importDependency: 'Medium (42% API imported)',
    exportPotential: 'High (Growing demand in Africa, LATAM)',
    sourcingCountries: ['China', 'Italy', 'Spain', 'India (58% domestic)'],
    tradeRisk: 'Low-Medium',
    tariffImpact: 'Minimal (5-7% import duty)'
  },
  'formoterol': {
    molecule: 'Formoterol',
    importDependency: 'High (68% API imported)',
    exportPotential: 'Medium',
    sourcingCountries: ['China', 'Switzerland', 'Germany', 'India (32% domestic)'],
    tradeRisk: 'Medium (China dependency)',
    tariffImpact: 'Moderate (7-10% import duty)'
  },
  'tiotropium': {
    molecule: 'Tiotropium',
    importDependency: 'Very High (89% API imported)',
    exportPotential: 'Low-Medium',
    sourcingCountries: ['China', 'Germany', 'India (11% domestic)'],
    tradeRisk: 'High (Single source dependency)',
    tariffImpact: 'High (10-12% import duty)'
  }
};

export const mockInternalKnowledge: Record<string, InternalKnowledge> = {
  'respiratory': {
    topic: 'Respiratory Portfolio Strategy',
    keyInsights: [
      'Current portfolio heavily reliant on generic ICS molecules with declining margins',
      'Manufacturing capacity exists for nebulizer suspensions (underutilized 35%)',
      'Strong distribution network in Tier 2/3 cities suitable for respiratory products',
      'Existing regulatory approvals for 3 respiratory molecules expedite new formulations'
    ],
    strategicGaps: [
      'Limited presence in long-acting bronchodilator segment',
      'No combination therapy products in portfolio',
      'Weak position in hospital/institutional segment',
      'Underdeveloped medical affairs capabilities in pulmonology'
    ],
    priorRecommendations: [
      'Evaluate budesonide nebulizer opportunity (2023 Strategic Review)',
      'Consider partnerships for device technology (2022 BD Review)',
      'Strengthen pulmonology KOL network (2023 Medical Strategy)'
    ],
    relevance: 'High - aligns with 2024-2026 portfolio transformation goals'
  }
};

export const mockWebIntelligence: Record<string, WebIntelligence> = {
  'copd-india': {
    topic: 'COPD in India',
    guidelines: [
      'Indian Chest Society COPD Guidelines 2023',
      'WHO Global Strategy for COPD Management',
      'National Programme for Prevention and Control of Cancer, Diabetes, CVD and Stroke (NPCDCS)'
    ],
    publications: [
      { title: 'Burden of COPD in India: A systematic review', source: 'Indian J Med Res', year: 2023 },
      { title: 'Nebulized therapy adherence in rural India', source: 'Respir Care', year: 2024 },
      { title: 'Cost-effectiveness of COPD management in LMIC', source: 'Lancet Glob Health', year: 2023 }
    ],
    rwe: [
      'Poor adherence to inhaler therapy in rural settings (32% adherence rate)',
      'Preference for nebulizer therapy over inhalers in elderly patients (67% preference)',
      'High out-of-pocket expenses limit access to branded products'
    ],
    news: [
      'Government launches respiratory disease awareness campaign (Jan 2024)',
      'ICMR announces COPD prevalence study across 15 states (Mar 2024)',
      'Ayushman Bharat to cover COPD medications (Feb 2024)'
    ],
    unmetNeeds: [
      'Affordable long-acting bronchodilators',
      'Easy-to-use delivery devices for elderly and low-literacy patients',
      'Combination therapies at accessible price points',
      'Better availability in rural healthcare settings'
    ]
  }
};

export const sampleMolecules = [
  { name: 'Budesonide', class: 'Inhaled Corticosteroid (ICS)', status: 'Off-patent' },
  { name: 'Formoterol', class: 'Long-acting Beta-agonist (LABA)', status: 'Off-patent' },
  { name: 'Tiotropium', class: 'Long-acting Muscarinic Antagonist (LAMA)', status: 'Off-patent' },
  { name: 'Ipratropium', class: 'Short-acting Muscarinic Antagonist (SAMA)', status: 'Off-patent' },
  { name: 'Salbutamol', class: 'Short-acting Beta-agonist (SABA)', status: 'Off-patent' }
];
