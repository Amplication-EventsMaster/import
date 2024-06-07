import { StudentDocumentPartWhereInput } from "./StudentDocumentPartWhereInput";
import { StudentDocumentPartOrderByInput } from "./StudentDocumentPartOrderByInput";

export type StudentDocumentPartFindManyArgs = {
  where?: StudentDocumentPartWhereInput;
  orderBy?: Array<StudentDocumentPartOrderByInput>;
  skip?: number;
  take?: number;
};
