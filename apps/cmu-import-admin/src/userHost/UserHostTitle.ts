import { UserHost as TUserHost } from "../api/userHost/UserHost";

export const USERHOST_TITLE_FIELD = "username";

export const UserHostTitle = (record: TUserHost): string => {
  return record.username?.toString() || String(record.id);
};
