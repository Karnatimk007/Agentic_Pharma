import { useState } from 'react';
import { Brain, Send, FileText, Presentation, Sparkles } from 'lucide-react';
import { MasterAgent } from './agents/masterAgent';
import { AgentTask, ReportOutput } from './types';
import { AgentCard } from './components/AgentCard';
import { Report } from './components/Report';
import { PPTSlides } from './components/PPTSlides';

type ViewMode = 'chat' | 'report' | 'slides';

const samplePrompts = [
  "Identify repurposing opportunities for chronic respiratory diseases in India with low competition and high patient burden.",
  "Find molecule opportunities in COPD management with favorable patent landscape.",
  "Discover innovative formulations for asthma with strong clinical evidence."
];

function App() {
  const [prompt, setPrompt] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [tasks, setTasks] = useState<AgentTask[]>([]);
  const [report, setReport] = useState<ReportOutput | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>('chat');
  const [hasExecuted, setHasExecuted] = useState(false);

  const masterAgent = new MasterAgent();

  const handleSubmit = async (customPrompt?: string) => {
    const queryPrompt = customPrompt || prompt;
    if (!queryPrompt.trim() || isProcessing) return;

    setIsProcessing(true);
    setHasExecuted(true);
    setReport(null);
    setViewMode('chat');

    try {
      const finalReport = await masterAgent.executeWorkflow(
        queryPrompt,
        (updatedTasks) => setTasks(updatedTasks)
      );
      setReport(finalReport);
    } catch (error) {
      console.error('Error executing workflow:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
              <Brain className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Pharma Innovation AI
              </h1>
              <p className="text-sm text-gray-600">
                Agentic Multi-Agent System for Drug Repurposing Discovery
              </p>
            </div>
          </div>

          <div className="flex gap-2 mt-4">
            <button
              onClick={() => setViewMode('chat')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                viewMode === 'chat'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              Agent Workflow
            </button>
            <button
              onClick={() => setViewMode('report')}
              disabled={!report}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                viewMode === 'report'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : report
                  ? 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200'
              }`}
            >
              <FileText className="w-4 h-4" />
              Final Report
            </button>
            <button
              onClick={() => setViewMode('slides')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                viewMode === 'slides'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              <Presentation className="w-4 h-4" />
              PPT Slides
            </button>
          </div>
        </header>

        {viewMode === 'chat' && (
          <div className="space-y-6">
            {!hasExecuted && (
              <div className="bg-white rounded-xl border-2 border-gray-200 p-6 shadow-lg">
                <h2 className="text-lg font-semibold text-gray-900 mb-3">
                  Sample Queries
                </h2>
                <p className="text-sm text-gray-600 mb-4">
                  Try one of these prompts to see the multi-agent system in action:
                </p>
                <div className="space-y-2">
                  {samplePrompts.map((samplePrompt, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setPrompt(samplePrompt);
                        handleSubmit(samplePrompt);
                      }}
                      disabled={isProcessing}
                      className="w-full text-left px-4 py-3 bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200 text-sm text-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span className="font-medium text-blue-600">Query {idx + 1}:</span> {samplePrompt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="bg-white rounded-xl border-2 border-gray-200 p-6 shadow-lg">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Ask the AI
              </h2>
              <div className="flex gap-3">
                <input
                  type="text"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                  placeholder="e.g., Identify repurposing opportunities for chronic respiratory diseases..."
                  disabled={isProcessing}
                  className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed text-sm"
                />
                <button
                  onClick={() => handleSubmit()}
                  disabled={isProcessing || !prompt.trim()}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  {isProcessing ? 'Processing...' : 'Analyze'}
                </button>
              </div>
            </div>

            {tasks.length > 0 && (
              <div className="bg-white rounded-xl border-2 border-gray-200 p-6 shadow-lg">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Agent Activity
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {tasks.map((task) => (
                    <AgentCard key={task.id} task={task} />
                  ))}
                </div>

                {report && (
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-2 border-green-200">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                          <FileText className="w-4 h-4 text-white" />
                        </div>
                        <h3 className="font-semibold text-green-900">
                          Analysis Complete
                        </h3>
                      </div>
                      <p className="text-sm text-green-800 mb-3">
                        Multi-agent analysis completed successfully. Comprehensive innovation report generated.
                      </p>
                      <button
                        onClick={() => setViewMode('report')}
                        className="px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors text-sm"
                      >
                        View Full Report
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {viewMode === 'report' && report && (
          <div className="space-y-6">
            <Report report={report} />
          </div>
        )}

        {viewMode === 'slides' && (
          <div className="space-y-6">
            <PPTSlides />
          </div>
        )}

        <footer className="mt-12 pt-6 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-600">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">System Architecture</h4>
              <p>1 Master Agent orchestrating 6 specialized Worker Agents with parallel execution and intelligent synthesis.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Data Sources</h4>
              <p>Mock APIs simulating IQVIA, patent databases, ClinicalTrials.gov, trade data, internal knowledge, and web intelligence.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Performance</h4>
              <p>Analyzes multiple data sources in parallel, completing comprehensive discovery in 15-20 seconds vs 6-12 months traditionally.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
