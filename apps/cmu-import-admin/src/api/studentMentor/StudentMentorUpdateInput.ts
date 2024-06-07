import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type StudentMentorUpdateInput = {
  consultant?: number;
  current?: number;
  endDate?: Date | null;
  facultyId?: number;
  startDate?: Date | null;
  studentData?: StudentDatumWhereUniqueInput;
};
