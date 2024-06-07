import { ProjectTopic as TProjectTopic } from "../api/projectTopic/ProjectTopic";

export const PROJECTTOPIC_TITLE_FIELD = "clientName";

export const ProjectTopicTitle = (record: TProjectTopic): string => {
  return record.clientName?.toString() || String(record.id);
};
