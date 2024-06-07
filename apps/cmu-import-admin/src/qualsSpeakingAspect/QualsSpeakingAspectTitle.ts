import { QualsSpeakingAspect as TQualsSpeakingAspect } from "../api/qualsSpeakingAspect/QualsSpeakingAspect";

export const QUALSSPEAKINGASPECT_TITLE_FIELD = "text";

export const QualsSpeakingAspectTitle = (
  record: TQualsSpeakingAspect
): string => {
  return record.text?.toString() || String(record.id);
};
