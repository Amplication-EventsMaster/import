import { AdvisorWhereInput } from "./AdvisorWhereInput";
import { AdvisorOrderByInput } from "./AdvisorOrderByInput";

export type AdvisorFindManyArgs = {
  where?: AdvisorWhereInput;
  orderBy?: Array<AdvisorOrderByInput>;
  skip?: number;
  take?: number;
};
