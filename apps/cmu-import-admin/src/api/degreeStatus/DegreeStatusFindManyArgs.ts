import { DegreeStatusWhereInput } from "./DegreeStatusWhereInput";
import { DegreeStatusOrderByInput } from "./DegreeStatusOrderByInput";

export type DegreeStatusFindManyArgs = {
  where?: DegreeStatusWhereInput;
  orderBy?: Array<DegreeStatusOrderByInput>;
  skip?: number;
  take?: number;
};
