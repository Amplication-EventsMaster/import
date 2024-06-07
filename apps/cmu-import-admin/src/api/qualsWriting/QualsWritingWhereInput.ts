import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { QualsCommitteeWhereUniqueInput } from "../qualsCommittee/QualsCommitteeWhereUniqueInput";
import { QualsWritingAspectListRelationFilter } from "../qualsWritingAspect/QualsWritingAspectListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type QualsWritingWhereInput = {
  engaging_reader?: "Excellent" | "Good" | "Satisfactory" | "Unsatisfactory";
  engagingReaderExp?: StringNullableFilter;
  id?: IntFilter;
  organization?: "Excellent" | "Good" | "Satisfactory" | "Unsatisfactory";
  organizationExp?: StringNullableFilter;
  overall?: "Excellent" | "Good" | "Satisfactory" | "Unsatisfactory";
  overallExp?: StringNullableFilter;
  qualsCommittee?: QualsCommitteeWhereUniqueInput;
  qualsWritingAspect?: QualsWritingAspectListRelationFilter;
  status?: "Satisfied" | "Progress";
  studentId?: IntNullableFilter;
  summaryAudience?: StringNullableFilter;
  summaryTopic?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
  urId?: IntNullableFilter;
  writing_style?: "Excellent" | "Good" | "Satisfactory" | "Unsatisfactory";
  writingStyleExp?: StringNullableFilter;
};
