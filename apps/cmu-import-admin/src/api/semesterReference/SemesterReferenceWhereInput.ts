import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";

export type SemesterReferenceWhereInput = {
  id?: IntFilter;
  optional?: IntFilter;
  refAbbrev?: StringFilter;
  refDay?: IntFilter;
  refMonth?: IntFilter;
  refName?: StringFilter;
  rprefId?: IntFilter;
};
