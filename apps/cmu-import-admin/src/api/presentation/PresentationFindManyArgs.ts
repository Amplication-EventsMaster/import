import { PresentationWhereInput } from "./PresentationWhereInput";
import { PresentationOrderByInput } from "./PresentationOrderByInput";

export type PresentationFindManyArgs = {
  where?: PresentationWhereInput;
  orderBy?: Array<PresentationOrderByInput>;
  skip?: number;
  take?: number;
};
