import { StudentDocumentWhereInput } from "./StudentDocumentWhereInput";
import { StudentDocumentOrderByInput } from "./StudentDocumentOrderByInput";

export type StudentDocumentFindManyArgs = {
  where?: StudentDocumentWhereInput;
  orderBy?: Array<StudentDocumentOrderByInput>;
  skip?: number;
  take?: number;
};
