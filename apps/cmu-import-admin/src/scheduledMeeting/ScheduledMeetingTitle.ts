import { ScheduledMeeting as TScheduledMeeting } from "../api/scheduledMeeting/ScheduledMeeting";

export const SCHEDULEDMEETING_TITLE_FIELD = "department";

export const ScheduledMeetingTitle = (record: TScheduledMeeting): string => {
  return record.department?.toString() || String(record.id);
};
