import { StudentInstituteWhereInput } from "./StudentInstituteWhereInput";
import { StudentInstituteOrderByInput } from "./StudentInstituteOrderByInput";

export type StudentInstituteFindManyArgs = {
  where?: StudentInstituteWhereInput;
  orderBy?: Array<StudentInstituteOrderByInput>;
  skip?: number;
  take?: number;
};
