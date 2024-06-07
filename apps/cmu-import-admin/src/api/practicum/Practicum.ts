import { StudentDatum } from "../studentDatum/StudentDatum";

export type Practicum = {
  date: Date | null;
  id: number;
  pracType: string | null;
  studentData?: StudentDatum;
  title: string | null;
};
