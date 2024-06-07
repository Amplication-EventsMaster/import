import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";

export type ReviewPeriodReferenceWhereInput = {
  id?: IntFilter;
  refAbbrev?: StringFilter;
  refDay?: IntFilter;
  refMonth?: IntFilter;
  refName?: StringFilter;
};
