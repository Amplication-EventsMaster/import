import { TeachingReqWhereInput } from "./TeachingReqWhereInput";
import { TeachingReqOrderByInput } from "./TeachingReqOrderByInput";

export type TeachingReqFindManyArgs = {
  where?: TeachingReqWhereInput;
  orderBy?: Array<TeachingReqOrderByInput>;
  skip?: number;
  take?: number;
};
