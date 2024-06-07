import { StudentDatum } from "../studentDatum/StudentDatum";

export type ProgramStatus = {
  date: Date | null;
  id: number;
  status: string | null;
  studentData?: StudentDatum;
};
