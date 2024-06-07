import { Advisor as TAdvisor } from "../api/advisor/Advisor";

export const ADVISOR_TITLE_FIELD = "id";

export const AdvisorTitle = (record: TAdvisor): string => {
  return record.id?.toString() || String(record.id);
};
