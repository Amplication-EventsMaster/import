import { StudentDatum } from "../studentDatum/StudentDatum";

export type StudentSkill = {
  collab: string | null;
  comment: string | null;
  date: Date | null;
  grade: string | null;
  id: number;
  pending: boolean | null;
  skill: string | null;
  studentData?: StudentDatum;
  title: string | null;
  units: number;
};
