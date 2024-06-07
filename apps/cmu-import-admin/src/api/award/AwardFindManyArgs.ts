import { AwardWhereInput } from "./AwardWhereInput";
import { AwardOrderByInput } from "./AwardOrderByInput";

export type AwardFindManyArgs = {
  where?: AwardWhereInput;
  orderBy?: Array<AwardOrderByInput>;
  skip?: number;
  take?: number;
};
