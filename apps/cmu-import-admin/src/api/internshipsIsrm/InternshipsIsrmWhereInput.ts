import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type InternshipsIsrmWhereInput = {
  city?: StringNullableFilter;
  company?: StringNullableFilter;
  companyUrl?: StringNullableFilter;
  endDate?: DateTimeNullableFilter;
  id?: IntFilter;
  pending?: BooleanNullableFilter;
  position?: StringNullableFilter;
  startDate?: DateTimeNullableFilter;
  state?: StringNullableFilter;
  studentData?: StudentDatumWhereUniqueInput;
  supervisorEmail?: StringNullableFilter;
  supervisorName?: StringNullableFilter;
  supervisorPhone?: StringNullableFilter;
};
