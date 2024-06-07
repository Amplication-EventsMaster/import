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
import { StudentFileCreateInput } from "./StudentFileCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateStudentFileArgs {
  @ApiProperty({
    required: true,
    type: () => StudentFileCreateInput,
  })
  @ValidateNested()
  @Type(() => StudentFileCreateInput)
  @Field(() => StudentFileCreateInput, { nullable: false })
  data!: StudentFileCreateInput;
}

export { CreateStudentFileArgs as CreateStudentFileArgs };
