import { Rotation as TRotation } from "../api/rotation/Rotation";

export const ROTATION_TITLE_FIELD = "comment";

export const RotationTitle = (record: TRotation): string => {
  return record.comment?.toString() || String(record.id);
};
