import { QualsCommitteeWhereUniqueInput } from "../qualsCommittee/QualsCommitteeWhereUniqueInput";

export type QualsResearchForOtherStudentUpdateInput = {
  approach?: "Excellent" | "Good" | "Satisfactory" | "Unsatisfactory" | null;
  approachExp?: string | null;
  insight?: "Excellent" | "Good" | "Satisfactory" | "Unsatisfactory" | null;
  insightExp?: string | null;
  interpretation?:
    | "Excellent"
    | "Good"
    | "Satisfactory"
    | "Unsatisfactory"
    | null;
  interpretationExp?: string | null;
  overall?: "Excellent" | "Good" | "Satisfactory" | "Unsatisfactory" | null;
  overallExp?: string | null;
  progress?: string | null;
  qualsCommittee?: QualsCommitteeWhereUniqueInput | null;
  status?: "Satisfied" | "Progress" | null;
  studentId?: number | null;
  summary?: string | null;
  understanding?:
    | "Excellent"
    | "Good"
    | "Satisfactory"
    | "Unsatisfactory"
    | null;
  understandingExp?: string | null;
  urId?: number | null;
};
