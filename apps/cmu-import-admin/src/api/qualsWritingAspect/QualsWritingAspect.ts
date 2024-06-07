import { QualsWriting } from "../qualsWriting/QualsWriting";

export type QualsWritingAspect = {
  id: number;
  qualsWriting?: QualsWriting | null;
  text: string | null;
  type?: "strength" | "weakness" | null;
};
