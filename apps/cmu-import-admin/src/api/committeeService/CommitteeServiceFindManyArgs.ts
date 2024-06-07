import { CommitteeServiceWhereInput } from "./CommitteeServiceWhereInput";
import { CommitteeServiceOrderByInput } from "./CommitteeServiceOrderByInput";

export type CommitteeServiceFindManyArgs = {
  where?: CommitteeServiceWhereInput;
  orderBy?: Array<CommitteeServiceOrderByInput>;
  skip?: number;
  take?: number;
};
