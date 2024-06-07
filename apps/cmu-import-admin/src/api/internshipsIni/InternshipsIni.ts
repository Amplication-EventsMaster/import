import { StudentDatum } from "../studentDatum/StudentDatum";

export type InternshipsIni = {
  city: string | null;
  company: string | null;
  endDate: Date | null;
  id: number;
  pending: boolean | null;
  position: string | null;
  startDate: Date | null;
  state: string | null;
  studentData?: StudentDatum;
};
