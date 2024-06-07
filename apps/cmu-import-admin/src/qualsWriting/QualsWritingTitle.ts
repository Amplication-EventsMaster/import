import { QualsWriting as TQualsWriting } from "../api/qualsWriting/QualsWriting";

export const QUALSWRITING_TITLE_FIELD = "engagingReaderExp";

export const QualsWritingTitle = (record: TQualsWriting): string => {
  return record.engagingReaderExp?.toString() || String(record.id);
};
