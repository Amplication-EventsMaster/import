import { Employment as TEmployment } from "../api/employment/Employment";

export const EMPLOYMENT_TITLE_FIELD = "address1";

export const EmploymentTitle = (record: TEmployment): string => {
  return record.address1?.toString() || String(record.id);
};
