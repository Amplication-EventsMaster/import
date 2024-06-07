import { AgendaItemWhereInput } from "./AgendaItemWhereInput";
import { AgendaItemOrderByInput } from "./AgendaItemOrderByInput";

export type AgendaItemFindManyArgs = {
  where?: AgendaItemWhereInput;
  orderBy?: Array<AgendaItemOrderByInput>;
  skip?: number;
  take?: number;
};
