import { StudentDatum } from "../studentDatum/StudentDatum";

export type EvaluationLetter = {
  date: Date | null;
  documentId: number | null;
  id: number;
  performanceCode: string | null;
  status?: "Draft" | "Completed" | "Edited" | "Finalized" | "Approved";
  studentData?: StudentDatum;
  student_read?: "Yes" | "No";
  text: string;
};
