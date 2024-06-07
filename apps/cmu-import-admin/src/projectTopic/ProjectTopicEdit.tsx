import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { StudentDatumTitle } from "../studentDatum/StudentDatumTitle";

export const ProjectTopicEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
