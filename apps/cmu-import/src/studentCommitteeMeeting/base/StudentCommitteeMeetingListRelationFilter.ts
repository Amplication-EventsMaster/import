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
import { StudentCommitteeMeetingWhereInput } from "./StudentCommitteeMeetingWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class StudentCommitteeMeetingListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => StudentCommitteeMeetingWhereInput,
  })
  @ValidateNested()
  @Type(() => StudentCommitteeMeetingWhereInput)
  @IsOptional()
  @Field(() => StudentCommitteeMeetingWhereInput, {
    nullable: true,
  })
  every?: StudentCommitteeMeetingWhereInput;

  @ApiProperty({
    required: false,
    type: () => StudentCommitteeMeetingWhereInput,
  })
  @ValidateNested()
  @Type(() => StudentCommitteeMeetingWhereInput)
  @IsOptional()
  @Field(() => StudentCommitteeMeetingWhereInput, {
    nullable: true,
  })
  some?: StudentCommitteeMeetingWhereInput;

  @ApiProperty({
    required: false,
    type: () => StudentCommitteeMeetingWhereInput,
  })
  @ValidateNested()
  @Type(() => StudentCommitteeMeetingWhereInput)
  @IsOptional()
  @Field(() => StudentCommitteeMeetingWhereInput, {
    nullable: true,
  })
  none?: StudentCommitteeMeetingWhereInput;
}
export { StudentCommitteeMeetingListRelationFilter as StudentCommitteeMeetingListRelationFilter };
