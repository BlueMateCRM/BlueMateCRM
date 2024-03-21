import { jsPDF } from "jspdf";

export const makePdf = (htmlContent: any, filename: string) => {
  const pdf = new jsPDF({
    orientation: "p",
    unit: "px",
    format: "a4",
    putOnlyUsedFonts: true,
  });
  pdf.html(htmlContent, {
    callback: (pdf) => {
      pdf.save(`${filename}.pdf`);
    },
    margin: [25, 0, 25, 0],
    autoPaging: "text",
    x: 0,
    y: 0,
    width: 446,
    windowWidth: 892,
  });
};
