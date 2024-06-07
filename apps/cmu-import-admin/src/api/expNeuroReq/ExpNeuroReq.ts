import { StudentDatum } from "../studentDatum/StudentDatum";

export type ExpNeuroReq = {
  complete: boolean | null;
  date: Date;
  departmentCode: string | null;
  id: number;
  pending: boolean | null;
  studentData?: StudentDatum;
};
