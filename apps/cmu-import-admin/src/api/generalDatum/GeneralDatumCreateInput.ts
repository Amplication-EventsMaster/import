import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type GeneralDatumCreateInput = {
  date?: Date | null;
  date2?: Date | null;
  studentData: StudentDatumWhereUniqueInput;
  text?: string | null;
  val?: string | null;
  val2?: string | null;
};
