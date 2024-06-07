import { StudentDatum } from "../studentDatum/StudentDatum";

export type Presentation = {
  date: Date | null;
  id: number;
  studentData?: StudentDatum;
};
