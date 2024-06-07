export type MeetingCreateInput = {
  adminVisible?: boolean | null;
  department: string;
  end: Date;
  facultyVisible?: boolean | null;
  longDescription?: string | null;
  shortDescription?: string | null;
  start: Date;
};
