import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { StudentDatumTitle } from "../studentDatum/StudentDatumTitle";

export const StudentPubCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Authors" source="authors" />
        <TextInput label="Citation" source="citation" />
        <TextInput label="Forum" source="forum" />
        <DateTimeInput label="Pub Date" source="pubDate" />
        <NumberInput step={1} label="Sf Id" source="sfId" />
        <TextInput label="Status" source="status" />
        <ReferenceInput
          source="studentData.id"
          reference="StudentDatum"
          label="Student Data"
        >
          <SelectInput optionText={StudentDatumTitle} />
        </ReferenceInput>
        <TextInput label="Title" source="title" />
        <TextInput label="Url" source="url" />
      </SimpleForm>
    </Create>
  );
};
