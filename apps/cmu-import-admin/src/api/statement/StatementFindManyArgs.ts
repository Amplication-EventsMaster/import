import { StatementWhereInput } from "./StatementWhereInput";
import { StatementOrderByInput } from "./StatementOrderByInput";

export type StatementFindManyArgs = {
  where?: StatementWhereInput;
  orderBy?: Array<StatementOrderByInput>;
  skip?: number;
  take?: number;
};
