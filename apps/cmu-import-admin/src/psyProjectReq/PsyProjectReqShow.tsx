import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  TextField,
} from "react-admin";

export const PsyProjectReqShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <BooleanField label="Complete" source="complete" />
        <TextField label="Date" source="date" />
        <TextField label="ID" source="id" />
        <BooleanField label="Pending" source="pending" />
        <TextField label="Student Id" source="studentId" />
        <TextField label="Title" source="title" />
      </SimpleShowLayout>
    </Show>
  );
};
