import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type EvaluationLetterWhereInput = {
  date?: DateTimeNullableFilter;
  documentId?: IntNullableFilter;
  id?: IntFilter;
  performanceCode?: StringNullableFilter;
  status?: "Draft" | "Completed" | "Edited" | "Finalized" | "Approved";
  studentData?: StudentDatumWhereUniqueInput;
  student_read?: "Yes" | "No";
  text?: StringFilter;
};
