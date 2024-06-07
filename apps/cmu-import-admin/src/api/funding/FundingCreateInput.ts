import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type FundingCreateInput = {
  fundingDate?: string | null;
  studentData: StudentDatumWhereUniqueInput;
  title?: string | null;
};
