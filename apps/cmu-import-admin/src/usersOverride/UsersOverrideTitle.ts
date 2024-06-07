import { UsersOverride as TUsersOverride } from "../api/usersOverride/UsersOverride";

export const USERSOVERRIDE_TITLE_FIELD = "firstName";

export const UsersOverrideTitle = (record: TUsersOverride): string => {
  return record.firstName?.toString() || String(record.id);
};
