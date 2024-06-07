import { StudentDatum } from "../studentDatum/StudentDatum";

export type TeachingReq = {
  complete: boolean | null;
  courseNum: string | null;
  courseSection: string | null;
  date: Date;
  departmentCode: string | null;
  id: number;
  pending: boolean | null;
  status: string | null;
  studentData?: StudentDatum;
  title: string | null;
  units: string | null;
};
