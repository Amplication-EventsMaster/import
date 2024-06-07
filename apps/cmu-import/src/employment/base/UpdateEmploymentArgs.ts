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
import { EmploymentWhereUniqueInput } from "./EmploymentWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { EmploymentUpdateInput } from "./EmploymentUpdateInput";

@ArgsType()
class UpdateEmploymentArgs {
  @ApiProperty({
    required: true,
    type: () => EmploymentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EmploymentWhereUniqueInput)
  @Field(() => EmploymentWhereUniqueInput, { nullable: false })
  where!: EmploymentWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => EmploymentUpdateInput,
  })
  @ValidateNested()
  @Type(() => EmploymentUpdateInput)
  @Field(() => EmploymentUpdateInput, { nullable: false })
  data!: EmploymentUpdateInput;
}

export { UpdateEmploymentArgs as UpdateEmploymentArgs };
