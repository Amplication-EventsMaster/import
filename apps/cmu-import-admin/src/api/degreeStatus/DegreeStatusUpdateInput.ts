import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type DegreeStatusUpdateInput = {
  date?: Date | null;
  status?: string | null;
  studentData?: StudentDatumWhereUniqueInput;
};
