import { Area as TArea } from "../api/area/Area";

export const AREA_TITLE_FIELD = "area";

export const AreaTitle = (record: TArea): string => {
  return record.area?.toString() || String(record.id);
};
