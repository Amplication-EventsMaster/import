import { StudentDatum } from "../studentDatum/StudentDatum";

export type Note = {
  date: Date;
  id: number;
  note_type?:
    | "admin_notes"
    | "faculty_notes"
    | "general_notes"
    | "private_notes";
  studentData?: StudentDatum;
  text: string;
};
