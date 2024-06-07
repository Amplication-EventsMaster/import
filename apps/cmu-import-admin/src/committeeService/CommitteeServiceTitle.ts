import { CommitteeService as TCommitteeService } from "../api/committeeService/CommitteeService";

export const COMMITTEESERVICE_TITLE_FIELD = "committeeName";

export const CommitteeServiceTitle = (record: TCommitteeService): string => {
  return record.committeeName?.toString() || String(record.id);
};
