import { FellowshipWhereInput } from "./FellowshipWhereInput";
import { FellowshipOrderByInput } from "./FellowshipOrderByInput";

export type FellowshipFindManyArgs = {
  where?: FellowshipWhereInput;
  orderBy?: Array<FellowshipOrderByInput>;
  skip?: number;
  take?: number;
};
