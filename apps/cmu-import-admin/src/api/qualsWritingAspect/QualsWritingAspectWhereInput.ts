import { IntFilter } from "../../util/IntFilter";
import { QualsWritingWhereUniqueInput } from "../qualsWriting/QualsWritingWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type QualsWritingAspectWhereInput = {
  id?: IntFilter;
  qualsWriting?: QualsWritingWhereUniqueInput;
  text?: StringNullableFilter;
  type?: "strength" | "weakness";
};
