import { Ita as TIta } from "../api/ita/Ita";

export const ITA_TITLE_FIELD = "score";

export const ItaTitle = (record: TIta): string => {
  return record.score?.toString() || String(record.id);
};
