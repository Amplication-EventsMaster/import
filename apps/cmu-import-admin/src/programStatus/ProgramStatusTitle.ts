import { ProgramStatus as TProgramStatus } from "../api/programStatus/ProgramStatus";

export const PROGRAMSTATUS_TITLE_FIELD = "status";

export const ProgramStatusTitle = (record: TProgramStatus): string => {
  return record.status?.toString() || String(record.id);
};
