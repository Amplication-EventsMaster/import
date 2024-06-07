import { RawDatum as TRawDatum } from "../api/rawDatum/RawDatum";

export const RAWDATUM_TITLE_FIELD = "name";

export const RawDatumTitle = (record: TRawDatum): string => {
  return record.name?.toString() || String(record.id);
};
