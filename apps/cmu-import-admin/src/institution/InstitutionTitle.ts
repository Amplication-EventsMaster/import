import { Institution as TInstitution } from "../api/institution/Institution";

export const INSTITUTION_TITLE_FIELD = "city";

export const InstitutionTitle = (record: TInstitution): string => {
  return record.city?.toString() || String(record.id);
};
