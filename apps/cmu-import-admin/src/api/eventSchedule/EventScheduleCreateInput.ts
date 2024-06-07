export type EventScheduleCreateInput = {
  always?: number | null;
  canceled?: number | null;
  department: string;
  endDate?: Date | null;
  eventType: string;
  startDate?: Date | null;
};
