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
import { DepartmentMeetingWhereInput } from "./DepartmentMeetingWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class DepartmentMeetingListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => DepartmentMeetingWhereInput,
  })
  @ValidateNested()
  @Type(() => DepartmentMeetingWhereInput)
  @IsOptional()
  @Field(() => DepartmentMeetingWhereInput, {
    nullable: true,
  })
  every?: DepartmentMeetingWhereInput;

  @ApiProperty({
    required: false,
    type: () => DepartmentMeetingWhereInput,
  })
  @ValidateNested()
  @Type(() => DepartmentMeetingWhereInput)
  @IsOptional()
  @Field(() => DepartmentMeetingWhereInput, {
    nullable: true,
  })
  some?: DepartmentMeetingWhereInput;

  @ApiProperty({
    required: false,
    type: () => DepartmentMeetingWhereInput,
  })
  @ValidateNested()
  @Type(() => DepartmentMeetingWhereInput)
  @IsOptional()
  @Field(() => DepartmentMeetingWhereInput, {
    nullable: true,
  })
  none?: DepartmentMeetingWhereInput;
}
export { DepartmentMeetingListRelationFilter as DepartmentMeetingListRelationFilter };
