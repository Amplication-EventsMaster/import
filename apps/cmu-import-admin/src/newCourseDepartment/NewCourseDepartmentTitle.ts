import { NewCourseDepartment as TNewCourseDepartment } from "../api/newCourseDepartment/NewCourseDepartment";

export const NEWCOURSEDEPARTMENT_TITLE_FIELD = "requirementType";

export const NewCourseDepartmentTitle = (
  record: TNewCourseDepartment
): string => {
  return record.requirementType?.toString() || String(record.id);
};
