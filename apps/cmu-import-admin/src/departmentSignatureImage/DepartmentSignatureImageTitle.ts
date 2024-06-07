import { DepartmentSignatureImage as TDepartmentSignatureImage } from "../api/departmentSignatureImage/DepartmentSignatureImage";

export const DEPARTMENTSIGNATUREIMAGE_TITLE_FIELD = "fileName";

export const DepartmentSignatureImageTitle = (
  record: TDepartmentSignatureImage
): string => {
  return record.fileName?.toString() || String(record.id);
};
