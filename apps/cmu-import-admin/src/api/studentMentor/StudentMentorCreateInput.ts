import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type StudentMentorCreateInput = {
  consultant: number;
  current: number;
  endDate?: Date | null;
  facultyId: number;
  startDate?: Date | null;
  studentData: StudentDatumWhereUniqueInput;
};
