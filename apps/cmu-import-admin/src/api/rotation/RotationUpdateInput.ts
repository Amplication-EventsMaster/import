import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type RotationUpdateInput = {
  comment?: string | null;
  endDate?: Date | null;
  facultyId?: number;
  sfId?: number | null;
  startDate?: Date | null;
  studentData?: StudentDatumWhereUniqueInput;
};
