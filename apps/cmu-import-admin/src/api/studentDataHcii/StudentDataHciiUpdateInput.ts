import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type StudentDataHciiUpdateInput = {
  studentData?: StudentDatumWhereUniqueInput;
  uploadDate?: Date | null;
};
