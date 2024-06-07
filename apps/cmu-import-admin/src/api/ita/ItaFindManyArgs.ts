import { ItaWhereInput } from "./ItaWhereInput";
import { ItaOrderByInput } from "./ItaOrderByInput";

export type ItaFindManyArgs = {
  where?: ItaWhereInput;
  orderBy?: Array<ItaOrderByInput>;
  skip?: number;
  take?: number;
};
