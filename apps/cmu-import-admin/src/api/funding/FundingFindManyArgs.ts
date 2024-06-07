import { FundingWhereInput } from "./FundingWhereInput";
import { FundingOrderByInput } from "./FundingOrderByInput";

export type FundingFindManyArgs = {
  where?: FundingWhereInput;
  orderBy?: Array<FundingOrderByInput>;
  skip?: number;
  take?: number;
};
