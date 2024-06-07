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
import { FellowshipWhereInput } from "./FellowshipWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { FellowshipOrderByInput } from "./FellowshipOrderByInput";

@ArgsType()
class FellowshipFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => FellowshipWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => FellowshipWhereInput, { nullable: true })
  @Type(() => FellowshipWhereInput)
  where?: FellowshipWhereInput;

  @ApiProperty({
    required: false,
    type: [FellowshipOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [FellowshipOrderByInput], { nullable: true })
  @Type(() => FellowshipOrderByInput)
  orderBy?: Array<FellowshipOrderByInput>;

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

export { FellowshipFindManyArgs as FellowshipFindManyArgs };
