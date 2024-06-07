import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { ReportWhereUniqueInput } from "../report/ReportWhereUniqueInput";

export type ReportDeptVisibilityWhereInput = {
  department?: StringFilter;
  id?: IntFilter;
  reports?: ReportWhereUniqueInput;
  visible?: IntFilter;
};
