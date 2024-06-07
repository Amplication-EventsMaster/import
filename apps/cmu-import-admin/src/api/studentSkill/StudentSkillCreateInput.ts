import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type StudentSkillCreateInput = {
  collab?: string | null;
  comment?: string | null;
  date?: Date | null;
  grade?: string | null;
  pending?: boolean | null;
  skill?: string | null;
  studentData: StudentDatumWhereUniqueInput;
  title?: string | null;
  units: number;
};
