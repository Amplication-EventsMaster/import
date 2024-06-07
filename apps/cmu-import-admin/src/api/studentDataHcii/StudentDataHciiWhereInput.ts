import { StringFilter } from "../../util/StringFilter";
import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type StudentDataHciiWhereInput = {
  id?: StringFilter;
  studentData?: StudentDatumWhereUniqueInput;
  uploadDate?: DateTimeNullableFilter;
};
