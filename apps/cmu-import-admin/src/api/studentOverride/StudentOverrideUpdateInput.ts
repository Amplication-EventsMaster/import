import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type StudentOverrideUpdateInput = {
  noteId?: number | null;
  requirement?: string;
  studentData?: StudentDatumWhereUniqueInput;
};
