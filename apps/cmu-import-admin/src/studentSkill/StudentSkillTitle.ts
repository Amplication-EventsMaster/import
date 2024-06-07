import { StudentSkill as TStudentSkill } from "../api/studentSkill/StudentSkill";

export const STUDENTSKILL_TITLE_FIELD = "title";

export const StudentSkillTitle = (record: TStudentSkill): string => {
  return record.title?.toString() || String(record.id);
};
