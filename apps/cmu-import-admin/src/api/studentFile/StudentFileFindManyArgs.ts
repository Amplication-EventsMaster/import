import { StudentFileWhereInput } from "./StudentFileWhereInput";
import { StudentFileOrderByInput } from "./StudentFileOrderByInput";

export type StudentFileFindManyArgs = {
  where?: StudentFileWhereInput;
  orderBy?: Array<StudentFileOrderByInput>;
  skip?: number;
  take?: number;
};
