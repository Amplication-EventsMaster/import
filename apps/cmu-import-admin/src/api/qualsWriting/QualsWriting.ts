import { QualsCommittee } from "../qualsCommittee/QualsCommittee";
import { QualsWritingAspect } from "../qualsWritingAspect/QualsWritingAspect";

export type QualsWriting = {
  engaging_reader?:
    | "Excellent"
    | "Good"
    | "Satisfactory"
    | "Unsatisfactory"
    | null;
  engagingReaderExp: string | null;
  id: number;
  organization?:
    | "Excellent"
    | "Good"
    | "Satisfactory"
    | "Unsatisfactory"
    | null;
  organizationExp: string | null;
  overall?: "Excellent" | "Good" | "Satisfactory" | "Unsatisfactory" | null;
  overallExp: string | null;
  qualsCommittee?: QualsCommittee | null;
  qualsWritingAspect?: Array<QualsWritingAspect>;
  status?: "Satisfied" | "Progress" | null;
  studentId: number | null;
  summaryAudience: string | null;
  summaryTopic: string | null;
  timestamp: Date | null;
  urId: number | null;
  writing_style?:
    | "Excellent"
    | "Good"
    | "Satisfactory"
    | "Unsatisfactory"
    | null;
  writingStyleExp: string | null;
};
