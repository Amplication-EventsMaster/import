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
import { EnumQualsSpeakingAvQuality } from "./EnumQualsSpeakingAvQuality";
import {
  IsEnum,
  IsOptional,
  IsString,
  IsInt,
  ValidateNested,
} from "class-validator";
import { EnumQualsSpeakingInteraction } from "./EnumQualsSpeakingInteraction";
import { EnumQualsSpeakingOrganization } from "./EnumQualsSpeakingOrganization";
import { EnumQualsSpeakingOverall } from "./EnumQualsSpeakingOverall";
import { QualsSpeakingAspectCreateNestedManyWithoutQualsSpeakingsInput } from "./QualsSpeakingAspectCreateNestedManyWithoutQualsSpeakingsInput";
import { Type } from "class-transformer";
import { EnumQualsSpeakingSpeakingSkill } from "./EnumQualsSpeakingSpeakingSkill";
import { EnumQualsSpeakingStatus } from "./EnumQualsSpeakingStatus";
import { EnumQualsSpeakingUnderstanding } from "./EnumQualsSpeakingUnderstanding";

@InputType()
class QualsSpeakingCreateInput {
  @ApiProperty({
    required: false,
    enum: EnumQualsSpeakingAvQuality,
  })
  @IsEnum(EnumQualsSpeakingAvQuality)
  @IsOptional()
  @Field(() => EnumQualsSpeakingAvQuality, {
    nullable: true,
  })
  av_quality?: "Excellent" | "Good" | "Satisfactory" | "Unsatisfactory" | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  avQualityExp?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumQualsSpeakingInteraction,
  })
  @IsEnum(EnumQualsSpeakingInteraction)
  @IsOptional()
  @Field(() => EnumQualsSpeakingInteraction, {
    nullable: true,
  })
  interaction?: "Excellent" | "Good" | "Satisfactory" | "Unsatisfactory" | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  interactionExp?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumQualsSpeakingOrganization,
  })
  @IsEnum(EnumQualsSpeakingOrganization)
  @IsOptional()
  @Field(() => EnumQualsSpeakingOrganization, {
    nullable: true,
  })
  organization?:
    | "Excellent"
    | "Good"
    | "Satisfactory"
    | "Unsatisfactory"
    | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  organizationExp?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumQualsSpeakingOverall,
  })
  @IsEnum(EnumQualsSpeakingOverall)
  @IsOptional()
  @Field(() => EnumQualsSpeakingOverall, {
    nullable: true,
  })
  overall?: "Excellent" | "Good" | "Satisfactory" | "Unsatisfactory" | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  overallExp?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  qcId?: number | null;

  @ApiProperty({
    required: false,
    type: () => QualsSpeakingAspectCreateNestedManyWithoutQualsSpeakingsInput,
  })
  @ValidateNested()
  @Type(() => QualsSpeakingAspectCreateNestedManyWithoutQualsSpeakingsInput)
  @IsOptional()
  @Field(() => QualsSpeakingAspectCreateNestedManyWithoutQualsSpeakingsInput, {
    nullable: true,
  })
  qualsSpeakingAspect?: QualsSpeakingAspectCreateNestedManyWithoutQualsSpeakingsInput;

  @ApiProperty({
    required: false,
    enum: EnumQualsSpeakingSpeakingSkill,
  })
  @IsEnum(EnumQualsSpeakingSpeakingSkill)
  @IsOptional()
  @Field(() => EnumQualsSpeakingSpeakingSkill, {
    nullable: true,
  })
  speaking_skill?:
    | "Excellent"
    | "Good"
    | "Satisfactory"
    | "Unsatisfactory"
    | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  speakingSkillExp?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumQualsSpeakingStatus,
  })
  @IsEnum(EnumQualsSpeakingStatus)
  @IsOptional()
  @Field(() => EnumQualsSpeakingStatus, {
    nullable: true,
  })
  status?: "Satisfied" | "Progress" | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  studentId?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  summary?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumQualsSpeakingUnderstanding,
  })
  @IsEnum(EnumQualsSpeakingUnderstanding)
  @IsOptional()
  @Field(() => EnumQualsSpeakingUnderstanding, {
    nullable: true,
  })
  understanding?:
    | "Excellent"
    | "Good"
    | "Satisfactory"
    | "Unsatisfactory"
    | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  understandingExp?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  urId?: number | null;
}

export { QualsSpeakingCreateInput as QualsSpeakingCreateInput };
