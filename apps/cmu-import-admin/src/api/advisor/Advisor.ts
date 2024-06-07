import { StudentDatum } from "../studentDatum/StudentDatum";

export type Advisor = {
  date: Date;
  facultyId: number | null;
  id: number;
  studentData?: StudentDatum;
};
