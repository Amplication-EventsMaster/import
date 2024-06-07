import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type PracticumUpdateInput = {
  date?: Date | null;
  pracType?: string | null;
  studentData?: StudentDatumWhereUniqueInput;
  title?: string | null;
};
