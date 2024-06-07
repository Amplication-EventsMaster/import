import { StudentDatum } from "../studentDatum/StudentDatum";

export type Award = {
  awardDate: Date | null;
  awardName: string | null;
  id: number;
  pending: boolean | null;
  studentData?: StudentDatum;
};
