import { StudentDatum } from "../studentDatum/StudentDatum";

export type StudentAdvisor = {
  consultant: boolean;
  current: boolean;
  endDate: Date;
  facultyId: number;
  id: number;
  startDate: Date | null;
  studentData?: StudentDatum;
};
