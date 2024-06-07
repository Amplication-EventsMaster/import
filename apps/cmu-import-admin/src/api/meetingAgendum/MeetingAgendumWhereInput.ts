import { IntFilter } from "../../util/IntFilter";

export type MeetingAgendumWhereInput = {
  id?: IntFilter;
  meetingId?: IntFilter;
  presentOrder?: IntFilter;
  studentId?: IntFilter;
};
