import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type InternshipCreateInput = {
  company?: string | null;
  endDate?: Date | null;
  pending?: boolean | null;
  startDate?: Date | null;
  studentData: StudentDatumWhereUniqueInput;
};
