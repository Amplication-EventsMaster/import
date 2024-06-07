export type DepartmentSignatureImageCreateInput = {
  displayOrder: number;
  dsigId: number;
  fileDate: Date;
  fileName?: string | null;
  fileSize?: number | null;
  fileType?: string | null;
  signatureName: string;
};
