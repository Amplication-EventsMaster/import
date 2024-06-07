import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type ProjectTopicCreateInput = {
  area?: string | null;
  clientName?: string | null;
  date?: Date | null;
  notes?: string | null;
  studentData: StudentDatumWhereUniqueInput;
  teamName?: string | null;
  title?: string | null;
};
