import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";

export type CourseWhereInput = {
  courseNum?: StringNullableFilter;
  courseSection?: StringNullableFilter;
  department?: StringNullableFilter;
  departmentCode?: StringNullableFilter;
  id?: IntFilter;
  shortTitle?: StringNullableFilter;
  title?: StringNullableFilter;
  units?: IntFilter;
};
