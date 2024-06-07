import { ThesisCommitteeWhereInput } from "./ThesisCommitteeWhereInput";
import { ThesisCommitteeOrderByInput } from "./ThesisCommitteeOrderByInput";

export type ThesisCommitteeFindManyArgs = {
  where?: ThesisCommitteeWhereInput;
  orderBy?: Array<ThesisCommitteeOrderByInput>;
  skip?: number;
  take?: number;
};
