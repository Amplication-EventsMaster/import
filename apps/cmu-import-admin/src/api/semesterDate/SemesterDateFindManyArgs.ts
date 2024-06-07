import { SemesterDateWhereInput } from "./SemesterDateWhereInput";
import { SemesterDateOrderByInput } from "./SemesterDateOrderByInput";

export type SemesterDateFindManyArgs = {
  where?: SemesterDateWhereInput;
  orderBy?: Array<SemesterDateOrderByInput>;
  skip?: number;
  take?: number;
};
