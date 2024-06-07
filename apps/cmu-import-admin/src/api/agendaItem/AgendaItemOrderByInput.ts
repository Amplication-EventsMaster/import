import { SortOrder } from "../../util/SortOrder";

export type AgendaItemOrderByInput = {
  agendaId?: SortOrder;
  id?: SortOrder;
  meetingId?: SortOrder;
  order?: SortOrder;
};
