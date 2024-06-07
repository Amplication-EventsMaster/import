import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";

export type InstituteWhereInput = {
  id?: IntFilter;
  name?: StringFilter;
};
