import { FacultyCert as TFacultyCert } from "../api/facultyCert/FacultyCert";

export const FACULTYCERT_TITLE_FIELD = "category";

export const FacultyCertTitle = (record: TFacultyCert): string => {
  return record.category?.toString() || String(record.id);
};
