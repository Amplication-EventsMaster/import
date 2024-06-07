import { ScheduledMeetingWhereInput } from "./ScheduledMeetingWhereInput";
import { ScheduledMeetingOrderByInput } from "./ScheduledMeetingOrderByInput";

export type ScheduledMeetingFindManyArgs = {
  where?: ScheduledMeetingWhereInput;
  orderBy?: Array<ScheduledMeetingOrderByInput>;
  skip?: number;
  take?: number;
};
