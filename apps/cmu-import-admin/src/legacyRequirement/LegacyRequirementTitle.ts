import { LegacyRequirement as TLegacyRequirement } from "../api/legacyRequirement/LegacyRequirement";

export const LEGACYREQUIREMENT_TITLE_FIELD = "requirementTitle";

export const LegacyRequirementTitle = (record: TLegacyRequirement): string => {
  return record.requirementTitle?.toString() || String(record.id);
};
