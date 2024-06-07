import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { StudentDatumTitle } from "../studentDatum/StudentDatumTitle";

export const TeachingReqEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="Complete" source="complete" />
        <TextInput label="Course Num" source="courseNum" />
        <TextInput label="Course Section" source="courseSection" />
        <DateTimeInput label="Date" source="date" />
        <TextInput label="Department Code" source="departmentCode" />
        <BooleanInput label="Pending" source="pending" />
        <TextInput label="Status" source="status" />
        <ReferenceInput
          source="studentData.id"
          reference="StudentDatum"
          label="Student Data"
        >
          <SelectInput optionText={StudentDatumTitle} />
        </ReferenceInput>
        <TextInput label="Title" source="title" />
        <TextInput label="Units" source="units" />
      </SimpleForm>
    </Edit>
  );
};
