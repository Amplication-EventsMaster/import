import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { StudentDatumTitle } from "../studentDatum/StudentDatumTitle";

export const ExpNeuroReqCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="Complete" source="complete" />
        <DateTimeInput label="Date" source="date" />
        <TextInput label="Department Code" source="departmentCode" />
        <BooleanInput label="Pending" source="pending" />
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
