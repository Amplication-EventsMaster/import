import { StudentDatum } from "../studentDatum/StudentDatum";

export type StudentDataHcii = {
  id: string;
  studentData?: StudentDatum;
  uploadDate: Date | null;
};
