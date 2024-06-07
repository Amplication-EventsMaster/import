import { Funding as TFunding } from "../api/funding/Funding";

export const FUNDING_TITLE_FIELD = "title";

export const FundingTitle = (record: TFunding): string => {
  return record.title?.toString() || String(record.id);
};
