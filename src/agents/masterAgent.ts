import { AgentTask, ReportOutput, IQVIAOutput, EXIMOutput, PatentOutput, ClinicalOutput, InternalInsightsOutput, WebIntelligenceOutput } from '../types';
import {
  IQVIAInsightsAgent,
  EXIMTrendsAgent,
  PatentLandscapeAgent,
  ClinicalTrialsAgent,
  InternalInsightsAgent,
  WebIntelligenceAgent,
  ReportGeneratorAgent
} from './workerAgents';

export class MasterAgent {
  private iqviaAgent = new IQVIAInsightsAgent();
  private eximAgent = new EXIMTrendsAgent();
  private patentAgent = new PatentLandscapeAgent();
  private clinicalAgent = new ClinicalTrialsAgent();
  private internalAgent = new InternalInsightsAgent();
  private webAgent = new WebIntelligenceAgent();
  private reportAgent = new ReportGeneratorAgent();

  createTasks(): AgentTask[] {
    return [
      {
        id: 'task-1',
        agentName: 'IQVIA Insights Agent',
        description: 'Analyzing market size, CAGR, and competitive landscape',
        status: 'idle'
      },
      {
        id: 'task-2',
        agentName: 'Patent Landscape Agent',
        description: 'Reviewing patent status, expiry timelines, and FTO risk',
        status: 'idle'
      },
      {
        id: 'task-3',
        agentName: 'Clinical Trials Agent',
        description: 'Assessing clinical trial pipeline and phase distribution',
        status: 'idle'
      },
      {
        id: 'task-4',
        agentName: 'EXIM Trends Agent',
        description: 'Evaluating import-export dynamics and supply chain',
        status: 'idle'
      },
      {
        id: 'task-5',
        agentName: 'Internal Insights Agent',
        description: 'Extracting strategic insights and internal recommendations',
        status: 'idle'
      },
      {
        id: 'task-6',
        agentName: 'Web Intelligence Agent',
        description: 'Gathering guidelines, RWE, and policy signals',
        status: 'idle'
      },
      {
        id: 'task-7',
        agentName: 'Report Generator Agent',
        description: 'Synthesizing all insights into executive recommendation',
        status: 'idle'
      }
    ];
  }

  async executeWorkflow(
    userPrompt: string,
    onTaskUpdate: (tasks: AgentTask[]) => void
  ): Promise<ReportOutput> {
    const tasks = this.createTasks();
    onTaskUpdate(tasks);

    tasks[0].status = 'working';
    onTaskUpdate([...tasks]);
    const iqviaResult = await this.iqviaAgent.analyze();
    tasks[0].status = 'complete';
    tasks[0].result = iqviaResult;
    onTaskUpdate([...tasks]);

    tasks[1].status = 'working';
    onTaskUpdate([...tasks]);
    const patentResult = await this.patentAgent.analyze();
    tasks[1].status = 'complete';
    tasks[1].result = patentResult;
    onTaskUpdate([...tasks]);

    tasks[2].status = 'working';
    onTaskUpdate([...tasks]);
    const clinicalResult = await this.clinicalAgent.analyze();
    tasks[2].status = 'complete';
    tasks[2].result = clinicalResult;
    onTaskUpdate([...tasks]);

    tasks[3].status = 'working';
    onTaskUpdate([...tasks]);
    const eximResult = await this.eximAgent.analyze();
    tasks[3].status = 'complete';
    tasks[3].result = eximResult;
    onTaskUpdate([...tasks]);

    tasks[4].status = 'working';
    onTaskUpdate([...tasks]);
    const internalResult = await this.internalAgent.analyze();
    tasks[4].status = 'complete';
    tasks[4].result = internalResult;
    onTaskUpdate([...tasks]);

    tasks[5].status = 'working';
    onTaskUpdate([...tasks]);
    const webResult = await this.webAgent.analyze();
    tasks[5].status = 'complete';
    tasks[5].result = webResult;
    onTaskUpdate([...tasks]);

    tasks[6].status = 'working';
    onTaskUpdate([...tasks]);
    const reportResult = await this.reportAgent.generate(
      iqviaResult.data as IQVIAOutput,
      eximResult.data as EXIMOutput,
      patentResult.data as PatentOutput,
      clinicalResult.data as ClinicalOutput,
      internalResult.data as InternalInsightsOutput,
      webResult.data as WebIntelligenceOutput
    );
    tasks[6].status = 'complete';
    tasks[6].result = reportResult;
    onTaskUpdate([...tasks]);

    return reportResult.data as ReportOutput;
  }
}
