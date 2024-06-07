import { Evaluator as TEvaluator } from "../api/evaluator/Evaluator";

export const EVALUATOR_TITLE_FIELD = "id";

export const EvaluatorTitle = (record: TEvaluator): string => {
  return record.id?.toString() || String(record.id);
};
