import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type AreaWhereInput = {
  arank?: IntNullableFilter;
  area?: StringNullableFilter;
  id?: IntFilter;
  studentData?: StudentDatumWhereUniqueInput;
};
