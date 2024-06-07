import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type StatementWhereInput = {
  createdDate?: DateTimeFilter;
  date?: DateTimeFilter;
  documentId?: IntNullableFilter;
  id?: IntFilter;
  modifiedDate?: DateTimeFilter;
  status?: "Draft" | "Completed";
  studentData?: StudentDatumWhereUniqueInput;
  text?: StringFilter;
  textAll?: StringNullableFilter;
};
