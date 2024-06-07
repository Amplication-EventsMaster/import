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
import { InstitutionWhereUniqueInput } from "./InstitutionWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class InstitutionFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => InstitutionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => InstitutionWhereUniqueInput)
  @Field(() => InstitutionWhereUniqueInput, { nullable: false })
  where!: InstitutionWhereUniqueInput;
}

export { InstitutionFindUniqueArgs as InstitutionFindUniqueArgs };
