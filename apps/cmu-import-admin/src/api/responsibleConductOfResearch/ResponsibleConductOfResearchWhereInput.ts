import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";

export type ResponsibleConductOfResearchWhereInput = {
  completionDate?: DateTimeFilter;
  description?: StringNullableFilter;
  id?: IntFilter;
  studentId?: IntFilter;
};
