import { BarChart, Bar, PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { IQVIAOutput, PatentOutput, ClinicalOutput, EXIMOutput } from '../types';

export function MarketSizeChart({ data }: { data: IQVIAOutput }) {
  const chartData = data.marketSizeTable.map(row => ({
    indication: row.indication,
    marketSize: parseInt(row.marketSizeUSDMn.replace(/,/g, '')),
    cagr: parseFloat(row.cagr)
  }));

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h4 className="font-semibold text-gray-900 mb-4">Market Size by Indication (USD Mn)</h4>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="indication" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="marketSize" fill="#3b82f6" name="Market Size (USD Mn)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function CompetitorMarketShareChart({ data }: { data: IQVIAOutput }) {
  const chartData = data.competitorTable.map(row => ({
    name: row.company,
    value: parseFloat(row.marketShare)
  }));

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h4 className="font-semibold text-gray-900 mb-4">Competitor Market Share (%)</h4>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={(entry) => `${entry.name}: ${entry.value}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export function ClinicalTrialsDistributionChart({ data }: { data: ClinicalOutput }) {
  const chartData = [
    { name: 'Phase 1', trials: data.pipelineSummary.phaseDistribution.phase1 },
    { name: 'Phase 2', trials: data.pipelineSummary.phaseDistribution.phase2 },
    { name: 'Phase 3', trials: data.pipelineSummary.phaseDistribution.phase3 },
    { name: 'Phase 4', trials: data.pipelineSummary.phaseDistribution.phase4 }
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h4 className="font-semibold text-gray-900 mb-4">Clinical Trials Distribution by Phase</h4>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="trials" fill="#10b981" name="Number of Trials" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function PatentExpiryChart({ data }: { data: PatentOutput }) {
  const expiryData = data.patentTable.reduce((acc, patent) => {
    const year = parseInt(patent.expiryYear);
    const existing = acc.find(item => item.year === year);
    if (existing) {
      existing.count += 1;
    } else {
      acc.push({ year, count: 1 });
    }
    return acc;
  }, [] as { year: number; count: number }[]).sort((a, b) => a.year - b.year);

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h4 className="font-semibold text-gray-900 mb-4">Patent Expiry Timeline</h4>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={expiryData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="count" stroke="#f59e0b" name="Patents Expiring" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export function ImportExportAnalysisChart({ data }: { data: EXIMOutput }) {
  const chartData = data.tradeTable.map(row => ({
    name: 'Trade Volume',
    import: parseInt(row.importVolumeMT.replace(/,/g, '')),
    export: parseInt(row.exportVolumeMT.replace(/,/g, ''))
  }));

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h4 className="font-semibold text-gray-900 mb-4">Import-Export Volume (MT)</h4>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="import" fill="#ef4444" name="Import Volume" />
          <Bar dataKey="export" fill="#22c55e" name="Export Volume" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
