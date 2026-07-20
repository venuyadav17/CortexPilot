import {
  AlertTriangle,
  CheckCircle2,
  Clock3,
  ShieldCheck,
  Sparkles,
  FileCode2,
  BarChart3,
  Activity,
  Loader2,
} from "lucide-react";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import type { ReviewResponse } from "../../types/review";

interface Props {
  loading: boolean;
  result: ReviewResponse | null;
}

function getScoreColor(score: number) {
  if (score >= 85) return "text-green-400";
  if (score >= 70) return "text-yellow-400";
  return "text-red-400";
}

function getScoreBackground(score: number) {
  if (score >= 85) return "from-green-500/20 to-green-900/10";
  if (score >= 70) return "from-yellow-500/20 to-yellow-900/10";
  return "from-red-500/20 to-red-900/10";
}

function getSeverityStyle(severity: string) {
  switch (severity.toLowerCase()) {
    case "high":
      return "bg-red-500/20 text-red-400 border-red-500/30";

    case "medium":
      return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";

    case "low":
      return "bg-green-500/20 text-green-400 border-green-500/30";

    default:
      return "bg-blue-500/20 text-blue-400 border-blue-500/30";
  }
}

export default function ResultPanel({
  loading,
  result,
}: Props) {

  if (loading) {
    return (
      <div className="space-y-6">

        <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

          <div className="flex items-center gap-4">

            <Loader2
              size={40}
              className="animate-spin text-violet-500"
            />

            <div>

              <h2 className="text-2xl font-bold">

                CortexPilot AI

              </h2>

              <p className="mt-2 text-zinc-400">

                Reviewing your code...

              </p>

            </div>

          </div>

          <div className="mt-8 space-y-4">

            <div className="h-5 animate-pulse rounded bg-zinc-800" />

            <div className="h-5 w-10/12 animate-pulse rounded bg-zinc-800" />

            <div className="h-5 w-8/12 animate-pulse rounded bg-zinc-800" />

          </div>

        </div>

        <div className="grid gap-4 md:grid-cols-4">

          {Array.from({ length: 4 }).map((_, index) => (

            <div
              key={index}
              className="h-32 animate-pulse rounded-2xl bg-zinc-900"
            />

          ))}

        </div>

      </div>
    );
  }

  if (!result) {
    return (
      <div className="flex h-full items-center justify-center rounded-3xl border border-dashed border-zinc-700 bg-zinc-900/40">

        <div className="max-w-md text-center">

          <Sparkles
            size={60}
            className="mx-auto text-violet-500"
          />

          <h2 className="mt-6 text-3xl font-bold">

            Ready for Review

          </h2>

          <p className="mt-4 leading-7 text-zinc-400">

            Paste or upload your source code and click
            <span className="font-semibold text-violet-400">
              {" "}
              Review Code
            </span>
            . CortexPilot will analyze security,
            maintainability, readability, code quality,
            and best practices.

          </p>

        </div>

      </div>
    );
  }

  return (

    <div className="space-y-6 overflow-y-auto">

          {/* Score Dashboard */}

      <div
        className={`rounded-3xl border border-zinc-800 bg-gradient-to-br ${getScoreBackground(
          result.score
        )} p-8`}
      >

        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

          {/* Left */}

          <div>

            <div className="flex items-center gap-3">

              <ShieldCheck
                size={34}
                className="text-violet-400"
              />

              <div>

                <p className="text-sm uppercase tracking-widest text-zinc-400">

                  Overall Assessment

                </p>

                <h2 className="mt-1 text-3xl font-bold">

                  AI Code Review

                </h2>

              </div>

            </div>

            <p className="mt-5 max-w-xl leading-7 text-zinc-300">

              CortexPilot analyzed your submission for
              security vulnerabilities, maintainability,
              readability, coding standards and overall
              software quality.

            </p>

          </div>

          {/* Right */}

          <div className="flex flex-col items-center">

            <div
              className={`flex h-40 w-40 items-center justify-center rounded-full border-8 border-zinc-700 bg-zinc-950 shadow-xl ${getScoreColor(
                result.score
              )}`}
            >

              <div className="text-center">

                <p
                  className={`text-5xl font-extrabold ${getScoreColor(
                    result.score
                  )}`}
                >
                  {result.score}
                </p>

                <p className="mt-1 text-xs uppercase tracking-widest text-zinc-500">

                  Score

                </p>

              </div>

            </div>

            <div
              className={`mt-6 rounded-full border px-5 py-2 font-semibold ${
                result.score >= 85
                  ? "border-green-500/30 bg-green-500/20 text-green-400"
                  : result.score >= 70
                  ? "border-yellow-500/30 bg-yellow-500/20 text-yellow-400"
                  : "border-red-500/30 bg-red-500/20 text-red-400"
              }`}
            >
              {result.status}
            </div>

          </div>

        </div>

      </div>

      {/* Overview Cards */}

      <div className="grid gap-5 md:grid-cols-4">

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">

          <CheckCircle2
            className="mb-4 text-green-400"
            size={28}
          />

          <p className="text-sm text-zinc-500">

            Status

          </p>

          <h3 className="mt-2 text-xl font-bold">

            {result.status}

          </h3>

        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">

          <Activity
            className="mb-4 text-blue-400"
            size={28}
          />

          <p className="text-sm text-zinc-500">

            Issues Found

          </p>

          <h3 className="mt-2 text-xl font-bold">

            {result.issues.length}

          </h3>

        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">

          <Clock3
            className="mb-4 text-yellow-400"
            size={28}
          />

          <p className="text-sm text-zinc-500">

            Review Sections

          </p>

          <h3 className="mt-2 text-xl font-bold">

            {result.quick_summary.length}

          </h3>

        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">

          <AlertTriangle
            className="mb-4 text-red-400"
            size={28}
          />

          <p className="text-sm text-zinc-500">

            Language

          </p>

          <h3 className="mt-2 text-xl font-bold capitalize">

            {result.summary.language}

          </h3>

        </div>

      </div>

            {/* Statistics Dashboard */}

      <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-7">

        <div className="mb-6 flex items-center gap-3">

          <BarChart3
            size={28}
            className="text-violet-400"
          />

          <div>

            <h2 className="text-2xl font-bold">

              Code Statistics

            </h2>

            <p className="text-zinc-400">

              Metrics extracted during static analysis.

            </p>

          </div>

        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 transition hover:border-violet-500">

            <FileCode2
              size={30}
              className="mb-4 text-violet-400"
            />

            <p className="text-sm text-zinc-500">

              Programming Language

            </p>

            <h3 className="mt-3 text-2xl font-bold capitalize">

              {result.summary.language}

            </h3>

          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 transition hover:border-blue-500">

            <Activity
              size={30}
              className="mb-4 text-blue-400"
            />

            <p className="text-sm text-zinc-500">

              Total Lines

            </p>

            <h3 className="mt-3 text-2xl font-bold">

              {result.summary.total_lines}

            </h3>

          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 transition hover:border-yellow-500">

            <Clock3
              size={30}
              className="mb-4 text-yellow-400"
            />

            <p className="text-sm text-zinc-500">

              Blank Lines

            </p>

            <h3 className="mt-3 text-2xl font-bold">

              {result.summary.blank_lines}

            </h3>

          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 transition hover:border-green-500">

            <BarChart3
              size={30}
              className="mb-4 text-green-400"
            />

            <p className="text-sm text-zinc-500">

              Characters

            </p>

            <h3 className="mt-3 text-2xl font-bold">

              {result.summary.characters}

            </h3>

          </div>

        </div>

      </div>

            {/* Quick Summary */}

      <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-7">

        <div className="mb-6 flex items-center gap-3">

          <Sparkles
            size={28}
            className="text-violet-400"
          />

          <div>

            <h2 className="text-2xl font-bold">

              AI Quick Summary

            </h2>

            <p className="text-zinc-400">

              High-level insights generated from the
              analysis.

            </p>

          </div>

        </div>

        <div className="space-y-5">

          {result.quick_summary.map((item, index) => (

            <div
              key={index}
              className="group rounded-2xl border border-zinc-800 bg-zinc-950 p-6 transition-all duration-300 hover:border-violet-500 hover:bg-zinc-900"
            >

              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-600/20 transition group-hover:bg-violet-600/30">

                  <Sparkles
                    size={22}
                    className="text-violet-400"
                  />

                </div>

                <div className="flex-1">

                  <div className="flex items-center justify-between">

                    <h3 className="text-lg font-semibold text-violet-400">

                      {item.title}

                    </h3>

                    <span className="rounded-full bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300">

                      Insight {index + 1}

                    </span>

                  </div>

                  <p className="mt-4 leading-7 text-zinc-300">

                    {item.summary}

                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

            {/* Issues */}

      <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-7">

        <div className="mb-6 flex items-center gap-3">

          <AlertTriangle
            size={28}
            className="text-yellow-400"
          />

          <div>

            <h2 className="text-2xl font-bold">

              Detected Issues

            </h2>

            <p className="text-zinc-400">

              Problems identified during static analysis
              with recommendations for improvement.

            </p>

          </div>

        </div>

        {result.issues.length === 0 ? (

          <div className="rounded-2xl border border-green-500/30 bg-green-500/10 p-8 text-center">

            <CheckCircle2
              size={56}
              className="mx-auto text-green-400"
            />

            <h3 className="mt-5 text-2xl font-bold text-green-400">

              Excellent!

            </h3>

            <p className="mt-3 text-zinc-300">

              No issues were detected in your source
              code. Your implementation follows the
              current analysis rules.

            </p>

          </div>

        ) : (

          <div className="space-y-5">

            {result.issues.map((issue, index) => (

              <div
                key={index}
                className="rounded-2xl border border-zinc-800 bg-zinc-950 transition-all duration-300 hover:border-violet-500"
              >

                {/* Header */}

                <div className="flex flex-col gap-4 border-b border-zinc-800 p-6 md:flex-row md:items-center md:justify-between">

                  <div className="flex items-center gap-4">

                    <div className="rounded-xl bg-yellow-500/15 p-3">

                      <AlertTriangle
                        size={24}
                        className="text-yellow-400"
                      />

                    </div>

                    <div>

                      <h3 className="text-lg font-semibold">

                        {issue.rule}

                      </h3>

                      <p className="mt-1 text-sm text-zinc-500">

                        Issue #{index + 1}

                      </p>

                    </div>

                  </div>

                  <span
                    className={`rounded-full border px-4 py-2 text-sm font-semibold ${getSeverityStyle(
                      issue.severity
                    )}`}
                  >
                    {issue.severity}
                  </span>

                </div>

                {/* Description */}

                <div className="space-y-5 p-6">

                  <div>

                    <p className="text-sm uppercase tracking-wide text-zinc-500">

                      Description

                    </p>

                    <p className="mt-2 leading-7 text-zinc-300">

                      {issue.message}

                    </p>

                  </div>

                  <div className="rounded-2xl border border-violet-500/20 bg-violet-500/10 p-5">

                    <div className="flex items-center gap-3">

                      <Sparkles
                        size={20}
                        className="text-violet-400"
                      />

                      <h4 className="font-semibold text-violet-300">

                        AI Recommendation

                      </h4>

                    </div>

                    <p className="mt-3 leading-7 text-zinc-300">

                      {issue.suggestion}

                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

            {/* AI Review */}

      <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-7">

        <div className="mb-6 flex items-center gap-3">

          <Sparkles
            size={28}
            className="text-violet-400"
          />

          <div>

            <h2 className="text-2xl font-bold">

              AI Detailed Review

            </h2>

            <p className="text-zinc-400">

              Complete analysis generated by CortexPilot AI.

            </p>

          </div>

        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-8">

          <div
            className="
              prose
              prose-invert
              prose-zinc
              max-w-none

              prose-headings:text-white
              prose-headings:font-bold

              prose-p:text-zinc-300
              prose-p:leading-8

              prose-strong:text-violet-300

              prose-a:text-violet-400

              prose-code:text-pink-300
              prose-code:bg-zinc-900
              prose-code:px-1
              prose-code:py-0.5
              prose-code:rounded

              prose-pre:bg-[#09090B]
              prose-pre:border
              prose-pre:border-zinc-800
              prose-pre:rounded-xl

              prose-li:text-zinc-300

              prose-blockquote:border-violet-500
              prose-blockquote:text-zinc-300

              prose-table:border-zinc-700
              prose-th:border-zinc-700
              prose-td:border-zinc-700
            "
          >

            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
            >

              {result.ai_review}

            </ReactMarkdown>

          </div>

        </div>

      </div>

      {/* Footer */}

      <div className="rounded-2xl border border-zinc-800 bg-gradient-to-r from-violet-600/10 to-zinc-900 p-6">

        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <h3 className="text-lg font-semibold">

              CortexPilot Analysis Complete

            </h3>

            <p className="mt-2 text-zinc-400">

              This report combines static analysis,
              AI reasoning, maintainability checks,
              readability evaluation and security
              inspection to help improve your code.

            </p>

          </div>

          <div className="flex flex-wrap gap-3">

            <span className="rounded-full bg-green-500/15 px-4 py-2 text-sm font-medium text-green-400">

              ✓ Security

            </span>

            <span className="rounded-full bg-blue-500/15 px-4 py-2 text-sm font-medium text-blue-400">

              ✓ Maintainability

            </span>

            <span className="rounded-full bg-violet-500/15 px-4 py-2 text-sm font-medium text-violet-400">

              ✓ AI Suggestions

            </span>

            <span className="rounded-full bg-yellow-500/15 px-4 py-2 text-sm font-medium text-yellow-400">

              ✓ Best Practices

            </span>

          </div>

        </div>

      </div>

    </div>
  );
}