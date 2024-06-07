import { StudentDatum } from "../studentDatum/StudentDatum";

export type DegreeStatus = {
  date: Date | null;
  id: number;
  status: string | null;
  studentData?: StudentDatum;
};
