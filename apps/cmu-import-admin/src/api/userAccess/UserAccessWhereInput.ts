import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type UserAccessWhereInput = {
  access?: BooleanNullableFilter;
  id?: IntFilter;
  userId?: IntNullableFilter;
};
