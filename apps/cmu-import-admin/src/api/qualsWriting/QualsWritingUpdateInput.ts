import { QualsCommitteeWhereUniqueInput } from "../qualsCommittee/QualsCommitteeWhereUniqueInput";
import { QualsWritingAspectUpdateManyWithoutQualsWritingsInput } from "./QualsWritingAspectUpdateManyWithoutQualsWritingsInput";

export type QualsWritingUpdateInput = {
  engaging_reader?:
    | "Excellent"
    | "Good"
    | "Satisfactory"
    | "Unsatisfactory"
    | null;
  engagingReaderExp?: string | null;
  organization?:
    | "Excellent"
    | "Good"
    | "Satisfactory"
    | "Unsatisfactory"
    | null;
  organizationExp?: string | null;
  overall?: "Excellent" | "Good" | "Satisfactory" | "Unsatisfactory" | null;
  overallExp?: string | null;
  qualsCommittee?: QualsCommitteeWhereUniqueInput | null;
  qualsWritingAspect?: QualsWritingAspectUpdateManyWithoutQualsWritingsInput;
  status?: "Satisfied" | "Progress" | null;
  studentId?: number | null;
  summaryAudience?: string | null;
  summaryTopic?: string | null;
  urId?: number | null;
  writing_style?:
    | "Excellent"
    | "Good"
    | "Satisfactory"
    | "Unsatisfactory"
    | null;
  writingStyleExp?: string | null;
};
