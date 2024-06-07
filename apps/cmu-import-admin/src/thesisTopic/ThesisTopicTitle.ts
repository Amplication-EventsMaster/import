import { ThesisTopic as TThesisTopic } from "../api/thesisTopic/ThesisTopic";

export const THESISTOPIC_TITLE_FIELD = "defenseTitle";

export const ThesisTopicTitle = (record: TThesisTopic): string => {
  return record.defenseTitle?.toString() || String(record.id);
};
