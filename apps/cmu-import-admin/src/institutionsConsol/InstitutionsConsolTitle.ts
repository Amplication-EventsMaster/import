import { InstitutionsConsol as TInstitutionsConsol } from "../api/institutionsConsol/InstitutionsConsol";

export const INSTITUTIONSCONSOL_TITLE_FIELD = "city";

export const InstitutionsConsolTitle = (
  record: TInstitutionsConsol
): string => {
  return record.city?.toString() || String(record.id);
};
