import { FacultyCertWhereInput } from "./FacultyCertWhereInput";
import { FacultyCertOrderByInput } from "./FacultyCertOrderByInput";

export type FacultyCertFindManyArgs = {
  where?: FacultyCertWhereInput;
  orderBy?: Array<FacultyCertOrderByInput>;
  skip?: number;
  take?: number;
};
