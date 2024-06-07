import { IccWhereInput } from "./IccWhereInput";
import { IccOrderByInput } from "./IccOrderByInput";

export type IccFindManyArgs = {
  where?: IccWhereInput;
  orderBy?: Array<IccOrderByInput>;
  skip?: number;
  take?: number;
};
