import { StudentDatum } from "../studentDatum/StudentDatum";

export type Internship = {
  company: string | null;
  endDate: Date | null;
  id: number;
  pending: boolean | null;
  startDate: Date | null;
  studentData?: StudentDatum;
};
