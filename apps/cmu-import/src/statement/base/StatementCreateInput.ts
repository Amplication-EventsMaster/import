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
import {
  IsDate,
  IsInt,
  IsOptional,
  IsEnum,
  ValidateNested,
  IsString,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumStatementStatus } from "./EnumStatementStatus";
import { StudentDatumWhereUniqueInput } from "../../studentDatum/base/StudentDatumWhereUniqueInput";

@InputType()
class StatementCreateInput {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  date!: Date;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  documentId?: number | null;

  @ApiProperty({
    required: true,
    enum: EnumStatementStatus,
  })
  @IsEnum(EnumStatementStatus)
  @Field(() => EnumStatementStatus)
  status!: "Draft" | "Completed";

  @ApiProperty({
    required: true,
    type: () => StudentDatumWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => StudentDatumWhereUniqueInput)
  @Field(() => StudentDatumWhereUniqueInput)
  studentData!: StudentDatumWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  text!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  textAll?: string | null;
}

export { StatementCreateInput as StatementCreateInput };
