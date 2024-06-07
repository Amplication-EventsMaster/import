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
import { ContactInformationWhereInput } from "./ContactInformationWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ContactInformationOrderByInput } from "./ContactInformationOrderByInput";

@ArgsType()
class ContactInformationFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ContactInformationWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ContactInformationWhereInput, { nullable: true })
  @Type(() => ContactInformationWhereInput)
  where?: ContactInformationWhereInput;

  @ApiProperty({
    required: false,
    type: [ContactInformationOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ContactInformationOrderByInput], { nullable: true })
  @Type(() => ContactInformationOrderByInput)
  orderBy?: Array<ContactInformationOrderByInput>;

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

export { ContactInformationFindManyArgs as ContactInformationFindManyArgs };
