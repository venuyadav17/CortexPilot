import api from "./api";

export interface DashboardData {
  overview: {
    total_reviews: number;
    average_score: number;
    good_reviews: number;
    needs_improvement: number;
    poor_reviews: number;
    best_score: number;
    lowest_score: number;
    last_review: string | null;
  };

  most_common_issue: string | null;

  issue_statistics: Record<string, number>;

  severity_statistics: Record<string, number>;

  score_history: {
    timestamp: string;
    score: number;
  }[];

  recent_reviews: {
    timestamp: string;
    status: string;
    score: number;
  }[];
}

export async function getDashboard(): Promise<DashboardData> {
  const { data } = await api.get("/dashboard");
  return data;
}