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
import { SemesterReferenceWhereUniqueInput } from "./SemesterReferenceWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { SemesterReferenceUpdateInput } from "./SemesterReferenceUpdateInput";

@ArgsType()
class UpdateSemesterReferenceArgs {
  @ApiProperty({
    required: true,
    type: () => SemesterReferenceWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SemesterReferenceWhereUniqueInput)
  @Field(() => SemesterReferenceWhereUniqueInput, { nullable: false })
  where!: SemesterReferenceWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => SemesterReferenceUpdateInput,
  })
  @ValidateNested()
  @Type(() => SemesterReferenceUpdateInput)
  @Field(() => SemesterReferenceUpdateInput, { nullable: false })
  data!: SemesterReferenceUpdateInput;
}

export { UpdateSemesterReferenceArgs as UpdateSemesterReferenceArgs };
