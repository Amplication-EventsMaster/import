import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type AwardUpdateInput = {
  awardDate?: Date | null;
  awardName?: string | null;
  pending?: boolean | null;
  studentData?: StudentDatumWhereUniqueInput;
};
