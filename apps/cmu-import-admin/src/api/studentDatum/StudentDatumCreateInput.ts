import { AdvisorCreateNestedManyWithoutStudentDataInput } from "./AdvisorCreateNestedManyWithoutStudentDataInput";
import { AreaCreateNestedManyWithoutStudentDataInput } from "./AreaCreateNestedManyWithoutStudentDataInput";
import { AwardCreateNestedManyWithoutStudentDataInput } from "./AwardCreateNestedManyWithoutStudentDataInput";
import { CommitteeServiceCreateNestedManyWithoutStudentDataInput } from "./CommitteeServiceCreateNestedManyWithoutStudentDataInput";
import { DegreeStatusCreateNestedManyWithoutStudentDataInput } from "./DegreeStatusCreateNestedManyWithoutStudentDataInput";
import { EmploymentCreateNestedManyWithoutStudentDataInput } from "./EmploymentCreateNestedManyWithoutStudentDataInput";
import { EvaluationLetterCreateNestedManyWithoutStudentDataInput } from "./EvaluationLetterCreateNestedManyWithoutStudentDataInput";
import { ExpNeuroReqCreateNestedManyWithoutStudentDataInput } from "./ExpNeuroReqCreateNestedManyWithoutStudentDataInput";
import { FellowshipCreateNestedManyWithoutStudentDataInput } from "./FellowshipCreateNestedManyWithoutStudentDataInput";
import { FundingCreateNestedManyWithoutStudentDataInput } from "./FundingCreateNestedManyWithoutStudentDataInput";
import { GeneralDatumCreateNestedManyWithoutStudentDataInput } from "./GeneralDatumCreateNestedManyWithoutStudentDataInput";
import { InternshipCreateNestedManyWithoutStudentDataInput } from "./InternshipCreateNestedManyWithoutStudentDataInput";
import { InternshipsCdCreateNestedManyWithoutStudentDataInput } from "./InternshipsCdCreateNestedManyWithoutStudentDataInput";
import { InternshipsIniCreateNestedManyWithoutStudentDataInput } from "./InternshipsIniCreateNestedManyWithoutStudentDataInput";
import { InternshipsIsrmCreateNestedManyWithoutStudentDataInput } from "./InternshipsIsrmCreateNestedManyWithoutStudentDataInput";
import { InterviewCreateNestedManyWithoutStudentDataInput } from "./InterviewCreateNestedManyWithoutStudentDataInput";
import { ItaCreateNestedManyWithoutStudentDataInput } from "./ItaCreateNestedManyWithoutStudentDataInput";
import { LegacyRequirementCreateNestedManyWithoutStudentDataInput } from "./LegacyRequirementCreateNestedManyWithoutStudentDataInput";
import { NoteCreateNestedManyWithoutStudentDataInput } from "./NoteCreateNestedManyWithoutStudentDataInput";
import { PracticumCreateNestedManyWithoutStudentDataInput } from "./PracticumCreateNestedManyWithoutStudentDataInput";
import { PresentationCreateNestedManyWithoutStudentDataInput } from "./PresentationCreateNestedManyWithoutStudentDataInput";
import { ProgramStatusCreateNestedManyWithoutStudentDataInput } from "./ProgramStatusCreateNestedManyWithoutStudentDataInput";
import { ProjectTopicCreateNestedManyWithoutStudentDataInput } from "./ProjectTopicCreateNestedManyWithoutStudentDataInput";
import { QualsCommitteeCreateNestedManyWithoutStudentDataInput } from "./QualsCommitteeCreateNestedManyWithoutStudentDataInput";
import { RotationCreateNestedManyWithoutStudentDataInput } from "./RotationCreateNestedManyWithoutStudentDataInput";
import { StatementCreateNestedManyWithoutStudentDataInput } from "./StatementCreateNestedManyWithoutStudentDataInput";
import { StudentAdvisorCreateNestedManyWithoutStudentDataInput } from "./StudentAdvisorCreateNestedManyWithoutStudentDataInput";
import { StudentAppCreateNestedManyWithoutStudentDataInput } from "./StudentAppCreateNestedManyWithoutStudentDataInput";
import { StudentDataHciiCreateNestedManyWithoutStudentDataInput } from "./StudentDataHciiCreateNestedManyWithoutStudentDataInput";
import { StudentDataIniCreateNestedManyWithoutStudentDataInput } from "./StudentDataIniCreateNestedManyWithoutStudentDataInput";
import { StudentDataMlCreateNestedManyWithoutStudentDataInput } from "./StudentDataMlCreateNestedManyWithoutStudentDataInput";
import { StudentDataRiWhereUniqueInput } from "../studentDataRi/StudentDataRiWhereUniqueInput";
import { StudentFileCreateNestedManyWithoutStudentDataInput } from "./StudentFileCreateNestedManyWithoutStudentDataInput";
import { StudentInstituteCreateNestedManyWithoutStudentDataInput } from "./StudentInstituteCreateNestedManyWithoutStudentDataInput";
import { StudentMentorCreateNestedManyWithoutStudentDataInput } from "./StudentMentorCreateNestedManyWithoutStudentDataInput";
import { StudentOverrideCreateNestedManyWithoutStudentDataInput } from "./StudentOverrideCreateNestedManyWithoutStudentDataInput";
import { StudentPubCreateNestedManyWithoutStudentDataInput } from "./StudentPubCreateNestedManyWithoutStudentDataInput";
import { StudentResidencyCreateNestedManyWithoutStudentDataInput } from "./StudentResidencyCreateNestedManyWithoutStudentDataInput";
import { StudentSkillCreateNestedManyWithoutStudentDataInput } from "./StudentSkillCreateNestedManyWithoutStudentDataInput";
import { TeachingReqCreateNestedManyWithoutStudentDataInput } from "./TeachingReqCreateNestedManyWithoutStudentDataInput";
import { ThesisCommitteeCreateNestedManyWithoutStudentDataInput } from "./ThesisCommitteeCreateNestedManyWithoutStudentDataInput";
import { ThesisTopicCreateNestedManyWithoutStudentDataInput } from "./ThesisTopicCreateNestedManyWithoutStudentDataInput";
import { UserRoleWhereUniqueInput } from "../userRole/UserRoleWhereUniqueInput";

export type StudentDatumCreateInput = {
  advisors?: AdvisorCreateNestedManyWithoutStudentDataInput;
  area?: string | null;
  areas?: AreaCreateNestedManyWithoutStudentDataInput;
  awards?: AwardCreateNestedManyWithoutStudentDataInput;
  citizenship?: string | null;
  committeeService?: CommitteeServiceCreateNestedManyWithoutStudentDataInput;
  curriculum?: string | null;
  degree?: string | null;
  degreeStatus?: DegreeStatusCreateNestedManyWithoutStudentDataInput;
  department?: string | null;
  employment?: EmploymentCreateNestedManyWithoutStudentDataInput;
  enterDate?: Date | null;
  evaluationLetters?: EvaluationLetterCreateNestedManyWithoutStudentDataInput;
  expNeuroReq?: ExpNeuroReqCreateNestedManyWithoutStudentDataInput;
  fellowships?: FellowshipCreateNestedManyWithoutStudentDataInput;
  funding?: FundingCreateNestedManyWithoutStudentDataInput;
  gender?: string | null;
  generalData?: GeneralDatumCreateNestedManyWithoutStudentDataInput;
  guid?: string | null;
  institutesId?: string | null;
  institutesName?: string | null;
  internships?: InternshipCreateNestedManyWithoutStudentDataInput;
  internshipsCds?: InternshipsCdCreateNestedManyWithoutStudentDataInput;
  internshipsIni?: InternshipsIniCreateNestedManyWithoutStudentDataInput;
  internshipsIsrms?: InternshipsIsrmCreateNestedManyWithoutStudentDataInput;
  interview?: InterviewCreateNestedManyWithoutStudentDataInput;
  ita?: ItaCreateNestedManyWithoutStudentDataInput;
  legacyRequirements?: LegacyRequirementCreateNestedManyWithoutStudentDataInput;
  mltSwitch?: boolean | null;
  notes?: NoteCreateNestedManyWithoutStudentDataInput;
  parttime?: number | null;
  practicum?: PracticumCreateNestedManyWithoutStudentDataInput;
  presentations?: PresentationCreateNestedManyWithoutStudentDataInput;
  program?: string | null;
  programStatus?: ProgramStatusCreateNestedManyWithoutStudentDataInput;
  projectTopic?: ProjectTopicCreateNestedManyWithoutStudentDataInput;
  qualsCommittee?: QualsCommitteeCreateNestedManyWithoutStudentDataInput;
  residency?: string | null;
  rotations?: RotationCreateNestedManyWithoutStudentDataInput;
  statements?: StatementCreateNestedManyWithoutStudentDataInput;
  status?: string | null;
  statusDate?: Date | null;
  studentAdvisors?: StudentAdvisorCreateNestedManyWithoutStudentDataInput;
  studentApps?: StudentAppCreateNestedManyWithoutStudentDataInput;
  studentDataHcii?: StudentDataHciiCreateNestedManyWithoutStudentDataInput;
  studentDataIni?: StudentDataIniCreateNestedManyWithoutStudentDataInput;
  studentDataMl?: StudentDataMlCreateNestedManyWithoutStudentDataInput;
  studentDataRi?: StudentDataRiWhereUniqueInput | null;
  studentFiles?: StudentFileCreateNestedManyWithoutStudentDataInput;
  studentInstitutes?: StudentInstituteCreateNestedManyWithoutStudentDataInput;
  studentMentors?: StudentMentorCreateNestedManyWithoutStudentDataInput;
  studentOverrides?: StudentOverrideCreateNestedManyWithoutStudentDataInput;
  studentPubs?: StudentPubCreateNestedManyWithoutStudentDataInput;
  studentResidency?: StudentResidencyCreateNestedManyWithoutStudentDataInput;
  studentSkills?: StudentSkillCreateNestedManyWithoutStudentDataInput;
  teachingReq?: TeachingReqCreateNestedManyWithoutStudentDataInput;
  thesisCommittee?: ThesisCommitteeCreateNestedManyWithoutStudentDataInput;
  thesisTopic?: ThesisTopicCreateNestedManyWithoutStudentDataInput;
  undergrad?: string | null;
  userRole?: UserRoleWhereUniqueInput | null;
  year?: number | null;
  yearAdjust?: string | null;
};
