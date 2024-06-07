import { FileAccessLogWhereInput } from "./FileAccessLogWhereInput";
import { FileAccessLogOrderByInput } from "./FileAccessLogOrderByInput";

export type FileAccessLogFindManyArgs = {
  where?: FileAccessLogWhereInput;
  orderBy?: Array<FileAccessLogOrderByInput>;
  skip?: number;
  take?: number;
};
