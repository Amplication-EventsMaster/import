import { ApplywebStudentMigrationDatum as TApplywebStudentMigrationDatum } from "../api/applywebStudentMigrationDatum/ApplywebStudentMigrationDatum";

export const APPLYWEBSTUDENTMIGRATIONDATUM_TITLE_FIELD = "applywebDb";

export const ApplywebStudentMigrationDatumTitle = (
  record: TApplywebStudentMigrationDatum
): string => {
  return record.applywebDb?.toString() || String(record.id);
};
