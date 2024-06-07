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
import { StudentCourseWhereInput } from "./StudentCourseWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class StudentCourseListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => StudentCourseWhereInput,
  })
  @ValidateNested()
  @Type(() => StudentCourseWhereInput)
  @IsOptional()
  @Field(() => StudentCourseWhereInput, {
    nullable: true,
  })
  every?: StudentCourseWhereInput;

  @ApiProperty({
    required: false,
    type: () => StudentCourseWhereInput,
  })
  @ValidateNested()
  @Type(() => StudentCourseWhereInput)
  @IsOptional()
  @Field(() => StudentCourseWhereInput, {
    nullable: true,
  })
  some?: StudentCourseWhereInput;

  @ApiProperty({
    required: false,
    type: () => StudentCourseWhereInput,
  })
  @ValidateNested()
  @Type(() => StudentCourseWhereInput)
  @IsOptional()
  @Field(() => StudentCourseWhereInput, {
    nullable: true,
  })
  none?: StudentCourseWhereInput;
}
export { StudentCourseListRelationFilter as StudentCourseListRelationFilter };
