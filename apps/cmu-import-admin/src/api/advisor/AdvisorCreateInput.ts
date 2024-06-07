import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type AdvisorCreateInput = {
  date: Date;
  facultyId?: number | null;
  studentData: StudentDatumWhereUniqueInput;
};
