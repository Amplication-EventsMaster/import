import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { StudentDatumTitle } from "../studentDatum/StudentDatumTitle";

export const StudentPubEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
