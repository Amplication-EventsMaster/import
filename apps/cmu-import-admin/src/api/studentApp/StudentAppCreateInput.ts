import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type StudentAppCreateInput = {
  appId: number;
  studentData: StudentDatumWhereUniqueInput;
};
