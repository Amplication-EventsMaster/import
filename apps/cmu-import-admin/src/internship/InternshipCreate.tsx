import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { StudentDatumTitle } from "../studentDatum/StudentDatumTitle";

export const InternshipCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Company" source="company" />
        <DateTimeInput label="End Date" source="endDate" />
        <BooleanInput label="Pending" source="pending" />
        <DateTimeInput label="Start Date" source="startDate" />
        <ReferenceInput
          source="studentData.id"
          reference="StudentDatum"
          label="Student Data"
        >
          <SelectInput optionText={StudentDatumTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
