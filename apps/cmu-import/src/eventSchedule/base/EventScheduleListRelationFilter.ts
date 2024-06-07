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
import { EventScheduleWhereInput } from "./EventScheduleWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class EventScheduleListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => EventScheduleWhereInput,
  })
  @ValidateNested()
  @Type(() => EventScheduleWhereInput)
  @IsOptional()
  @Field(() => EventScheduleWhereInput, {
    nullable: true,
  })
  every?: EventScheduleWhereInput;

  @ApiProperty({
    required: false,
    type: () => EventScheduleWhereInput,
  })
  @ValidateNested()
  @Type(() => EventScheduleWhereInput)
  @IsOptional()
  @Field(() => EventScheduleWhereInput, {
    nullable: true,
  })
  some?: EventScheduleWhereInput;

  @ApiProperty({
    required: false,
    type: () => EventScheduleWhereInput,
  })
  @ValidateNested()
  @Type(() => EventScheduleWhereInput)
  @IsOptional()
  @Field(() => EventScheduleWhereInput, {
    nullable: true,
  })
  none?: EventScheduleWhereInput;
}
export { EventScheduleListRelationFilter as EventScheduleListRelationFilter };
