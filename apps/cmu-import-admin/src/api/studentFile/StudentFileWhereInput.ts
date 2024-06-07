import { IntFilter } from "../../util/IntFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type StudentFileWhereInput = {
  fileChanges?: IntFilter;
  fileDate?: DateTimeNullableFilter;
  fileDesc?: StringNullableFilter;
  fileName?: StringNullableFilter;
  fileType?: StringNullableFilter;
  id?: IntFilter;
  studentData?: StudentDatumWhereUniqueInput;
};
