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
import { UserHostWhereInput } from "./UserHostWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class UserHostListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => UserHostWhereInput,
  })
  @ValidateNested()
  @Type(() => UserHostWhereInput)
  @IsOptional()
  @Field(() => UserHostWhereInput, {
    nullable: true,
  })
  every?: UserHostWhereInput;

  @ApiProperty({
    required: false,
    type: () => UserHostWhereInput,
  })
  @ValidateNested()
  @Type(() => UserHostWhereInput)
  @IsOptional()
  @Field(() => UserHostWhereInput, {
    nullable: true,
  })
  some?: UserHostWhereInput;

  @ApiProperty({
    required: false,
    type: () => UserHostWhereInput,
  })
  @ValidateNested()
  @Type(() => UserHostWhereInput)
  @IsOptional()
  @Field(() => UserHostWhereInput, {
    nullable: true,
  })
  none?: UserHostWhereInput;
}
export { UserHostListRelationFilter as UserHostListRelationFilter };
