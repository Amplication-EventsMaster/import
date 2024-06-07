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
import { FacultyCertWhereUniqueInput } from "./FacultyCertWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { FacultyCertUpdateInput } from "./FacultyCertUpdateInput";

@ArgsType()
class UpdateFacultyCertArgs {
  @ApiProperty({
    required: true,
    type: () => FacultyCertWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FacultyCertWhereUniqueInput)
  @Field(() => FacultyCertWhereUniqueInput, { nullable: false })
  where!: FacultyCertWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => FacultyCertUpdateInput,
  })
  @ValidateNested()
  @Type(() => FacultyCertUpdateInput)
  @Field(() => FacultyCertUpdateInput, { nullable: false })
  data!: FacultyCertUpdateInput;
}

export { UpdateFacultyCertArgs as UpdateFacultyCertArgs };
