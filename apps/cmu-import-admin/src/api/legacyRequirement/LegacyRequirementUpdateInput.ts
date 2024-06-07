import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type LegacyRequirementUpdateInput = {
  course?: string | null;
  requirementTitle?: string | null;
  requirementType?: string | null;
  studentData?: StudentDatumWhereUniqueInput;
};
