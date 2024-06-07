import { IntFilter } from "../../util/IntFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type NewCourseDepartmentWhereInput = {
  courseId?: IntFilter;
  id?: IntFilter;
  requirementType?: StringNullableFilter;
};
