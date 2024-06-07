import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ApplywebApplicationWhereInput = {
  dateSubmitted?: DateTimeFilter;
  id?: IntFilter;
  pier?: StringNullableFilter;
  resumeFilepath?: StringNullableFilter;
  statementOfPurposeFilepath?: StringNullableFilter;
  studentCitizenshipCountry?: StringNullableFilter;
  studentDateOfBirth?: DateTimeNullableFilter;
  studentEthnicity?: StringNullableFilter;
  studentGender?: StringNullableFilter;
  studentNameFirst?: StringNullableFilter;
  studentNameLast?: StringNullableFilter;
  studentTitle?: StringNullableFilter;
  womenFellowship?: StringNullableFilter;
};
