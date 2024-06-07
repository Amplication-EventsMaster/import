import { TeachingReq as TTeachingReq } from "../api/teachingReq/TeachingReq";

export const TEACHINGREQ_TITLE_FIELD = "title";

export const TeachingReqTitle = (record: TTeachingReq): string => {
  return record.title?.toString() || String(record.id);
};
