import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const FacultyDatumShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Department" source="department" />
        <TextField label="ID" source="id" />
        <TextField label="Institutes Id" source="institutesId" />
        <TextField label="Institutes Name" source="institutesName" />
        <TextField label="Institution" source="institution" />
        <TextField label="Institution Abbr" source="institutionAbbr" />
        <TextField label="Status" source="status" />
        <TextField label="Title" source="title" />
        <TextField label="Ur Id" source="urId" />
      </SimpleShowLayout>
    </Show>
  );
};
