/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  IsInt,
  IsEnum,
  ValidateNested,
  IsString,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumNoteNoteType } from "./EnumNoteNoteType";
import { StudentDatum } from "../../studentDatum/base/StudentDatum";

@ObjectType()
class Note {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  date!: Date;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  id!: number;

  @ApiProperty({
    required: true,
    enum: EnumNoteNoteType,
  })
  @IsEnum(EnumNoteNoteType)
  @Field(() => EnumNoteNoteType, {
    nullable: true,
  })
  note_type?:
    | "admin_notes"
    | "faculty_notes"
    | "general_notes"
    | "private_notes";

  @ApiProperty({
    required: true,
    type: () => StudentDatum,
  })
  @ValidateNested()
  @Type(() => StudentDatum)
  studentData?: StudentDatum;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  text!: string;
}

export { Note as Note };
