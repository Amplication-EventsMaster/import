import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { QualsCommitteeWhereUniqueInput } from "../qualsCommittee/QualsCommitteeWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type QualsResearchWhereInput = {
  approach?: "Excellent" | "Good" | "Satisfactory" | "Unsatisfactory";
  approachExp?: StringNullableFilter;
  id?: IntFilter;
  insight?: "Excellent" | "Good" | "Satisfactory" | "Unsatisfactory";
  insightExp?: StringNullableFilter;
  interpretation?: "Excellent" | "Good" | "Satisfactory" | "Unsatisfactory";
  interpretationExp?: StringNullableFilter;
  overall?: "Excellent" | "Good" | "Satisfactory" | "Unsatisfactory";
  overallExp?: StringNullableFilter;
  progress?: StringNullableFilter;
  qualsCommittee?: QualsCommitteeWhereUniqueInput;
  status?: "Satisfied" | "Progress";
  studentId?: IntNullableFilter;
  summary?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
  understanding?: "Excellent" | "Good" | "Satisfactory" | "Unsatisfactory";
  understandingExp?: StringNullableFilter;
  urId?: IntNullableFilter;
};
