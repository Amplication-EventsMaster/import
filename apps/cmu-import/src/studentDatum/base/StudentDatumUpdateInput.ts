/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AdvisorUpdateManyWithoutStudentDataInput } from "./AdvisorUpdateManyWithoutStudentDataInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  IsDate,
  IsBoolean,
  IsInt,
  IsNumber,
} from "class-validator";
import { Type } from "class-transformer";
import { AreaUpdateManyWithoutStudentDataInput } from "./AreaUpdateManyWithoutStudentDataInput";
import { AwardUpdateManyWithoutStudentDataInput } from "./AwardUpdateManyWithoutStudentDataInput";
import { CommitteeServiceUpdateManyWithoutStudentDataInput } from "./CommitteeServiceUpdateManyWithoutStudentDataInput";
import { DegreeStatusUpdateManyWithoutStudentDataInput } from "./DegreeStatusUpdateManyWithoutStudentDataInput";
import { EmploymentUpdateManyWithoutStudentDataInput } from "./EmploymentUpdateManyWithoutStudentDataInput";
import { EvaluationLetterUpdateManyWithoutStudentDataInput } from "./EvaluationLetterUpdateManyWithoutStudentDataInput";
import { ExpNeuroReqUpdateManyWithoutStudentDataInput } from "./ExpNeuroReqUpdateManyWithoutStudentDataInput";
import { FellowshipUpdateManyWithoutStudentDataInput } from "./FellowshipUpdateManyWithoutStudentDataInput";
import { FundingUpdateManyWithoutStudentDataInput } from "./FundingUpdateManyWithoutStudentDataInput";
import { GeneralDatumUpdateManyWithoutStudentDataInput } from "./GeneralDatumUpdateManyWithoutStudentDataInput";
import { InternshipUpdateManyWithoutStudentDataInput } from "./InternshipUpdateManyWithoutStudentDataInput";
import { InternshipsCdUpdateManyWithoutStudentDataInput } from "./InternshipsCdUpdateManyWithoutStudentDataInput";
import { InternshipsIniUpdateManyWithoutStudentDataInput } from "./InternshipsIniUpdateManyWithoutStudentDataInput";
import { InternshipsIsrmUpdateManyWithoutStudentDataInput } from "./InternshipsIsrmUpdateManyWithoutStudentDataInput";
import { InterviewUpdateManyWithoutStudentDataInput } from "./InterviewUpdateManyWithoutStudentDataInput";
import { ItaUpdateManyWithoutStudentDataInput } from "./ItaUpdateManyWithoutStudentDataInput";
import { LegacyRequirementUpdateManyWithoutStudentDataInput } from "./LegacyRequirementUpdateManyWithoutStudentDataInput";
import { NoteUpdateManyWithoutStudentDataInput } from "./NoteUpdateManyWithoutStudentDataInput";
import { PracticumUpdateManyWithoutStudentDataInput } from "./PracticumUpdateManyWithoutStudentDataInput";
import { PresentationUpdateManyWithoutStudentDataInput } from "./PresentationUpdateManyWithoutStudentDataInput";
import { ProgramStatusUpdateManyWithoutStudentDataInput } from "./ProgramStatusUpdateManyWithoutStudentDataInput";
import { ProjectTopicUpdateManyWithoutStudentDataInput } from "./ProjectTopicUpdateManyWithoutStudentDataInput";
import { QualsCommitteeUpdateManyWithoutStudentDataInput } from "./QualsCommitteeUpdateManyWithoutStudentDataInput";
import { RotationUpdateManyWithoutStudentDataInput } from "./RotationUpdateManyWithoutStudentDataInput";
import { StatementUpdateManyWithoutStudentDataInput } from "./StatementUpdateManyWithoutStudentDataInput";
import { StudentAdvisorUpdateManyWithoutStudentDataInput } from "./StudentAdvisorUpdateManyWithoutStudentDataInput";
import { StudentAppUpdateManyWithoutStudentDataInput } from "./StudentAppUpdateManyWithoutStudentDataInput";
import { StudentDataHciiUpdateManyWithoutStudentDataInput } from "./StudentDataHciiUpdateManyWithoutStudentDataInput";
import { StudentDataIniUpdateManyWithoutStudentDataInput } from "./StudentDataIniUpdateManyWithoutStudentDataInput";
import { StudentDataMlUpdateManyWithoutStudentDataInput } from "./StudentDataMlUpdateManyWithoutStudentDataInput";
import { StudentDataRiWhereUniqueInput } from "../../studentDataRi/base/StudentDataRiWhereUniqueInput";
import { StudentFileUpdateManyWithoutStudentDataInput } from "./StudentFileUpdateManyWithoutStudentDataInput";
import { StudentInstituteUpdateManyWithoutStudentDataInput } from "./StudentInstituteUpdateManyWithoutStudentDataInput";
import { StudentMentorUpdateManyWithoutStudentDataInput } from "./StudentMentorUpdateManyWithoutStudentDataInput";
import { StudentOverrideUpdateManyWithoutStudentDataInput } from "./StudentOverrideUpdateManyWithoutStudentDataInput";
import { StudentPubUpdateManyWithoutStudentDataInput } from "./StudentPubUpdateManyWithoutStudentDataInput";
import { StudentResidencyUpdateManyWithoutStudentDataInput } from "./StudentResidencyUpdateManyWithoutStudentDataInput";
import { StudentSkillUpdateManyWithoutStudentDataInput } from "./StudentSkillUpdateManyWithoutStudentDataInput";
import { TeachingReqUpdateManyWithoutStudentDataInput } from "./TeachingReqUpdateManyWithoutStudentDataInput";
import { ThesisCommitteeUpdateManyWithoutStudentDataInput } from "./ThesisCommitteeUpdateManyWithoutStudentDataInput";
import { ThesisTopicUpdateManyWithoutStudentDataInput } from "./ThesisTopicUpdateManyWithoutStudentDataInput";
import { UserRoleWhereUniqueInput } from "../../userRole/base/UserRoleWhereUniqueInput";

@InputType()
class StudentDatumUpdateInput {
  @ApiProperty({
    required: false,
    type: () => AdvisorUpdateManyWithoutStudentDataInput,
  })
  @ValidateNested()
  @Type(() => AdvisorUpdateManyWithoutStudentDataInput)
  @IsOptional()
  @Field(() => AdvisorUpdateManyWithoutStudentDataInput, {
    nullable: true,
  })
  advisors?: AdvisorUpdateManyWithoutStudentDataInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  area?: string | null;

  @ApiProperty({
    required: false,
    type: () => AreaUpdateManyWithoutStudentDataInput,
  })
  @ValidateNested()
  @Type(() => AreaUpdateManyWithoutStudentDataInput)
  @IsOptional()
  @Field(() => AreaUpdateManyWithoutStudentDataInput, {
    nullable: true,
  })
  areas?: AreaUpdateManyWithoutStudentDataInput;

  @ApiProperty({
    required: false,
    type: () => AwardUpdateManyWithoutStudentDataInput,
  })
  @ValidateNested()
  @Type(() => AwardUpdateManyWithoutStudentDataInput)
  @IsOptional()
  @Field(() => AwardUpdateManyWithoutStudentDataInput, {
    nullable: true,
  })
  awards?: AwardUpdateManyWithoutStudentDataInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  citizenship?: string | null;

  @ApiProperty({
    required: false,
    type: () => CommitteeServiceUpdateManyWithoutStudentDataInput,
  })
  @ValidateNested()
  @Type(() => CommitteeServiceUpdateManyWithoutStudentDataInput)
  @IsOptional()
  @Field(() => CommitteeServiceUpdateManyWithoutStudentDataInput, {
    nullable: true,
  })
  committeeService?: CommitteeServiceUpdateManyWithoutStudentDataInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  curriculum?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  degree?: string | null;

  @ApiProperty({
    required: false,
    type: () => DegreeStatusUpdateManyWithoutStudentDataInput,
  })
  @ValidateNested()
  @Type(() => DegreeStatusUpdateManyWithoutStudentDataInput)
  @IsOptional()
  @Field(() => DegreeStatusUpdateManyWithoutStudentDataInput, {
    nullable: true,
  })
  degreeStatus?: DegreeStatusUpdateManyWithoutStudentDataInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  department?: string | null;

  @ApiProperty({
    required: false,
    type: () => EmploymentUpdateManyWithoutStudentDataInput,
  })
  @ValidateNested()
  @Type(() => EmploymentUpdateManyWithoutStudentDataInput)
  @IsOptional()
  @Field(() => EmploymentUpdateManyWithoutStudentDataInput, {
    nullable: true,
  })
  employment?: EmploymentUpdateManyWithoutStudentDataInput;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  enterDate?: Date | null;

  @ApiProperty({
    required: false,
    type: () => EvaluationLetterUpdateManyWithoutStudentDataInput,
  })
  @ValidateNested()
  @Type(() => EvaluationLetterUpdateManyWithoutStudentDataInput)
  @IsOptional()
  @Field(() => EvaluationLetterUpdateManyWithoutStudentDataInput, {
    nullable: true,
  })
  evaluationLetters?: EvaluationLetterUpdateManyWithoutStudentDataInput;

  @ApiProperty({
    required: false,
    type: () => ExpNeuroReqUpdateManyWithoutStudentDataInput,
  })
  @ValidateNested()
  @Type(() => ExpNeuroReqUpdateManyWithoutStudentDataInput)
  @IsOptional()
  @Field(() => ExpNeuroReqUpdateManyWithoutStudentDataInput, {
    nullable: true,
  })
  expNeuroReq?: ExpNeuroReqUpdateManyWithoutStudentDataInput;

  @ApiProperty({
    required: false,
    type: () => FellowshipUpdateManyWithoutStudentDataInput,
  })
  @ValidateNested()
  @Type(() => FellowshipUpdateManyWithoutStudentDataInput)
  @IsOptional()
  @Field(() => FellowshipUpdateManyWithoutStudentDataInput, {
    nullable: true,
  })
  fellowships?: FellowshipUpdateManyWithoutStudentDataInput;

  @ApiProperty({
    required: false,
    type: () => FundingUpdateManyWithoutStudentDataInput,
  })
  @ValidateNested()
  @Type(() => FundingUpdateManyWithoutStudentDataInput)
  @IsOptional()
  @Field(() => FundingUpdateManyWithoutStudentDataInput, {
    nullable: true,
  })
  funding?: FundingUpdateManyWithoutStudentDataInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  gender?: string | null;

  @ApiProperty({
    required: false,
    type: () => GeneralDatumUpdateManyWithoutStudentDataInput,
  })
  @ValidateNested()
  @Type(() => GeneralDatumUpdateManyWithoutStudentDataInput)
  @IsOptional()
  @Field(() => GeneralDatumUpdateManyWithoutStudentDataInput, {
    nullable: true,
  })
  generalData?: GeneralDatumUpdateManyWithoutStudentDataInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  guid?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  institutesId?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  institutesName?: string | null;

  @ApiProperty({
    required: false,
    type: () => InternshipUpdateManyWithoutStudentDataInput,
  })
  @ValidateNested()
  @Type(() => InternshipUpdateManyWithoutStudentDataInput)
  @IsOptional()
  @Field(() => InternshipUpdateManyWithoutStudentDataInput, {
    nullable: true,
  })
  internships?: InternshipUpdateManyWithoutStudentDataInput;

  @ApiProperty({
    required: false,
    type: () => InternshipsCdUpdateManyWithoutStudentDataInput,
  })
  @ValidateNested()
  @Type(() => InternshipsCdUpdateManyWithoutStudentDataInput)
  @IsOptional()
  @Field(() => InternshipsCdUpdateManyWithoutStudentDataInput, {
    nullable: true,
  })
  internshipsCds?: InternshipsCdUpdateManyWithoutStudentDataInput;

  @ApiProperty({
    required: false,
    type: () => InternshipsIniUpdateManyWithoutStudentDataInput,
  })
  @ValidateNested()
  @Type(() => InternshipsIniUpdateManyWithoutStudentDataInput)
  @IsOptional()
  @Field(() => InternshipsIniUpdateManyWithoutStudentDataInput, {
    nullable: true,
  })
  internshipsIni?: InternshipsIniUpdateManyWithoutStudentDataInput;

  @ApiProperty({
    required: false,
    type: () => InternshipsIsrmUpdateManyWithoutStudentDataInput,
  })
  @ValidateNested()
  @Type(() => InternshipsIsrmUpdateManyWithoutStudentDataInput)
  @IsOptional()
  @Field(() => InternshipsIsrmUpdateManyWithoutStudentDataInput, {
    nullable: true,
  })
  internshipsIsrms?: InternshipsIsrmUpdateManyWithoutStudentDataInput;

  @ApiProperty({
    required: false,
    type: () => InterviewUpdateManyWithoutStudentDataInput,
  })
  @ValidateNested()
  @Type(() => InterviewUpdateManyWithoutStudentDataInput)
  @IsOptional()
  @Field(() => InterviewUpdateManyWithoutStudentDataInput, {
    nullable: true,
  })
  interview?: InterviewUpdateManyWithoutStudentDataInput;

  @ApiProperty({
    required: false,
    type: () => ItaUpdateManyWithoutStudentDataInput,
  })
  @ValidateNested()
  @Type(() => ItaUpdateManyWithoutStudentDataInput)
  @IsOptional()
  @Field(() => ItaUpdateManyWithoutStudentDataInput, {
    nullable: true,
  })
  ita?: ItaUpdateManyWithoutStudentDataInput;

  @ApiProperty({
    required: false,
    type: () => LegacyRequirementUpdateManyWithoutStudentDataInput,
  })
  @ValidateNested()
  @Type(() => LegacyRequirementUpdateManyWithoutStudentDataInput)
  @IsOptional()
  @Field(() => LegacyRequirementUpdateManyWithoutStudentDataInput, {
    nullable: true,
  })
  legacyRequirements?: LegacyRequirementUpdateManyWithoutStudentDataInput;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  mltSwitch?: boolean | null;

  @ApiProperty({
    required: false,
    type: () => NoteUpdateManyWithoutStudentDataInput,
  })
  @ValidateNested()
  @Type(() => NoteUpdateManyWithoutStudentDataInput)
  @IsOptional()
  @Field(() => NoteUpdateManyWithoutStudentDataInput, {
    nullable: true,
  })
  notes?: NoteUpdateManyWithoutStudentDataInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  parttime?: number | null;

  @ApiProperty({
    required: false,
    type: () => PracticumUpdateManyWithoutStudentDataInput,
  })
  @ValidateNested()
  @Type(() => PracticumUpdateManyWithoutStudentDataInput)
  @IsOptional()
  @Field(() => PracticumUpdateManyWithoutStudentDataInput, {
    nullable: true,
  })
  practicum?: PracticumUpdateManyWithoutStudentDataInput;

  @ApiProperty({
    required: false,
    type: () => PresentationUpdateManyWithoutStudentDataInput,
  })
  @ValidateNested()
  @Type(() => PresentationUpdateManyWithoutStudentDataInput)
  @IsOptional()
  @Field(() => PresentationUpdateManyWithoutStudentDataInput, {
    nullable: true,
  })
  presentations?: PresentationUpdateManyWithoutStudentDataInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  program?: string | null;

  @ApiProperty({
    required: false,
    type: () => ProgramStatusUpdateManyWithoutStudentDataInput,
  })
  @ValidateNested()
  @Type(() => ProgramStatusUpdateManyWithoutStudentDataInput)
  @IsOptional()
  @Field(() => ProgramStatusUpdateManyWithoutStudentDataInput, {
    nullable: true,
  })
  programStatus?: ProgramStatusUpdateManyWithoutStudentDataInput;

  @ApiProperty({
    required: false,
    type: () => ProjectTopicUpdateManyWithoutStudentDataInput,
  })
  @ValidateNested()
  @Type(() => ProjectTopicUpdateManyWithoutStudentDataInput)
  @IsOptional()
  @Field(() => ProjectTopicUpdateManyWithoutStudentDataInput, {
    nullable: true,
  })
  projectTopic?: ProjectTopicUpdateManyWithoutStudentDataInput;

  @ApiProperty({
    required: false,
    type: () => QualsCommitteeUpdateManyWithoutStudentDataInput,
  })
  @ValidateNested()
  @Type(() => QualsCommitteeUpdateManyWithoutStudentDataInput)
  @IsOptional()
  @Field(() => QualsCommitteeUpdateManyWithoutStudentDataInput, {
    nullable: true,
  })
  qualsCommittee?: QualsCommitteeUpdateManyWithoutStudentDataInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  residency?: string | null;

  @ApiProperty({
    required: false,
    type: () => RotationUpdateManyWithoutStudentDataInput,
  })
  @ValidateNested()
  @Type(() => RotationUpdateManyWithoutStudentDataInput)
  @IsOptional()
  @Field(() => RotationUpdateManyWithoutStudentDataInput, {
    nullable: true,
  })
  rotations?: RotationUpdateManyWithoutStudentDataInput;

  @ApiProperty({
    required: false,
    type: () => StatementUpdateManyWithoutStudentDataInput,
  })
  @ValidateNested()
  @Type(() => StatementUpdateManyWithoutStudentDataInput)
  @IsOptional()
  @Field(() => StatementUpdateManyWithoutStudentDataInput, {
    nullable: true,
  })
  statements?: StatementUpdateManyWithoutStudentDataInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  status?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  statusDate?: Date | null;

  @ApiProperty({
    required: false,
    type: () => StudentAdvisorUpdateManyWithoutStudentDataInput,
  })
  @ValidateNested()
  @Type(() => StudentAdvisorUpdateManyWithoutStudentDataInput)
  @IsOptional()
  @Field(() => StudentAdvisorUpdateManyWithoutStudentDataInput, {
    nullable: true,
  })
  studentAdvisors?: StudentAdvisorUpdateManyWithoutStudentDataInput;

  @ApiProperty({
    required: false,
    type: () => StudentAppUpdateManyWithoutStudentDataInput,
  })
  @ValidateNested()
  @Type(() => StudentAppUpdateManyWithoutStudentDataInput)
  @IsOptional()
  @Field(() => StudentAppUpdateManyWithoutStudentDataInput, {
    nullable: true,
  })
  studentApps?: StudentAppUpdateManyWithoutStudentDataInput;

  @ApiProperty({
    required: false,
    type: () => StudentDataHciiUpdateManyWithoutStudentDataInput,
  })
  @ValidateNested()
  @Type(() => StudentDataHciiUpdateManyWithoutStudentDataInput)
  @IsOptional()
  @Field(() => StudentDataHciiUpdateManyWithoutStudentDataInput, {
    nullable: true,
  })
  studentDataHcii?: StudentDataHciiUpdateManyWithoutStudentDataInput;

  @ApiProperty({
    required: false,
    type: () => StudentDataIniUpdateManyWithoutStudentDataInput,
  })
  @ValidateNested()
  @Type(() => StudentDataIniUpdateManyWithoutStudentDataInput)
  @IsOptional()
  @Field(() => StudentDataIniUpdateManyWithoutStudentDataInput, {
    nullable: true,
  })
  studentDataIni?: StudentDataIniUpdateManyWithoutStudentDataInput;

  @ApiProperty({
    required: false,
    type: () => StudentDataMlUpdateManyWithoutStudentDataInput,
  })
  @ValidateNested()
  @Type(() => StudentDataMlUpdateManyWithoutStudentDataInput)
  @IsOptional()
  @Field(() => StudentDataMlUpdateManyWithoutStudentDataInput, {
    nullable: true,
  })
  studentDataMl?: StudentDataMlUpdateManyWithoutStudentDataInput;

  @ApiProperty({
    required: false,
    type: () => StudentDataRiWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => StudentDataRiWhereUniqueInput)
  @IsOptional()
  @Field(() => StudentDataRiWhereUniqueInput, {
    nullable: true,
  })
  studentDataRi?: StudentDataRiWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => StudentFileUpdateManyWithoutStudentDataInput,
  })
  @ValidateNested()
  @Type(() => StudentFileUpdateManyWithoutStudentDataInput)
  @IsOptional()
  @Field(() => StudentFileUpdateManyWithoutStudentDataInput, {
    nullable: true,
  })
  studentFiles?: StudentFileUpdateManyWithoutStudentDataInput;

  @ApiProperty({
    required: false,
    type: () => StudentInstituteUpdateManyWithoutStudentDataInput,
  })
  @ValidateNested()
  @Type(() => StudentInstituteUpdateManyWithoutStudentDataInput)
  @IsOptional()
  @Field(() => StudentInstituteUpdateManyWithoutStudentDataInput, {
    nullable: true,
  })
  studentInstitutes?: StudentInstituteUpdateManyWithoutStudentDataInput;

  @ApiProperty({
    required: false,
    type: () => StudentMentorUpdateManyWithoutStudentDataInput,
  })
  @ValidateNested()
  @Type(() => StudentMentorUpdateManyWithoutStudentDataInput)
  @IsOptional()
  @Field(() => StudentMentorUpdateManyWithoutStudentDataInput, {
    nullable: true,
  })
  studentMentors?: StudentMentorUpdateManyWithoutStudentDataInput;

  @ApiProperty({
    required: false,
    type: () => StudentOverrideUpdateManyWithoutStudentDataInput,
  })
  @ValidateNested()
  @Type(() => StudentOverrideUpdateManyWithoutStudentDataInput)
  @IsOptional()
  @Field(() => StudentOverrideUpdateManyWithoutStudentDataInput, {
    nullable: true,
  })
  studentOverrides?: StudentOverrideUpdateManyWithoutStudentDataInput;

  @ApiProperty({
    required: false,
    type: () => StudentPubUpdateManyWithoutStudentDataInput,
  })
  @ValidateNested()
  @Type(() => StudentPubUpdateManyWithoutStudentDataInput)
  @IsOptional()
  @Field(() => StudentPubUpdateManyWithoutStudentDataInput, {
    nullable: true,
  })
  studentPubs?: StudentPubUpdateManyWithoutStudentDataInput;

  @ApiProperty({
    required: false,
    type: () => StudentResidencyUpdateManyWithoutStudentDataInput,
  })
  @ValidateNested()
  @Type(() => StudentResidencyUpdateManyWithoutStudentDataInput)
  @IsOptional()
  @Field(() => StudentResidencyUpdateManyWithoutStudentDataInput, {
    nullable: true,
  })
  studentResidency?: StudentResidencyUpdateManyWithoutStudentDataInput;

  @ApiProperty({
    required: false,
    type: () => StudentSkillUpdateManyWithoutStudentDataInput,
  })
  @ValidateNested()
  @Type(() => StudentSkillUpdateManyWithoutStudentDataInput)
  @IsOptional()
  @Field(() => StudentSkillUpdateManyWithoutStudentDataInput, {
    nullable: true,
  })
  studentSkills?: StudentSkillUpdateManyWithoutStudentDataInput;

  @ApiProperty({
    required: false,
    type: () => TeachingReqUpdateManyWithoutStudentDataInput,
  })
  @ValidateNested()
  @Type(() => TeachingReqUpdateManyWithoutStudentDataInput)
  @IsOptional()
  @Field(() => TeachingReqUpdateManyWithoutStudentDataInput, {
    nullable: true,
  })
  teachingReq?: TeachingReqUpdateManyWithoutStudentDataInput;

  @ApiProperty({
    required: false,
    type: () => ThesisCommitteeUpdateManyWithoutStudentDataInput,
  })
  @ValidateNested()
  @Type(() => ThesisCommitteeUpdateManyWithoutStudentDataInput)
  @IsOptional()
  @Field(() => ThesisCommitteeUpdateManyWithoutStudentDataInput, {
    nullable: true,
  })
  thesisCommittee?: ThesisCommitteeUpdateManyWithoutStudentDataInput;

  @ApiProperty({
    required: false,
    type: () => ThesisTopicUpdateManyWithoutStudentDataInput,
  })
  @ValidateNested()
  @Type(() => ThesisTopicUpdateManyWithoutStudentDataInput)
  @IsOptional()
  @Field(() => ThesisTopicUpdateManyWithoutStudentDataInput, {
    nullable: true,
  })
  thesisTopic?: ThesisTopicUpdateManyWithoutStudentDataInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  undergrad?: string | null;

  @ApiProperty({
    required: false,
    type: () => UserRoleWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserRoleWhereUniqueInput)
  @IsOptional()
  @Field(() => UserRoleWhereUniqueInput, {
    nullable: true,
  })
  userRole?: UserRoleWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  year?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  yearAdjust?: string | null;
}

export { StudentDatumUpdateInput as StudentDatumUpdateInput };
