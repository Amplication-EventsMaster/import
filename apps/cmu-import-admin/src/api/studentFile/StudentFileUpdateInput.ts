import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type StudentFileUpdateInput = {
  fileChanges?: number;
  fileDate?: Date | null;
  fileDesc?: string | null;
  fileName?: string | null;
  fileType?: string | null;
  studentData?: StudentDatumWhereUniqueInput;
};
