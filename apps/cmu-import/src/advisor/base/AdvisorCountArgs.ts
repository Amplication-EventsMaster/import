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
import { AdvisorWhereInput } from "./AdvisorWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class AdvisorCountArgs {
  @ApiProperty({
    required: false,
    type: () => AdvisorWhereInput,
  })
  @Field(() => AdvisorWhereInput, { nullable: true })
  @Type(() => AdvisorWhereInput)
  where?: AdvisorWhereInput;
}

export { AdvisorCountArgs as AdvisorCountArgs };
