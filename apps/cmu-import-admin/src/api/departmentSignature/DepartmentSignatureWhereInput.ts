import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";

export type DepartmentSignatureWhereInput = {
  department?: StringFilter;
  id?: IntFilter;
  sigblock?: StringFilter;
};
