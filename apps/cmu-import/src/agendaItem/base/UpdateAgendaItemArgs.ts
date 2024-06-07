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
import { AgendaItemWhereUniqueInput } from "./AgendaItemWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { AgendaItemUpdateInput } from "./AgendaItemUpdateInput";

@ArgsType()
class UpdateAgendaItemArgs {
  @ApiProperty({
    required: true,
    type: () => AgendaItemWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AgendaItemWhereUniqueInput)
  @Field(() => AgendaItemWhereUniqueInput, { nullable: false })
  where!: AgendaItemWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => AgendaItemUpdateInput,
  })
  @ValidateNested()
  @Type(() => AgendaItemUpdateInput)
  @Field(() => AgendaItemUpdateInput, { nullable: false })
  data!: AgendaItemUpdateInput;
}

export { UpdateAgendaItemArgs as UpdateAgendaItemArgs };
