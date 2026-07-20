import { motion } from "framer-motion";
import {
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Clock3,
} from "lucide-react";

interface Review {
  timestamp: string;
  status: string;
  score: number;
}

interface Props {
  reviews: Review[];
}

export default function RecentReviews({ reviews }: Props) {
  function getStatusStyle(status: string) {
    switch (status.toLowerCase()) {
      case "good":
        return {
          icon: <CheckCircle2 size={18} />,
          badge: "bg-green-500/20 text-green-400 border-green-500/30",
          score: "bg-green-600",
        };

      case "needs improvement":
        return {
          icon: <AlertTriangle size={18} />,
          badge: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
          score: "bg-yellow-600",
        };

      default:
        return {
          icon: <XCircle size={18} />,
          badge: "bg-red-500/20 text-red-400 border-red-500/30",
          score: "bg-red-600",
        };
    }
  }

  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/80 p-6">

      <div className="mb-6 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-white">
            Recent Reviews
          </h2>

          <p className="mt-1 text-sm text-zinc-400">
            Your latest AI code review activity
          </p>

        </div>

      </div>

      {reviews.length === 0 ? (

        <div className="flex h-56 flex-col items-center justify-center rounded-2xl border border-dashed border-zinc-700">

          <Clock3
            size={55}
            className="mb-4 text-zinc-600"
          />

          <h3 className="text-lg font-semibold text-zinc-400">
            No Reviews Yet
          </h3>

          <p className="mt-2 text-sm text-zinc-500">
            Complete your first review to see activity here.
          </p>

        </div>

      ) : (

        <div className="space-y-4">

          {reviews.map((review, index) => {
            const style = getStatusStyle(review.status);

            return (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.01,
                  y: -2,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5"
              >

                <div className="flex items-start gap-4">

                  <div className="mt-1 rounded-xl bg-violet-600/20 p-3">

                    {style.icon}

                  </div>

                  <div>

                    <h3 className="font-semibold text-white">

                      Review #{reviews.length - index}

                    </h3>

                    <p className="mt-1 text-sm text-zinc-500">

                      {new Date(
                        review.timestamp
                      ).toLocaleString()}

                    </p>

                    <div
                      className={`mt-3 inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${style.badge}`}
                    >

                      {review.status}

                    </div>

                  </div>

                </div>

                <div
                  className={`rounded-2xl px-5 py-3 text-lg font-bold text-white ${style.score}`}
                >

                  {review.score}%

                </div>

              </motion.div>
            );
          })}

        </div>

      )}

    </div>
  );
}