import { InternshipWhereInput } from "./InternshipWhereInput";
import { InternshipOrderByInput } from "./InternshipOrderByInput";

export type InternshipFindManyArgs = {
  where?: InternshipWhereInput;
  orderBy?: Array<InternshipOrderByInput>;
  skip?: number;
  take?: number;
};
