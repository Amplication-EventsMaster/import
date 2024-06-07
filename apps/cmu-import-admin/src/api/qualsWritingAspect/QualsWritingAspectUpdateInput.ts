import { QualsWritingWhereUniqueInput } from "../qualsWriting/QualsWritingWhereUniqueInput";

export type QualsWritingAspectUpdateInput = {
  qualsWriting?: QualsWritingWhereUniqueInput | null;
  text?: string | null;
  type?: "strength" | "weakness" | null;
};
