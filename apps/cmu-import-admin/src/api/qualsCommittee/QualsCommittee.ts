import { QualsResearch } from "../qualsResearch/QualsResearch";
import { QualsResearchForOtherStudent } from "../qualsResearchForOtherStudent/QualsResearchForOtherStudent";
import { QualsWriting } from "../qualsWriting/QualsWriting";
import { StudentDatum } from "../studentDatum/StudentDatum";

export type QualsCommittee = {
  id: number;
  memberType: string | null;
  overrideResearch: number | null;
  overrideSpeaking: number | null;
  overrideWriting: number | null;
  qualsResearch?: Array<QualsResearch>;
  qualsResearchForOtherStudent?: Array<QualsResearchForOtherStudent>;
  qualsWriting?: Array<QualsWriting>;
  studentData?: StudentDatum;
  urId: number;
};
