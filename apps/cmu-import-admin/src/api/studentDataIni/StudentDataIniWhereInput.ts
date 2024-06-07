import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type StudentDataIniWhereInput = {
  curriculumOption?: StringNullableFilter;
  curriculumTrack?: StringNullableFilter;
  id?: StringFilter;
  programDuration?: IntNullableFilter;
  studentData?: StudentDatumWhereUniqueInput;
};
