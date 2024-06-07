import { AdvisorsCopy as TAdvisorsCopy } from "../api/advisorsCopy/AdvisorsCopy";

export const ADVISORSCOPY_TITLE_FIELD = "id";

export const AdvisorsCopyTitle = (record: TAdvisorsCopy): string => {
  return record.id?.toString() || String(record.id);
};
