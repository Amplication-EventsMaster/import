import { IntFilter } from "../../util/IntFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CourseDepartmentWhereInput = {
  courseId?: IntFilter;
  id?: IntFilter;
  requirementType?: StringNullableFilter;
};
