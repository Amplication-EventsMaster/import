import { CourseDepartment as TCourseDepartment } from "../api/courseDepartment/CourseDepartment";

export const COURSEDEPARTMENT_TITLE_FIELD = "requirementType";

export const CourseDepartmentTitle = (record: TCourseDepartment): string => {
  return record.requirementType?.toString() || String(record.id);
};
