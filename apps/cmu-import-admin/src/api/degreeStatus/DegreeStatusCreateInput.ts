import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type DegreeStatusCreateInput = {
  date?: Date | null;
  status?: string | null;
  studentData: StudentDatumWhereUniqueInput;
};
