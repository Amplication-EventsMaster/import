import { UserRoleLookupWhereInput } from "./UserRoleLookupWhereInput";
import { UserRoleLookupOrderByInput } from "./UserRoleLookupOrderByInput";

export type UserRoleLookupFindManyArgs = {
  where?: UserRoleLookupWhereInput;
  orderBy?: Array<UserRoleLookupOrderByInput>;
  skip?: number;
  take?: number;
};
