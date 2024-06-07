import { ProjectTopicWhereInput } from "./ProjectTopicWhereInput";
import { ProjectTopicOrderByInput } from "./ProjectTopicOrderByInput";

export type ProjectTopicFindManyArgs = {
  where?: ProjectTopicWhereInput;
  orderBy?: Array<ProjectTopicOrderByInput>;
  skip?: number;
  take?: number;
};
