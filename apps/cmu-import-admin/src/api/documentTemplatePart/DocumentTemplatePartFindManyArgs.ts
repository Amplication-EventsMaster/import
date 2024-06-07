import { DocumentTemplatePartWhereInput } from "./DocumentTemplatePartWhereInput";
import { DocumentTemplatePartOrderByInput } from "./DocumentTemplatePartOrderByInput";

export type DocumentTemplatePartFindManyArgs = {
  where?: DocumentTemplatePartWhereInput;
  orderBy?: Array<DocumentTemplatePartOrderByInput>;
  skip?: number;
  take?: number;
};
