/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StudentSkillWhereInput } from "./StudentSkillWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { StudentSkillOrderByInput } from "./StudentSkillOrderByInput";

@ArgsType()
class StudentSkillFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => StudentSkillWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => StudentSkillWhereInput, { nullable: true })
  @Type(() => StudentSkillWhereInput)
  where?: StudentSkillWhereInput;

  @ApiProperty({
    required: false,
    type: [StudentSkillOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [StudentSkillOrderByInput], { nullable: true })
  @Type(() => StudentSkillOrderByInput)
  orderBy?: Array<StudentSkillOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { StudentSkillFindManyArgs as StudentSkillFindManyArgs };
