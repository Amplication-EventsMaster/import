import { QualsSpeaking as TQualsSpeaking } from "../api/qualsSpeaking/QualsSpeaking";

export const QUALSSPEAKING_TITLE_FIELD = "avQualityExp";

export const QualsSpeakingTitle = (record: TQualsSpeaking): string => {
  return record.avQualityExp?.toString() || String(record.id);
};
