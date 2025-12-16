export type AgentStatus = 'idle' | 'thinking' | 'working' | 'complete' | 'error';

export interface AgentResult {
  agentName: string;
  status: AgentStatus;
  data: unknown;
  timestamp: number;
  duration?: number;
}

export interface IQVIAOutput {
  marketSizeTable: Array<{
    therapyArea: string;
    indication: string;
    marketSizeUSDMn: string;
    cagr: string;
    competitionIntensity: string;
  }>;
  growthTrend: string;
  competitorTable: Array<{
    company: string;
    molecule: string;
    marketShare: string;
  }>;
}

export interface EXIMOutput {
  tradeTable: Array<{
    moleculeApi: string;
    importVolumeMT: string;
    importValueUSDMn: string;
    exportVolumeMT: string;
    topImportCountries: string;
  }>;
  bulletInsights: {
    importDependency: string;
    supplyChainRisk: string;
    localizationOpportunity: string;
  };
}

export interface PatentOutput {
  patentTable: Array<{
    patentId: string;
    assignee: string;
    geography: string;
    filingYear: string;
    expiryYear: string;
    status: string;
  }>;
  ftoRiskFlags: {
    overallFTORisk: string;
    keyBlockingPatents: string;
  };
}

export interface ClinicalOutput {
  trialsTable: Array<{
    trialId: string;
    indication: string;
    phase: string;
    status: string;
    sponsorType: string;
  }>;
  pipelineSummary: {
    totalActiveTrials: number;
    phaseDistribution: {
      phase1: number;
      phase2: number;
      phase3: number;
      phase4: number;
    };
    clinicalMaturity: string;
  };
}

export interface InternalInsightsOutput {
  keyTakeaways: string[];
  strategicSignals: {
    strategicAlignment: string;
    pastLearnings: string;
  };
  pdfExtractSummary: string[];
}

export interface WebIntelligenceOutput {
  treatmentGuidelines: string[];
  realWorldEvidence: string[];
  newsAndPolicy: string[];
  hyperlinkReferences: Array<{
    title: string;
    url: string;
  }>;
}

export interface ReportOutput {
  executiveSummary: string;
  iqviaInsights: IQVIAOutput;
  eximTrends: EXIMOutput;
  patentLandscape: PatentOutput;
  clinicalTrials: ClinicalOutput;
  internalInsights: InternalInsightsOutput;
  webIntelligence: WebIntelligenceOutput;
  innovationRecommendation: {
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
  };
  strategicRecommendations: string[];
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
