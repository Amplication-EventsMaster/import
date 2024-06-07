import { GreGeneralConv as TGreGeneralConv } from "../api/greGeneralConv/GreGeneralConv";

export const GREGENERALCONV_TITLE_FIELD = "subject";

export const GreGeneralConvTitle = (record: TGreGeneralConv): string => {
  return record.subject?.toString() || String(record.id);
};
