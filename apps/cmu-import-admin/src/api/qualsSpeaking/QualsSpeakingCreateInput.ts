import { QualsSpeakingAspectCreateNestedManyWithoutQualsSpeakingsInput } from "./QualsSpeakingAspectCreateNestedManyWithoutQualsSpeakingsInput";

export type QualsSpeakingCreateInput = {
  av_quality?: "Excellent" | "Good" | "Satisfactory" | "Unsatisfactory" | null;
  avQualityExp?: string | null;
  interaction?: "Excellent" | "Good" | "Satisfactory" | "Unsatisfactory" | null;
  interactionExp?: string | null;
  organization?:
    | "Excellent"
    | "Good"
    | "Satisfactory"
    | "Unsatisfactory"
    | null;
  organizationExp?: string | null;
  overall?: "Excellent" | "Good" | "Satisfactory" | "Unsatisfactory" | null;
  overallExp?: string | null;
  qcId?: number | null;
  qualsSpeakingAspect?: QualsSpeakingAspectCreateNestedManyWithoutQualsSpeakingsInput;
  speaking_skill?:
    | "Excellent"
    | "Good"
    | "Satisfactory"
    | "Unsatisfactory"
    | null;
  speakingSkillExp?: string | null;
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
