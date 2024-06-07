import { StudentDatum } from "../studentDatum/StudentDatum";

export type Fellowship = {
  amount: number | null;
  amountSemester: number | null;
  beginDate: Date | null;
  duration: string | null;
  endDate: string | null;
  id: number;
  pending: boolean | null;
  studentData?: StudentDatum;
  title: string | null;
};
