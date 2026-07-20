export interface ReviewIssue {
  rule: string
  severity: string
  message: string
  suggestion: string
}

export interface QuickSummary {
  severity: string
  title: string
  summary: string
}

export interface CodeSummary {
  language: string
  total_lines: number
  blank_lines: number
  characters: number
}

export interface ReviewResponse {
  status: string
  score: number
  total_issues: number
  summary: CodeSummary
  issues: ReviewIssue[]
  ai_review: string
  timestamp: string
  quick_summary: QuickSummary[]
}