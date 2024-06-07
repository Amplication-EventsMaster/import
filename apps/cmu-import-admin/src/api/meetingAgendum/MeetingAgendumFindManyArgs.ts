import { MeetingAgendumWhereInput } from "./MeetingAgendumWhereInput";
import { MeetingAgendumOrderByInput } from "./MeetingAgendumOrderByInput";

export type MeetingAgendumFindManyArgs = {
  where?: MeetingAgendumWhereInput;
  orderBy?: Array<MeetingAgendumOrderByInput>;
  skip?: number;
  take?: number;
};
