/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { StudentPubWhereUniqueInput } from "../../studentPub/base/StudentPubWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class StudentPubUpdateManyWithoutStudentDataInput {
  @Field(() => [StudentPubWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [StudentPubWhereUniqueInput],
  })
  connect?: Array<StudentPubWhereUniqueInput>;

  @Field(() => [StudentPubWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [StudentPubWhereUniqueInput],
  })
  disconnect?: Array<StudentPubWhereUniqueInput>;

  @Field(() => [StudentPubWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [StudentPubWhereUniqueInput],
  })
  set?: Array<StudentPubWhereUniqueInput>;
}

export { StudentPubUpdateManyWithoutStudentDataInput as StudentPubUpdateManyWithoutStudentDataInput };
