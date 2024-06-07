import { StudentFile as TStudentFile } from "../api/studentFile/StudentFile";

export const STUDENTFILE_TITLE_FIELD = "fileName";

export const StudentFileTitle = (record: TStudentFile): string => {
  return record.fileName?.toString() || String(record.id);
};
