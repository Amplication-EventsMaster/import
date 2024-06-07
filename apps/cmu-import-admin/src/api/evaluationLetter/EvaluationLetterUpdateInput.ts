import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type EvaluationLetterUpdateInput = {
  date?: Date | null;
  documentId?: number | null;
  performanceCode?: string | null;
  status?: "Draft" | "Completed" | "Edited" | "Finalized" | "Approved";
  studentData?: StudentDatumWhereUniqueInput;
  student_read?: "Yes" | "No";
  text?: string;
};
