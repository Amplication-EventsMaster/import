import { Internship as TInternship } from "../api/internship/Internship";

export const INTERNSHIP_TITLE_FIELD = "company";

export const InternshipTitle = (record: TInternship): string => {
  return record.company?.toString() || String(record.id);
};
