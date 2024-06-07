import { MeetingAgendum as TMeetingAgendum } from "../api/meetingAgendum/MeetingAgendum";

export const MEETINGAGENDUM_TITLE_FIELD = "id";

export const MeetingAgendumTitle = (record: TMeetingAgendum): string => {
  return record.id?.toString() || String(record.id);
};
