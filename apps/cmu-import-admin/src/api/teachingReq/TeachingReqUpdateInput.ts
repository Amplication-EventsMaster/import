import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type TeachingReqUpdateInput = {
  complete?: boolean | null;
  courseNum?: string | null;
  courseSection?: string | null;
  date?: Date;
  departmentCode?: string | null;
  pending?: boolean | null;
  status?: string | null;
  studentData?: StudentDatumWhereUniqueInput;
  title?: string | null;
  units?: string | null;
};
