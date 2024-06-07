import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type FellowshipWhereInput = {
  amount?: FloatNullableFilter;
  amountSemester?: FloatNullableFilter;
  beginDate?: DateTimeNullableFilter;
  duration?: StringNullableFilter;
  endDate?: StringNullableFilter;
  id?: IntFilter;
  pending?: BooleanNullableFilter;
  studentData?: StudentDatumWhereUniqueInput;
  title?: StringNullableFilter;
};
