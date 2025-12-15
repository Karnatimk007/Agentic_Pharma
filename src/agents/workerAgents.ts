import { AgentResult, MarketInsight, EXIMData, PatentData, ClinicalTrialData, InternalKnowledge, WebIntelligence } from '../types';
import { mockMarketData, mockPatentData, mockClinicalTrials, mockEXIMData, mockInternalKnowledge, mockWebIntelligence } from '../data/mockData';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export class IQVIAInsightsAgent {
  async analyze(diseaseArea: string): Promise<AgentResult> {
    const startTime = Date.now();
    await delay(2000 + Math.random() * 1000);

    const key = diseaseArea.toLowerCase();
    const data = mockMarketData[key] || mockMarketData['chronic respiratory diseases'];

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
  async analyze(molecule: string): Promise<AgentResult> {
    const startTime = Date.now();
    await delay(1800 + Math.random() * 1000);

    const key = molecule.toLowerCase();
    const data = mockEXIMData[key] || mockEXIMData['budesonide'];

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
  async analyze(molecule: string): Promise<AgentResult> {
    const startTime = Date.now();
    await delay(2500 + Math.random() * 1000);

    const key = molecule.toLowerCase();
    const data = mockPatentData[key] || mockPatentData['budesonide'];

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
  async analyze(molecule: string, indication: string): Promise<AgentResult> {
    const startTime = Date.now();
    await delay(2200 + Math.random() * 1000);

    const key = `${molecule.toLowerCase()}-${indication.toLowerCase()}`;
    const data = mockClinicalTrials[key] || mockClinicalTrials['budesonide-copd'];

    return {
      agentName: 'Clinical Trials Agent',
      status: 'complete',
      data,
      timestamp: Date.now(),
      duration: Date.now() - startTime
    };
  }
}

export class InternalKnowledgeAgent {
  async analyze(topic: string): Promise<AgentResult> {
    const startTime = Date.now();
    await delay(1500 + Math.random() * 1000);

    const key = topic.toLowerCase().includes('respiratory') ? 'respiratory' : 'respiratory';
    const data = mockInternalKnowledge[key];

    return {
      agentName: 'Internal Knowledge Agent',
      status: 'complete',
      data,
      timestamp: Date.now(),
      duration: Date.now() - startTime
    };
  }
}

export class WebIntelligenceAgent {
  async analyze(topic: string): Promise<AgentResult> {
    const startTime = Date.now();
    await delay(2800 + Math.random() * 1000);

    const key = topic.toLowerCase().includes('copd') ? 'copd-india' : 'copd-india';
    const data = mockWebIntelligence[key];

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
  async generate(aggregatedData: {
    market: MarketInsight;
    patent: PatentData;
    clinical: ClinicalTrialData;
    exim: EXIMData;
    internal: InternalKnowledge;
    web: WebIntelligence;
  }): Promise<AgentResult> {
    const startTime = Date.now();
    await delay(3000 + Math.random() * 1000);

    const innovationStory = {
      molecule: 'Budesonide',
      indication: 'COPD',
      dosageForm: 'Nebulizer Suspension (0.5mg/2mL)',
      targetPopulation: 'Elderly COPD patients in Tier 2/3 cities, rural India',
      unmetNeed: aggregatedData.market.unmetNeed,
      competitiveGap: 'Limited affordable nebulizer options; competitors focus on DPIs and MDIs',
      clinicalFeasibility: 'Strong evidence base (62 completed trials, 68% success rate); well-established safety profile',
      patentSafety: 'Low FTO risk; primary patents expired; formulation patents expire 2026-2027',
      commercialRationale: `Market size of ${aggregatedData.market.marketSize} growing at ${aggregatedData.market.cagr}; leverages existing manufacturing capacity (35% underutilized); strong distribution in target markets`,
      estimatedRevenue: '$280M-$420M (Years 3-5 post-launch)',
      timeToMarket: '18-24 months (bioequivalence study + regulatory approval)',
      investmentRequired: '$12-15M (formulation development, BE study, regulatory, marketing)'
    };

    const report = {
      executiveSummary: `Based on comprehensive multi-source analysis, **Budesonide Nebulizer Suspension** represents a high-potential repurposing opportunity for COPD management in India. The opportunity addresses a clear unmet need in the ${aggregatedData.market.marketSize} Indian respiratory market growing at ${aggregatedData.market.cagr}. Low competition in the nebulizer segment, favorable patent landscape, and alignment with existing manufacturing capabilities create a compelling case for rapid development.`,
      marketOpportunity: aggregatedData.market,
      patentLandscape: aggregatedData.patent,
      clinicalEvidence: aggregatedData.clinical,
      tradeFeasibility: aggregatedData.exim,
      innovationStory,
      recommendations: [
        'Initiate formulation development for budesonide nebulizer suspension targeting 18-month timeline',
        'Conduct bioequivalence study with reference product to expedite regulatory approval',
        'Leverage existing manufacturing infrastructure to minimize capex investment',
        'Partner with pulmonology KOLs in Tier 2/3 cities for clinical validation and market access',
        'Develop patient education materials for nebulizer use in low-literacy populations',
        'Explore government partnerships under Ayushman Bharat for market access'
      ],
      nextSteps: [
        'Week 1-2: Secure leadership approval and allocate $12-15M budget',
        'Month 1-3: Complete formulation development and stability studies',
        'Month 4-9: Execute bioequivalence study (n=48 subjects)',
        'Month 10-12: File regulatory submission (DCGI)',
        'Month 13-18: Regulatory review and approval process',
        'Month 16-18: Manufacturing scale-up and validation',
        'Month 19-24: Commercial launch with targeted medical education campaign'
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
