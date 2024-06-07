import { ContactInformationWhereInput } from "./ContactInformationWhereInput";
import { ContactInformationOrderByInput } from "./ContactInformationOrderByInput";

export type ContactInformationFindManyArgs = {
  where?: ContactInformationWhereInput;
  orderBy?: Array<ContactInformationOrderByInput>;
  skip?: number;
  take?: number;
};
