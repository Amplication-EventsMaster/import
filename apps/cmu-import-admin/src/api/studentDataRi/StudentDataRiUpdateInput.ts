import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type StudentDataRiUpdateInput = {
  overrideCore?: number | null;
  overrideSpec?: number | null;
  studentData?: StudentDatumWhereUniqueInput;
};
