import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type ExpNeuroReqUpdateInput = {
  complete?: boolean | null;
  date?: Date;
  departmentCode?: string | null;
  pending?: boolean | null;
  studentData?: StudentDatumWhereUniqueInput;
};
