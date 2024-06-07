import { Statement as TStatement } from "../api/statement/Statement";

export const STATEMENT_TITLE_FIELD = "text";

export const StatementTitle = (record: TStatement): string => {
  return record.text?.toString() || String(record.id);
};
