import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type InternshipUpdateInput = {
  company?: string | null;
  endDate?: Date | null;
  pending?: boolean | null;
  startDate?: Date | null;
  studentData?: StudentDatumWhereUniqueInput;
};
