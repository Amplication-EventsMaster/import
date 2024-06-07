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
import { DegreeStatusWhereInput } from "./DegreeStatusWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { DegreeStatusOrderByInput } from "./DegreeStatusOrderByInput";

@ArgsType()
class DegreeStatusFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => DegreeStatusWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => DegreeStatusWhereInput, { nullable: true })
  @Type(() => DegreeStatusWhereInput)
  where?: DegreeStatusWhereInput;

  @ApiProperty({
    required: false,
    type: [DegreeStatusOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [DegreeStatusOrderByInput], { nullable: true })
  @Type(() => DegreeStatusOrderByInput)
  orderBy?: Array<DegreeStatusOrderByInput>;

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

export { DegreeStatusFindManyArgs as DegreeStatusFindManyArgs };
