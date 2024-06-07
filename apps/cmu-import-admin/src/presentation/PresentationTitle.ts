import { Presentation as TPresentation } from "../api/presentation/Presentation";

export const PRESENTATION_TITLE_FIELD = "id";

export const PresentationTitle = (record: TPresentation): string => {
  return record.id?.toString() || String(record.id);
};
