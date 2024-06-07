import { StudentDatumWhereInput } from "./StudentDatumWhereInput";
import { StudentDatumOrderByInput } from "./StudentDatumOrderByInput";

export type StudentDatumFindManyArgs = {
  where?: StudentDatumWhereInput;
  orderBy?: Array<StudentDatumOrderByInput>;
  skip?: number;
  take?: number;
};
