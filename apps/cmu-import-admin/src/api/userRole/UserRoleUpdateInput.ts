import { StudentDatumUpdateManyWithoutUserRolesInput } from "./StudentDatumUpdateManyWithoutUserRolesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserRoleUpdateInput = {
  access?: number | null;
  defaultRole?: number | null;
  department?: string | null;
  hideName?: number | null;
  roleId?: string | null;
  studentData?: StudentDatumUpdateManyWithoutUserRolesInput;
  users?: UserWhereUniqueInput | null;
};
