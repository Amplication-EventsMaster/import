import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type ThesisCommitteeWhereInput = {
  committeeRole?: StringNullableFilter;
  facultyId?: IntNullableFilter;
  id?: IntFilter;
  pending?: BooleanNullableFilter;
  studentData?: StudentDatumWhereUniqueInput;
  thesisType?: StringFilter;
};
