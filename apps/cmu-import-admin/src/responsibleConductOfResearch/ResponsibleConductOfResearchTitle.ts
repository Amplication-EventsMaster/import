import { ResponsibleConductOfResearch as TResponsibleConductOfResearch } from "../api/responsibleConductOfResearch/ResponsibleConductOfResearch";

export const RESPONSIBLECONDUCTOFRESEARCH_TITLE_FIELD = "description";

export const ResponsibleConductOfResearchTitle = (
  record: TResponsibleConductOfResearch
): string => {
  return record.description?.toString() || String(record.id);
};
