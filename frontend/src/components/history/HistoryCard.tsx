import type { HistoryItem } from "../../services/historyService";

interface Props {
  item: HistoryItem;
}

export default function HistoryCard({ item }: Props) {
  const { review } = item;

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-violet-500 hover:shadow-lg hover:shadow-violet-500/10">

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-violet-400">

            Score {review.score}/100

          </h2>

          <p className="mt-2 text-zinc-400">

            {new Date(item.timestamp).toLocaleString()}

          </p>

        </div>

        <span
          className={`rounded-full px-4 py-2 text-sm font-semibold ${
            review.status === "Good"
              ? "bg-green-500/20 text-green-400"
              : "bg-yellow-500/20 text-yellow-400"
          }`}
        >
          {review.status}
        </span>

      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">

        <div className="rounded-xl bg-zinc-800 p-4">

          <p className="text-sm text-zinc-500">
            Language
          </p>

          <h3 className="mt-2 font-semibold">
            {review.summary.language}
          </h3>

        </div>

        <div className="rounded-xl bg-zinc-800 p-4">

          <p className="text-sm text-zinc-500">
            Lines
          </p>

          <h3 className="mt-2 font-semibold">
            {review.summary.total_lines}
          </h3>

        </div>

        <div className="rounded-xl bg-zinc-800 p-4">

          <p className="text-sm text-zinc-500">
            Characters
          </p>

          <h3 className="mt-2 font-semibold">
            {review.summary.characters}
          </h3>

        </div>

        <div className="rounded-xl bg-zinc-800 p-4">

          <p className="text-sm text-zinc-500">
            Issues
          </p>

          <h3 className="mt-2 font-semibold">
            {review.total_issues}
          </h3>

        </div>

      </div>

    </div>
  );
}