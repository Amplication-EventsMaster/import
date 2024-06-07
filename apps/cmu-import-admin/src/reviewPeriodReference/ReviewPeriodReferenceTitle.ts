import { ReviewPeriodReference as TReviewPeriodReference } from "../api/reviewPeriodReference/ReviewPeriodReference";

export const REVIEWPERIODREFERENCE_TITLE_FIELD = "refName";

export const ReviewPeriodReferenceTitle = (
  record: TReviewPeriodReference
): string => {
  return record.refName?.toString() || String(record.id);
};
