import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";

export type IccWhereInput = {
  date?: DateTimeFilter;
  id?: IntFilter;
  score?: IntFilter;
  studentId?: IntFilter;
};
