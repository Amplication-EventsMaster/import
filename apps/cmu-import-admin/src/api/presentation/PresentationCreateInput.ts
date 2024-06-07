import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type PresentationCreateInput = {
  date?: Date | null;
  studentData: StudentDatumWhereUniqueInput;
};
