import { StudentDatum } from "../studentDatum/StudentDatum";

export type Ita = {
  date: Date;
  id: number;
  score: string;
  studentData?: StudentDatum;
};
