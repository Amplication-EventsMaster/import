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
import { ResponsibleConductOfResearchWhereInput } from "./ResponsibleConductOfResearchWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ResponsibleConductOfResearchOrderByInput } from "./ResponsibleConductOfResearchOrderByInput";

@ArgsType()
class ResponsibleConductOfResearchFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ResponsibleConductOfResearchWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ResponsibleConductOfResearchWhereInput, { nullable: true })
  @Type(() => ResponsibleConductOfResearchWhereInput)
  where?: ResponsibleConductOfResearchWhereInput;

  @ApiProperty({
    required: false,
    type: [ResponsibleConductOfResearchOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ResponsibleConductOfResearchOrderByInput], { nullable: true })
  @Type(() => ResponsibleConductOfResearchOrderByInput)
  orderBy?: Array<ResponsibleConductOfResearchOrderByInput>;

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

export { ResponsibleConductOfResearchFindManyArgs as ResponsibleConductOfResearchFindManyArgs };
