import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type MeetingParameterWhereInput = {
  id?: IntFilter;
  meetingId?: IntFilter;
  param?: StringFilter;
  sortOrder?: IntNullableFilter;
  typeField?: StringFilter;
  value?: StringNullableFilter;
};
