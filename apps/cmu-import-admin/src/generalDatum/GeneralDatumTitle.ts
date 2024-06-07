import { GeneralDatum as TGeneralDatum } from "../api/generalDatum/GeneralDatum";

export const GENERALDATUM_TITLE_FIELD = "text";

export const GeneralDatumTitle = (record: TGeneralDatum): string => {
  return record.text?.toString() || String(record.id);
};
