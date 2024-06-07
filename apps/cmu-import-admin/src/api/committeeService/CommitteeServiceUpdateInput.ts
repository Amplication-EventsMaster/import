import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type CommitteeServiceUpdateInput = {
  committeeName?: string | null;
  endDate?: Date | null;
  startDate?: Date | null;
  studentData?: StudentDatumWhereUniqueInput;
};
