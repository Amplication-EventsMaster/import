import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type ItaWhereInput = {
  date?: DateTimeFilter;
  id?: IntFilter;
  score?: StringFilter;
  studentData?: StudentDatumWhereUniqueInput;
};
