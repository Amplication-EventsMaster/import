import { StudentDatum } from "../studentDatum/StudentDatum";

export type CommitteeService = {
  committeeName: string | null;
  endDate: Date | null;
  id: number;
  startDate: Date | null;
  studentData?: StudentDatum;
};
