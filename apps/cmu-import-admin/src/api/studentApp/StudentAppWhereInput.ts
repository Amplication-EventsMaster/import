import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type StudentAppWhereInput = {
  appId?: IntFilter;
  id?: StringFilter;
  studentData?: StudentDatumWhereUniqueInput;
};
