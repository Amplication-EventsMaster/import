import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type StudentAdvisorUpdateInput = {
  consultant?: boolean;
  current?: boolean;
  endDate?: Date;
  facultyId?: number;
  startDate?: Date | null;
  studentData?: StudentDatumWhereUniqueInput;
};
