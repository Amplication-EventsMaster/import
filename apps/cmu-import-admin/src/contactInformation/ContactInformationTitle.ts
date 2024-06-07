import { ContactInformation as TContactInformation } from "../api/contactInformation/ContactInformation";

export const CONTACTINFORMATION_TITLE_FIELD = "address1";

export const ContactInformationTitle = (
  record: TContactInformation
): string => {
  return record.address1?.toString() || String(record.id);
};
