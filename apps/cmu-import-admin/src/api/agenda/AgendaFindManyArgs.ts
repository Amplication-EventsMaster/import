import { AgendaWhereInput } from "./AgendaWhereInput";
import { AgendaOrderByInput } from "./AgendaOrderByInput";

export type AgendaFindManyArgs = {
  where?: AgendaWhereInput;
  orderBy?: Array<AgendaOrderByInput>;
  skip?: number;
  take?: number;
};
