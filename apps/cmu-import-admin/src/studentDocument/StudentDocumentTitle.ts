import { StudentDocument as TStudentDocument } from "../api/studentDocument/StudentDocument";

export const STUDENTDOCUMENT_TITLE_FIELD = "id";

export const StudentDocumentTitle = (record: TStudentDocument): string => {
  return record.id?.toString() || String(record.id);
};
