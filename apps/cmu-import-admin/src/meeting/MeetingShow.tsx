import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  TextField,
} from "react-admin";

export const MeetingShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <BooleanField label="Admin Visible" source="adminVisible" />
        <TextField label="Department" source="department" />
        <TextField label="End" source="end" />
        <BooleanField label="Faculty Visible" source="facultyVisible" />
        <TextField label="ID" source="id" />
        <TextField label="Long Description" source="longDescription" />
        <TextField label="Short Description" source="shortDescription" />
        <TextField label="Start" source="start" />
      </SimpleShowLayout>
    </Show>
  );
};
