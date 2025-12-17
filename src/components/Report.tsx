import { ReportOutput } from '../types';
import { IQVIAOutput_Display, EXIMOutput_Display, PatentOutput_Display, ClinicalOutput_Display, InternalInsightsOutput_Display, WebIntelligenceOutput_Display } from './StrictFormatOutput';
import { MarketSizeChart, CompetitorMarketShareChart, ClinicalTrialsDistributionChart, PatentExpiryChart, ImportExportAnalysisChart } from './DataCharts';
import { ExportButtons } from './ExportReports';
import { Lightbulb, CheckCircle2 } from 'lucide-react';

interface ReportProps {
  report: ReportOutput;
}

export function Report({ report }: ReportProps) {
  return (
    <div id="report-content" className="space-y-6">
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-xl p-8 text-white shadow-xl">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-3xl font-bold mb-4">Executive Innovation Report</h2>
            <p className="text-blue-100 leading-relaxed">{report.executiveSummary}</p>
          </div>
          <div className="flex flex-col gap-2">
            <ExportButtons report={report} />
          </div>
        </div>
        <div className="mt-4 text-xs text-blue-200">
          Generated: {new Date(report.generatedAt).toLocaleString()}
        </div>
      </div>

      <div className="space-y-6">
        <IQVIAOutput_Display data={report.iqviaInsights} />
        <PatentOutput_Display data={report.patentLandscape} />
        <ClinicalOutput_Display data={report.clinicalTrials} />
        <EXIMOutput_Display data={report.eximTrends} />
        <InternalInsightsOutput_Display data={report.internalInsights} />
        <WebIntelligenceOutput_Display data={report.webIntelligence} />
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-200">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Analytical Visualizations</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <MarketSizeChart data={report.iqviaInsights} />
          <CompetitorMarketShareChart data={report.iqviaInsights} />
          <ClinicalTrialsDistributionChart data={report.clinicalTrials} />
          <PatentExpiryChart data={report.patentLandscape} />
          <div className="lg:col-span-2">
            <ImportExportAnalysisChart data={report.eximTrends} />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
        <div className="flex items-center gap-2 mb-4">
          <Lightbulb className="w-6 h-6 text-green-600" />
          <h3 className="text-xl font-bold text-gray-900">Innovation Recommendation</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-medium text-gray-500 uppercase mb-1">Selected Molecule</p>
            <p className="text-sm font-semibold text-gray-900">{report.innovationRecommendation.molecule}</p>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-500 uppercase mb-1">Indication</p>
            <p className="text-sm font-semibold text-gray-900">{report.innovationRecommendation.indication}</p>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-500 uppercase mb-1">Dosage Form</p>
            <p className="text-sm font-semibold text-gray-900">{report.innovationRecommendation.dosageForm}</p>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-500 uppercase mb-1">Target Population</p>
            <p className="text-sm font-semibold text-gray-900">{report.innovationRecommendation.targetPopulation}</p>
          </div>
          <div className="md:col-span-2">
            <p className="text-xs font-medium text-gray-500 uppercase mb-1">Unmet Need</p>
            <p className="text-sm text-gray-700">{report.innovationRecommendation.unmetNeed}</p>
          </div>
          <div className="md:col-span-2">
            <p className="text-xs font-medium text-gray-500 uppercase mb-1">Competitive Gap</p>
            <p className="text-sm text-gray-700">{report.innovationRecommendation.competitiveGap}</p>
          </div>
          <div className="md:col-span-2">
            <p className="text-xs font-medium text-gray-500 uppercase mb-1">Clinical Feasibility</p>
            <p className="text-sm text-gray-700">{report.innovationRecommendation.clinicalFeasibility}</p>
          </div>
          <div className="md:col-span-2">
            <p className="text-xs font-medium text-gray-500 uppercase mb-1">Patent Safety</p>
            <p className="text-sm text-gray-700">{report.innovationRecommendation.patentSafety}</p>
          </div>
          <div className="md:col-span-2">
            <p className="text-xs font-medium text-gray-500 uppercase mb-1">Commercial Rationale</p>
            <p className="text-sm text-gray-700">{report.innovationRecommendation.commercialRationale}</p>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-500 uppercase mb-1">Estimated Revenue</p>
            <p className="text-sm font-semibold text-green-600">{report.innovationRecommendation.estimatedRevenue}</p>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-500 uppercase mb-1">Time to Market</p>
            <p className="text-sm font-semibold text-blue-600">{report.innovationRecommendation.timeToMarket}</p>
          </div>
          <div className="md:col-span-2">
            <p className="text-xs font-medium text-gray-500 uppercase mb-1">Investment Required</p>
            <p className="text-sm font-semibold text-gray-900">{report.innovationRecommendation.investmentRequired}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle2 className="w-5 h-5 text-blue-600" />
            <h3 className="font-semibold text-gray-900">Strategic Recommendations</h3>
          </div>
          <ul className="space-y-3">
            {report.strategicRecommendations.map((rec, idx) => (
              <li key={idx} className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-semibold">
                  {idx + 1}
                </span>
                <span className="text-sm text-gray-700 leading-relaxed">{rec}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            <h3 className="font-semibold text-gray-900">Next Steps</h3>
          </div>
          <ul className="space-y-3">
            {report.nextSteps.map((step, idx) => (
              <li key={idx} className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-semibold">
                  {idx + 1}
                </span>
                <span className="text-sm text-gray-700 leading-relaxed">{step}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
