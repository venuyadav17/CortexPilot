import {
  FileCode2,
  Upload,
  History,
  ArrowRight,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function QuickActions() {
  const navigate = useNavigate();

  const actions = [
    {
      title: "New Code Review",
      description: "Analyze a new code snippet using AI.",
      icon: <FileCode2 size={26} />,
      color: "bg-violet-600 hover:bg-violet-500",
      onClick: () => navigate("/review"),
    },
    {
      title: "Upload Source Code",
      description: "Paste or upload files for review.",
      icon: <Upload size={26} />,
      color: "bg-zinc-800 hover:bg-zinc-700",
      onClick: () => navigate("/review"),
    },
    {
      title: "Review History",
      description: "View all your previous AI reviews.",
      icon: <History size={26} />,
      color: "bg-zinc-800 hover:bg-zinc-700",
      onClick: () => navigate("/history"),
    },
  ];

  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/80 p-6">

      <div className="mb-6">

        <h2 className="text-2xl font-bold text-white">
          Quick Actions
        </h2>

        <p className="mt-1 text-sm text-zinc-400">
          Jump directly to the most frequently used features.
        </p>

      </div>

      <div className="space-y-4">

        {actions.map((action) => (
          <motion.button
            key={action.title}
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            onClick={action.onClick}
            className={`group flex w-full items-center justify-between rounded-2xl p-5 text-left transition ${action.color}`}
          >

            <div className="flex items-center gap-4">

              <div className="rounded-xl bg-white/10 p-3">
                {action.icon}
              </div>

              <div>

                <h3 className="font-semibold text-white">
                  {action.title}
                </h3>

                <p className="mt-1 text-sm text-zinc-200">
                  {action.description}
                </p>

              </div>

            </div>

            <ArrowRight
              size={20}
              className="transition-transform group-hover:translate-x-1"
            />

          </motion.button>
        ))}

      </div>

      <div className="mt-8 rounded-2xl border border-violet-500/20 bg-violet-500/10 p-5">

        <p className="text-sm text-violet-300">
          💡 <span className="font-semibold">Tip:</span> Regularly reviewing
          your code helps identify bugs, security issues, and maintainability
          improvements before deployment.
        </p>

      </div>

    </div>
  );
}