import { EventScheduleWhereInput } from "./EventScheduleWhereInput";
import { EventScheduleOrderByInput } from "./EventScheduleOrderByInput";

export type EventScheduleFindManyArgs = {
  where?: EventScheduleWhereInput;
  orderBy?: Array<EventScheduleOrderByInput>;
  skip?: number;
  take?: number;
};
