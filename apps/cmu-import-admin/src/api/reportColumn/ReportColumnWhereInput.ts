import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { ReportWhereUniqueInput } from "../report/ReportWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ReportColumnWhereInput = {
  columnFormat?: StringNullableFilter;
  columnName?: StringNullableFilter;
  columnSortable?: IntFilter;
  columnTitle?: StringNullableFilter;
  id?: IntFilter;
  reports?: ReportWhereUniqueInput;
  sortOrder?: IntNullableFilter;
};
