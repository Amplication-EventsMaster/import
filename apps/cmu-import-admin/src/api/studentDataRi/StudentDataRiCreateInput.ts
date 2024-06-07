import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type StudentDataRiCreateInput = {
  overrideCore?: number | null;
  overrideSpec?: number | null;
  studentData: StudentDatumWhereUniqueInput;
};
