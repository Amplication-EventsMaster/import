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
import { DocumentTemplatePartWhereInput } from "./DocumentTemplatePartWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { DocumentTemplatePartOrderByInput } from "./DocumentTemplatePartOrderByInput";

@ArgsType()
class DocumentTemplatePartFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => DocumentTemplatePartWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => DocumentTemplatePartWhereInput, { nullable: true })
  @Type(() => DocumentTemplatePartWhereInput)
  where?: DocumentTemplatePartWhereInput;

  @ApiProperty({
    required: false,
    type: [DocumentTemplatePartOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [DocumentTemplatePartOrderByInput], { nullable: true })
  @Type(() => DocumentTemplatePartOrderByInput)
  orderBy?: Array<DocumentTemplatePartOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { DocumentTemplatePartFindManyArgs as DocumentTemplatePartFindManyArgs };
