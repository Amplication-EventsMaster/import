import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";

export type FellowshipTitleWhereInput = {
  department?: StringFilter;
  fellowshipTitle?: StringFilter;
  id?: IntFilter;
};
