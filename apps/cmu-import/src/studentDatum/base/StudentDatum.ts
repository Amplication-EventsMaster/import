/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Advisor } from "../../advisor/base/Advisor";
import {
  ValidateNested,
  IsOptional,
  IsString,
  IsDate,
  IsInt,
  IsBoolean,
  IsNumber,
} from "class-validator";
import { Type } from "class-transformer";
import { Area } from "../../area/base/Area";
import { Award } from "../../award/base/Award";
import { CommitteeService } from "../../committeeService/base/CommitteeService";
import { DegreeStatus } from "../../degreeStatus/base/DegreeStatus";
import { Employment } from "../../employment/base/Employment";
import { EvaluationLetter } from "../../evaluationLetter/base/EvaluationLetter";
import { ExpNeuroReq } from "../../expNeuroReq/base/ExpNeuroReq";
import { Fellowship } from "../../fellowship/base/Fellowship";
import { Funding } from "../../funding/base/Funding";
import { GeneralDatum } from "../../generalDatum/base/GeneralDatum";
import { Internship } from "../../internship/base/Internship";
import { InternshipsCd } from "../../internshipsCd/base/InternshipsCd";
import { InternshipsIni } from "../../internshipsIni/base/InternshipsIni";
import { InternshipsIsrm } from "../../internshipsIsrm/base/InternshipsIsrm";
import { Interview } from "../../interview/base/Interview";
import { Ita } from "../../ita/base/Ita";
import { LegacyRequirement } from "../../legacyRequirement/base/LegacyRequirement";
import { Note } from "../../note/base/Note";
import { Practicum } from "../../practicum/base/Practicum";
import { Presentation } from "../../presentation/base/Presentation";
import { ProgramStatus } from "../../programStatus/base/ProgramStatus";
import { ProjectTopic } from "../../projectTopic/base/ProjectTopic";
import { QualsCommittee } from "../../qualsCommittee/base/QualsCommittee";
import { Rotation } from "../../rotation/base/Rotation";
import { Statement } from "../../statement/base/Statement";
import { StudentAdvisor } from "../../studentAdvisor/base/StudentAdvisor";
import { StudentApp } from "../../studentApp/base/StudentApp";
import { StudentDataHcii } from "../../studentDataHcii/base/StudentDataHcii";
import { StudentDataIni } from "../../studentDataIni/base/StudentDataIni";
import { StudentDataMl } from "../../studentDataMl/base/StudentDataMl";
import { StudentDataRi } from "../../studentDataRi/base/StudentDataRi";
import { StudentFile } from "../../studentFile/base/StudentFile";
import { StudentInstitute } from "../../studentInstitute/base/StudentInstitute";
import { StudentMentor } from "../../studentMentor/base/StudentMentor";
import { StudentOverride } from "../../studentOverride/base/StudentOverride";
import { StudentPub } from "../../studentPub/base/StudentPub";
import { StudentResidency } from "../../studentResidency/base/StudentResidency";
import { StudentSkill } from "../../studentSkill/base/StudentSkill";
import { TeachingReq } from "../../teachingReq/base/TeachingReq";
import { ThesisCommittee } from "../../thesisCommittee/base/ThesisCommittee";
import { ThesisTopic } from "../../thesisTopic/base/ThesisTopic";
import { UserRole } from "../../userRole/base/UserRole";

@ObjectType()
class StudentDatum {
  @ApiProperty({
    required: false,
    type: () => [Advisor],
  })
  @ValidateNested()
  @Type(() => Advisor)
  @IsOptional()
  advisors?: Array<Advisor>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  area!: string | null;

  @ApiProperty({
    required: false,
    type: () => [Area],
  })
  @ValidateNested()
  @Type(() => Area)
  @IsOptional()
  areas?: Array<Area>;

  @ApiProperty({
    required: false,
    type: () => [Award],
  })
  @ValidateNested()
  @Type(() => Award)
  @IsOptional()
  awards?: Array<Award>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  citizenship!: string | null;

  @ApiProperty({
    required: false,
    type: () => [CommitteeService],
  })
  @ValidateNested()
  @Type(() => CommitteeService)
  @IsOptional()
  committeeService?: Array<CommitteeService>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  curriculum!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  degree!: string | null;

  @ApiProperty({
    required: false,
    type: () => [DegreeStatus],
  })
  @ValidateNested()
  @Type(() => DegreeStatus)
  @IsOptional()
  degreeStatus?: Array<DegreeStatus>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  department!: string | null;

  @ApiProperty({
    required: false,
    type: () => [Employment],
  })
  @ValidateNested()
  @Type(() => Employment)
  @IsOptional()
  employment?: Array<Employment>;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  enterDate!: Date | null;

  @ApiProperty({
    required: false,
    type: () => [EvaluationLetter],
  })
  @ValidateNested()
  @Type(() => EvaluationLetter)
  @IsOptional()
  evaluationLetters?: Array<EvaluationLetter>;

  @ApiProperty({
    required: false,
    type: () => [ExpNeuroReq],
  })
  @ValidateNested()
  @Type(() => ExpNeuroReq)
  @IsOptional()
  expNeuroReq?: Array<ExpNeuroReq>;

  @ApiProperty({
    required: false,
    type: () => [Fellowship],
  })
  @ValidateNested()
  @Type(() => Fellowship)
  @IsOptional()
  fellowships?: Array<Fellowship>;

  @ApiProperty({
    required: false,
    type: () => [Funding],
  })
  @ValidateNested()
  @Type(() => Funding)
  @IsOptional()
  funding?: Array<Funding>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  gender!: string | null;

  @ApiProperty({
    required: false,
    type: () => [GeneralDatum],
  })
  @ValidateNested()
  @Type(() => GeneralDatum)
  @IsOptional()
  generalData?: Array<GeneralDatum>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  guid!: string | null;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  id!: number;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  institutesId!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  institutesName!: string | null;

  @ApiProperty({
    required: false,
    type: () => [Internship],
  })
  @ValidateNested()
  @Type(() => Internship)
  @IsOptional()
  internships?: Array<Internship>;

  @ApiProperty({
    required: false,
    type: () => [InternshipsCd],
  })
  @ValidateNested()
  @Type(() => InternshipsCd)
  @IsOptional()
  internshipsCds?: Array<InternshipsCd>;

  @ApiProperty({
    required: false,
    type: () => [InternshipsIni],
  })
  @ValidateNested()
  @Type(() => InternshipsIni)
  @IsOptional()
  internshipsIni?: Array<InternshipsIni>;

  @ApiProperty({
    required: false,
    type: () => [InternshipsIsrm],
  })
  @ValidateNested()
  @Type(() => InternshipsIsrm)
  @IsOptional()
  internshipsIsrms?: Array<InternshipsIsrm>;

  @ApiProperty({
    required: false,
    type: () => [Interview],
  })
  @ValidateNested()
  @Type(() => Interview)
  @IsOptional()
  interview?: Array<Interview>;

  @ApiProperty({
    required: false,
    type: () => [Ita],
  })
  @ValidateNested()
  @Type(() => Ita)
  @IsOptional()
  ita?: Array<Ita>;

  @ApiProperty({
    required: false,
    type: () => [LegacyRequirement],
  })
  @ValidateNested()
  @Type(() => LegacyRequirement)
  @IsOptional()
  legacyRequirements?: Array<LegacyRequirement>;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  mltSwitch!: boolean | null;

  @ApiProperty({
    required: false,
    type: () => [Note],
  })
  @ValidateNested()
  @Type(() => Note)
  @IsOptional()
  notes?: Array<Note>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  parttime!: number | null;

  @ApiProperty({
    required: false,
    type: () => [Practicum],
  })
  @ValidateNested()
  @Type(() => Practicum)
  @IsOptional()
  practicum?: Array<Practicum>;

  @ApiProperty({
    required: false,
    type: () => [Presentation],
  })
  @ValidateNested()
  @Type(() => Presentation)
  @IsOptional()
  presentations?: Array<Presentation>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  program!: string | null;

  @ApiProperty({
    required: false,
    type: () => [ProgramStatus],
  })
  @ValidateNested()
  @Type(() => ProgramStatus)
  @IsOptional()
  programStatus?: Array<ProgramStatus>;

  @ApiProperty({
    required: false,
    type: () => [ProjectTopic],
  })
  @ValidateNested()
  @Type(() => ProjectTopic)
  @IsOptional()
  projectTopic?: Array<ProjectTopic>;

  @ApiProperty({
    required: false,
    type: () => [QualsCommittee],
  })
  @ValidateNested()
  @Type(() => QualsCommittee)
  @IsOptional()
  qualsCommittee?: Array<QualsCommittee>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  residency!: string | null;

  @ApiProperty({
    required: false,
    type: () => [Rotation],
  })
  @ValidateNested()
  @Type(() => Rotation)
  @IsOptional()
  rotations?: Array<Rotation>;

  @ApiProperty({
    required: false,
    type: () => [Statement],
  })
  @ValidateNested()
  @Type(() => Statement)
  @IsOptional()
  statements?: Array<Statement>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  status!: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  statusDate!: Date | null;

  @ApiProperty({
    required: false,
    type: () => [StudentAdvisor],
  })
  @ValidateNested()
  @Type(() => StudentAdvisor)
  @IsOptional()
  studentAdvisors?: Array<StudentAdvisor>;

  @ApiProperty({
    required: false,
    type: () => [StudentApp],
  })
  @ValidateNested()
  @Type(() => StudentApp)
  @IsOptional()
  studentApps?: Array<StudentApp>;

  @ApiProperty({
    required: false,
    type: () => [StudentDataHcii],
  })
  @ValidateNested()
  @Type(() => StudentDataHcii)
  @IsOptional()
  studentDataHcii?: Array<StudentDataHcii>;

  @ApiProperty({
    required: false,
    type: () => [StudentDataIni],
  })
  @ValidateNested()
  @Type(() => StudentDataIni)
  @IsOptional()
  studentDataIni?: Array<StudentDataIni>;

  @ApiProperty({
    required: false,
    type: () => [StudentDataMl],
  })
  @ValidateNested()
  @Type(() => StudentDataMl)
  @IsOptional()
  studentDataMl?: Array<StudentDataMl>;

  @ApiProperty({
    required: false,
    type: () => StudentDataRi,
  })
  @ValidateNested()
  @Type(() => StudentDataRi)
  @IsOptional()
  studentDataRi?: StudentDataRi | null;

  @ApiProperty({
    required: false,
    type: () => [StudentFile],
  })
  @ValidateNested()
  @Type(() => StudentFile)
  @IsOptional()
  studentFiles?: Array<StudentFile>;

  @ApiProperty({
    required: false,
    type: () => [StudentInstitute],
  })
  @ValidateNested()
  @Type(() => StudentInstitute)
  @IsOptional()
  studentInstitutes?: Array<StudentInstitute>;

  @ApiProperty({
    required: false,
    type: () => [StudentMentor],
  })
  @ValidateNested()
  @Type(() => StudentMentor)
  @IsOptional()
  studentMentors?: Array<StudentMentor>;

  @ApiProperty({
    required: false,
    type: () => [StudentOverride],
  })
  @ValidateNested()
  @Type(() => StudentOverride)
  @IsOptional()
  studentOverrides?: Array<StudentOverride>;

  @ApiProperty({
    required: false,
    type: () => [StudentPub],
  })
  @ValidateNested()
  @Type(() => StudentPub)
  @IsOptional()
  studentPubs?: Array<StudentPub>;

  @ApiProperty({
    required: false,
    type: () => [StudentResidency],
  })
  @ValidateNested()
  @Type(() => StudentResidency)
  @IsOptional()
  studentResidency?: Array<StudentResidency>;

  @ApiProperty({
    required: false,
    type: () => [StudentSkill],
  })
  @ValidateNested()
  @Type(() => StudentSkill)
  @IsOptional()
  studentSkills?: Array<StudentSkill>;

  @ApiProperty({
    required: false,
    type: () => [TeachingReq],
  })
  @ValidateNested()
  @Type(() => TeachingReq)
  @IsOptional()
  teachingReq?: Array<TeachingReq>;

  @ApiProperty({
    required: false,
    type: () => [ThesisCommittee],
  })
  @ValidateNested()
  @Type(() => ThesisCommittee)
  @IsOptional()
  thesisCommittee?: Array<ThesisCommittee>;

  @ApiProperty({
    required: false,
    type: () => [ThesisTopic],
  })
  @ValidateNested()
  @Type(() => ThesisTopic)
  @IsOptional()
  thesisTopic?: Array<ThesisTopic>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  undergrad!: string | null;

  @ApiProperty({
    required: false,
    type: () => UserRole,
  })
  @ValidateNested()
  @Type(() => UserRole)
  @IsOptional()
  userRole?: UserRole | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  year!: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  yearAdjust!: string | null;
}

export { StudentDatum as StudentDatum };
