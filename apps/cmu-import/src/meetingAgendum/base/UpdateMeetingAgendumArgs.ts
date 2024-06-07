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
import { MeetingAgendumWhereUniqueInput } from "./MeetingAgendumWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { MeetingAgendumUpdateInput } from "./MeetingAgendumUpdateInput";

@ArgsType()
class UpdateMeetingAgendumArgs {
  @ApiProperty({
    required: true,
    type: () => MeetingAgendumWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MeetingAgendumWhereUniqueInput)
  @Field(() => MeetingAgendumWhereUniqueInput, { nullable: false })
  where!: MeetingAgendumWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => MeetingAgendumUpdateInput,
  })
  @ValidateNested()
  @Type(() => MeetingAgendumUpdateInput)
  @Field(() => MeetingAgendumUpdateInput, { nullable: false })
  data!: MeetingAgendumUpdateInput;
}

export { UpdateMeetingAgendumArgs as UpdateMeetingAgendumArgs };
