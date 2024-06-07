import { FellowshipTitleWhereInput } from "./FellowshipTitleWhereInput";
import { FellowshipTitleOrderByInput } from "./FellowshipTitleOrderByInput";

export type FellowshipTitleFindManyArgs = {
  where?: FellowshipTitleWhereInput;
  orderBy?: Array<FellowshipTitleOrderByInput>;
  skip?: number;
  take?: number;
};
