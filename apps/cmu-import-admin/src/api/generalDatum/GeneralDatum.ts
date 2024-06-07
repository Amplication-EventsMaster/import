import { StudentDatum } from "../studentDatum/StudentDatum";

export type GeneralDatum = {
  date: Date | null;
  date2: Date | null;
  id: number;
  studentData?: StudentDatum;
  text: string | null;
  val: string | null;
  val2: string | null;
};
