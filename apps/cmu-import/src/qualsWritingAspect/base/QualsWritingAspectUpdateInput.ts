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
import { QualsWritingWhereUniqueInput } from "../../qualsWriting/base/QualsWritingWhereUniqueInput";
import { ValidateNested, IsOptional, IsString, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { EnumQualsWritingAspectType } from "./EnumQualsWritingAspectType";

@InputType()
class QualsWritingAspectUpdateInput {
  @ApiProperty({
    required: false,
    type: () => QualsWritingWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => QualsWritingWhereUniqueInput)
  @IsOptional()
  @Field(() => QualsWritingWhereUniqueInput, {
    nullable: true,
  })
  qualsWriting?: QualsWritingWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  text?: string | null;

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

export { QualsWritingAspectUpdateInput as QualsWritingAspectUpdateInput };
