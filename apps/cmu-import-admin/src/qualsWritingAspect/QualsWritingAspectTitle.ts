import { QualsWritingAspect as TQualsWritingAspect } from "../api/qualsWritingAspect/QualsWritingAspect";

export const QUALSWRITINGASPECT_TITLE_FIELD = "text";

export const QualsWritingAspectTitle = (
  record: TQualsWritingAspect
): string => {
  return record.text?.toString() || String(record.id);
};
