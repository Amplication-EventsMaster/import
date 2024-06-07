import { InternshipsIni as TInternshipsIni } from "../api/internshipsIni/InternshipsIni";

export const INTERNSHIPSINI_TITLE_FIELD = "city";

export const InternshipsIniTitle = (record: TInternshipsIni): string => {
  return record.city?.toString() || String(record.id);
};
