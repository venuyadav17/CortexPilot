import {
  Upload,
  Play,
  Loader2,
  Copy,
  Trash2,
  FileCode2,
  BarChart3,
  Code2,
} from "lucide-react";
import Editor from "@monaco-editor/react";

interface Props {
  language: string;
  setLanguage: (value: string) => void;
  code: string;
  setCode: (value: string) => void;
  loading: boolean;
  onReview: () => void;
}

export default function EditorPanel({
  language,
  setLanguage,
  code,
  setCode,
  loading,
  onReview,
}: Props) {
  function handleUpload(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = e.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      setCode(reader.result as string);
    };

    reader.readAsText(file);
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code);
    } catch (err) {
      console.error(err);
    }
  }

  function handleClear() {
    if (!code.trim()) return;

    const ok = window.confirm(
      "Clear the current editor?"
    );

    if (ok) {
      setCode("");
    }
  }

  const lines =
    code.length === 0
      ? 0
      : code.split("\n").length;

  const words =
    code.trim().length === 0
      ? 0
      : code.trim().split(/\s+/).length;

  const characters = code.length;

  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6 backdrop-blur">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-4">

            <div className="rounded-2xl bg-violet-600/20 p-3">

              <FileCode2
                size={28}
                className="text-violet-400"
              />

            </div>

            <div>

              <h2 className="text-xl font-bold">

                Code Editor

              </h2>

              <p className="mt-1 text-sm text-zinc-400">

                Upload or write your source code for
                AI-powered review.

              </p>

            </div>

          </div>

          <div className="hidden gap-3 md:flex">

            <div className="rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-2 text-center">

              <p className="text-xs uppercase tracking-wide text-zinc-500">

                Lines

              </p>

              <p className="mt-1 text-lg font-bold">

                {lines}

              </p>

            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-2 text-center">

              <p className="text-xs uppercase tracking-wide text-zinc-500">

                Words

              </p>

              <p className="mt-1 text-lg font-bold">

                {words}

              </p>

            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-2 text-center">

              <p className="text-xs uppercase tracking-wide text-zinc-500">

                Characters

              </p>

              <p className="mt-1 text-lg font-bold">

                {characters}

              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Toolbar */}

      <div className="flex flex-wrap items-center gap-3">

        <select
          value={language}
          onChange={(e) =>
            setLanguage(e.target.value)
          }
          className="rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 outline-none transition hover:border-violet-500"
        >
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="cpp">C++</option>
          <option value="javascript">
            JavaScript
          </option>
        </select>

        <label className="flex cursor-pointer items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-3 transition hover:border-violet-500 hover:bg-zinc-800">

          <Upload size={18} />

          Upload

          <input
            hidden
            type="file"
            accept=".py,.java,.cpp,.js,.txt"
            onChange={handleUpload}
          />

        </label>

        <button
          onClick={handleCopy}
          className="flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-3 transition hover:border-blue-500 hover:bg-zinc-800"
        >
          <Copy size={18} />

          Copy
        </button>

        <button
          onClick={handleClear}
          className="flex items-center gap-2 rounded-xl border border-red-500/40 bg-red-500/10 px-5 py-3 text-red-300 transition hover:bg-red-500/20"
        >
          <Trash2 size={18} />

          Clear
        </button>

                <button
          onClick={onReview}
          disabled={loading}
          className="ml-auto flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 font-semibold transition hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? (
            <Loader2
              size={18}
              className="animate-spin"
            />
          ) : (
            <Play size={18} />
          )}

          {loading
            ? "Reviewing..."
            : "Review Code"}
        </button>

      </div>

      {/* Live Statistics */}

      <div className="grid gap-4 md:grid-cols-3">

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">

          <div className="flex items-center gap-3">

            <Code2
              size={22}
              className="text-violet-400"
            />

            <div>

              <p className="text-sm text-zinc-400">

                Selected Language

              </p>

              <h3 className="mt-1 font-semibold capitalize">

                {language}

              </h3>

            </div>

          </div>

        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">

          <div className="flex items-center gap-3">

            <BarChart3
              size={22}
              className="text-green-400"
            />

            <div>

              <p className="text-sm text-zinc-400">

                Code Size

              </p>

              <h3 className="mt-1 font-semibold">

                {characters} Characters

              </h3>

            </div>

          </div>

        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">

          <div className="flex items-center gap-3">

            <FileCode2
              size={22}
              className="text-blue-400"
            />

            <div>

              <p className="text-sm text-zinc-400">

                Total Lines

              </p>

              <h3 className="mt-1 font-semibold">

                {lines}

              </h3>

            </div>

          </div>

        </div>

      </div>

      {/* Monaco Editor */}

      <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 shadow-xl">

        <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900 px-5 py-3">

          <div className="flex items-center gap-2">

            <div className="h-3 w-3 rounded-full bg-red-500" />

            <div className="h-3 w-3 rounded-full bg-yellow-500" />

            <div className="h-3 w-3 rounded-full bg-green-500" />

          </div>

          <span className="text-sm text-zinc-400">

            CortexPilot Editor

          </span>

        </div>

        <Editor
          height="700px"
          theme="vs-dark"
          language={language}
          value={code}
          onChange={(value) =>
            setCode(value ?? "")
          }
          options={{
            fontSize: 15,
            fontLigatures: true,
            minimap: {
              enabled: false,
            },
            automaticLayout: true,
            scrollBeyondLastLine: false,
            smoothScrolling: true,
            wordWrap: "on",
            padding: {
              top: 20,
            },
            roundedSelection: true,
            cursorBlinking: "smooth",
            renderLineHighlight: "all",
          }}
        />

      </div>

            {/* Footer */}

      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4">

        <div className="flex flex-wrap items-center justify-between gap-4">

          <div>

            <h3 className="font-semibold">

              Ready for AI Review

            </h3>

            <p className="mt-1 text-sm text-zinc-400">

              Your code will be analyzed for security,
              readability, maintainability, best
              practices, and overall quality.

            </p>

          </div>

          <div className="flex items-center gap-3 text-sm text-zinc-400">

            <span className="rounded-full bg-green-500/15 px-3 py-1 text-green-400">

              ✓ Live Statistics

            </span>

            <span className="rounded-full bg-blue-500/15 px-3 py-1 text-blue-400">

              ✓ Monaco Editor

            </span>

            <span className="rounded-full bg-violet-500/15 px-3 py-1 text-violet-400">

              ✓ AI Ready

            </span>

          </div>

        </div>

      </div>

    </div>
  );
}