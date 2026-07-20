import {
  AreaChart,
  Area,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { TrendingUp } from "lucide-react";

interface ScoreHistory {
  timestamp: string;
  score: number;
}

interface Props {
  data: ScoreHistory[];
}

export default function AnalyticsChart({ data }: Props) {
  const chartData = data.map((item, index) => ({
    review: `R${index + 1}`,
    score: item.score,
  }));

  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/80 p-6">

      <div className="mb-6 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-white">
            Score Analytics
          </h2>

          <p className="mt-1 text-sm text-zinc-400">
            Performance of AI code reviews over time
          </p>

        </div>

        <div className="rounded-2xl bg-violet-600/20 p-3">
          <TrendingUp className="text-violet-400" size={28} />
        </div>

      </div>

      <div className="h-80">

        {chartData.length === 0 ? (

          <div className="flex h-full flex-col items-center justify-center text-zinc-500">

            <TrendingUp size={55} className="mb-4 opacity-40" />

            <p className="text-lg font-medium">
              No analytics available
            </p>

            <p className="mt-2 text-sm">
              Complete your first review to see score trends.
            </p>

          </div>

        ) : (

          <ResponsiveContainer width="100%" height="100%">

            <AreaChart
              data={chartData}
              margin={{
                top: 10,
                right: 20,
                left: -10,
                bottom: 0,
              }}
            >

              <defs>

                <linearGradient
                  id="scoreGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="5%"
                    stopColor="#8B5CF6"
                    stopOpacity={0.9}
                  />

                  <stop
                    offset="95%"
                    stopColor="#8B5CF6"
                    stopOpacity={0.05}
                  />

                </linearGradient>

              </defs>

              <CartesianGrid
                stroke="#27272A"
                strokeDasharray="4 4"
                vertical={false}
              />

              <XAxis
                dataKey="review"
                tick={{ fill: "#A1A1AA", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />

              <YAxis
                domain={[0, 100]}
                tick={{ fill: "#A1A1AA", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />

              <Tooltip
                cursor={{
                  stroke: "#8B5CF6",
                  strokeWidth: 1,
                }}
                contentStyle={{
                  background: "#18181B",
                  border: "1px solid #3F3F46",
                  borderRadius: "12px",
                  color: "#fff",
                }}
                formatter={(value) => [`${value}%`, "Score"]}
                labelFormatter={(label) => `Review ${label}`}
              />

              <Area
                type="monotone"
                dataKey="score"
                stroke="#8B5CF6"
                strokeWidth={3}
                fill="url(#scoreGradient)"
                activeDot={{
                  r: 6,
                  stroke: "#fff",
                  strokeWidth: 2,
                }}
              />

            </AreaChart>

          </ResponsiveContainer>

        )}

      </div>

    </div>
  );
}