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
import { ExpNeuroReqWhereInput } from "./ExpNeuroReqWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ExpNeuroReqListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ExpNeuroReqWhereInput,
  })
  @ValidateNested()
  @Type(() => ExpNeuroReqWhereInput)
  @IsOptional()
  @Field(() => ExpNeuroReqWhereInput, {
    nullable: true,
  })
  every?: ExpNeuroReqWhereInput;

  @ApiProperty({
    required: false,
    type: () => ExpNeuroReqWhereInput,
  })
  @ValidateNested()
  @Type(() => ExpNeuroReqWhereInput)
  @IsOptional()
  @Field(() => ExpNeuroReqWhereInput, {
    nullable: true,
  })
  some?: ExpNeuroReqWhereInput;

  @ApiProperty({
    required: false,
    type: () => ExpNeuroReqWhereInput,
  })
  @ValidateNested()
  @Type(() => ExpNeuroReqWhereInput)
  @IsOptional()
  @Field(() => ExpNeuroReqWhereInput, {
    nullable: true,
  })
  none?: ExpNeuroReqWhereInput;
}
export { ExpNeuroReqListRelationFilter as ExpNeuroReqListRelationFilter };
