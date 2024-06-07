import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type DepartmentMeetingWhereInput = {
  department?: StringFilter;
  id?: IntFilter;
  name?: StringNullableFilter;
};
