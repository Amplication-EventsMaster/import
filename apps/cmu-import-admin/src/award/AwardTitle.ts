import { Award as TAward } from "../api/award/Award";

export const AWARD_TITLE_FIELD = "awardName";

export const AwardTitle = (record: TAward): string => {
  return record.awardName?.toString() || String(record.id);
};
