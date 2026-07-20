import api from "./api";

function downloadBlob(blob: Blob, filename: string) {
  const url = window.URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = filename;

  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);

  window.URL.revokeObjectURL(url);
}

export async function downloadPDF() {
  const response = await api.get("/export/pdf", {
    responseType: "blob",
  });

  downloadBlob(new Blob([response.data], { type: "application/pdf" }), "review_report.pdf");
}

export async function downloadCSV() {
  const response = await api.get("/export/csv", {
    responseType: "blob",
  });

  downloadBlob(new Blob([response.data], { type: "text/csv" }), "review_history.csv");
}