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
import { StudentSkillWhereInput } from "./StudentSkillWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class StudentSkillListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => StudentSkillWhereInput,
  })
  @ValidateNested()
  @Type(() => StudentSkillWhereInput)
  @IsOptional()
  @Field(() => StudentSkillWhereInput, {
    nullable: true,
  })
  every?: StudentSkillWhereInput;

  @ApiProperty({
    required: false,
    type: () => StudentSkillWhereInput,
  })
  @ValidateNested()
  @Type(() => StudentSkillWhereInput)
  @IsOptional()
  @Field(() => StudentSkillWhereInput, {
    nullable: true,
  })
  some?: StudentSkillWhereInput;

  @ApiProperty({
    required: false,
    type: () => StudentSkillWhereInput,
  })
  @ValidateNested()
  @Type(() => StudentSkillWhereInput)
  @IsOptional()
  @Field(() => StudentSkillWhereInput, {
    nullable: true,
  })
  none?: StudentSkillWhereInput;
}
export { StudentSkillListRelationFilter as StudentSkillListRelationFilter };
