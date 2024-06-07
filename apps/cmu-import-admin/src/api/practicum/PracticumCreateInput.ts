import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type PracticumCreateInput = {
  date?: Date | null;
  pracType?: string | null;
  studentData: StudentDatumWhereUniqueInput;
  title?: string | null;
};
