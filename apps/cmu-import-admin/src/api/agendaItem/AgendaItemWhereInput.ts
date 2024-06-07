import { IntFilter } from "../../util/IntFilter";

export type AgendaItemWhereInput = {
  agendaId?: IntFilter;
  id?: IntFilter;
  meetingId?: IntFilter;
  order?: IntFilter;
};
