import { QualsCommittee } from "../qualsCommittee/QualsCommittee";

export type QualsResearchForOtherStudent = {
  approach?: "Excellent" | "Good" | "Satisfactory" | "Unsatisfactory" | null;
  approachExp: string | null;
  id: number;
  insight?: "Excellent" | "Good" | "Satisfactory" | "Unsatisfactory" | null;
  insightExp: string | null;
  interpretation?:
    | "Excellent"
    | "Good"
    | "Satisfactory"
    | "Unsatisfactory"
    | null;
  interpretationExp: string | null;
  overall?: "Excellent" | "Good" | "Satisfactory" | "Unsatisfactory" | null;
  overallExp: string | null;
  progress: string | null;
  qualsCommittee?: QualsCommittee | null;
  status?: "Satisfied" | "Progress" | null;
  studentId: number | null;
  summary: string | null;
  timestamp: Date | null;
  understanding?:
    | "Excellent"
    | "Good"
    | "Satisfactory"
    | "Unsatisfactory"
    | null;
  understandingExp: string | null;
  urId: number | null;
};
