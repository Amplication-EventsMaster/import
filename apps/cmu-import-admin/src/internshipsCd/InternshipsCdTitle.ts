import { InternshipsCd as TInternshipsCd } from "../api/internshipsCd/InternshipsCd";

export const INTERNSHIPSCD_TITLE_FIELD = "supervisorName";

export const InternshipsCdTitle = (record: TInternshipsCd): string => {
  return record.supervisorName?.toString() || String(record.id);
};
