import { StudentDatum } from "../studentDatum/StudentDatum";

export type Employment = {
  address1: string | null;
  address2: string | null;
  city: string | null;
  country: string | null;
  date: Date | null;
  email: string | null;
  employer: string | null;
  id: number;
  phone: string | null;
  state: string | null;
  studentData?: StudentDatum;
  typeField: string | null;
  zip: string | null;
};
