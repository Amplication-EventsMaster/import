import { StudentPubWhereInput } from "./StudentPubWhereInput";
import { StudentPubOrderByInput } from "./StudentPubOrderByInput";

export type StudentPubFindManyArgs = {
  where?: StudentPubWhereInput;
  orderBy?: Array<StudentPubOrderByInput>;
  skip?: number;
  take?: number;
};
