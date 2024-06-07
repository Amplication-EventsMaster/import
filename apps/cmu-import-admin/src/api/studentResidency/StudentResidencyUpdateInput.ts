import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type StudentResidencyUpdateInput = {
  residencyDate?: Date;
  studentData?: StudentDatumWhereUniqueInput;
};
