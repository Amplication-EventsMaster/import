import { StudentDataIniWhereInput } from "./StudentDataIniWhereInput";
import { StudentDataIniOrderByInput } from "./StudentDataIniOrderByInput";

export type StudentDataIniFindManyArgs = {
  where?: StudentDataIniWhereInput;
  orderBy?: Array<StudentDataIniOrderByInput>;
  skip?: number;
  take?: number;
};
