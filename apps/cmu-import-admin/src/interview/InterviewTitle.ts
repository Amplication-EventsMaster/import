import { Interview as TInterview } from "../api/interview/Interview";

export const INTERVIEW_TITLE_FIELD = "employer";

export const InterviewTitle = (record: TInterview): string => {
  return record.employer?.toString() || String(record.id);
};
