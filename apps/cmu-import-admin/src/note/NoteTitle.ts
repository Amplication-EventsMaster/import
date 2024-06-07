import { Note as TNote } from "../api/note/Note";

export const NOTE_TITLE_FIELD = "text";

export const NoteTitle = (record: TNote): string => {
  return record.text?.toString() || String(record.id);
};
