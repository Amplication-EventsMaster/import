import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type ProgramStatusUpdateInput = {
  date?: Date | null;
  status?: string | null;
  studentData?: StudentDatumWhereUniqueInput;
};
