import { UserAccessWhereInput } from "./UserAccessWhereInput";
import { UserAccessOrderByInput } from "./UserAccessOrderByInput";

export type UserAccessFindManyArgs = {
  where?: UserAccessWhereInput;
  orderBy?: Array<UserAccessOrderByInput>;
  skip?: number;
  take?: number;
};
