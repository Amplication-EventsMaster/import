import { QualsSpeakingWhereUniqueInput } from "../qualsSpeaking/QualsSpeakingWhereUniqueInput";

export type QualsSpeakingAspectUpdateInput = {
  qualsSpeaking?: QualsSpeakingWhereUniqueInput | null;
  text?: string | null;
  type?: "strength" | "weakness" | null;
};
