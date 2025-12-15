import { FinalReport } from '../types';
import { DataTable } from './DataTable';
import { TrendingUp, Shield, FlaskConical, Truck, Lightbulb, CheckCircle2 } from 'lucide-react';

interface ReportProps {
  report: FinalReport;
}

export function Report({ report }: ReportProps) {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-xl p-8 text-white shadow-xl">
        <h2 className="text-2xl font-bold mb-4">Innovation Opportunity Report</h2>
        <p className="text-blue-100 leading-relaxed">{report.executiveSummary}</p>
        <div className="mt-4 text-xs text-blue-200">
          Generated: {new Date(report.generatedAt).toLocaleString()}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-gray-700">
            <TrendingUp className="w-5 h-5" />
            <h3 className="font-semibold">Market Opportunity</h3>
          </div>
          <DataTable title="Market Insights" data={{
            Disease: report.marketOpportunity.disease,
            'Market Size': report.marketOpportunity.marketSize,
            'Growth Rate': report.marketOpportunity.cagr,
            'Competition Level': report.marketOpportunity.competition,
            'Patient Population': report.marketOpportunity.patientPopulation,
            'Unmet Need': report.marketOpportunity.unmetNeed,
            'Top Competitors': report.marketOpportunity.topCompetitors
          }} />
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2 text-gray-700">
            <Shield className="w-5 h-5" />
            <h3 className="font-semibold">Patent Landscape</h3>
          </div>
          <DataTable title="IP Analysis" data={{
            Molecule: report.patentLandscape.molecule,
            'Active Patents': report.patentLandscape.activePatents,
            'Expiry Timeline': report.patentLandscape.expiryTimeline,
            'FTO Risk': report.patentLandscape.ftoRisk,
            'Filing Density': report.patentLandscape.filingDensity
          }} />
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2 text-gray-700">
            <FlaskConical className="w-5 h-5" />
            <h3 className="font-semibold">Clinical Evidence</h3>
          </div>
          <DataTable title="Trial Landscape" data={{
            Molecule: report.clinicalEvidence.molecule,
            Indication: report.clinicalEvidence.indication,
            'Ongoing Trials': report.clinicalEvidence.ongoingTrials,
            'Phase 1': report.clinicalEvidence.phases.phase1,
            'Phase 2': report.clinicalEvidence.phases.phase2,
            'Phase 3': report.clinicalEvidence.phases.phase3,
            'Phase 4': report.clinicalEvidence.phases.phase4,
            'Success Rate': report.clinicalEvidence.successRate,
            'Top Sponsors': report.clinicalEvidence.topSponsors
          }} />
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2 text-gray-700">
            <Truck className="w-5 h-5" />
            <h3 className="font-semibold">Trade Feasibility</h3>
          </div>
          <DataTable title="EXIM Analysis" data={{
            Molecule: report.tradeFeasibility.molecule,
            'Import Dependency': report.tradeFeasibility.importDependency,
            'Export Potential': report.tradeFeasibility.exportPotential,
            'Sourcing Countries': report.tradeFeasibility.sourcingCountries,
            'Trade Risk': report.tradeFeasibility.tradeRisk,
            'Tariff Impact': report.tradeFeasibility.tariffImpact
          }} />
        </div>
      </div>

      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
        <div className="flex items-center gap-2 mb-4">
          <Lightbulb className="w-6 h-6 text-green-600" />
          <h3 className="text-xl font-bold text-gray-900">Innovation Story</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-medium text-gray-500 uppercase mb-1">Selected Molecule</p>
            <p className="text-sm font-semibold text-gray-900">{report.innovationStory.molecule}</p>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-500 uppercase mb-1">Indication</p>
            <p className="text-sm font-semibold text-gray-900">{report.innovationStory.indication}</p>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-500 uppercase mb-1">Dosage Form</p>
            <p className="text-sm font-semibold text-gray-900">{report.innovationStory.dosageForm}</p>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-500 uppercase mb-1">Target Population</p>
            <p className="text-sm font-semibold text-gray-900">{report.innovationStory.targetPopulation}</p>
          </div>
          <div className="md:col-span-2">
            <p className="text-xs font-medium text-gray-500 uppercase mb-1">Unmet Need</p>
            <p className="text-sm text-gray-700">{report.innovationStory.unmetNeed}</p>
          </div>
          <div className="md:col-span-2">
            <p className="text-xs font-medium text-gray-500 uppercase mb-1">Competitive Gap</p>
            <p className="text-sm text-gray-700">{report.innovationStory.competitiveGap}</p>
          </div>
          <div className="md:col-span-2">
            <p className="text-xs font-medium text-gray-500 uppercase mb-1">Clinical Feasibility</p>
            <p className="text-sm text-gray-700">{report.innovationStory.clinicalFeasibility}</p>
          </div>
          <div className="md:col-span-2">
            <p className="text-xs font-medium text-gray-500 uppercase mb-1">Patent Safety</p>
            <p className="text-sm text-gray-700">{report.innovationStory.patentSafety}</p>
          </div>
          <div className="md:col-span-2">
            <p className="text-xs font-medium text-gray-500 uppercase mb-1">Commercial Rationale</p>
            <p className="text-sm text-gray-700">{report.innovationStory.commercialRationale}</p>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-500 uppercase mb-1">Estimated Revenue</p>
            <p className="text-sm font-semibold text-green-600">{report.innovationStory.estimatedRevenue}</p>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-500 uppercase mb-1">Time to Market</p>
            <p className="text-sm font-semibold text-blue-600">{report.innovationStory.timeToMarket}</p>
          </div>
          <div className="md:col-span-2">
            <p className="text-xs font-medium text-gray-500 uppercase mb-1">Investment Required</p>
            <p className="text-sm font-semibold text-gray-900">{report.innovationStory.investmentRequired}</p>
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
            {report.recommendations.map((rec, idx) => (
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
