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
import { UserHostWhereInput } from "./UserHostWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { UserHostOrderByInput } from "./UserHostOrderByInput";

@ArgsType()
class UserHostFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => UserHostWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => UserHostWhereInput, { nullable: true })
  @Type(() => UserHostWhereInput)
  where?: UserHostWhereInput;

  @ApiProperty({
    required: false,
    type: [UserHostOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [UserHostOrderByInput], { nullable: true })
  @Type(() => UserHostOrderByInput)
  orderBy?: Array<UserHostOrderByInput>;

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

export { UserHostFindManyArgs as UserHostFindManyArgs };
