import { QualsResearchForOtherStudent as TQualsResearchForOtherStudent } from "../api/qualsResearchForOtherStudent/QualsResearchForOtherStudent";

export const QUALSRESEARCHFOROTHERSTUDENT_TITLE_FIELD = "approachExp";

export const QualsResearchForOtherStudentTitle = (
  record: TQualsResearchForOtherStudent
): string => {
  return record.approachExp?.toString() || String(record.id);
};
