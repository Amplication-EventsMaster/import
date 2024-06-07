import { StudentDatum } from "../studentDatum/StudentDatum";

export type StudentDataIni = {
  curriculumOption: string | null;
  curriculumTrack: string | null;
  id: string;
  programDuration: number | null;
  studentData?: StudentDatum;
};
