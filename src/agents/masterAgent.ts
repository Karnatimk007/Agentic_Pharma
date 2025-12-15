import { AgentTask, FinalReport, MarketInsight, PatentData, ClinicalTrialData, EXIMData, InternalKnowledge, WebIntelligence } from '../types';
import {
  IQVIAInsightsAgent,
  EXIMTrendsAgent,
  PatentLandscapeAgent,
  ClinicalTrialsAgent,
  InternalKnowledgeAgent,
  WebIntelligenceAgent,
  ReportGeneratorAgent
} from './workerAgents';

export class MasterAgent {
  private iqviaAgent = new IQVIAInsightsAgent();
  private eximAgent = new EXIMTrendsAgent();
  private patentAgent = new PatentLandscapeAgent();
  private clinicalAgent = new ClinicalTrialsAgent();
  private internalAgent = new InternalKnowledgeAgent();
  private webAgent = new WebIntelligenceAgent();
  private reportAgent = new ReportGeneratorAgent();

  parseUserIntent(prompt: string): {
    diseaseArea: string;
    geography: string;
    focus: string[];
    selectedMolecule: string;
    indication: string;
  } {
    const promptLower = prompt.toLowerCase();

    let diseaseArea = 'chronic respiratory diseases';
    if (promptLower.includes('copd')) diseaseArea = 'copd';
    else if (promptLower.includes('asthma')) diseaseArea = 'asthma';
    else if (promptLower.includes('respiratory')) diseaseArea = 'chronic respiratory diseases';

    const geography = promptLower.includes('india') ? 'India' : 'Global';

    const focus = [];
    if (promptLower.includes('competition') || promptLower.includes('competitor')) focus.push('competition');
    if (promptLower.includes('patent')) focus.push('patents');
    if (promptLower.includes('market')) focus.push('market');
    if (promptLower.includes('clinical')) focus.push('clinical');
    if (focus.length === 0) focus.push('market', 'patents', 'clinical', 'trade');

    const selectedMolecule = 'Budesonide';
    const indication = diseaseArea === 'copd' ? 'COPD' : 'COPD';

    return { diseaseArea, geography, focus, selectedMolecule, indication };
  }

  createTasks(intent: ReturnType<typeof this.parseUserIntent>): AgentTask[] {
    return [
      {
        id: 'task-1',
        agentName: 'IQVIA Insights Agent',
        description: `Analyzing market opportunity for ${intent.diseaseArea} in ${intent.geography}`,
        status: 'idle'
      },
      {
        id: 'task-2',
        agentName: 'Patent Landscape Agent',
        description: `Reviewing patent landscape for ${intent.selectedMolecule}`,
        status: 'idle'
      },
      {
        id: 'task-3',
        agentName: 'Clinical Trials Agent',
        description: `Assessing clinical evidence for ${intent.selectedMolecule} in ${intent.indication}`,
        status: 'idle'
      },
      {
        id: 'task-4',
        agentName: 'EXIM Trends Agent',
        description: `Evaluating trade dynamics for ${intent.selectedMolecule}`,
        status: 'idle'
      },
      {
        id: 'task-5',
        agentName: 'Internal Knowledge Agent',
        description: `Extracting internal insights on respiratory portfolio`,
        status: 'idle'
      },
      {
        id: 'task-6',
        agentName: 'Web Intelligence Agent',
        description: `Gathering external intelligence on ${intent.diseaseArea} landscape`,
        status: 'idle'
      },
      {
        id: 'task-7',
        agentName: 'Report Generator Agent',
        description: 'Synthesizing findings into innovation story',
        status: 'idle'
      }
    ];
  }

  async executeWorkflow(
    userPrompt: string,
    onTaskUpdate: (tasks: AgentTask[]) => void
  ): Promise<FinalReport> {
    const intent = this.parseUserIntent(userPrompt);
    const tasks = this.createTasks(intent);

    onTaskUpdate(tasks);

    tasks[0].status = 'working';
    onTaskUpdate([...tasks]);
    const marketResult = await this.iqviaAgent.analyze(intent.diseaseArea);
    tasks[0].status = 'complete';
    tasks[0].result = marketResult;
    onTaskUpdate([...tasks]);

    tasks[1].status = 'working';
    onTaskUpdate([...tasks]);
    const patentResult = await this.patentAgent.analyze(intent.selectedMolecule);
    tasks[1].status = 'complete';
    tasks[1].result = patentResult;
    onTaskUpdate([...tasks]);

    tasks[2].status = 'working';
    onTaskUpdate([...tasks]);
    const clinicalResult = await this.clinicalAgent.analyze(intent.selectedMolecule, intent.indication);
    tasks[2].status = 'complete';
    tasks[2].result = clinicalResult;
    onTaskUpdate([...tasks]);

    tasks[3].status = 'working';
    onTaskUpdate([...tasks]);
    const eximResult = await this.eximAgent.analyze(intent.selectedMolecule);
    tasks[3].status = 'complete';
    tasks[3].result = eximResult;
    onTaskUpdate([...tasks]);

    tasks[4].status = 'working';
    onTaskUpdate([...tasks]);
    const internalResult = await this.internalAgent.analyze('respiratory');
    tasks[4].status = 'complete';
    tasks[4].result = internalResult;
    onTaskUpdate([...tasks]);

    tasks[5].status = 'working';
    onTaskUpdate([...tasks]);
    const webResult = await this.webAgent.analyze(`${intent.diseaseArea}-india`);
    tasks[5].status = 'complete';
    tasks[5].result = webResult;
    onTaskUpdate([...tasks]);

    tasks[6].status = 'working';
    onTaskUpdate([...tasks]);
    const reportResult = await this.reportAgent.generate({
      market: marketResult.data as MarketInsight,
      patent: patentResult.data as PatentData,
      clinical: clinicalResult.data as ClinicalTrialData,
      exim: eximResult.data as EXIMData,
      internal: internalResult.data as InternalKnowledge,
      web: webResult.data as WebIntelligence
    });
    tasks[6].status = 'complete';
    tasks[6].result = reportResult;
    onTaskUpdate([...tasks]);

    return reportResult.data as FinalReport;
  }
}
