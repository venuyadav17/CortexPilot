import { FileSpreadsheet, FileText } from "lucide-react";
import { useState } from "react";

import Sidebar from "../components/layout/Sidebar";
import TopNavbar from "../components/layout/TopNavbar";

import {
  downloadCSV,
  downloadPDF,
} from "../services/exportService";

export default function Export() {
  const [loading, setLoading] = useState(false);

  async function handlePDF() {
    try {
      setLoading(true);
      await downloadPDF();
    } finally {
      setLoading(false);
    }
  }

  async function handleCSV() {
    try {
      setLoading(true);
      await downloadCSV();
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex h-screen bg-[#09090B] text-white">

      <Sidebar />

      <div className="flex flex-1 flex-col">

        <TopNavbar />

        <main className="flex-1 p-8">

          <h1 className="text-4xl font-bold">
            Export Reports
          </h1>

          <p className="mt-2 text-zinc-400">
            Download your AI review history.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-2">

            <button
              onClick={handlePDF}
              disabled={loading}
              className="rounded-2xl border border-zinc-700 bg-zinc-900 p-8 transition hover:border-violet-500"
            >
              <FileText
                size={60}
                className="mx-auto mb-6 text-red-400"
              />

              <h2 className="text-2xl font-bold">
                Export PDF
              </h2>

              <p className="mt-3 text-zinc-400">
                Download a PDF report of all reviews.
              </p>
            </button>

            <button
              onClick={handleCSV}
              disabled={loading}
              className="rounded-2xl border border-zinc-700 bg-zinc-900 p-8 transition hover:border-violet-500"
            >
              <FileSpreadsheet
                size={60}
                className="mx-auto mb-6 text-green-400"
              />

              <h2 className="text-2xl font-bold">
                Export CSV
              </h2>

              <p className="mt-3 text-zinc-400">
                Download review history as CSV.
              </p>
            </button>

          </div>

          {loading && (
            <p className="mt-8 text-zinc-400">
              Preparing download...
            </p>
          )}

        </main>

      </div>

    </div>
  );
}