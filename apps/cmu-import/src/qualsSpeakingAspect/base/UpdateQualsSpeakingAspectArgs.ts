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
import { QualsSpeakingAspectWhereUniqueInput } from "./QualsSpeakingAspectWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { QualsSpeakingAspectUpdateInput } from "./QualsSpeakingAspectUpdateInput";

@ArgsType()
class UpdateQualsSpeakingAspectArgs {
  @ApiProperty({
    required: true,
    type: () => QualsSpeakingAspectWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => QualsSpeakingAspectWhereUniqueInput)
  @Field(() => QualsSpeakingAspectWhereUniqueInput, { nullable: false })
  where!: QualsSpeakingAspectWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => QualsSpeakingAspectUpdateInput,
  })
  @ValidateNested()
  @Type(() => QualsSpeakingAspectUpdateInput)
  @Field(() => QualsSpeakingAspectUpdateInput, { nullable: false })
  data!: QualsSpeakingAspectUpdateInput;
}

export { UpdateQualsSpeakingAspectArgs as UpdateQualsSpeakingAspectArgs };
