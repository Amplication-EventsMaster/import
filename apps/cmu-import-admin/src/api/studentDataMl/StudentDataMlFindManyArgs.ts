import { StudentDataMlWhereInput } from "./StudentDataMlWhereInput";
import { StudentDataMlOrderByInput } from "./StudentDataMlOrderByInput";

export type StudentDataMlFindManyArgs = {
  where?: StudentDataMlWhereInput;
  orderBy?: Array<StudentDataMlOrderByInput>;
  skip?: number;
  take?: number;
};
