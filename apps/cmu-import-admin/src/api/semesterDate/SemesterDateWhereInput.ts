import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";

export type SemesterDateWhereInput = {
  department?: StringFilter;
  disabled?: IntFilter;
  id?: IntFilter;
  semrefId?: IntFilter;
  startDay?: IntFilter;
  startMonth?: IntFilter;
};
