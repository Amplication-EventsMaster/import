import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type StudentAppUpdateInput = {
  appId?: number;
  studentData?: StudentDatumWhereUniqueInput;
};
