import { StudentDatum } from "../studentDatum/StudentDatum";
import { User } from "../user/User";

export type UserRole = {
  access: number | null;
  defaultRole: number | null;
  department: string | null;
  hideName: number | null;
  id: number;
  roleId: string | null;
  studentData?: Array<StudentDatum>;
  users?: User | null;
};
