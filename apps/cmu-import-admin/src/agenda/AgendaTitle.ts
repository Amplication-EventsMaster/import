import { Agenda as TAgenda } from "../api/agenda/Agenda";

export const AGENDA_TITLE_FIELD = "department";

export const AgendaTitle = (record: TAgenda): string => {
  return record.department?.toString() || String(record.id);
};
