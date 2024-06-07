import { EmploymentWhereInput } from "./EmploymentWhereInput";
import { EmploymentOrderByInput } from "./EmploymentOrderByInput";

export type EmploymentFindManyArgs = {
  where?: EmploymentWhereInput;
  orderBy?: Array<EmploymentOrderByInput>;
  skip?: number;
  take?: number;
};
