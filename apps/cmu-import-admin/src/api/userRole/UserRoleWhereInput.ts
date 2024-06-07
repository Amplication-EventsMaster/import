import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { StudentDatumListRelationFilter } from "../studentDatum/StudentDatumListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserRoleWhereInput = {
  access?: IntNullableFilter;
  defaultRole?: IntNullableFilter;
  department?: StringNullableFilter;
  hideName?: IntNullableFilter;
  id?: IntFilter;
  roleId?: StringNullableFilter;
  studentData?: StudentDatumListRelationFilter;
  users?: UserWhereUniqueInput;
};
