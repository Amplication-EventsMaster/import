import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AgendaWhereInput = {
  department?: StringFilter;
  id?: IntFilter;
  longDescription?: StringNullableFilter;
  shortDescription?: StringFilter;
};
