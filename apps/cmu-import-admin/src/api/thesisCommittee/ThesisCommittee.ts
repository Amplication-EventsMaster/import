import { StudentDatum } from "../studentDatum/StudentDatum";

export type ThesisCommittee = {
  committeeRole: string | null;
  facultyId: number | null;
  id: number;
  pending: boolean | null;
  studentData?: StudentDatum;
  thesisType: string;
};
