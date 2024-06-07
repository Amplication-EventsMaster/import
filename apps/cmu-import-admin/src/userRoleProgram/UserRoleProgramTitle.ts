import { UserRoleProgram as TUserRoleProgram } from "../api/userRoleProgram/UserRoleProgram";

export const USERROLEPROGRAM_TITLE_FIELD = "program";

export const UserRoleProgramTitle = (record: TUserRoleProgram): string => {
  return record.program?.toString() || String(record.id);
};
