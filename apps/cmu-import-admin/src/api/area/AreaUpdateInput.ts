import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type AreaUpdateInput = {
  arank?: number | null;
  area?: string | null;
  studentData?: StudentDatumWhereUniqueInput;
};
