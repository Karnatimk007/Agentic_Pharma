interface DataTableProps {
  title: string;
  data: Record<string, string | string[] | number>;
}

export function DataTable({ title, data }: DataTableProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-3">
        <h3 className="font-semibold text-white text-sm">{title}</h3>
      </div>
      <div className="divide-y divide-gray-200">
        {Object.entries(data).map(([key, value]) => (
          <div key={key} className="px-4 py-3 hover:bg-gray-50 transition-colors">
            <dt className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
              {key.replace(/([A-Z])/g, ' $1').trim()}
            </dt>
            <dd className="text-sm text-gray-900">
              {Array.isArray(value) ? (
                <ul className="list-disc list-inside space-y-1">
                  {value.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              ) : (
                value
              )}
            </dd>
          </div>
        ))}
      </div>
    </div>
  );
}
