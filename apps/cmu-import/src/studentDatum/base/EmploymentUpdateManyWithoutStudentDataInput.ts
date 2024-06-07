/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { EmploymentWhereUniqueInput } from "../../employment/base/EmploymentWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class EmploymentUpdateManyWithoutStudentDataInput {
  @Field(() => [EmploymentWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [EmploymentWhereUniqueInput],
  })
  connect?: Array<EmploymentWhereUniqueInput>;

  @Field(() => [EmploymentWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [EmploymentWhereUniqueInput],
  })
  disconnect?: Array<EmploymentWhereUniqueInput>;

  @Field(() => [EmploymentWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [EmploymentWhereUniqueInput],
  })
  set?: Array<EmploymentWhereUniqueInput>;
}

export { EmploymentUpdateManyWithoutStudentDataInput as EmploymentUpdateManyWithoutStudentDataInput };
