import { RawDataLetter as TRawDataLetter } from "../api/rawDataLetter/RawDataLetter";

export const RAWDATALETTER_TITLE_FIELD = "name";

export const RawDataLetterTitle = (record: TRawDataLetter): string => {
  return record.name?.toString() || String(record.id);
};
