import { AdvisorsCopyWhereInput } from "./AdvisorsCopyWhereInput";
import { AdvisorsCopyOrderByInput } from "./AdvisorsCopyOrderByInput";

export type AdvisorsCopyFindManyArgs = {
  where?: AdvisorsCopyWhereInput;
  orderBy?: Array<AdvisorsCopyOrderByInput>;
  skip?: number;
  take?: number;
};
