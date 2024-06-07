import { Meeting as TMeeting } from "../api/meeting/Meeting";

export const MEETING_TITLE_FIELD = "department";

export const MeetingTitle = (record: TMeeting): string => {
  return record.department?.toString() || String(record.id);
};
