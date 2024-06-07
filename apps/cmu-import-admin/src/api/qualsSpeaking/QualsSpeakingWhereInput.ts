import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { QualsSpeakingAspectListRelationFilter } from "../qualsSpeakingAspect/QualsSpeakingAspectListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type QualsSpeakingWhereInput = {
  av_quality?: "Excellent" | "Good" | "Satisfactory" | "Unsatisfactory";
  avQualityExp?: StringNullableFilter;
  id?: IntFilter;
  interaction?: "Excellent" | "Good" | "Satisfactory" | "Unsatisfactory";
  interactionExp?: StringNullableFilter;
  organization?: "Excellent" | "Good" | "Satisfactory" | "Unsatisfactory";
  organizationExp?: StringNullableFilter;
  overall?: "Excellent" | "Good" | "Satisfactory" | "Unsatisfactory";
  overallExp?: StringNullableFilter;
  qcId?: IntNullableFilter;
  qualsSpeakingAspect?: QualsSpeakingAspectListRelationFilter;
  speaking_skill?: "Excellent" | "Good" | "Satisfactory" | "Unsatisfactory";
  speakingSkillExp?: StringNullableFilter;
  status?: "Satisfied" | "Progress";
  studentId?: IntNullableFilter;
  summary?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
  understanding?: "Excellent" | "Good" | "Satisfactory" | "Unsatisfactory";
  understandingExp?: StringNullableFilter;
  urId?: IntNullableFilter;
};
