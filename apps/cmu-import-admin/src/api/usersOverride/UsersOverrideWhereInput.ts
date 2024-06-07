import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type UsersOverrideWhereInput = {
  department?: StringNullableFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: IntFilter;
  lastName?: StringNullableFilter;
  middleName?: StringNullableFilter;
  nickname?: StringNullableFilter;
  urId?: IntNullableFilter;
  userId?: IntNullableFilter;
  username?: StringNullableFilter;
};
