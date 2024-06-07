import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";

export type GreGeneralConvWhereInput = {
  currentScale?: IntFilter;
  id?: IntFilter;
  priorScale?: IntFilter;
  subject?: StringFilter;
};
