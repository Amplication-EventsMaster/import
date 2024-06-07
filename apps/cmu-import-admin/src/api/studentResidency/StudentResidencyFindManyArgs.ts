import { StudentResidencyWhereInput } from "./StudentResidencyWhereInput";
import { StudentResidencyOrderByInput } from "./StudentResidencyOrderByInput";

export type StudentResidencyFindManyArgs = {
  where?: StudentResidencyWhereInput;
  orderBy?: Array<StudentResidencyOrderByInput>;
  skip?: number;
  take?: number;
};
