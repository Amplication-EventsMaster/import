import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type AreaCreateInput = {
  arank?: number | null;
  area?: string | null;
  studentData: StudentDatumWhereUniqueInput;
};
