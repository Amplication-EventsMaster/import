import { QualsSpeaking } from "../qualsSpeaking/QualsSpeaking";

export type QualsSpeakingAspect = {
  id: number;
  qualsSpeaking?: QualsSpeaking | null;
  text: string | null;
  type?: "strength" | "weakness" | null;
};
