import { DepartmentMeeting as TDepartmentMeeting } from "../api/departmentMeeting/DepartmentMeeting";

export const DEPARTMENTMEETING_TITLE_FIELD = "name";

export const DepartmentMeetingTitle = (record: TDepartmentMeeting): string => {
  return record.name?.toString() || String(record.id);
};
