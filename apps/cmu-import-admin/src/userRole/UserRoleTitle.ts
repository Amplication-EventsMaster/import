import { UserRole as TUserRole } from "../api/userRole/UserRole";

export const USERROLE_TITLE_FIELD = "hideName";

export const UserRoleTitle = (record: TUserRole): string => {
  return record.hideName?.toString() || String(record.id);
};
