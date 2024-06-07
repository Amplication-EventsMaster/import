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
import { DepartmentSignatureImageWhereUniqueInput } from "./DepartmentSignatureImageWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { DepartmentSignatureImageUpdateInput } from "./DepartmentSignatureImageUpdateInput";

@ArgsType()
class UpdateDepartmentSignatureImageArgs {
  @ApiProperty({
    required: true,
    type: () => DepartmentSignatureImageWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DepartmentSignatureImageWhereUniqueInput)
  @Field(() => DepartmentSignatureImageWhereUniqueInput, { nullable: false })
  where!: DepartmentSignatureImageWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => DepartmentSignatureImageUpdateInput,
  })
  @ValidateNested()
  @Type(() => DepartmentSignatureImageUpdateInput)
  @Field(() => DepartmentSignatureImageUpdateInput, { nullable: false })
  data!: DepartmentSignatureImageUpdateInput;
}

export { UpdateDepartmentSignatureImageArgs as UpdateDepartmentSignatureImageArgs };
