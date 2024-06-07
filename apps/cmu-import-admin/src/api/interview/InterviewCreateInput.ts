import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type InterviewCreateInput = {
  date?: Date | null;
  employer?: string | null;
  studentData: StudentDatumWhereUniqueInput;
  typeField?: string | null;
};
