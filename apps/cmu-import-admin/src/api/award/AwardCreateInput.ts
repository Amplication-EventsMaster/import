import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type AwardCreateInput = {
  awardDate?: Date | null;
  awardName?: string | null;
  pending?: boolean | null;
  studentData: StudentDatumWhereUniqueInput;
};
