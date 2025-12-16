import { AgentResult, IQVIAOutput, EXIMOutput, PatentOutput, ClinicalOutput, InternalInsightsOutput, WebIntelligenceOutput, ReportOutput } from '../types';
import { mockIQVIAData, mockPatentData, mockClinicalData, mockEXIMData, mockInternalData, mockWebData } from '../data/mockData';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export class IQVIAInsightsAgent {
  async analyze(): Promise<AgentResult> {
    const startTime = Date.now();
    await delay(2000 + Math.random() * 1000);
    const data = mockIQVIAData['respiratory'];
    return {
      agentName: 'IQVIA Insights Agent',
      status: 'complete',
      data,
      timestamp: Date.now(),
      duration: Date.now() - startTime
    };
  }
}

export class EXIMTrendsAgent {
  async analyze(): Promise<AgentResult> {
    const startTime = Date.now();
    await delay(1800 + Math.random() * 1000);
    const data = mockEXIMData['budesonide'];
    return {
      agentName: 'EXIM Trends Agent',
      status: 'complete',
      data,
      timestamp: Date.now(),
      duration: Date.now() - startTime
    };
  }
}

export class PatentLandscapeAgent {
  async analyze(): Promise<AgentResult> {
    const startTime = Date.now();
    await delay(2500 + Math.random() * 1000);
    const data = mockPatentData['budesonide'];
    return {
      agentName: 'Patent Landscape Agent',
      status: 'complete',
      data,
      timestamp: Date.now(),
      duration: Date.now() - startTime
    };
  }
}

export class ClinicalTrialsAgent {
  async analyze(): Promise<AgentResult> {
    const startTime = Date.now();
    await delay(2200 + Math.random() * 1000);
    const data = mockClinicalData['budesonide-copd'];
    return {
      agentName: 'Clinical Trials Agent',
      status: 'complete',
      data,
      timestamp: Date.now(),
      duration: Date.now() - startTime
    };
  }
}

export class InternalInsightsAgent {
  async analyze(): Promise<AgentResult> {
    const startTime = Date.now();
    await delay(1500 + Math.random() * 1000);
    const data = mockInternalData['respiratory'];
    return {
      agentName: 'Internal Insights Agent',
      status: 'complete',
      data,
      timestamp: Date.now(),
      duration: Date.now() - startTime
    };
  }
}

export class WebIntelligenceAgent {
  async analyze(): Promise<AgentResult> {
    const startTime = Date.now();
    await delay(2800 + Math.random() * 1000);
    const data = mockWebData['copd-india'];
    return {
      agentName: 'Web Intelligence Agent',
      status: 'complete',
      data,
      timestamp: Date.now(),
      duration: Date.now() - startTime
    };
  }
}

export class ReportGeneratorAgent {
  async generate(iqvia: IQVIAOutput, exim: EXIMOutput, patent: PatentOutput, clinical: ClinicalOutput, internal: InternalInsightsOutput, web: WebIntelligenceOutput): Promise<AgentResult> {
    const startTime = Date.now();
    await delay(3000 + Math.random() * 1000);

    const report: ReportOutput = {
      executiveSummary: 'Budesonide Nebulizer Suspension (0.5mg/2mL) is recommended as a high-priority repurposing opportunity for COPD management in India. Market size of $4,800Mn (9.1% CAGR), strong clinical evidence (47 active trials, 68% Phase 2→3 success), low FTO risk (primary patents expired), and favorable trade dynamics (42% import dependency) create a compelling case. Leverages underutilized manufacturing capacity (35%) and aligns with India-first portfolio strategy. Estimated 18-24 month time-to-market with $280-420M revenue potential (Years 3-5).',
      iqviaInsights: iqvia,
      eximTrends: exim,
      patentLandscape: patent,
      clinicalTrials: clinical,
      internalInsights: internal,
      webIntelligence: web,
      innovationRecommendation: {
        molecule: 'Budesonide',
        indication: 'COPD',
        dosageForm: 'Nebulizer Suspension (0.5mg/2mL)',
        targetPopulation: 'Elderly COPD patients (65+) in Tier 2/3 cities and rural India',
        unmetNeed: '67% of elderly prefer nebulizers; poor MDI adherence (28%) in low-literacy populations; out-of-pocket burden limits access',
        competitiveGap: 'Market skews to inhalers/DPIs (Cipla, GSK, AstraZeneca); limited affordable nebulizer offerings; gap in geriatric-friendly formulations',
        clinicalFeasibility: 'Strong: 47 active trials, 68% Phase 2→3 transition, well-established safety profile, regulatory pathway clear',
        patentSafety: 'Low FTO risk: Primary API patents expired; formulation patents non-blocking; no challenging IP landscape',
        commercialRationale: '$4,800Mn market growing 9.1% CAGR; 42% import dependency manageable with 35% spare capacity; strong Tier 2/3 distribution advantage',
        estimatedRevenue: '$280-420M (Years 3-5 post-launch); 12-15% market share capture',
        timeToMarket: '18-24 months (6mo formulation dev, 6mo BE study, 6mo regulatory, 3mo manufacturing scale-up)',
        investmentRequired: '$12-15M (formulation development $4-5M, bioequivalence study $3-4M, regulatory $2-3M, marketing $3-4M)'
      },
      strategicRecommendations: [
        'Initiate Phase 0: Formulation development for nebulizer suspension with target CMC optimization by Month 6',
        'Parallel Track: Secure device partnerships (nebulizer systems) to ensure supply-chain resilience',
        'Conduct targeted bioequivalence study (n=48) with reference product in Indian subjects (Month 4-9)',
        'Engage with DCGI early for regulatory feedback to optimize approval timeline',
        'Establish KOL advisory board across pulmonology centers in Delhi, Mumbai, Bangalore for clinical validation',
        'Develop patient education materials in regional languages for rural markets',
        'Explore Ayushman Bharat partnerships for hospital procurement and reimbursement'
      ],
      nextSteps: [
        'Week 1: Present findings to Executive Committee for strategic approval and budget allocation',
        'Month 1-3: Complete formulation development, analytical method development, and GMP manufacturing trial batch',
        'Month 4-9: Execute bioequivalence study across Phase 1 unit and clinical pharmacology center',
        'Month 10-12: Prepare regulatory submission with CMC, clinical data, and proposed claims',
        'Month 13-18: Regulatory approval process; parallel manufacturing scale-up and analytical validation',
        'Month 19-20: Commercial launch with physician detailing and patient awareness campaigns',
        'Month 21-24: Full market penetration in Tier 2/3 cities; evaluate indication expansion (Asthma, Chronic Bronchitis)'
      ],
      generatedAt: new Date().toISOString()
    };

    return {
      agentName: 'Report Generator Agent',
      status: 'complete',
      data: report,
      timestamp: Date.now(),
      duration: Date.now() - startTime
    };
  }
}
