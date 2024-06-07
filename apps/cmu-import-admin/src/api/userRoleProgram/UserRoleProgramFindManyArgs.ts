import { UserRoleProgramWhereInput } from "./UserRoleProgramWhereInput";
import { UserRoleProgramOrderByInput } from "./UserRoleProgramOrderByInput";

export type UserRoleProgramFindManyArgs = {
  where?: UserRoleProgramWhereInput;
  orderBy?: Array<UserRoleProgramOrderByInput>;
  skip?: number;
  take?: number;
};
