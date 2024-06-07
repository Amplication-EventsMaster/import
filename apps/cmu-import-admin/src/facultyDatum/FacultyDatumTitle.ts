import { FacultyDatum as TFacultyDatum } from "../api/facultyDatum/FacultyDatum";

export const FACULTYDATUM_TITLE_FIELD = "institutesName";

export const FacultyDatumTitle = (record: TFacultyDatum): string => {
  return record.institutesName?.toString() || String(record.id);
};
