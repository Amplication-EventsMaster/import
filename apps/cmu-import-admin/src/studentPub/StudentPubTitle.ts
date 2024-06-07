import { StudentPub as TStudentPub } from "../api/studentPub/StudentPub";

export const STUDENTPUB_TITLE_FIELD = "title";

export const StudentPubTitle = (record: TStudentPub): string => {
  return record.title?.toString() || String(record.id);
};
