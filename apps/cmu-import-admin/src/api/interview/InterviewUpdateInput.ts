import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type InterviewUpdateInput = {
  date?: Date | null;
  employer?: string | null;
  studentData?: StudentDatumWhereUniqueInput;
  typeField?: string | null;
};
