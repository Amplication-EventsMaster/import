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
import { UserAccessWhereInput } from "./UserAccessWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class UserAccessCountArgs {
  @ApiProperty({
    required: false,
    type: () => UserAccessWhereInput,
  })
  @Field(() => UserAccessWhereInput, { nullable: true })
  @Type(() => UserAccessWhereInput)
  where?: UserAccessWhereInput;
}

export { UserAccessCountArgs as UserAccessCountArgs };
