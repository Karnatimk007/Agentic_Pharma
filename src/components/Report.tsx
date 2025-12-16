import { ReportOutput } from '../types';
import { IQVIAOutput_Display, EXIMOutput_Display, PatentOutput_Display, ClinicalOutput_Display, InternalInsightsOutput_Display, WebIntelligenceOutput_Display } from './StrictFormatOutput';
import { Lightbulb, CheckCircle2, Download } from 'lucide-react';

interface ReportProps {
  report: ReportOutput;
}

export function Report({ report }: ReportProps) {
  const downloadReport = () => {
    const reportText = `PHARMA INNOVATION EXECUTIVE REPORT
=====================================
Generated: ${new Date(report.generatedAt).toLocaleString()}

EXECUTIVE SUMMARY
${report.executiveSummary}

---

AGENT OUTPUTS

1. IQVIA INSIGHTS
Market Size: ${report.iqviaInsights.marketSizeTable[0].marketSizeUSDMn} USD Mn
CAGR: ${report.iqviaInsights.marketSizeTable[0].cagr}
Competition: ${report.iqviaInsights.marketSizeTable[0].competitionIntensity}

2. PATENT LANDSCAPE
FTO Risk: ${report.patentLandscape.ftoRiskFlags.overallFTORisk}
Active Patents: ${report.patentLandscape.patentTable.length}

3. CLINICAL TRIALS
Total Active Trials: ${report.clinicalTrials.pipelineSummary.totalActiveTrials}
Clinical Maturity: ${report.clinicalTrials.pipelineSummary.clinicalMaturity}

4. EXIM TRENDS
Import Dependency: ${report.eximTrends.bulletInsights.importDependency}
Supply Chain Risk: ${report.eximTrends.bulletInsights.supplyChainRisk}

---

INNOVATION RECOMMENDATION

Molecule: ${report.innovationRecommendation.molecule}
Indication: ${report.innovationRecommendation.indication}
Dosage Form: ${report.innovationRecommendation.dosageForm}
Target Population: ${report.innovationRecommendation.targetPopulation}

Commercial Summary:
Revenue Potential: ${report.innovationRecommendation.estimatedRevenue}
Time to Market: ${report.innovationRecommendation.timeToMarket}
Investment Required: ${report.innovationRecommendation.investmentRequired}

---

STRATEGIC RECOMMENDATIONS
${report.strategicRecommendations.map((rec, i) => `${i + 1}. ${rec}`).join('\n')}

NEXT STEPS
${report.nextSteps.map((step, i) => `${i + 1}. ${step}`).join('\n')}
`;

    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(reportText));
    element.setAttribute('download', 'Innovation_Report.txt');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-xl p-8 text-white shadow-xl">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-3xl font-bold mb-4">Executive Innovation Report</h2>
            <p className="text-blue-100 leading-relaxed">{report.executiveSummary}</p>
          </div>
          <button
            onClick={downloadReport}
            className="flex items-center gap-2 px-4 py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors whitespace-nowrap"
          >
            <Download className="w-4 h-4" />
            Download
          </button>
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
