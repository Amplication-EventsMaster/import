import { StudentDatum } from "../studentDatum/StudentDatum";

export type StudentPub = {
  authors: string | null;
  citation: string | null;
  forum: string | null;
  id: number;
  pubDate: Date | null;
  sfId: number | null;
  status: string | null;
  studentData?: StudentDatum;
  title: string | null;
  url: string | null;
};
