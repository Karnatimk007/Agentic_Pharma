import { Presentation, Network, Search, BarChart3, Rocket } from 'lucide-react';

interface SlideProps {
  number: number;
  title: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}

function Slide({ number, title, children, icon }: SlideProps) {
  return (
    <div className="bg-white rounded-xl border-2 border-gray-200 p-8 shadow-lg hover:shadow-xl transition-all">
      <div className="flex items-start gap-4 mb-6">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold">
          {number}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            {icon}
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          </div>
        </div>
      </div>
      <div className="space-y-4 text-gray-700">{children}</div>
    </div>
  );
}

export function PPTSlides() {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white shadow-xl">
        <div className="flex items-center gap-3 mb-3">
          <Presentation className="w-8 h-8" />
          <h2 className="text-3xl font-bold">Agentic AI: Accelerating Pharma Innovation</h2>
        </div>
        <p className="text-blue-100 text-lg">
          A Multi-Agent System for Rapid Drug Repurposing Discovery
        </p>
      </div>

      <Slide
        number={1}
        title="Problem & Vision"
        icon={<Search className="w-5 h-5 text-blue-600" />}
      >
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
          <h4 className="font-semibold text-red-900 mb-2">Current Challenges</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex gap-2">
              <span className="text-red-600">•</span>
              <span>Generic drug margins declining 15-20% annually, creating revenue pressure</span>
            </li>
            <li className="flex gap-2">
              <span className="text-red-600">•</span>
              <span>Traditional innovation discovery takes 6-12 months with cross-functional teams</span>
            </li>
            <li className="flex gap-2">
              <span className="text-red-600">•</span>
              <span>Siloed data sources result in missed opportunities and incomplete analysis</span>
            </li>
            <li className="flex gap-2">
              <span className="text-red-600">•</span>
              <span>Manual research processes limit ability to evaluate multiple opportunities simultaneously</span>
            </li>
          </ul>
        </div>

        <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
          <h4 className="font-semibold text-green-900 mb-2">The Agentic AI Vision</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex gap-2">
              <span className="text-green-600">✓</span>
              <span><strong>Speed:</strong> Reduce discovery time from months to minutes with parallel agent processing</span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-600">✓</span>
              <span><strong>Comprehensiveness:</strong> Synthesize insights from 7+ data sources simultaneously</span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-600">✓</span>
              <span><strong>Intelligence:</strong> AI-powered pattern recognition identifies hidden opportunities</span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-600">✓</span>
              <span><strong>Scale:</strong> Evaluate dozens of molecules and indications in parallel</span>
            </li>
          </ul>
        </div>
      </Slide>

      <Slide
        number={2}
        title="Agentic AI Architecture"
        icon={<Network className="w-5 h-5 text-blue-600" />}
      >
        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
          <h4 className="font-semibold text-blue-900 mb-3">Master Agent (Orchestrator)</h4>
          <p className="text-sm mb-2">Central intelligence that interprets user queries, decomposes complex questions into tasks, delegates to specialized worker agents, and synthesizes findings into actionable insights.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <h5 className="font-semibold text-gray-900 text-sm mb-2">📊 IQVIA Insights Agent</h5>
            <p className="text-xs text-gray-600">Market size, CAGR, competition analysis, patient population estimates</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <h5 className="font-semibold text-gray-900 text-sm mb-2">🛡️ Patent Landscape Agent</h5>
            <p className="text-xs text-gray-600">Active patents, expiry timelines, FTO risk assessment, filing density</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <h5 className="font-semibold text-gray-900 text-sm mb-2">🧪 Clinical Trials Agent</h5>
            <p className="text-xs text-gray-600">Ongoing trials, phase distribution, sponsors, success rates</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <h5 className="font-semibold text-gray-900 text-sm mb-2">🚢 EXIM Trends Agent</h5>
            <p className="text-xs text-gray-600">Import dependency, sourcing countries, trade risk, tariff impact</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <h5 className="font-semibold text-gray-900 text-sm mb-2">📚 Internal Knowledge Agent</h5>
            <p className="text-xs text-gray-600">Strategic insights, capability gaps, prior recommendations</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <h5 className="font-semibold text-gray-900 text-sm mb-2">🌐 Web Intelligence Agent</h5>
            <p className="text-xs text-gray-600">Guidelines, publications, RWE, unmet needs, market news</p>
          </div>
        </div>

        <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
          <h4 className="font-semibold text-purple-900 mb-2">Mock Data Sources</h4>
          <p className="text-sm text-gray-700">System uses realistic simulated APIs and datasets to demonstrate workflow without requiring external integrations. Production deployment would connect to real IQVIA, Cortellis, ClinicalTrials.gov, trade databases, and internal data lakes.</p>
        </div>
      </Slide>

      <Slide
        number={3}
        title="Molecule Discovery Journey"
        icon={<Search className="w-5 h-5 text-blue-600" />}
      >
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold">1</div>
            <div className="flex-1">
              <h5 className="font-semibold text-gray-900">User Prompt</h5>
              <p className="text-sm text-gray-600 mt-1 italic bg-gray-50 p-3 rounded border border-gray-200">
                "Identify repurposing opportunities for chronic respiratory diseases in India with low competition and high patient burden."
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold">2</div>
            <div className="flex-1">
              <h5 className="font-semibold text-gray-900">Master Agent Analysis</h5>
              <ul className="text-sm text-gray-600 mt-1 space-y-1">
                <li>• Identifies focus area: COPD (largest segment, high unmet need)</li>
                <li>• Extracts geography: India market focus</li>
                <li>• Determines priorities: Low competition + high patient burden</li>
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold">3</div>
            <div className="flex-1">
              <h5 className="font-semibold text-gray-900">Parallel Agent Execution</h5>
              <p className="text-sm text-gray-600 mt-1">All 6 worker agents execute simultaneously, each querying their specialized data sources and returning domain-specific insights within 2-3 seconds.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold">4</div>
            <div className="flex-1">
              <h5 className="font-semibold text-gray-900">Molecule Shortlist</h5>
              <div className="mt-2 overflow-x-auto">
                <table className="min-w-full text-xs border border-gray-200">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-3 py-2 text-left font-semibold">Molecule</th>
                      <th className="px-3 py-2 text-left font-semibold">Market</th>
                      <th className="px-3 py-2 text-left font-semibold">Patent</th>
                      <th className="px-3 py-2 text-left font-semibold">Score</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="bg-green-50">
                      <td className="px-3 py-2 font-semibold">Budesonide</td>
                      <td className="px-3 py-2">$4.8B, 9.1%</td>
                      <td className="px-3 py-2 text-green-600">Low FTO</td>
                      <td className="px-3 py-2 font-bold text-green-600">94/100</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2">Formoterol</td>
                      <td className="px-3 py-2">$3.2B, 7.8%</td>
                      <td className="px-3 py-2 text-green-600">Very Low FTO</td>
                      <td className="px-3 py-2">87/100</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2">Tiotropium</td>
                      <td className="px-3 py-2">$2.9B, 6.5%</td>
                      <td className="px-3 py-2 text-yellow-600">Medium FTO</td>
                      <td className="px-3 py-2">76/100</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-bold">5</div>
            <div className="flex-1">
              <h5 className="font-semibold text-green-900">Selected Opportunity</h5>
              <div className="bg-green-50 p-3 rounded border border-green-200 mt-1">
                <p className="text-sm font-semibold text-green-900">Budesonide Nebulizer Suspension (0.5mg/2mL) for COPD</p>
                <p className="text-xs text-green-700 mt-1">Addresses unmet need for affordable nebulizer therapy in elderly rural populations</p>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      <Slide
        number={4}
        title="Insights Dashboard"
        icon={<BarChart3 className="w-5 h-5 text-blue-600" />}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 border-2 border-green-200">
            <h5 className="font-semibold text-green-900 mb-3 text-sm">Market Opportunity</h5>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-600">Market Size:</span>
                <span className="font-semibold">$4.8B (India)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">CAGR:</span>
                <span className="font-semibold text-green-600">9.1%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Patients:</span>
                <span className="font-semibold">~30M</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Competition:</span>
                <span className="font-semibold text-green-600">Medium</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 border-2 border-blue-200">
            <h5 className="font-semibold text-blue-900 mb-3 text-sm">Patent Status</h5>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-600">Active Patents:</span>
                <span className="font-semibold">3</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">FTO Risk:</span>
                <span className="font-semibold text-green-600">Low</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Primary Expiry:</span>
                <span className="font-semibold">Expired</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Formulation:</span>
                <span className="font-semibold">2026-2027</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-4 border-2 border-purple-200">
            <h5 className="font-semibold text-purple-900 mb-3 text-sm">Clinical Trials Snapshot</h5>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-600">Ongoing Trials:</span>
                <span className="font-semibold">47</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Phase 3:</span>
                <span className="font-semibold">24</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Success Rate:</span>
                <span className="font-semibold text-green-600">68%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Geographies:</span>
                <span className="font-semibold">5 regions</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-4 border-2 border-orange-200">
            <h5 className="font-semibold text-orange-900 mb-3 text-sm">Trade Feasibility</h5>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-600">Import Dependency:</span>
                <span className="font-semibold">42% API</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Domestic Production:</span>
                <span className="font-semibold text-green-600">58%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Trade Risk:</span>
                <span className="font-semibold text-yellow-600">Low-Medium</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Export Potential:</span>
                <span className="font-semibold text-green-600">High</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4 border border-gray-300 mt-4">
          <h5 className="font-semibold text-gray-900 mb-2 text-sm">Key Insight</h5>
          <p className="text-sm text-gray-700">
            Budesonide nebulizer formulation aligns with market demand (elderly prefer nebulizers 67% vs inhalers),
            has clear regulatory pathway (existing approvals expedite process), and leverages underutilized
            manufacturing capacity (35% available). Estimated 18-24 month time to market.
          </p>
        </div>
      </Slide>

      <Slide
        number={5}
        title="Innovation Story & Impact"
        icon={<Rocket className="w-5 h-5 text-blue-600" />}
      >
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg p-6 text-white shadow-lg">
          <h4 className="font-bold text-xl mb-3">Final Product Recommendation</h4>
          <div className="bg-white/10 rounded p-4 backdrop-blur">
            <p className="text-lg font-semibold mb-2">Budesonide Nebulizer Suspension 0.5mg/2mL</p>
            <p className="text-blue-100 text-sm">For COPD management in elderly patients across Tier 2/3 Indian cities and rural areas</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-green-50 rounded-lg p-4 border-2 border-green-300">
            <div className="text-3xl font-bold text-green-600 mb-1">$280-420M</div>
            <div className="text-xs text-gray-600">Estimated Revenue (Yr 3-5)</div>
          </div>
          <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-300">
            <div className="text-3xl font-bold text-blue-600 mb-1">18-24mo</div>
            <div className="text-xs text-gray-600">Time to Market</div>
          </div>
          <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-300">
            <div className="text-3xl font-bold text-purple-600 mb-1">$12-15M</div>
            <div className="text-xs text-gray-600">Investment Required</div>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
          <h5 className="font-semibold text-yellow-900 mb-2 text-sm">Time Savings vs Traditional Approach</h5>
          <div className="grid grid-cols-2 gap-4 text-xs">
            <div>
              <div className="text-gray-600 mb-1">Traditional Research:</div>
              <div className="font-semibold text-gray-900">6-12 months, 15-20 FTEs</div>
            </div>
            <div>
              <div className="text-gray-600 mb-1">Agentic AI System:</div>
              <div className="font-semibold text-green-600">3-5 minutes, 1 strategist</div>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-yellow-200">
            <div className="font-semibold text-yellow-900">ROI Impact: 200x faster discovery, 95% resource reduction</div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
          <h5 className="font-semibold text-blue-900 mb-3 text-sm">Scalability Potential</h5>
          <ul className="space-y-2 text-xs text-gray-700">
            <li className="flex gap-2">
              <span className="text-blue-600">→</span>
              <span>Evaluate 50+ molecule-indication combinations simultaneously</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600">→</span>
              <span>Extend to oncology, CNS, cardiology therapeutic areas</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600">→</span>
              <span>Deploy across global markets (US, EU, LATAM, APAC)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600">→</span>
              <span>Continuous monitoring mode for emerging opportunities</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600">→</span>
              <span>Integration with BD pipeline for partnership identification</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-lg p-6 text-white shadow-lg">
          <h5 className="font-bold mb-3">Strategic Impact</h5>
          <p className="text-sm text-green-50 leading-relaxed">
            This Agentic AI system transforms pharma innovation from a slow, resource-intensive process
            into a rapid, scalable competitive advantage. By democratizing access to comprehensive market
            intelligence, companies can identify and act on opportunities faster than competitors,
            optimize portfolio decisions with data-driven confidence, and maximize ROI on existing assets.
          </p>
        </div>
      </Slide>
    </div>
  );
}
