import { Icc as TIcc } from "../api/icc/Icc";

export const ICC_TITLE_FIELD = "id";

export const IccTitle = (record: TIcc): string => {
  return record.id?.toString() || String(record.id);
};
