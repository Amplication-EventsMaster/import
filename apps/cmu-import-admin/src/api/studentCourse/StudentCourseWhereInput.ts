import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type StudentCourseWhereInput = {
  applicable?: StringFilter;
  courseNum?: StringNullableFilter;
  courseSection?: StringNullableFilter;
  customLabel?: StringNullableFilter;
  date?: DateTimeNullableFilter;
  departmentCode?: StringNullableFilter;
  grade?: StringNullableFilter;
  id?: IntFilter;
  midtermGrade?: StringNullableFilter;
  note?: StringNullableFilter;
  qpoints?: FloatNullableFilter;
  requirementType?: StringFilter;
  shortTitle?: StringNullableFilter;
  studentId?: IntNullableFilter;
  title?: StringNullableFilter;
  transfercredit?: IntNullableFilter;
  units?: StringNullableFilter;
};
