import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";

export type UserHostWhereInput = {
  host?: StringFilter;
  id?: IntFilter;
  username?: StringFilter;
};
