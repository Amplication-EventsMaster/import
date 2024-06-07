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
import { QualsResearchForOtherStudentWhereUniqueInput } from "./QualsResearchForOtherStudentWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { QualsResearchForOtherStudentUpdateInput } from "./QualsResearchForOtherStudentUpdateInput";

@ArgsType()
class UpdateQualsResearchForOtherStudentArgs {
  @ApiProperty({
    required: true,
    type: () => QualsResearchForOtherStudentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => QualsResearchForOtherStudentWhereUniqueInput)
  @Field(() => QualsResearchForOtherStudentWhereUniqueInput, {
    nullable: false,
  })
  where!: QualsResearchForOtherStudentWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => QualsResearchForOtherStudentUpdateInput,
  })
  @ValidateNested()
  @Type(() => QualsResearchForOtherStudentUpdateInput)
  @Field(() => QualsResearchForOtherStudentUpdateInput, { nullable: false })
  data!: QualsResearchForOtherStudentUpdateInput;
}

export { UpdateQualsResearchForOtherStudentArgs as UpdateQualsResearchForOtherStudentArgs };
