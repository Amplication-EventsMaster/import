import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type ProgramStatusCreateInput = {
  date?: Date | null;
  status?: string | null;
  studentData: StudentDatumWhereUniqueInput;
};
