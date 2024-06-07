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
import { MeetingParameterWhereInput } from "./MeetingParameterWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { MeetingParameterOrderByInput } from "./MeetingParameterOrderByInput";

@ArgsType()
class MeetingParameterFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => MeetingParameterWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => MeetingParameterWhereInput, { nullable: true })
  @Type(() => MeetingParameterWhereInput)
  where?: MeetingParameterWhereInput;

  @ApiProperty({
    required: false,
    type: [MeetingParameterOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [MeetingParameterOrderByInput], { nullable: true })
  @Type(() => MeetingParameterOrderByInput)
  orderBy?: Array<MeetingParameterOrderByInput>;

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

export { MeetingParameterFindManyArgs as MeetingParameterFindManyArgs };
