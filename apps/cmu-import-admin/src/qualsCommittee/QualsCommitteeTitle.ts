import { QualsCommittee as TQualsCommittee } from "../api/qualsCommittee/QualsCommittee";

export const QUALSCOMMITTEE_TITLE_FIELD = "memberType";

export const QualsCommitteeTitle = (record: TQualsCommittee): string => {
  return record.memberType?.toString() || String(record.id);
};
