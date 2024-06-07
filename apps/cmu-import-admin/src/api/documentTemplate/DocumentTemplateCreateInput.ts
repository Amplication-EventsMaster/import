export type DocumentTemplateCreateInput = {
  department: string;
  description?: string | null;
  documentType: string;
  identifier?: string | null;
  performanceCode?: string | null;
  shortDesc?: string | null;
  sortOrder: number;
};
