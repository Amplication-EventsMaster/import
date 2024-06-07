import { UserHostWhereInput } from "./UserHostWhereInput";
import { UserHostOrderByInput } from "./UserHostOrderByInput";

export type UserHostFindManyArgs = {
  where?: UserHostWhereInput;
  orderBy?: Array<UserHostOrderByInput>;
  skip?: number;
  take?: number;
};
