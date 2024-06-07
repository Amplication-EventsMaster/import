import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type StudentPubUpdateInput = {
  authors?: string | null;
  citation?: string | null;
  forum?: string | null;
  pubDate?: Date | null;
  sfId?: number | null;
  status?: string | null;
  studentData?: StudentDatumWhereUniqueInput;
  title?: string | null;
  url?: string | null;
};
