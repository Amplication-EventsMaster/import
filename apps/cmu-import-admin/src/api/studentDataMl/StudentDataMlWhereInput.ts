import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type StudentDataMlWhereInput = {
  id?: StringFilter;
  origDepartment?: StringNullableFilter;
  overrideCore?: BooleanNullableFilter;
  overrideElectives?: BooleanNullableFilter;
  studentData?: StudentDatumWhereUniqueInput;
};
