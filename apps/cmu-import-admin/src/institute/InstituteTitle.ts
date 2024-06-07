import { Institute as TInstitute } from "../api/institute/Institute";

export const INSTITUTE_TITLE_FIELD = "name";

export const InstituteTitle = (record: TInstitute): string => {
  return record.name?.toString() || String(record.id);
};
