import { StudentDatum } from "../studentDatum/StudentDatum";

export type InternshipsCd = {
  city: string | null;
  company: string | null;
  companyUrl: string | null;
  endDate: Date | null;
  id: number;
  pending: boolean | null;
  startDate: Date | null;
  state: string | null;
  studentData?: StudentDatum;
  supervisorEmail: string | null;
  supervisorName: string | null;
  supervisorPhone: string | null;
};
