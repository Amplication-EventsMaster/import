import { MeetingParameterWhereInput } from "./MeetingParameterWhereInput";
import { MeetingParameterOrderByInput } from "./MeetingParameterOrderByInput";

export type MeetingParameterFindManyArgs = {
  where?: MeetingParameterWhereInput;
  orderBy?: Array<MeetingParameterOrderByInput>;
  skip?: number;
  take?: number;
};
