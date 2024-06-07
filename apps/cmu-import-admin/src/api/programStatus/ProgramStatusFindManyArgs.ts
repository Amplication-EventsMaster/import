import { ProgramStatusWhereInput } from "./ProgramStatusWhereInput";
import { ProgramStatusOrderByInput } from "./ProgramStatusOrderByInput";

export type ProgramStatusFindManyArgs = {
  where?: ProgramStatusWhereInput;
  orderBy?: Array<ProgramStatusOrderByInput>;
  skip?: number;
  take?: number;
};
