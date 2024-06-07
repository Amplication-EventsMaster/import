import { StudentDataHciiWhereInput } from "./StudentDataHciiWhereInput";
import { StudentDataHciiOrderByInput } from "./StudentDataHciiOrderByInput";

export type StudentDataHciiFindManyArgs = {
  where?: StudentDataHciiWhereInput;
  orderBy?: Array<StudentDataHciiOrderByInput>;
  skip?: number;
  take?: number;
};
