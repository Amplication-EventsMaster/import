import { IntFilter } from "../../util/IntFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ApplywebStudentMigrationDatumWhereInput = {
  appId?: IntFilter;
  applywebDb?: StringNullableFilter;
  applywebDbUserId?: IntNullableFilter;
  applywebDbUserTable?: StringNullableFilter;
  id?: StringFilter;
};
