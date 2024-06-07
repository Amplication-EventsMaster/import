import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const StudentCourseCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Applicable" source="applicable" />
        <TextInput label="Course Num" source="courseNum" />
        <TextInput label="Course Section" source="courseSection" />
        <TextInput label="Custom Label" source="customLabel" />
        <DateTimeInput label="Date" source="date" />
        <TextInput label="Department Code" source="departmentCode" />
        <TextInput label="Grade" source="grade" />
        <TextInput label="Midterm Grade" source="midtermGrade" />
        <TextInput label="Note" source="note" />
        <NumberInput label="Qpoints" source="qpoints" />
        <TextInput label="Requirement Type" source="requirementType" />
        <TextInput label="Short Title" source="shortTitle" />
        <NumberInput step={1} label="Student Id" source="studentId" />
        <TextInput label="Title" source="title" />
        <NumberInput step={1} label="Transfercredit" source="transfercredit" />
        <TextInput label="Units" source="units" />
      </SimpleForm>
    </Create>
  );
};
