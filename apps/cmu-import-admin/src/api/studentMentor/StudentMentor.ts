import { StudentDatum } from "../studentDatum/StudentDatum";

export type StudentMentor = {
  consultant: number;
  current: number;
  endDate: Date | null;
  facultyId: number;
  id: number;
  startDate: Date | null;
  studentData?: StudentDatum;
};
