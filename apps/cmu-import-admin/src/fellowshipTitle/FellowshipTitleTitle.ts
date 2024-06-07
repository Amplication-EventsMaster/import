import { FellowshipTitle as TFellowshipTitle } from "../api/fellowshipTitle/FellowshipTitle";

export const FELLOWSHIPTITLE_TITLE_FIELD = "fellowshipTitle";

export const FellowshipTitleTitle = (record: TFellowshipTitle): string => {
  return record.fellowshipTitle?.toString() || String(record.id);
};
