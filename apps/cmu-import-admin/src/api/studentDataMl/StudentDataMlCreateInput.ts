import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type StudentDataMlCreateInput = {
  origDepartment?: string | null;
  overrideCore?: boolean | null;
  overrideElectives?: boolean | null;
  studentData: StudentDatumWhereUniqueInput;
};
