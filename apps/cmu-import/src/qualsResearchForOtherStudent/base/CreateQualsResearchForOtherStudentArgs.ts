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
import { QualsResearchForOtherStudentCreateInput } from "./QualsResearchForOtherStudentCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateQualsResearchForOtherStudentArgs {
  @ApiProperty({
    required: true,
    type: () => QualsResearchForOtherStudentCreateInput,
  })
  @ValidateNested()
  @Type(() => QualsResearchForOtherStudentCreateInput)
  @Field(() => QualsResearchForOtherStudentCreateInput, { nullable: false })
  data!: QualsResearchForOtherStudentCreateInput;
}

export { CreateQualsResearchForOtherStudentArgs as CreateQualsResearchForOtherStudentArgs };
