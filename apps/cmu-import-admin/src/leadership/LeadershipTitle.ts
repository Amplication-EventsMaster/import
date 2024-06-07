import { Leadership as TLeadership } from "../api/leadership/Leadership";

export const LEADERSHIP_TITLE_FIELD = "title";

export const LeadershipTitle = (record: TLeadership): string => {
  return record.title?.toString() || String(record.id);
};
