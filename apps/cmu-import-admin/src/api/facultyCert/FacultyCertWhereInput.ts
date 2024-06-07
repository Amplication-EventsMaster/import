import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";

export type FacultyCertWhereInput = {
  category?: StringFilter;
  certDate?: DateTimeFilter;
  facultyId?: IntFilter;
  id?: IntFilter;
  refId?: IntFilter;
};
