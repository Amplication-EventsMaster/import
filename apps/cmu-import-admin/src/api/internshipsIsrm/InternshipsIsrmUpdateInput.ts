import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type InternshipsIsrmUpdateInput = {
  city?: string | null;
  company?: string | null;
  companyUrl?: string | null;
  endDate?: Date | null;
  pending?: boolean | null;
  position?: string | null;
  startDate?: Date | null;
  state?: string | null;
  studentData?: StudentDatumWhereUniqueInput;
  supervisorEmail?: string | null;
  supervisorName?: string | null;
  supervisorPhone?: string | null;
};
