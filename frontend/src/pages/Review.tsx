import { useState } from "react";

import Sidebar from "../components/layout/Sidebar";
import TopNavbar from "../components/layout/TopNavbar";

import EditorPanel from "../components/review/EditorPanel";
import ResultPanel from "../components/review/ResultPanel";

import { reviewCode } from "../services/reviewService";
import type { ReviewResponse } from "../types/review";

import {
  Sparkles,
  ShieldCheck,
  BrainCircuit,
} from "lucide-react";

export default function Review() {
  const [language, setLanguage] = useState("python");
  const [code, setCode] = useState('print("Hello World")');

  const [loading, setLoading] = useState(false);

  const [result, setResult] =
    useState<ReviewResponse | null>(null);

  async function handleReview() {
    try {
      setLoading(true);

      const response = await reviewCode(
        language,
        code
      );

      setResult(response);
    } catch (error: any) {
      console.error(error);

      alert("Unable to review code.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex h-screen bg-[#09090B] text-white">

      <Sidebar />

      <div className="flex flex-1 flex-col overflow-hidden">

        <TopNavbar />

        <main className="flex-1 overflow-y-auto p-8">

          {/* Header */}

          <div className="rounded-3xl border border-zinc-800 bg-gradient-to-r from-violet-600/10 to-zinc-900 p-8">

            <div className="flex items-center gap-3">

              <Sparkles
                size={34}
                className="text-violet-400"
              />

              <div>

                <h1 className="text-4xl font-bold">

                  AI Review Workspace

                </h1>

                <p className="mt-2 text-zinc-400">

                  Analyze your source code with
                  CortexPilot AI and receive
                  instant insights on quality,
                  security, readability and
                  maintainability.

                </p>

              </div>

            </div>

          </div>

          {/* Feature Cards */}

          <div className="mt-8 grid gap-5 md:grid-cols-3">

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-5">

              <ShieldCheck
                className="mb-3 text-green-400"
                size={30}
              />

              <h2 className="font-semibold">

                Security Analysis

              </h2>

              <p className="mt-2 text-sm text-zinc-500">

                Detect hardcoded secrets,
                unsafe practices and
                vulnerable code.

              </p>

            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-5">

              <BrainCircuit
                className="mb-3 text-violet-400"
                size={30}
              />

              <h2 className="font-semibold">

                AI Suggestions

              </h2>

              <p className="mt-2 text-sm text-zinc-500">

                Receive intelligent
                recommendations powered by
                large language models.

              </p>

            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-5">

              <Sparkles
                className="mb-3 text-blue-400"
                size={30}
              />

              <h2 className="font-semibold">

                Quality Score

              </h2>

              <p className="mt-2 text-sm text-zinc-500">

                Evaluate readability,
                maintainability and overall
                code quality instantly.

              </p>

            </div>

          </div>

          {/* Workspace */}

          <div className="mt-8 grid gap-6 xl:grid-cols-2">

            <div className="min-h-[850px]">

              <EditorPanel
                language={language}
                setLanguage={setLanguage}
                code={code}
                setCode={setCode}
                loading={loading}
                onReview={handleReview}
              />

            </div>

            <div className="min-h-[850px]">

              <ResultPanel
                loading={loading}
                result={result}
              />

            </div>

          </div>

        </main>

      </div>

    </div>
  );
}