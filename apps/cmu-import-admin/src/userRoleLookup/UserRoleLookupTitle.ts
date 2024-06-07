import { UserRoleLookup as TUserRoleLookup } from "../api/userRoleLookup/UserRoleLookup";

export const USERROLELOOKUP_TITLE_FIELD = "role";

export const UserRoleLookupTitle = (record: TUserRoleLookup): string => {
  return record.role?.toString() || String(record.id);
};
