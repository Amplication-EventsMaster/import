import { ThesisTopicWhereInput } from "./ThesisTopicWhereInput";
import { ThesisTopicOrderByInput } from "./ThesisTopicOrderByInput";

export type ThesisTopicFindManyArgs = {
  where?: ThesisTopicWhereInput;
  orderBy?: Array<ThesisTopicOrderByInput>;
  skip?: number;
  take?: number;
};
