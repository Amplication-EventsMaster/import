import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type LegacyRequirementCreateInput = {
  course?: string | null;
  requirementTitle?: string | null;
  requirementType?: string | null;
  studentData: StudentDatumWhereUniqueInput;
};
