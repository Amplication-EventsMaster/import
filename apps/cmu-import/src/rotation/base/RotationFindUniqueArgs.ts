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
import { RotationWhereUniqueInput } from "./RotationWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class RotationFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => RotationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RotationWhereUniqueInput)
  @Field(() => RotationWhereUniqueInput, { nullable: false })
  where!: RotationWhereUniqueInput;
}

export { RotationFindUniqueArgs as RotationFindUniqueArgs };
