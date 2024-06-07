import { ExpNeuroReq as TExpNeuroReq } from "../api/expNeuroReq/ExpNeuroReq";

export const EXPNEUROREQ_TITLE_FIELD = "departmentCode";

export const ExpNeuroReqTitle = (record: TExpNeuroReq): string => {
  return record.departmentCode?.toString() || String(record.id);
};
