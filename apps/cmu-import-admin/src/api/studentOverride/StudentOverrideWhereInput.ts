import { IntFilter } from "../../util/IntFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type StudentOverrideWhereInput = {
  id?: IntFilter;
  noteId?: IntNullableFilter;
  requirement?: StringFilter;
  studentData?: StudentDatumWhereUniqueInput;
};
