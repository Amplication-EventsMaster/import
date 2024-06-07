import { StudentDatum } from "../studentDatum/StudentDatum";

export type StudentFile = {
  fileChanges: number;
  fileDate: Date | null;
  fileDesc: string | null;
  fileName: string | null;
  fileType: string | null;
  id: number;
  studentData?: StudentDatum;
};
