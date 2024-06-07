import { BlackfridayApplywebApplication as TBlackfridayApplywebApplication } from "../api/blackfridayApplywebApplication/BlackfridayApplywebApplication";

export const BLACKFRIDAYAPPLYWEBAPPLICATION_TITLE_FIELD = "id";

export const BlackfridayApplywebApplicationTitle = (
  record: TBlackfridayApplywebApplication
): string => {
  return record.id?.toString() || String(record.id);
};
