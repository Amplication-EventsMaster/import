import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type StudentAdvisorCreateInput = {
  consultant: boolean;
  current: boolean;
  endDate: Date;
  facultyId: number;
  startDate?: Date | null;
  studentData: StudentDatumWhereUniqueInput;
};
