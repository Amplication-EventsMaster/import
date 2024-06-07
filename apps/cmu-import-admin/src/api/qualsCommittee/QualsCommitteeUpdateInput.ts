import { QualsResearchUpdateManyWithoutQualsCommitteesInput } from "./QualsResearchUpdateManyWithoutQualsCommitteesInput";
import { QualsResearchForOtherStudentUpdateManyWithoutQualsCommitteesInput } from "./QualsResearchForOtherStudentUpdateManyWithoutQualsCommitteesInput";
import { QualsWritingUpdateManyWithoutQualsCommitteesInput } from "./QualsWritingUpdateManyWithoutQualsCommitteesInput";
import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type QualsCommitteeUpdateInput = {
  memberType?: string | null;
  overrideResearch?: number | null;
  overrideSpeaking?: number | null;
  overrideWriting?: number | null;
  qualsResearch?: QualsResearchUpdateManyWithoutQualsCommitteesInput;
  qualsResearchForOtherStudent?: QualsResearchForOtherStudentUpdateManyWithoutQualsCommitteesInput;
  qualsWriting?: QualsWritingUpdateManyWithoutQualsCommitteesInput;
  studentData?: StudentDatumWhereUniqueInput;
  urId?: number;
};
