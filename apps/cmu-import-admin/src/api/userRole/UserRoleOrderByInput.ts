import { SortOrder } from "../../util/SortOrder";

export type UserRoleOrderByInput = {
  access?: SortOrder;
  defaultRole?: SortOrder;
  department?: SortOrder;
  hideName?: SortOrder;
  id?: SortOrder;
  roleId?: SortOrder;
  user_id?: SortOrder;
};
