import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type StatementCreateInput = {
  date: Date;
  documentId?: number | null;
  status: "Draft" | "Completed";
  studentData: StudentDatumWhereUniqueInput;
  text: string;
  textAll?: string | null;
};
