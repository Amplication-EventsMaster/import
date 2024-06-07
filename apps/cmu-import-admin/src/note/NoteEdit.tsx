import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  SelectInput,
  ReferenceInput,
  TextInput,
} from "react-admin";

import { StudentDatumTitle } from "../studentDatum/StudentDatumTitle";

export const NoteEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="Date" source="date" />
        <SelectInput
          source="note_type"
          label="Note Type"
          choices={[
            { label: "admin_notes", value: "admin_notes" },
            { label: "faculty_notes", value: "faculty_notes" },
            { label: "general_notes", value: "general_notes" },
            { label: "private_notes", value: "private_notes" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceInput
          source="studentData.id"
          reference="StudentDatum"
          label="Student Data"
        >
          <SelectInput optionText={StudentDatumTitle} />
        </ReferenceInput>
        <TextInput label="Text" source="text" />
      </SimpleForm>
    </Edit>
  );
};
