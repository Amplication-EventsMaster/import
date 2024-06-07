import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type FundingWhereInput = {
  fundingDate?: StringNullableFilter;
  id?: IntFilter;
  studentData?: StudentDatumWhereUniqueInput;
  title?: StringNullableFilter;
};
