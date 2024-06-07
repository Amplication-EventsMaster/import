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
import { EnumQualsWritingEngagingReader } from "./EnumQualsWritingEngagingReader";
import {
  IsEnum,
  IsOptional,
  IsString,
  IsInt,
  ValidateNested,
  IsDate,
} from "class-validator";
import { EnumQualsWritingOrganization } from "./EnumQualsWritingOrganization";
import { EnumQualsWritingOverall } from "./EnumQualsWritingOverall";
import { QualsCommittee } from "../../qualsCommittee/base/QualsCommittee";
import { Type } from "class-transformer";
import { QualsWritingAspect } from "../../qualsWritingAspect/base/QualsWritingAspect";
import { EnumQualsWritingStatus } from "./EnumQualsWritingStatus";
import { EnumQualsWritingWritingStyle } from "./EnumQualsWritingWritingStyle";

@ObjectType()
class QualsWriting {
  @ApiProperty({
    required: false,
    enum: EnumQualsWritingEngagingReader,
  })
  @IsEnum(EnumQualsWritingEngagingReader)
  @IsOptional()
  @Field(() => EnumQualsWritingEngagingReader, {
    nullable: true,
  })
  engaging_reader?:
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
  engagingReaderExp!: string | null;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  id!: number;

  @ApiProperty({
    required: false,
    enum: EnumQualsWritingOrganization,
  })
  @IsEnum(EnumQualsWritingOrganization)
  @IsOptional()
  @Field(() => EnumQualsWritingOrganization, {
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
  organizationExp!: string | null;

  @ApiProperty({
    required: false,
    enum: EnumQualsWritingOverall,
  })
  @IsEnum(EnumQualsWritingOverall)
  @IsOptional()
  @Field(() => EnumQualsWritingOverall, {
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
  overallExp!: string | null;

  @ApiProperty({
    required: false,
    type: () => QualsCommittee,
  })
  @ValidateNested()
  @Type(() => QualsCommittee)
  @IsOptional()
  qualsCommittee?: QualsCommittee | null;

  @ApiProperty({
    required: false,
    type: () => [QualsWritingAspect],
  })
  @ValidateNested()
  @Type(() => QualsWritingAspect)
  @IsOptional()
  qualsWritingAspect?: Array<QualsWritingAspect>;

  @ApiProperty({
    required: false,
    enum: EnumQualsWritingStatus,
  })
  @IsEnum(EnumQualsWritingStatus)
  @IsOptional()
  @Field(() => EnumQualsWritingStatus, {
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
  studentId!: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  summaryAudience!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  summaryTopic!: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  timestamp!: Date | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  urId!: number | null;

  @ApiProperty({
    required: false,
    enum: EnumQualsWritingWritingStyle,
  })
  @IsEnum(EnumQualsWritingWritingStyle)
  @IsOptional()
  @Field(() => EnumQualsWritingWritingStyle, {
    nullable: true,
  })
  writing_style?:
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
  writingStyleExp!: string | null;
}

export { QualsWriting as QualsWriting };
