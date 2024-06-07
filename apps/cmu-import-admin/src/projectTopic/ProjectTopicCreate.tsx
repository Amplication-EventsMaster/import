import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { StudentDatumTitle } from "../studentDatum/StudentDatumTitle";

export const ProjectTopicCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Area" source="area" />
        <TextInput label="Client Name" source="clientName" />
        <DateTimeInput label="Date" source="date" />
        <TextInput label="Notes" source="notes" />
        <ReferenceInput
          source="studentData.id"
          reference="StudentDatum"
          label="Student Data"
        >
          <SelectInput optionText={StudentDatumTitle} />
        </ReferenceInput>
        <TextInput label="Team Name" source="teamName" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Create>
  );
};
