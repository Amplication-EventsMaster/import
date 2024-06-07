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
import { GeneralDatumWhereInput } from "./GeneralDatumWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { GeneralDatumOrderByInput } from "./GeneralDatumOrderByInput";

@ArgsType()
class GeneralDatumFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => GeneralDatumWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => GeneralDatumWhereInput, { nullable: true })
  @Type(() => GeneralDatumWhereInput)
  where?: GeneralDatumWhereInput;

  @ApiProperty({
    required: false,
    type: [GeneralDatumOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [GeneralDatumOrderByInput], { nullable: true })
  @Type(() => GeneralDatumOrderByInput)
  orderBy?: Array<GeneralDatumOrderByInput>;

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

export { GeneralDatumFindManyArgs as GeneralDatumFindManyArgs };
