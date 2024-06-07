export type EventSchedule = {
  always: number | null;
  canceled: number | null;
  department: string;
  endDate: Date | null;
  eventType: string;
  id: number;
  startDate: Date | null;
};
