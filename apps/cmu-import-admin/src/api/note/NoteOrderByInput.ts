import { SortOrder } from "../../util/SortOrder";

export type NoteOrderByInput = {
  date?: SortOrder;
  id?: SortOrder;
  note_type?: SortOrder;
  student_id?: SortOrder;
  text?: SortOrder;
};
