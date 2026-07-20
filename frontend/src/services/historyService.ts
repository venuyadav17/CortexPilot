import api from "./api";

export interface HistoryResponse {
  total_reviews: number;
  reviews: HistoryItem[];
}

export interface HistoryItem {
  timestamp: string;
  review: {
    status: string;
    score: number;
    total_issues: number;
    summary: {
      language: string;
      total_lines: number;
      blank_lines: number;
      characters: number;
    };
  };
}

export async function getHistory() {
  const { data } = await api.get<HistoryResponse>("/history");
  return data;
}