import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type StudentOverrideCreateInput = {
  noteId?: number | null;
  requirement: string;
  studentData: StudentDatumWhereUniqueInput;
};
