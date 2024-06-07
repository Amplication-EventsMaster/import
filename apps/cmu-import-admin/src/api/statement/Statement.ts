import { StudentDatum } from "../studentDatum/StudentDatum";

export type Statement = {
  createdDate: Date;
  date: Date;
  documentId: number | null;
  id: number;
  modifiedDate: Date;
  status?: "Draft" | "Completed";
  studentData?: StudentDatum;
  text: string;
  textAll: string | null;
};
