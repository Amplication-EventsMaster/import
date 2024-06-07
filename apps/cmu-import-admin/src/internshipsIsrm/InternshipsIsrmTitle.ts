import { InternshipsIsrm as TInternshipsIsrm } from "../api/internshipsIsrm/InternshipsIsrm";

export const INTERNSHIPSISRM_TITLE_FIELD = "supervisorName";

export const InternshipsIsrmTitle = (record: TInternshipsIsrm): string => {
  return record.supervisorName?.toString() || String(record.id);
};
