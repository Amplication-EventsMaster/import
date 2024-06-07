import { IntFilter } from "../../util/IntFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type RawDataLetterWhereInput = {
  id?: IntFilter;
  introText?: StringNullableFilter;
  month?: StringNullableFilter;
  name?: StringNullableFilter;
  performanceCode?: StringNullableFilter;
  performanceCodeText?: StringNullableFilter;
  text?: StringNullableFilter;
  year?: IntNullableFilter;
};
