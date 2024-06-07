import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type CommitteeServiceCreateInput = {
  committeeName?: string | null;
  endDate?: Date | null;
  startDate?: Date | null;
  studentData: StudentDatumWhereUniqueInput;
};
