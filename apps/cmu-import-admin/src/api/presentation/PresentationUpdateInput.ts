import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type PresentationUpdateInput = {
  date?: Date | null;
  studentData?: StudentDatumWhereUniqueInput;
};
