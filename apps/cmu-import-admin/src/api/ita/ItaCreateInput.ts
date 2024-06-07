import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type ItaCreateInput = {
  date: Date;
  score: string;
  studentData: StudentDatumWhereUniqueInput;
};
