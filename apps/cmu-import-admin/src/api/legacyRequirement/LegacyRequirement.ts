import { StudentDatum } from "../studentDatum/StudentDatum";

export type LegacyRequirement = {
  course: string | null;
  id: number;
  requirementTitle: string | null;
  requirementType: string | null;
  studentData?: StudentDatum;
};
