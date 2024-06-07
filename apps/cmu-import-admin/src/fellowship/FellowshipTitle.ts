import { Fellowship as TFellowship } from "../api/fellowship/Fellowship";

export const FELLOWSHIP_TITLE_FIELD = "title";

export const FellowshipTitle = (record: TFellowship): string => {
  return record.title?.toString() || String(record.id);
};
