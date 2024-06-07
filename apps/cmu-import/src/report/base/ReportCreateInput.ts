/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ReportColumnCreateNestedManyWithoutReportsInput } from "./ReportColumnCreateNestedManyWithoutReportsInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { ReportDeptVisibilityCreateNestedManyWithoutReportsInput } from "./ReportDeptVisibilityCreateNestedManyWithoutReportsInput";

@InputType()
class ReportCreateInput {
  @ApiProperty({
    required: false,
    type: () => ReportColumnCreateNestedManyWithoutReportsInput,
  })
  @ValidateNested()
  @Type(() => ReportColumnCreateNestedManyWithoutReportsInput)
  @IsOptional()
  @Field(() => ReportColumnCreateNestedManyWithoutReportsInput, {
    nullable: true,
  })
  reportColumns?: ReportColumnCreateNestedManyWithoutReportsInput;

  @ApiProperty({
    required: false,
    type: () => ReportDeptVisibilityCreateNestedManyWithoutReportsInput,
  })
  @ValidateNested()
  @Type(() => ReportDeptVisibilityCreateNestedManyWithoutReportsInput)
  @IsOptional()
  @Field(() => ReportDeptVisibilityCreateNestedManyWithoutReportsInput, {
    nullable: true,
  })
  reportDeptVisibility?: ReportDeptVisibilityCreateNestedManyWithoutReportsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  reportQuery?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  reportTitle?: string | null;
}

export { ReportCreateInput as ReportCreateInput };
