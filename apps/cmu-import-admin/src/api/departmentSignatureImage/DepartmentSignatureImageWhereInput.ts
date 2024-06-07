import { IntFilter } from "../../util/IntFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type DepartmentSignatureImageWhereInput = {
  displayOrder?: IntFilter;
  dsigId?: IntFilter;
  fileDate?: DateTimeFilter;
  fileName?: StringNullableFilter;
  fileSize?: IntNullableFilter;
  fileType?: StringNullableFilter;
  id?: IntFilter;
  signatureName?: StringFilter;
};
