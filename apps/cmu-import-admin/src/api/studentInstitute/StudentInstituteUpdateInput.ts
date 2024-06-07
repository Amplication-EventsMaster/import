import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type StudentInstituteUpdateInput = {
  degree?: string | null;
  institutesAbbr?: string | null;
  institutesId?: string | null;
  institutesName?: string | null;
  institutesText?: string | null;
  irank?: number | null;
  major?: string | null;
  studentData?: StudentDatumWhereUniqueInput;
};
