import { InstituteWhereInput } from "./InstituteWhereInput";
import { InstituteOrderByInput } from "./InstituteOrderByInput";

export type InstituteFindManyArgs = {
  where?: InstituteWhereInput;
  orderBy?: Array<InstituteOrderByInput>;
  skip?: number;
  take?: number;
};
