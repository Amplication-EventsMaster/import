import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type StudentDataRiWhereInput = {
  id?: StringFilter;
  overrideCore?: IntNullableFilter;
  overrideSpec?: IntNullableFilter;
  studentData?: StudentDatumWhereUniqueInput;
};
