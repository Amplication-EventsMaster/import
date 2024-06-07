import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type StudentDataHciiCreateInput = {
  studentData: StudentDatumWhereUniqueInput;
  uploadDate?: Date | null;
};
