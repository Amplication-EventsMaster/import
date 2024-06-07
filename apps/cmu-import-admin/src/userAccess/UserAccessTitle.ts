import { UserAccess as TUserAccess } from "../api/userAccess/UserAccess";

export const USERACCESS_TITLE_FIELD = "id";

export const UserAccessTitle = (record: TUserAccess): string => {
  return record.id?.toString() || String(record.id);
};
