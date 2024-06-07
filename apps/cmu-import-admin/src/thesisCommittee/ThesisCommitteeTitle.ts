import { ThesisCommittee as TThesisCommittee } from "../api/thesisCommittee/ThesisCommittee";

export const THESISCOMMITTEE_TITLE_FIELD = "committeeRole";

export const ThesisCommitteeTitle = (record: TThesisCommittee): string => {
  return record.committeeRole?.toString() || String(record.id);
};
