import { StudentDatumCreateNestedManyWithoutUserRolesInput } from "./StudentDatumCreateNestedManyWithoutUserRolesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserRoleCreateInput = {
  access?: number | null;
  defaultRole?: number | null;
  department?: string | null;
  hideName?: number | null;
  roleId?: string | null;
  studentData?: StudentDatumCreateNestedManyWithoutUserRolesInput;
  users?: UserWhereUniqueInput | null;
};
