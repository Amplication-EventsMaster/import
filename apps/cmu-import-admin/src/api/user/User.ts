import { UserRole } from "../userRole/UserRole";

export type User = {
  andrewId: string | null;
  email: string | null;
  firstName: string | null;
  id: number;
  lastName: string | null;
  middleName: string | null;
  nickname: string | null;
  owner: string | null;
  ownerDisplay: string | null;
  username: string | null;
  userRole?: Array<UserRole>;
};
