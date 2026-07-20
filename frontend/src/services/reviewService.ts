import api from "./api";
import type { ReviewResponse } from "../types/review";

export async function reviewCode(
  language: string,
  code: string
): Promise<ReviewResponse> {
  const { data } = await api.post<ReviewResponse>("/review", {
    language,
    code,
  });

  return data;
}