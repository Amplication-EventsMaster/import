import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type InternshipsCdWhereInput = {
  city?: StringNullableFilter;
  company?: StringNullableFilter;
  companyUrl?: StringNullableFilter;
  endDate?: DateTimeNullableFilter;
  id?: IntFilter;
  pending?: BooleanNullableFilter;
  startDate?: DateTimeNullableFilter;
  state?: StringNullableFilter;
  studentData?: StudentDatumWhereUniqueInput;
  supervisorEmail?: StringNullableFilter;
  supervisorName?: StringNullableFilter;
  supervisorPhone?: StringNullableFilter;
};
