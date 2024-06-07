import { StudentDatum } from "../studentDatum/StudentDatum";

export type Area = {
  arank: number | null;
  area: string | null;
  id: number;
  studentData?: StudentDatum;
};
