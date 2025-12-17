import { ReportOutput } from '../types';
import { FileText, Download } from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import PptxGenJS from 'pptxgenjs';

export async function exportToPDF(report: ReportOutput, reportElement: HTMLElement) {
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  let yPosition = 20;

  pdf.setFontSize(18);
  pdf.text('PHARMA INNOVATION EXECUTIVE REPORT', 20, yPosition);
  yPosition += 15;

  pdf.setFontSize(10);
  pdf.setTextColor(100);
  pdf.text(`Generated: ${new Date(report.generatedAt).toLocaleString()}`, 20, yPosition);
  yPosition += 15;

  pdf.setFontSize(12);
  pdf.setTextColor(0);
  pdf.text('EXECUTIVE SUMMARY', 20, yPosition);
  yPosition += 8;

  pdf.setFontSize(10);
  const summaryLines = pdf.splitTextToSize(report.executiveSummary, pageWidth - 40);
  pdf.text(summaryLines, 20, yPosition);
  yPosition += summaryLines.length * 5 + 10;

  const addSection = (title: string, content: string[]) => {
    if (yPosition > pageHeight - 30) {
      pdf.addPage();
      yPosition = 20;
    }

    pdf.setFontSize(12);
    pdf.setTextColor(0);
    pdf.text(title, 20, yPosition);
    yPosition += 8;

    pdf.setFontSize(10);
    content.forEach(line => {
      if (yPosition > pageHeight - 20) {
        pdf.addPage();
        yPosition = 20;
      }
      const wrappedLines = pdf.splitTextToSize(line, pageWidth - 40);
      pdf.text(wrappedLines, 20, yPosition);
      yPosition += wrappedLines.length * 4 + 2;
    });

    yPosition += 5;
  };

  addSection('MARKET OPPORTUNITY', [
    `Market Size: ${report.iqviaInsights.marketSizeTable[0].marketSizeUSDMn} USD Mn`,
    `CAGR: ${report.iqviaInsights.marketSizeTable[0].cagr}`,
    `Competition: ${report.iqviaInsights.marketSizeTable[0].competitionIntensity}`,
    `Growth Trend: ${report.iqviaInsights.growthTrend}`
  ]);

  addSection('PATENT LANDSCAPE', [
    `Overall FTO Risk: ${report.patentLandscape.ftoRiskFlags.overallFTORisk}`,
    `Key Findings: ${report.patentLandscape.ftoRiskFlags.keyBlockingPatents}`
  ]);

  addSection('CLINICAL EVIDENCE', [
    `Total Active Trials: ${report.clinicalTrials.pipelineSummary.totalActiveTrials}`,
    `Clinical Maturity: ${report.clinicalTrials.pipelineSummary.clinicalMaturity}`,
    `Phase Distribution: P1:${report.clinicalTrials.pipelineSummary.phaseDistribution.phase1} P2:${report.clinicalTrials.pipelineSummary.phaseDistribution.phase2} P3:${report.clinicalTrials.pipelineSummary.phaseDistribution.phase3} P4:${report.clinicalTrials.pipelineSummary.phaseDistribution.phase4}`
  ]);

  addSection('INNOVATION RECOMMENDATION', [
    `Molecule: ${report.innovationRecommendation.molecule}`,
    `Indication: ${report.innovationRecommendation.indication}`,
    `Dosage Form: ${report.innovationRecommendation.dosageForm}`,
    `Target Population: ${report.innovationRecommendation.targetPopulation}`,
    `Unmet Need: ${report.innovationRecommendation.unmetNeed}`,
    `Estimated Revenue: ${report.innovationRecommendation.estimatedRevenue}`,
    `Time to Market: ${report.innovationRecommendation.timeToMarket}`,
    `Investment Required: ${report.innovationRecommendation.investmentRequired}`
  ]);

  addSection('STRATEGIC RECOMMENDATIONS', report.strategicRecommendations);

  addSection('NEXT STEPS', report.nextSteps);

  pdf.save('Pharma_Innovation_Report.pdf');
}

export function exportToPPT(report: ReportOutput) {
  const prs = new PptxGenJS();
  prs.defineLayout({ name: 'LAYOUT1', master: 'MASTER1' });

  const slideOptions = {
    x: 0.5,
    y: 0.5,
    w: 9,
    h: 7,
    margin: [0.5, 0.5, 0.5, 0.5]
  };

  const titleOptions = {
    fontSize: 44,
    bold: true,
    color: '003366'
  };

  const textOptions = {
    fontSize: 11,
    color: '000000',
    align: 'left' as const
  };

  let slide = prs.addSlide();
  slide.background = { color: 'FFFFFF' };
  slide.addText('PHARMA INNOVATION', { x: 0.5, y: 2, w: 9, h: 1, ...titleOptions, fontSize: 54 });
  slide.addText('Executive Report', { x: 0.5, y: 3.2, w: 9, h: 0.5, fontSize: 32, color: '0066CC' });
  slide.addText(`Generated: ${new Date(report.generatedAt).toLocaleString()}`, {
    x: 0.5,
    y: 6.5,
    w: 9,
    h: 0.4,
    fontSize: 10,
    color: '666666'
  });

  slide = prs.addSlide();
  slide.background = { color: 'FFFFFF' };
  slide.addText('Executive Summary', { x: 0.5, y: 0.5, w: 9, h: 0.6, ...titleOptions, fontSize: 32 });
  slide.addText(report.executiveSummary, {
    x: 0.5,
    y: 1.3,
    w: 9,
    h: 6,
    ...textOptions,
    fontSize: 12,
    align: 'justify' as const
  });

  slide = prs.addSlide();
  slide.background = { color: 'FFFFFF' };
  slide.addText('Market Opportunity', { x: 0.5, y: 0.5, w: 9, h: 0.6, ...titleOptions, fontSize: 32 });
  const marketData = [
    ['Metric', 'Value'],
    ['Market Size', report.iqviaInsights.marketSizeTable[0].marketSizeUSDMn + ' USD Mn'],
    ['CAGR', report.iqviaInsights.marketSizeTable[0].cagr],
    ['Competition', report.iqviaInsights.marketSizeTable[0].competitionIntensity],
    ['Growth Trend', report.iqviaInsights.growthTrend]
  ];
  slide.addTable(marketData, {
    x: 0.5,
    y: 1.3,
    w: 9,
    h: 5.2,
    border: { pt: 1, color: 'CCCCCC' },
    fill: { color: 'F0F0F0' },
    fontSize: 11
  });

  slide = prs.addSlide();
  slide.background = { color: 'FFFFFF' };
  slide.addText('Patent Landscape', { x: 0.5, y: 0.5, w: 9, h: 0.6, ...titleOptions, fontSize: 32 });
  const patentData = [
    ['Patent ID', 'Assignee', 'Expiry', 'Status'],
    ...report.patentLandscape.patentTable.map(p => [p.patentId, p.assignee, p.expiryYear, p.status])
  ];
  slide.addTable(patentData, {
    x: 0.5,
    y: 1.3,
    w: 9,
    h: 4,
    border: { pt: 1, color: 'CCCCCC' },
    fontSize: 10
  });
  slide.addText(`FTO Risk: ${report.patentLandscape.ftoRiskFlags.overallFTORisk}`, {
    x: 0.5,
    y: 5.5,
    w: 9,
    h: 0.8,
    fontSize: 12,
    bold: true,
    color: report.patentLandscape.ftoRiskFlags.overallFTORisk === 'Low' ? '22C55E' : 'EF4444'
  });

  slide = prs.addSlide();
  slide.background = { color: 'FFFFFF' };
  slide.addText('Clinical Trials Pipeline', { x: 0.5, y: 0.5, w: 9, h: 0.6, ...titleOptions, fontSize: 32 });
  slide.addText(`Total Active Trials: ${report.clinicalTrials.pipelineSummary.totalActiveTrials}`, {
    x: 0.5,
    y: 1.3,
    w: 9,
    h: 0.4,
    fontSize: 12,
    bold: true
  });

  const phaseData = [
    ['Phase', 'Number of Trials'],
    ['Phase 1', report.clinicalTrials.pipelineSummary.phaseDistribution.phase1.toString()],
    ['Phase 2', report.clinicalTrials.pipelineSummary.phaseDistribution.phase2.toString()],
    ['Phase 3', report.clinicalTrials.pipelineSummary.phaseDistribution.phase3.toString()],
    ['Phase 4', report.clinicalTrials.pipelineSummary.phaseDistribution.phase4.toString()]
  ];
  slide.addTable(phaseData, {
    x: 0.5,
    y: 1.9,
    w: 4,
    h: 2,
    border: { pt: 1, color: 'CCCCCC' },
    fill: { color: 'F0F0F0' }
  });

  slide.addText(`Clinical Maturity: ${report.clinicalTrials.pipelineSummary.clinicalMaturity}`, {
    x: 0.5,
    y: 4.2,
    w: 9,
    h: 1.5,
    fontSize: 11,
    align: 'left' as const
  });

  slide = prs.addSlide();
  slide.background = { color: 'FFFFFF' };
  slide.addText('Innovation Recommendation', { x: 0.5, y: 0.5, w: 9, h: 0.6, ...titleOptions, fontSize: 32 });

  const recData = [
    ['Attribute', 'Value'],
    ['Molecule', report.innovationRecommendation.molecule],
    ['Indication', report.innovationRecommendation.indication],
    ['Dosage Form', report.innovationRecommendation.dosageForm],
    ['Target Population', report.innovationRecommendation.targetPopulation],
    ['Estimated Revenue', report.innovationRecommendation.estimatedRevenue],
    ['Time to Market', report.innovationRecommendation.timeToMarket],
    ['Investment Required', report.innovationRecommendation.investmentRequired]
  ];

  slide.addTable(recData, {
    x: 0.5,
    y: 1.3,
    w: 9,
    h: 5.2,
    border: { pt: 1, color: 'CCCCCC' },
    fontSize: 10
  });

  slide = prs.addSlide();
  slide.background = { color: 'FFFFFF' };
  slide.addText('Strategic Recommendations', { x: 0.5, y: 0.5, w: 9, h: 0.6, ...titleOptions, fontSize: 32 });

  let yPos = 1.3;
  report.strategicRecommendations.forEach((rec, idx) => {
    if (yPos > 6.5) {
      slide = prs.addSlide();
      slide.background = { color: 'FFFFFF' };
      slide.addText('Strategic Recommendations (Cont.)', { x: 0.5, y: 0.5, w: 9, h: 0.6, ...titleOptions, fontSize: 32 });
      yPos = 1.3;
    }

    slide.addText(`${idx + 1}. ${rec}`, {
      x: 0.7,
      y: yPos,
      w: 8.6,
      h: 0.8,
      fontSize: 11,
      align: 'left' as const,
      wrap: true
    });
    yPos += 0.9;
  });

  slide = prs.addSlide();
  slide.background = { color: 'FFFFFF' };
  slide.addText('Next Steps', { x: 0.5, y: 0.5, w: 9, h: 0.6, ...titleOptions, fontSize: 32 });

  yPos = 1.3;
  report.nextSteps.forEach((step, idx) => {
    if (yPos > 6.5) {
      slide = prs.addSlide();
      slide.background = { color: 'FFFFFF' };
      slide.addText('Next Steps (Cont.)', { x: 0.5, y: 0.5, w: 9, h: 0.6, ...titleOptions, fontSize: 32 });
      yPos = 1.3;
    }

    slide.addText(`${idx + 1}. ${step}`, {
      x: 0.7,
      y: yPos,
      w: 8.6,
      h: 0.8,
      fontSize: 11,
      align: 'left' as const,
      wrap: true
    });
    yPos += 0.9;
  });

  prs.writeFile({ fileName: 'Pharma_Innovation_Report.pptx' });
}

export function ExportButtons({ report }: { report: ReportOutput }) {
  const handlePDFExport = async () => {
    const reportElement = document.getElementById('report-content');
    if (reportElement) {
      try {
        await exportToPDF(report, reportElement);
      } catch (error) {
        console.error('Error exporting PDF:', error);
      }
    }
  };

  const handlePPTExport = () => {
    try {
      exportToPPT(report);
    } catch (error) {
      console.error('Error exporting PPT:', error);
    }
  };

  return (
    <div className="flex gap-3 flex-wrap">
      <button
        onClick={handlePDFExport}
        className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors"
      >
        <FileText className="w-4 h-4" />
        Download PDF
      </button>
      <button
        onClick={handlePPTExport}
        className="flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-colors"
      >
        <Download className="w-4 h-4" />
        Download PPT
      </button>
    </div>
  );
}
