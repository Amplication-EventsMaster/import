import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type InternshipsCdUpdateInput = {
  city?: string | null;
  company?: string | null;
  companyUrl?: string | null;
  endDate?: Date | null;
  pending?: boolean | null;
  startDate?: Date | null;
  state?: string | null;
  studentData?: StudentDatumWhereUniqueInput;
  supervisorEmail?: string | null;
  supervisorName?: string | null;
  supervisorPhone?: string | null;
};
