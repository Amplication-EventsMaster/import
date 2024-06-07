import { SemesterReferenceWhereInput } from "./SemesterReferenceWhereInput";
import { SemesterReferenceOrderByInput } from "./SemesterReferenceOrderByInput";

export type SemesterReferenceFindManyArgs = {
  where?: SemesterReferenceWhereInput;
  orderBy?: Array<SemesterReferenceOrderByInput>;
  skip?: number;
  take?: number;
};
