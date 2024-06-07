import { Practicum as TPracticum } from "../api/practicum/Practicum";

export const PRACTICUM_TITLE_FIELD = "title";

export const PracticumTitle = (record: TPracticum): string => {
  return record.title?.toString() || String(record.id);
};
