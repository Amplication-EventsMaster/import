import { StudentDatum } from "../studentDatum/StudentDatum";

export type Interview = {
  date: Date | null;
  employer: string | null;
  id: number;
  studentData?: StudentDatum;
  typeField: string | null;
};
