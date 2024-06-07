import { StudentDatum } from "../studentDatum/StudentDatum";

export type ProjectTopic = {
  area: string | null;
  clientName: string | null;
  date: Date | null;
  id: number;
  notes: string | null;
  studentData?: StudentDatum;
  teamName: string | null;
  title: string | null;
};
