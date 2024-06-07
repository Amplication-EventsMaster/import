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
import { PracticumWhereInput } from "./PracticumWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { PracticumOrderByInput } from "./PracticumOrderByInput";

@ArgsType()
class PracticumFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PracticumWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => PracticumWhereInput, { nullable: true })
  @Type(() => PracticumWhereInput)
  where?: PracticumWhereInput;

  @ApiProperty({
    required: false,
    type: [PracticumOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [PracticumOrderByInput], { nullable: true })
  @Type(() => PracticumOrderByInput)
  orderBy?: Array<PracticumOrderByInput>;

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

export { PracticumFindManyArgs as PracticumFindManyArgs };
