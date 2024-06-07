import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type NoteUpdateInput = {
  date?: Date;
  note_type?:
    | "admin_notes"
    | "faculty_notes"
    | "general_notes"
    | "private_notes";
  studentData?: StudentDatumWhereUniqueInput;
  text?: string;
};
