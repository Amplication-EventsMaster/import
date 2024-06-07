import { IntFilter } from "../../util/IntFilter";
import { QualsSpeakingWhereUniqueInput } from "../qualsSpeaking/QualsSpeakingWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type QualsSpeakingAspectWhereInput = {
  id?: IntFilter;
  qualsSpeaking?: QualsSpeakingWhereUniqueInput;
  text?: StringNullableFilter;
  type?: "strength" | "weakness";
};
