import { StudentDatum } from "../studentDatum/StudentDatum";

export type Rotation = {
  comment: string | null;
  endDate: Date | null;
  facultyId: number;
  id: number;
  sfId: number | null;
  startDate: Date | null;
  studentData?: StudentDatum;
};
