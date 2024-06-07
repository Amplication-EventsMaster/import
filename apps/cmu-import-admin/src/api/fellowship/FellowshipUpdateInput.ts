import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type FellowshipUpdateInput = {
  amount?: number | null;
  amountSemester?: number | null;
  beginDate?: Date | null;
  duration?: string | null;
  endDate?: string | null;
  pending?: boolean | null;
  studentData?: StudentDatumWhereUniqueInput;
  title?: string | null;
};
