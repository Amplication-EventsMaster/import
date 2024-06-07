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
import { IntFilter } from "../../util/IntFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { ReportColumnListRelationFilter } from "../../reportColumn/base/ReportColumnListRelationFilter";
import { ReportDeptVisibilityListRelationFilter } from "../../reportDeptVisibility/base/ReportDeptVisibilityListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

@InputType()
class ReportWhereInput {
  @ApiProperty({
    required: false,
    type: IntFilter,
  })
  @Type(() => IntFilter)
  @IsOptional()
  @Field(() => IntFilter, {
    nullable: true,
  })
  id?: IntFilter;

  @ApiProperty({
    required: false,
    type: () => ReportColumnListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ReportColumnListRelationFilter)
  @IsOptional()
  @Field(() => ReportColumnListRelationFilter, {
    nullable: true,
  })
  reportColumns?: ReportColumnListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ReportDeptVisibilityListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ReportDeptVisibilityListRelationFilter)
  @IsOptional()
  @Field(() => ReportDeptVisibilityListRelationFilter, {
    nullable: true,
  })
  reportDeptVisibility?: ReportDeptVisibilityListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  reportQuery?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  reportTitle?: StringNullableFilter;
}

export { ReportWhereInput as ReportWhereInput };
