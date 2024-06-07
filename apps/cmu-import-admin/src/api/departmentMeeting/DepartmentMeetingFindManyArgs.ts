import { DepartmentMeetingWhereInput } from "./DepartmentMeetingWhereInput";
import { DepartmentMeetingOrderByInput } from "./DepartmentMeetingOrderByInput";

export type DepartmentMeetingFindManyArgs = {
  where?: DepartmentMeetingWhereInput;
  orderBy?: Array<DepartmentMeetingOrderByInput>;
  skip?: number;
  take?: number;
};
