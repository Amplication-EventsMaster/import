import { QualsResearchCreateNestedManyWithoutQualsCommitteesInput } from "./QualsResearchCreateNestedManyWithoutQualsCommitteesInput";
import { QualsResearchForOtherStudentCreateNestedManyWithoutQualsCommitteesInput } from "./QualsResearchForOtherStudentCreateNestedManyWithoutQualsCommitteesInput";
import { QualsWritingCreateNestedManyWithoutQualsCommitteesInput } from "./QualsWritingCreateNestedManyWithoutQualsCommitteesInput";
import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type QualsCommitteeCreateInput = {
  memberType?: string | null;
  overrideResearch?: number | null;
  overrideSpeaking?: number | null;
  overrideWriting?: number | null;
  qualsResearch?: QualsResearchCreateNestedManyWithoutQualsCommitteesInput;
  qualsResearchForOtherStudent?: QualsResearchForOtherStudentCreateNestedManyWithoutQualsCommitteesInput;
  qualsWriting?: QualsWritingCreateNestedManyWithoutQualsCommitteesInput;
  studentData: StudentDatumWhereUniqueInput;
  urId: number;
};
