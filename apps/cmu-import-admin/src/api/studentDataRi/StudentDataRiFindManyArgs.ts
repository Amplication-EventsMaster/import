import { StudentDataRiWhereInput } from "./StudentDataRiWhereInput";
import { StudentDataRiOrderByInput } from "./StudentDataRiOrderByInput";

export type StudentDataRiFindManyArgs = {
  where?: StudentDataRiWhereInput;
  orderBy?: Array<StudentDataRiOrderByInput>;
  skip?: number;
  take?: number;
};
