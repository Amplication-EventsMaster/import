import { UserRoleUpdateManyWithoutUsersInput } from "./UserRoleUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  andrewId?: string | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  middleName?: string | null;
  nickname?: string | null;
  owner?: string | null;
  ownerDisplay?: string | null;
  username?: string | null;
  userRole?: UserRoleUpdateManyWithoutUsersInput;
};
