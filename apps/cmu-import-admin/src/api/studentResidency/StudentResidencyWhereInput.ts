import { IntFilter } from "../../util/IntFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type StudentResidencyWhereInput = {
  id?: IntFilter;
  residencyDate?: DateTimeFilter;
  studentData?: StudentDatumWhereUniqueInput;
};
