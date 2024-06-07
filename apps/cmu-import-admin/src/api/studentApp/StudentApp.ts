import { StudentDatum } from "../studentDatum/StudentDatum";

export type StudentApp = {
  appId: number;
  id: string;
  studentData?: StudentDatum;
};
