import { EvaluatorWhereInput } from "./EvaluatorWhereInput";
import { EvaluatorOrderByInput } from "./EvaluatorOrderByInput";

export type EvaluatorFindManyArgs = {
  where?: EvaluatorWhereInput;
  orderBy?: Array<EvaluatorOrderByInput>;
  skip?: number;
  take?: number;
};
