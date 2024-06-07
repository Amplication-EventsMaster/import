import { DocumentTemplate as TDocumentTemplate } from "../api/documentTemplate/DocumentTemplate";

export const DOCUMENTTEMPLATE_TITLE_FIELD = "department";

export const DocumentTemplateTitle = (record: TDocumentTemplate): string => {
  return record.department?.toString() || String(record.id);
};
