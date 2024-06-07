import { StudentDatum } from "../studentDatum/StudentDatum";

export type StudentOverride = {
  id: number;
  noteId: number | null;
  requirement: string;
  studentData?: StudentDatum;
};
