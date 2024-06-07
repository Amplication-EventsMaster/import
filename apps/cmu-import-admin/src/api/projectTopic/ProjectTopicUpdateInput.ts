import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type ProjectTopicUpdateInput = {
  area?: string | null;
  clientName?: string | null;
  date?: Date | null;
  notes?: string | null;
  studentData?: StudentDatumWhereUniqueInput;
  teamName?: string | null;
  title?: string | null;
};
