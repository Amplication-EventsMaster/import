/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { DegreeStatusWhereUniqueInput } from "../../degreeStatus/base/DegreeStatusWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class DegreeStatusCreateNestedManyWithoutStudentDataInput {
  @Field(() => [DegreeStatusWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DegreeStatusWhereUniqueInput],
  })
  connect?: Array<DegreeStatusWhereUniqueInput>;
}

export { DegreeStatusCreateNestedManyWithoutStudentDataInput as DegreeStatusCreateNestedManyWithoutStudentDataInput };
