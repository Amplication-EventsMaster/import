import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type ItaUpdateInput = {
  date?: Date;
  score?: string;
  studentData?: StudentDatumWhereUniqueInput;
};
