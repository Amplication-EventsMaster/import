import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type StudentSkillWhereInput = {
  collab?: StringNullableFilter;
  comment?: StringNullableFilter;
  date?: DateTimeNullableFilter;
  grade?: StringNullableFilter;
  id?: IntFilter;
  pending?: BooleanNullableFilter;
  skill?: StringNullableFilter;
  studentData?: StudentDatumWhereUniqueInput;
  title?: StringNullableFilter;
  units?: IntFilter;
};
