import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { UserRoleListRelationFilter } from "../userRole/UserRoleListRelationFilter";

export type UserWhereInput = {
  andrewId?: StringNullableFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: IntFilter;
  lastName?: StringNullableFilter;
  middleName?: StringNullableFilter;
  nickname?: StringNullableFilter;
  owner?: StringNullableFilter;
  ownerDisplay?: StringNullableFilter;
  username?: StringNullableFilter;
  userRole?: UserRoleListRelationFilter;
};
