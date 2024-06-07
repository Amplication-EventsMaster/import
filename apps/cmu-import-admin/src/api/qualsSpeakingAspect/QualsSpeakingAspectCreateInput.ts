import { QualsSpeakingWhereUniqueInput } from "../qualsSpeaking/QualsSpeakingWhereUniqueInput";

export type QualsSpeakingAspectCreateInput = {
  qualsSpeaking?: QualsSpeakingWhereUniqueInput | null;
  text?: string | null;
  type?: "strength" | "weakness" | null;
};
