/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { QualsSpeakingAspectWhereUniqueInput } from "../../qualsSpeakingAspect/base/QualsSpeakingAspectWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class QualsSpeakingAspectCreateNestedManyWithoutQualsSpeakingsInput {
  @Field(() => [QualsSpeakingAspectWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [QualsSpeakingAspectWhereUniqueInput],
  })
  connect?: Array<QualsSpeakingAspectWhereUniqueInput>;
}

export { QualsSpeakingAspectCreateNestedManyWithoutQualsSpeakingsInput as QualsSpeakingAspectCreateNestedManyWithoutQualsSpeakingsInput };
