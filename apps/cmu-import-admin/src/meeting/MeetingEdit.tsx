import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const MeetingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="Admin Visible" source="adminVisible" />
        <TextInput label="Department" source="department" />
        <DateTimeInput label="End" source="end" />
        <BooleanInput label="Faculty Visible" source="facultyVisible" />
        <TextInput label="Long Description" source="longDescription" />
        <TextInput label="Short Description" source="shortDescription" />
        <DateTimeInput label="Start" source="start" />
      </SimpleForm>
    </Edit>
  );
};
