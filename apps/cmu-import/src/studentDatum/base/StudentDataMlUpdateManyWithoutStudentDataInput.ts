/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { StudentDataMlWhereUniqueInput } from "../../studentDataMl/base/StudentDataMlWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class StudentDataMlUpdateManyWithoutStudentDataInput {
  @Field(() => [StudentDataMlWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [StudentDataMlWhereUniqueInput],
  })
  connect?: Array<StudentDataMlWhereUniqueInput>;

  @Field(() => [StudentDataMlWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [StudentDataMlWhereUniqueInput],
  })
  disconnect?: Array<StudentDataMlWhereUniqueInput>;

  @Field(() => [StudentDataMlWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [StudentDataMlWhereUniqueInput],
  })
  set?: Array<StudentDataMlWhereUniqueInput>;
}

export { StudentDataMlUpdateManyWithoutStudentDataInput as StudentDataMlUpdateManyWithoutStudentDataInput };
