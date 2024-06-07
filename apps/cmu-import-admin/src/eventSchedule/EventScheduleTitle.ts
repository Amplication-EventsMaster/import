import { EventSchedule as TEventSchedule } from "../api/eventSchedule/EventSchedule";

export const EVENTSCHEDULE_TITLE_FIELD = "department";

export const EventScheduleTitle = (record: TEventSchedule): string => {
  return record.department?.toString() || String(record.id);
};
