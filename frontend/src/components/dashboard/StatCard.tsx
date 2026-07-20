import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  title: string;
  value: string;
  subtitle: string;
  icon: ReactNode;
  color: string;
}

export default function StatCard({
  title,
  value,
  subtitle,
  icon,
  color,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/80 p-6 backdrop-blur-sm"
    >
      {/* Background Glow */}

      <div
        className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-10 blur-3xl transition-opacity duration-300 group-hover:opacity-20"
        style={{
          backgroundColor: color,
        }}
      />

      <div className="relative flex items-start justify-between">

        <div className="flex-1">

          <p className="text-sm font-medium uppercase tracking-wide text-zinc-500">
            {title}
          </p>

          <h2 className="mt-4 break-words text-3xl font-bold text-white">
            {value}
          </h2>

          <p className="mt-3 text-sm text-zinc-400">
            {subtitle}
          </p>

        </div>

        <div
          className="ml-5 flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-110"
          style={{
            background: `linear-gradient(135deg, ${color}, ${color}CC)`,
          }}
        >
          {icon}
        </div>

      </div>

      <div className="mt-6 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
    </motion.div>
  );
}