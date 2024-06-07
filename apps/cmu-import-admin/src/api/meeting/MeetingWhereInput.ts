import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type MeetingWhereInput = {
  adminVisible?: BooleanNullableFilter;
  department?: StringFilter;
  end?: DateTimeFilter;
  facultyVisible?: BooleanNullableFilter;
  id?: IntFilter;
  longDescription?: StringNullableFilter;
  shortDescription?: StringNullableFilter;
  start?: DateTimeFilter;
};
