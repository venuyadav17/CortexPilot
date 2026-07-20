import { useEffect, useState } from "react";
import { getDashboard } from "../services/dashboardService";
import type { DashboardData } from "../services/dashboardService";

import Sidebar from "../components/layout/Sidebar";
import TopNavbar from "../components/layout/TopNavbar";

import StatCard from "../components/dashboard/StatCard";
import AnalyticsChart from "../components/dashboard/AnalyticsChart";
import QuickActions from "../components/dashboard/QuickActions";
import RecentReviews from "../components/dashboard/RecentReviews";

import {
  ShieldCheck,
  FileCode2,
  Star,
  Bug,
  Trophy,
  TrendingUp,
  AlertTriangle,
} from "lucide-react";

export default function Dashboard() {
  const [dashboard, setDashboard] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDashboard() {
      try {
        const data = await getDashboard();
        setDashboard(data);
      } catch (error) {
        console.error("Dashboard Error:", error);
      } finally {
        setLoading(false);
      }
    }

    loadDashboard();
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen bg-[#09090B]">
        <Sidebar />

        <div className="flex flex-1 flex-col">
          <TopNavbar />

          <main className="flex-1 p-8 animate-pulse">

            <div className="h-10 w-80 rounded bg-zinc-800" />

            <div className="mt-3 h-5 w-64 rounded bg-zinc-800" />

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="h-40 rounded-3xl bg-zinc-900"
                />
              ))}

            </div>

            <div className="mt-8 h-96 rounded-3xl bg-zinc-900" />

          </main>
        </div>
      </div>
    );
  }

  const overview = dashboard?.overview;

  const totalReviews = overview?.total_reviews ?? 0;

  const successRate =
    totalReviews === 0
      ? 0
      : Math.round(((overview?.good_reviews ?? 0) / totalReviews) * 100);

  return (
    <div className="flex h-screen bg-[#09090B] text-white">

      <Sidebar />

      <div className="flex flex-1 flex-col overflow-hidden">

        <TopNavbar />

        <main className="flex-1 overflow-y-auto p-8">

          {/* Header */}

          <div className="mb-10">

            <h1 className="text-4xl font-bold">

              Welcome back,
              <span className="text-violet-500"> Venu 👋</span>

            </h1>

            <p className="mt-3 text-lg text-zinc-400">

              Monitor your AI code reviews from one intelligent dashboard.

            </p>

          </div>

          {/* Main Statistics */}

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            <StatCard
              title="Total Reviews"
              value={String(totalReviews)}
              subtitle="Reviews Completed"
              icon={<FileCode2 size={30} color="white" />}
              color="#7C3AED"
            />

            <StatCard
              title="Average Score"
              value={`${overview?.average_score ?? 0}%`}
              subtitle="Overall Quality"
              icon={<Star size={30} color="white" />}
              color="#2563EB"
            />

            <StatCard
              title="Good Reviews"
              value={String(overview?.good_reviews ?? 0)}
              subtitle="Passed Reviews"
              icon={<ShieldCheck size={30} color="white" />}
              color="#22C55E"
            />

            <StatCard
              title="Poor Reviews"
              value={String(overview?.poor_reviews ?? 0)}
              subtitle="Need Improvement"
              icon={<Bug size={30} color="white" />}
              color="#EF4444"
            />

          </div>

          {/* Secondary Statistics */}

          <div className="mt-6 grid gap-6 md:grid-cols-3">

            <StatCard
              title="Best Score"
              value={`${overview?.best_score ?? 0}%`}
              subtitle="Highest Review"
              icon={<Trophy size={30} color="white" />}
              color="#EAB308"
            />

            <StatCard
              title="Success Rate"
              value={`${successRate}%`}
              subtitle="Good Reviews Ratio"
              icon={<TrendingUp size={30} color="white" />}
              color="#14B8A6"
            />

            <StatCard
              title="Most Common Issue"
              value={dashboard?.most_common_issue ?? "None"}
              subtitle="Frequently Detected"
              icon={<AlertTriangle size={30} color="white" />}
              color="#F97316"
            />

          </div>

          {/* Analytics */}

          <div className="mt-8 grid gap-6 xl:grid-cols-3">

            <div className="xl:col-span-2">

              <AnalyticsChart
                data={dashboard?.score_history ?? []}
              />

            </div>

            <QuickActions />

          </div>

          {/* Recent Reviews */}

          <div className="mt-8">

            <RecentReviews
              reviews={dashboard?.recent_reviews ?? []}
            />

          </div>

        </main>

      </div>

    </div>
  );
}