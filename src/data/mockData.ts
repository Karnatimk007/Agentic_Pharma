import { IQVIAOutput, EXIMOutput, PatentOutput, ClinicalOutput, InternalInsightsOutput, WebIntelligenceOutput } from '../types';

export const mockIQVIAData: Record<string, IQVIAOutput> = {
  'respiratory': {
    marketSizeTable: [
      {
        therapyArea: 'Respiratory',
        indication: 'COPD',
        marketSizeUSDMn: '4,800',
        cagr: '9.1%',
        competitionIntensity: 'Medium'
      },
      {
        therapyArea: 'Respiratory',
        indication: 'Asthma',
        marketSizeUSDMn: '7,600',
        cagr: '7.8%',
        competitionIntensity: 'High'
      },
      {
        therapyArea: 'Respiratory',
        indication: 'Chronic Bronchitis',
        marketSizeUSDMn: '2,100',
        cagr: '8.5%',
        competitionIntensity: 'Low-Medium'
      }
    ],
    growthTrend: 'Steady growth driven by increasing pollution, aging population, and rising healthcare spending in Tier 2/3 cities',
    competitorTable: [
      { company: 'Cipla', molecule: 'Salbutamol, Budesonide', marketShare: '18.2%' },
      { company: 'GSK', molecule: 'Salmeterol, Fluticasone', marketShare: '14.5%' },
      { company: 'AstraZeneca', molecule: 'Budesonide, Formoterol', marketShare: '12.1%' },
      { company: 'Lupin', molecule: 'Generic bronchodilators', marketShare: '9.8%' },
      { company: 'Dr. Reddy\'s', molecule: 'Generic ICS/LABA', marketShare: '8.7%' }
    ]
  }
};

export const mockPatentData: Record<string, PatentOutput> = {
  'budesonide': {
    patentTable: [
      { patentId: 'US10987654', assignee: 'AstraZeneca', geography: 'USA', filingYear: '2015', expiryYear: '2027', status: 'Active' },
      { patentId: 'IN234567', assignee: 'Cipla', geography: 'India', filingYear: '2016', expiryYear: '2026', status: 'Active' },
      { patentId: 'EP2345678', assignee: 'GSK', geography: 'EU', filingYear: '2014', expiryYear: '2028', status: 'Active' },
      { patentId: 'US10111111', assignee: 'AstraZeneca', geography: 'USA', filingYear: '2012', expiryYear: '2023', status: 'Expired' }
    ],
    ftoRiskFlags: {
      overallFTORisk: 'Low',
      keyBlockingPatents: 'None. Primary API patents expired; formulation patents non-core to nebulizer suspension strategy'
    }
  },
  'formoterol': {
    patentTable: [
      { patentId: 'US10123456', assignee: 'AstraZeneca', geography: 'USA', filingYear: '2010', expiryYear: '2025', status: 'Expiring' },
      { patentId: 'EP1987654', assignee: 'AstraZeneca', geography: 'EU', filingYear: '2010', expiryYear: '2025', status: 'Expiring' },
      { patentId: 'IN100001', assignee: 'Cipla', geography: 'India', filingYear: '2008', expiryYear: '2023', status: 'Expired' }
    ],
    ftoRiskFlags: {
      overallFTORisk: 'Very Low',
      keyBlockingPatents: 'All primary patents expired or expiring by 2025'
    }
  }
};

export const mockClinicalData: Record<string, ClinicalOutput> = {
  'budesonide-copd': {
    trialsTable: [
      { trialId: 'CT-COPD-2024-001', indication: 'COPD', phase: 'Phase 3', status: 'Active', sponsorType: 'Pharma' },
      { trialId: 'CT-COPD-2024-002', indication: 'COPD', phase: 'Phase 2', status: 'Active', sponsorType: 'Academia' },
      { trialId: 'CT-COPD-2023-045', indication: 'COPD', phase: 'Phase 4', status: 'Completed', sponsorType: 'Pharma' },
      { trialId: 'CT-COPD-2023-067', indication: 'COPD', phase: 'Phase 3', status: 'Recruiting', sponsorType: 'Contract Research' }
    ],
    pipelineSummary: {
      totalActiveTrials: 47,
      phaseDistribution: { phase1: 3, phase2: 12, phase3: 24, phase4: 8 },
      clinicalMaturity: 'High - Strong Phase 3/4 presence with 68% Phase 2→3 success rate'
    }
  }
};

export const mockEXIMData: Record<string, EXIMOutput> = {
  'budesonide': {
    tradeTable: [
      {
        moleculeApi: 'Budesonide API',
        importVolumeMT: '2,140',
        importValueUSDMn: '18.2',
        exportVolumeMT: '1,240',
        topImportCountries: 'China (52%), Italy (18%), Spain (15%), India domestic (15%)'
      }
    ],
    bulletInsights: {
      importDependency: '42% (Budesonide API sourced externally)',
      supplyChainRisk: 'Low-Medium (Diversified sourcing, no single-source dependency)',
      localizationOpportunity: 'Yes - Potential to increase Indian API manufacturing from 15% to 40% by 2027'
    }
  }
};

export const mockInternalData: Record<string, InternalInsightsOutput> = {
  'respiratory': {
    keyTakeaways: [
      'Current portfolio heavily reliant on generic ICS molecules with declining margins (15-20% CAGR decline)',
      'Manufacturing capacity for nebulizer suspensions underutilized at 35%',
      'Strong distribution network in Tier 2/3 cities - competitive advantage vs MNCs',
      'Existing regulatory approvals for 3 respiratory molecules can expedite new formulation launches'
    ],
    strategicSignals: {
      strategicAlignment: 'High - Aligns with 2024-2026 portfolio transformation & India-first strategy',
      pastLearnings: 'Success: Nebulizer formulations show strong adoption in rural markets. Risk: Device partnerships critical to avoid supply constraints.'
    },
    pdfExtractSummary: [
      '"Respiratory segment growth at 8-9% CAGR, but margin compression due to generic competition" - Strategic Review FY2023',
      '"Opportunity to leverage manufacturing for value-added respiratory formulations" - Capacity Utilization Study FY2023',
      '"Build pulmonology expertise through KOL engagement in Tier 2/3 cities" - Medical Affairs Strategic Plan FY2024'
    ]
  }
};

export const mockWebData: Record<string, WebIntelligenceOutput> = {
  'copd-india': {
    treatmentGuidelines: [
      'Indian Chest Society COPD Guidelines 2023: Nebulized therapy recommended for elderly and rural patients',
      'WHO Global Strategy for COPD 2024: Emphasis on affordable solutions in LMICs',
      'Ayushman Bharat Protocol: COPD medications and inhalation therapy included in coverage (as of Feb 2024)'
    ],
    realWorldEvidence: [
      '67% of elderly COPD patients in rural India prefer nebulizer vs MDI (Indian J Community Med, 2024)',
      'Nebulizer adherence rate 42% vs MDI 28% in low-literacy populations (Respir Care India, 2023)',
      'Out-of-pocket expenses for inhalers average INR 1,200/month vs INR 400/month for nebulized therapy'
    ],
    newsAndPolicy: [
      'ICMR announces COPD prevalence study across 15 states (Mar 2024) - Expected 30M+ cases identified',
      'Government launches National Respiratory Health Mission targeting rural diagnostics (Jan 2024)',
      'Ayushman Bharat expansion to include respiratory care in 5 additional states (Feb 2024)'
    ],
    hyperlinkReferences: [
      { title: 'Indian Chest Society COPD Guidelines 2023', url: 'https://chest.org.in/guidelines/copd2023' },
      { title: 'WHO Global COPD Strategy 2024', url: 'https://who.int/copd/strategy2024' },
      { title: 'Ayushman Bharat Coverage Updates', url: 'https://ayushman.gov.in/coverage/respiratory' }
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
