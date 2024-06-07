import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type ThesisCommitteeCreateInput = {
  committeeRole?: string | null;
  facultyId?: number | null;
  pending?: boolean | null;
  studentData: StudentDatumWhereUniqueInput;
  thesisType: string;
};
