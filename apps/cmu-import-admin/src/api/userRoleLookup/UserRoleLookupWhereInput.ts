import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";

export type UserRoleLookupWhereInput = {
  id?: StringFilter;
  role?: StringFilter;
  roleId?: IntFilter;
};
