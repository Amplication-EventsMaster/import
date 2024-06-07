import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type StudentDataIniUpdateInput = {
  curriculumOption?: string | null;
  curriculumTrack?: string | null;
  programDuration?: number | null;
  studentData?: StudentDatumWhereUniqueInput;
};
