export type StudentDocumentPartCreateInput = {
  documentId: number;
  isDefault?: number | null;
  templatePartId: number;
  text?: string | null;
};
