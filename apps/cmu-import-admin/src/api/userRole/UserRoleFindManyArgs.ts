import { UserRoleWhereInput } from "./UserRoleWhereInput";
import { UserRoleOrderByInput } from "./UserRoleOrderByInput";

export type UserRoleFindManyArgs = {
  where?: UserRoleWhereInput;
  orderBy?: Array<UserRoleOrderByInput>;
  skip?: number;
  take?: number;
};
