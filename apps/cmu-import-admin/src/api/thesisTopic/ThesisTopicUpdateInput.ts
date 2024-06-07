import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type ThesisTopicUpdateInput = {
  date?: Date | null;
  defenseComplete?: boolean | null;
  defenseDate?: Date;
  defensePending?: boolean | null;
  defenseTitle?: string;
  pending?: boolean | null;
  proposalComplete?: boolean | null;
  studentData?: StudentDatumWhereUniqueInput;
  title?: string | null;
};
