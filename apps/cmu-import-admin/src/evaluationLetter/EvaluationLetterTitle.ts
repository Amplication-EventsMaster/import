import { EvaluationLetter as TEvaluationLetter } from "../api/evaluationLetter/EvaluationLetter";

export const EVALUATIONLETTER_TITLE_FIELD = "performanceCode";

export const EvaluationLetterTitle = (record: TEvaluationLetter): string => {
  return record.performanceCode?.toString() || String(record.id);
};
