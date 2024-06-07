import { FileAccessLog as TFileAccessLog } from "../api/fileAccessLog/FileAccessLog";

export const FILEACCESSLOG_TITLE_FIELD = "id";

export const FileAccessLogTitle = (record: TFileAccessLog): string => {
  return record.id?.toString() || String(record.id);
};
