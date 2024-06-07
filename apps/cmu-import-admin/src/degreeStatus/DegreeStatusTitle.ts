import { DegreeStatus as TDegreeStatus } from "../api/degreeStatus/DegreeStatus";

export const DEGREESTATUS_TITLE_FIELD = "status";

export const DegreeStatusTitle = (record: TDegreeStatus): string => {
  return record.status?.toString() || String(record.id);
};
