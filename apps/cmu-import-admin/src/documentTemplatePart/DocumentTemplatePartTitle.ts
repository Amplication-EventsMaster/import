import { DocumentTemplatePart as TDocumentTemplatePart } from "../api/documentTemplatePart/DocumentTemplatePart";

export const DOCUMENTTEMPLATEPART_TITLE_FIELD = "defaultText";

export const DocumentTemplatePartTitle = (
  record: TDocumentTemplatePart
): string => {
  return record.defaultText?.toString() || String(record.id);
};
