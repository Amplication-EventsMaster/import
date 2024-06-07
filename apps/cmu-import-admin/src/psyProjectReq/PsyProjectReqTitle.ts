import { PsyProjectReq as TPsyProjectReq } from "../api/psyProjectReq/PsyProjectReq";

export const PSYPROJECTREQ_TITLE_FIELD = "title";

export const PsyProjectReqTitle = (record: TPsyProjectReq): string => {
  return record.title?.toString() || String(record.id);
};
