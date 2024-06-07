import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";
import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type NoteWhereInput = {
  date?: DateTimeFilter;
  id?: IntFilter;
  note_type?:
    | "admin_notes"
    | "faculty_notes"
    | "general_notes"
    | "private_notes";
  studentData?: StudentDatumWhereUniqueInput;
  text?: StringFilter;
};
