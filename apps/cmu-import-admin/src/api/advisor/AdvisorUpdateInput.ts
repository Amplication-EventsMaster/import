import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type AdvisorUpdateInput = {
  date?: Date;
  facultyId?: number | null;
  studentData?: StudentDatumWhereUniqueInput;
};
