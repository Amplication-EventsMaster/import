import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ThesisTopicWhereInput = {
  date?: DateTimeNullableFilter;
  defenseComplete?: BooleanNullableFilter;
  defenseDate?: DateTimeFilter;
  defensePending?: BooleanNullableFilter;
  defenseTitle?: StringFilter;
  id?: IntFilter;
  pending?: BooleanNullableFilter;
  proposalComplete?: BooleanNullableFilter;
  studentData?: StudentDatumWhereUniqueInput;
  title?: StringNullableFilter;
};
