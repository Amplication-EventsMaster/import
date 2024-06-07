import { StudentDocumentPart as TStudentDocumentPart } from "../api/studentDocumentPart/StudentDocumentPart";

export const STUDENTDOCUMENTPART_TITLE_FIELD = "text";

export const StudentDocumentPartTitle = (
  record: TStudentDocumentPart
): string => {
  return record.text?.toString() || String(record.id);
};
