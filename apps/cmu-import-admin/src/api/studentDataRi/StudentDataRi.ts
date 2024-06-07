import { StudentDatum } from "../studentDatum/StudentDatum";

export type StudentDataRi = {
  id: string;
  overrideCore: number | null;
  overrideSpec: number | null;
  studentData?: StudentDatum;
};
