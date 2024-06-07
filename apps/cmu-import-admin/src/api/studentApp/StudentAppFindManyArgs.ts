import { StudentAppWhereInput } from "./StudentAppWhereInput";
import { StudentAppOrderByInput } from "./StudentAppOrderByInput";

export type StudentAppFindManyArgs = {
  where?: StudentAppWhereInput;
  orderBy?: Array<StudentAppOrderByInput>;
  skip?: number;
  take?: number;
};
