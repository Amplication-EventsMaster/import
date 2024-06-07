import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type PresentationWhereInput = {
  date?: DateTimeNullableFilter;
  id?: IntFilter;
  studentData?: StudentDatumWhereUniqueInput;
};
