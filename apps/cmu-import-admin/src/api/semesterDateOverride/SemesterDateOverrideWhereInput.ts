import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";

export type SemesterDateOverrideWhereInput = {
  department?: StringFilter;
  id?: IntFilter;
  semrefId?: IntFilter;
  year?: IntFilter;
};
