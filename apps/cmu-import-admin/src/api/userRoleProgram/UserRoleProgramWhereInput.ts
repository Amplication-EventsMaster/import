import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserRoleProgramWhereInput = {
  id?: IntFilter;
  program?: StringFilter;
  urId?: IntFilter;
};
