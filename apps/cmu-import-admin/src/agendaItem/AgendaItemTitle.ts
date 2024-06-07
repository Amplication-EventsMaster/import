import { AgendaItem as TAgendaItem } from "../api/agendaItem/AgendaItem";

export const AGENDAITEM_TITLE_FIELD = "id";

export const AgendaItemTitle = (record: TAgendaItem): string => {
  return record.id?.toString() || String(record.id);
};
