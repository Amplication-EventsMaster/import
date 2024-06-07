import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type InternshipsIniUpdateInput = {
  city?: string | null;
  company?: string | null;
  endDate?: Date | null;
  pending?: boolean | null;
  position?: string | null;
  startDate?: Date | null;
  state?: string | null;
  studentData?: StudentDatumWhereUniqueInput;
};
