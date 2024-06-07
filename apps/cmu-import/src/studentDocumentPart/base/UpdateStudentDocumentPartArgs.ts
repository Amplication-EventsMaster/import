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
import { StudentDocumentPartWhereUniqueInput } from "./StudentDocumentPartWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { StudentDocumentPartUpdateInput } from "./StudentDocumentPartUpdateInput";

@ArgsType()
class UpdateStudentDocumentPartArgs {
  @ApiProperty({
    required: true,
    type: () => StudentDocumentPartWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => StudentDocumentPartWhereUniqueInput)
  @Field(() => StudentDocumentPartWhereUniqueInput, { nullable: false })
  where!: StudentDocumentPartWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => StudentDocumentPartUpdateInput,
  })
  @ValidateNested()
  @Type(() => StudentDocumentPartUpdateInput)
  @Field(() => StudentDocumentPartUpdateInput, { nullable: false })
  data!: StudentDocumentPartUpdateInput;
}

export { UpdateStudentDocumentPartArgs as UpdateStudentDocumentPartArgs };
