import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type EmploymentUpdateInput = {
  address1?: string | null;
  address2?: string | null;
  city?: string | null;
  country?: string | null;
  date?: Date | null;
  email?: string | null;
  employer?: string | null;
  phone?: string | null;
  state?: string | null;
  studentData?: StudentDatumWhereUniqueInput;
  typeField?: string | null;
  zip?: string | null;
};
