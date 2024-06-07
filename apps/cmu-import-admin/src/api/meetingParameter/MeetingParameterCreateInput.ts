export type MeetingParameterCreateInput = {
  meetingId: number;
  param: string;
  sortOrder?: number | null;
  typeField: string;
  value?: string | null;
};
