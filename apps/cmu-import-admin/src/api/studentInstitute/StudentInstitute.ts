import { StudentDatum } from "../studentDatum/StudentDatum";

export type StudentInstitute = {
  degree: string | null;
  id: number;
  institutesAbbr: string | null;
  institutesId: string | null;
  institutesName: string | null;
  institutesText: string | null;
  irank: number | null;
  major: string | null;
  studentData?: StudentDatum;
};
