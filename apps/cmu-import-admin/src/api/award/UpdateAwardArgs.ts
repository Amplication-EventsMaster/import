import { AwardWhereUniqueInput } from "./AwardWhereUniqueInput";
import { AwardUpdateInput } from "./AwardUpdateInput";

export type UpdateAwardArgs = {
  where: AwardWhereUniqueInput;
  data: AwardUpdateInput;
};
