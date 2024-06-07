import { LeadershipWhereInput } from "./LeadershipWhereInput";
import { LeadershipOrderByInput } from "./LeadershipOrderByInput";

export type LeadershipFindManyArgs = {
  where?: LeadershipWhereInput;
  orderBy?: Array<LeadershipOrderByInput>;
  skip?: number;
  take?: number;
};
