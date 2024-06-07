import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type FundingUpdateInput = {
  fundingDate?: string | null;
  studentData?: StudentDatumWhereUniqueInput;
  title?: string | null;
};
