import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type StudentDataMlUpdateInput = {
  origDepartment?: string | null;
  overrideCore?: boolean | null;
  overrideElectives?: boolean | null;
  studentData?: StudentDatumWhereUniqueInput;
};
