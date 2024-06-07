import { DepartmentSignature as TDepartmentSignature } from "../api/departmentSignature/DepartmentSignature";

export const DEPARTMENTSIGNATURE_TITLE_FIELD = "department";

export const DepartmentSignatureTitle = (
  record: TDepartmentSignature
): string => {
  return record.department?.toString() || String(record.id);
};
