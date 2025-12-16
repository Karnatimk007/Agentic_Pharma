import { IQVIAOutput, EXIMOutput, PatentOutput, ClinicalOutput, InternalInsightsOutput, WebIntelligenceOutput } from '../types';
import { Table, ExternalLink, AlertCircle } from 'lucide-react';

function TableComponent({ title, headers, rows }: { title: string; headers: string[]; rows: (string | number)[][] }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow">
      <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
        <h4 className="font-semibold text-gray-900 text-sm flex items-center gap-2">
          <Table className="w-4 h-4" />
          {title}
        </h4>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 border-b border-gray-200">
            <tr>
              {headers.map((h, i) => (
                <th key={i} className="px-4 py-2 text-left text-xs font-semibold text-gray-700">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                {row.map((cell, cidx) => (
                  <td key={cidx} className="px-4 py-2 text-gray-700">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function IQVIAOutput_Display({ data }: { data: IQVIAOutput }) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-gray-900">IQVIA Insights Agent</h3>

      <TableComponent
        title="1. Market Size Table"
        headers={['Therapy Area', 'Indication', 'Market Size (USD Mn)', 'CAGR (%)', 'Competition Intensity']}
        rows={data.marketSizeTable.map(row => [row.therapyArea, row.indication, row.marketSizeUSDMn, row.cagr, row.competitionIntensity])}
      />

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-semibold text-blue-900 mb-2">2. Growth Trend (Mock Graph Description)</h4>
        <p className="text-sm text-blue-800">{data.growthTrend}</p>
      </div>

      <TableComponent
        title="3. Competitor Summary Table"
        headers={['Company', 'Molecule / Brand', 'Market Share (%)']}
        rows={data.competitorTable.map(row => [row.company, row.molecule, row.marketShare])}
      />
    </div>
  );
}

export function EXIMOutput_Display({ data }: { data: EXIMOutput }) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-gray-900">EXIM Trends Agent</h3>

      <TableComponent
        title="1. EXIM Trade Table"
        headers={['Molecule / API', 'Import Volume (MT)', 'Import Value (USD Mn)', 'Export Volume (MT)', 'Top Import Countries']}
        rows={data.tradeTable.map(row => [row.moleculeApi, row.importVolumeMT, row.importValueUSDMn, row.exportVolumeMT, row.topImportCountries])}
      />

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <h4 className="font-semibold text-yellow-900 mb-3">2. Bullet Insights</h4>
        <ul className="space-y-2">
          <li className="flex gap-2 text-sm text-yellow-800">
            <span className="font-semibold">Import Dependency:</span> {data.bulletInsights.importDependency}
          </li>
          <li className="flex gap-2 text-sm text-yellow-800">
            <span className="font-semibold">Supply Chain Risk:</span> {data.bulletInsights.supplyChainRisk}
          </li>
          <li className="flex gap-2 text-sm text-yellow-800">
            <span className="font-semibold">Localization Opportunity:</span> {data.bulletInsights.localizationOpportunity}
          </li>
        </ul>
      </div>
    </div>
  );
}

export function PatentOutput_Display({ data }: { data: PatentOutput }) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-gray-900">Patent Landscape Agent</h3>

      <TableComponent
        title="1. Patent Status Table"
        headers={['Patent ID', 'Assignee', 'Geography', 'Filing Year', 'Expiry Year', 'Status']}
        rows={data.patentTable.map(row => [row.patentId, row.assignee, row.geography, row.filingYear, row.expiryYear, row.status])}
      />

      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <h4 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
          <AlertCircle className="w-4 h-4" />
          2. FTO Risk Flags
        </h4>
        <ul className="space-y-2">
          <li className="flex gap-2 text-sm text-green-800">
            <span className="font-semibold">Overall FTO Risk:</span> <span className="font-bold">{data.ftoRiskFlags.overallFTORisk}</span>
          </li>
          <li className="flex gap-2 text-sm text-green-800">
            <span className="font-semibold">Key Blocking Patents:</span> {data.ftoRiskFlags.keyBlockingPatents}
          </li>
        </ul>
      </div>
    </div>
  );
}

export function ClinicalOutput_Display({ data }: { data: ClinicalOutput }) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-gray-900">Clinical Trials Agent</h3>

      <TableComponent
        title="1. Clinical Trials Table"
        headers={['Trial ID', 'Indication', 'Phase', 'Status', 'Sponsor Type']}
        rows={data.trialsTable.map(row => [row.trialId, row.indication, row.phase, row.status, row.sponsorType])}
      />

      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
        <h4 className="font-semibold text-purple-900 mb-3">2. Pipeline Summary</h4>
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-purple-800">
            <span className="font-semibold">Total Active Trials:</span> <span>{data.pipelineSummary.totalActiveTrials}</span>
          </div>
          <div className="grid grid-cols-4 gap-2 text-sm">
            <div className="bg-purple-100 p-2 rounded">
              <div className="text-xs font-semibold text-purple-900">Phase 1</div>
              <div className="text-lg font-bold text-purple-600">{data.pipelineSummary.phaseDistribution.phase1}</div>
            </div>
            <div className="bg-purple-100 p-2 rounded">
              <div className="text-xs font-semibold text-purple-900">Phase 2</div>
              <div className="text-lg font-bold text-purple-600">{data.pipelineSummary.phaseDistribution.phase2}</div>
            </div>
            <div className="bg-purple-100 p-2 rounded">
              <div className="text-xs font-semibold text-purple-900">Phase 3</div>
              <div className="text-lg font-bold text-purple-600">{data.pipelineSummary.phaseDistribution.phase3}</div>
            </div>
            <div className="bg-purple-100 p-2 rounded">
              <div className="text-xs font-semibold text-purple-900">Phase 4</div>
              <div className="text-lg font-bold text-purple-600">{data.pipelineSummary.phaseDistribution.phase4}</div>
            </div>
          </div>
          <div className="flex gap-2 text-sm text-purple-800 mt-2">
            <span className="font-semibold">Clinical Maturity:</span> {data.pipelineSummary.clinicalMaturity}
          </div>
        </div>
      </div>
    </div>
  );
}

export function InternalInsightsOutput_Display({ data }: { data: InternalInsightsOutput }) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-gray-900">Internal Insights Agent</h3>

      <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
        <h4 className="font-semibold text-indigo-900 mb-2">1. Key Takeaways</h4>
        <ul className="space-y-1">
          {data.keyTakeaways.map((point, i) => (
            <li key={i} className="flex gap-2 text-sm text-indigo-800">
              <span className="font-bold">{i + 1}.</span> {point}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-pink-50 border border-pink-200 rounded-lg p-4">
        <h4 className="font-semibold text-pink-900 mb-3">2. Strategic Signals</h4>
        <div className="space-y-2">
          <div className="flex gap-2 text-sm text-pink-800">
            <span className="font-semibold">Strategic Alignment:</span> <span className="font-bold">{data.strategicSignals.strategicAlignment}</span>
          </div>
          <div className="flex gap-2 text-sm text-pink-800">
            <span className="font-semibold">Past Learnings:</span> {data.strategicSignals.pastLearnings}
          </div>
        </div>
      </div>

      <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
        <h4 className="font-semibold text-orange-900 mb-2">3. PDF Extract Summary (Mock Quotes)</h4>
        <ul className="space-y-2">
          {data.pdfExtractSummary.map((quote, i) => (
            <li key={i} className="text-sm text-orange-800 italic border-l-2 border-orange-300 pl-3">
              {quote}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function WebIntelligenceOutput_Display({ data }: { data: WebIntelligenceOutput }) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-gray-900">Web Intelligence Agent</h3>

      <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-4">
        <h4 className="font-semibold text-cyan-900 mb-2">1. Treatment Guidelines</h4>
        <ul className="space-y-1">
          {data.treatmentGuidelines.map((guideline, i) => (
            <li key={i} className="text-sm text-cyan-800 flex gap-2">
              <span className="font-bold">•</span> {guideline}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
        <h4 className="font-semibold text-teal-900 mb-2">2. Real-World Evidence</h4>
        <ul className="space-y-1">
          {data.realWorldEvidence.map((evidence, i) => (
            <li key={i} className="text-sm text-teal-800 flex gap-2">
              <span className="font-bold">•</span> {evidence}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
        <h4 className="font-semibold text-emerald-900 mb-2">3. News & Policy Signals</h4>
        <ul className="space-y-1">
          {data.newsAndPolicy.map((news, i) => (
            <li key={i} className="text-sm text-emerald-800 flex gap-2">
              <span className="font-bold">•</span> {news}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
        <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
          <ExternalLink className="w-4 h-4" />
          4. Hyperlinked References (Mock URLs)
        </h4>
        <ul className="space-y-2">
          {data.hyperlinkReferences.map((ref, i) => (
            <li key={i} className="text-sm text-slate-700">
              <a href={ref.url} className="text-blue-600 hover:underline flex items-center gap-1">
                {ref.title}
                <ExternalLink className="w-3 h-3" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
