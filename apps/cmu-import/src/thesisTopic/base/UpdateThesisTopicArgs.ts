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
import { ThesisTopicWhereUniqueInput } from "./ThesisTopicWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ThesisTopicUpdateInput } from "./ThesisTopicUpdateInput";

@ArgsType()
class UpdateThesisTopicArgs {
  @ApiProperty({
    required: true,
    type: () => ThesisTopicWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ThesisTopicWhereUniqueInput)
  @Field(() => ThesisTopicWhereUniqueInput, { nullable: false })
  where!: ThesisTopicWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ThesisTopicUpdateInput,
  })
  @ValidateNested()
  @Type(() => ThesisTopicUpdateInput)
  @Field(() => ThesisTopicUpdateInput, { nullable: false })
  data!: ThesisTopicUpdateInput;
}

export { UpdateThesisTopicArgs as UpdateThesisTopicArgs };
