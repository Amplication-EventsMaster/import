import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type AwardWhereInput = {
  awardDate?: DateTimeNullableFilter;
  awardName?: StringNullableFilter;
  id?: IntFilter;
  pending?: BooleanNullableFilter;
  studentData?: StudentDatumWhereUniqueInput;
};
