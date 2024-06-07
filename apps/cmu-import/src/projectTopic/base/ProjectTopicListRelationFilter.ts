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
import { ProjectTopicWhereInput } from "./ProjectTopicWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ProjectTopicListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ProjectTopicWhereInput,
  })
  @ValidateNested()
  @Type(() => ProjectTopicWhereInput)
  @IsOptional()
  @Field(() => ProjectTopicWhereInput, {
    nullable: true,
  })
  every?: ProjectTopicWhereInput;

  @ApiProperty({
    required: false,
    type: () => ProjectTopicWhereInput,
  })
  @ValidateNested()
  @Type(() => ProjectTopicWhereInput)
  @IsOptional()
  @Field(() => ProjectTopicWhereInput, {
    nullable: true,
  })
  some?: ProjectTopicWhereInput;

  @ApiProperty({
    required: false,
    type: () => ProjectTopicWhereInput,
  })
  @ValidateNested()
  @Type(() => ProjectTopicWhereInput)
  @IsOptional()
  @Field(() => ProjectTopicWhereInput, {
    nullable: true,
  })
  none?: ProjectTopicWhereInput;
}
export { ProjectTopicListRelationFilter as ProjectTopicListRelationFilter };
