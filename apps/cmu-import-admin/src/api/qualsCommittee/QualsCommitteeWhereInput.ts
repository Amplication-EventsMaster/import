import { IntFilter } from "../../util/IntFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { QualsResearchListRelationFilter } from "../qualsResearch/QualsResearchListRelationFilter";
import { QualsResearchForOtherStudentListRelationFilter } from "../qualsResearchForOtherStudent/QualsResearchForOtherStudentListRelationFilter";
import { QualsWritingListRelationFilter } from "../qualsWriting/QualsWritingListRelationFilter";
import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type QualsCommitteeWhereInput = {
  id?: IntFilter;
  memberType?: StringNullableFilter;
  overrideResearch?: IntNullableFilter;
  overrideSpeaking?: IntNullableFilter;
  overrideWriting?: IntNullableFilter;
  qualsResearch?: QualsResearchListRelationFilter;
  qualsResearchForOtherStudent?: QualsResearchForOtherStudentListRelationFilter;
  qualsWriting?: QualsWritingListRelationFilter;
  studentData?: StudentDatumWhereUniqueInput;
  urId?: IntFilter;
};
