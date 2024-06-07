import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type StudentResidencyCreateInput = {
  residencyDate: Date;
  studentData: StudentDatumWhereUniqueInput;
};
