import { StudentDatum } from "../studentDatum/StudentDatum";

export type StudentDataMl = {
  id: string;
  origDepartment: string | null;
  overrideCore: boolean | null;
  overrideElectives: boolean | null;
  studentData?: StudentDatum;
};
