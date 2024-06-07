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
import {
  IsInt,
  ValidateNested,
  IsOptional,
  IsString,
  IsEnum,
} from "class-validator";
import { QualsWriting } from "../../qualsWriting/base/QualsWriting";
import { Type } from "class-transformer";
import { EnumQualsWritingAspectType } from "./EnumQualsWritingAspectType";

@ObjectType()
class QualsWritingAspect {
  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  id!: number;

  @ApiProperty({
    required: false,
    type: () => QualsWriting,
  })
  @ValidateNested()
  @Type(() => QualsWriting)
  @IsOptional()
  qualsWriting?: QualsWriting | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  text!: string | null;

  @ApiProperty({
    required: false,
    enum: EnumQualsWritingAspectType,
  })
  @IsEnum(EnumQualsWritingAspectType)
  @IsOptional()
  @Field(() => EnumQualsWritingAspectType, {
    nullable: true,
  })
  type?: "strength" | "weakness" | null;
}

export { QualsWritingAspect as QualsWritingAspect };
