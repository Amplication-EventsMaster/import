import { IntFilter } from "../../util/IntFilter";
import { ReportColumnListRelationFilter } from "../reportColumn/ReportColumnListRelationFilter";
import { ReportDeptVisibilityListRelationFilter } from "../reportDeptVisibility/ReportDeptVisibilityListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ReportWhereInput = {
  id?: IntFilter;
  reportColumns?: ReportColumnListRelationFilter;
  reportDeptVisibility?: ReportDeptVisibilityListRelationFilter;
  reportQuery?: StringNullableFilter;
  reportTitle?: StringNullableFilter;
};
