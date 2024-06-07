import { QualsResearch as TQualsResearch } from "../api/qualsResearch/QualsResearch";

export const QUALSRESEARCH_TITLE_FIELD = "approachExp";

export const QualsResearchTitle = (record: TQualsResearch): string => {
  return record.approachExp?.toString() || String(record.id);
};
