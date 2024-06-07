import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type StudentFileCreateInput = {
  fileChanges: number;
  fileDate?: Date | null;
  fileDesc?: string | null;
  fileName?: string | null;
  fileType?: string | null;
  studentData: StudentDatumWhereUniqueInput;
};
