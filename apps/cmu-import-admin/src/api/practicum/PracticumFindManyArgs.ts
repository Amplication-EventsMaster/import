import { PracticumWhereInput } from "./PracticumWhereInput";
import { PracticumOrderByInput } from "./PracticumOrderByInput";

export type PracticumFindManyArgs = {
  where?: PracticumWhereInput;
  orderBy?: Array<PracticumOrderByInput>;
  skip?: number;
  take?: number;
};
