import { StudentDatum } from "../studentDatum/StudentDatum";

export type StudentResidency = {
  id: number;
  residencyDate: Date;
  studentData?: StudentDatum;
};
