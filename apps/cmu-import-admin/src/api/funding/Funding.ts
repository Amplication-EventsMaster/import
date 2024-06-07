import { StudentDatum } from "../studentDatum/StudentDatum";

export type Funding = {
  fundingDate: string | null;
  id: number;
  studentData?: StudentDatum;
  title: string | null;
};
