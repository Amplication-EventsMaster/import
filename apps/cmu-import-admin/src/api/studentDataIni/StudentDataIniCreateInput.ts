import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type StudentDataIniCreateInput = {
  curriculumOption?: string | null;
  curriculumTrack?: string | null;
  programDuration?: number | null;
  studentData: StudentDatumWhereUniqueInput;
};
