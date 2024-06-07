import { QualsWritingWhereUniqueInput } from "../qualsWriting/QualsWritingWhereUniqueInput";

export type QualsWritingAspectCreateInput = {
  qualsWriting?: QualsWritingWhereUniqueInput | null;
  text?: string | null;
  type?: "strength" | "weakness" | null;
};
