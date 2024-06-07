import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type LegacyRequirementWhereInput = {
  course?: StringNullableFilter;
  id?: IntFilter;
  requirementTitle?: StringNullableFilter;
  requirementType?: StringNullableFilter;
  studentData?: StudentDatumWhereUniqueInput;
};
