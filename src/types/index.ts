export type AgentStatus = 'idle' | 'thinking' | 'working' | 'complete' | 'error';

export interface AgentResult {
  agentName: string;
  status: AgentStatus;
  data: unknown;
  timestamp: number;
  duration?: number;
}

export interface MarketInsight {
  disease: string;
  marketSize: string;
  cagr: string;
  competition: string;
  topCompetitors: string[];
  unmetNeed: string;
  patientPopulation: string;
}

export interface EXIMData {
  molecule: string;
  importDependency: string;
  exportPotential: string;
  sourcingCountries: string[];
  tradeRisk: string;
  tariffImpact: string;
}

export interface PatentData {
  molecule: string;
  activePatents: number;
  expiryTimeline: string;
  ftoRisk: string;
  filingDensity: string;
  keyPatents: Array<{
    id: string;
    title: string;
    expiry: string;
    owner: string;
  }>;
}

export interface ClinicalTrialData {
  molecule: string;
  indication: string;
  ongoingTrials: number;
  phases: {
    phase1: number;
    phase2: number;
    phase3: number;
    phase4: number;
  };
  topSponsors: string[];
  geographies: string[];
  successRate: string;
}

export interface InternalKnowledge {
  topic: string;
  keyInsights: string[];
  strategicGaps: string[];
  priorRecommendations: string[];
  relevance: string;
}

export interface WebIntelligence {
  topic: string;
  guidelines: string[];
  publications: Array<{
    title: string;
    source: string;
    year: number;
  }>;
  rwe: string[];
  news: string[];
  unmetNeeds: string[];
}

export interface InnovationStory {
  molecule: string;
  indication: string;
  dosageForm: string;
  targetPopulation: string;
  unmetNeed: string;
  competitiveGap: string;
  clinicalFeasibility: string;
  patentSafety: string;
  commercialRationale: string;
  estimatedRevenue: string;
  timeToMarket: string;
  investmentRequired: string;
}

export interface FinalReport {
  executiveSummary: string;
  marketOpportunity: MarketInsight;
  patentLandscape: PatentData;
  clinicalEvidence: ClinicalTrialData;
  tradeFeasibility: EXIMData;
  innovationStory: InnovationStory;
  recommendations: string[];
  nextSteps: string[];
  generatedAt: string;
}

export interface AgentTask {
  id: string;
  agentName: string;
  description: string;
  status: AgentStatus;
  result?: AgentResult;
}
