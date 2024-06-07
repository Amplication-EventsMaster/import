import { StudentDatum } from "../studentDatum/StudentDatum";

export type ThesisTopic = {
  date: Date | null;
  defenseComplete: boolean | null;
  defenseDate: Date;
  defensePending: boolean | null;
  defenseTitle: string;
  id: number;
  pending: boolean | null;
  proposalComplete: boolean | null;
  studentData?: StudentDatum;
  title: string | null;
};
