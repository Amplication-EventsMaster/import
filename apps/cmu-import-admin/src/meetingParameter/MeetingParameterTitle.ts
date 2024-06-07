import { MeetingParameter as TMeetingParameter } from "../api/meetingParameter/MeetingParameter";

export const MEETINGPARAMETER_TITLE_FIELD = "param";

export const MeetingParameterTitle = (record: TMeetingParameter): string => {
  return record.param?.toString() || String(record.id);
};
