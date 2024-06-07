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
import { IsInt, IsDate, IsOptional, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { StudentDatumWhereUniqueInput } from "../../studentDatum/base/StudentDatumWhereUniqueInput";

@InputType()
class StudentMentorCreateInput {
  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  consultant!: number;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  current!: number;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  endDate?: Date | null;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  facultyId!: number;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  startDate?: Date | null;

  @ApiProperty({
    required: true,
    type: () => StudentDatumWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => StudentDatumWhereUniqueInput)
  @Field(() => StudentDatumWhereUniqueInput)
  studentData!: StudentDatumWhereUniqueInput;
}

export { StudentMentorCreateInput as StudentMentorCreateInput };
