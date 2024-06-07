import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const AgendaShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Department" source="department" />
        <TextField label="ID" source="id" />
        <TextField label="Long Description" source="longDescription" />
        <TextField label="Short Description" source="shortDescription" />
      </SimpleShowLayout>
    </Show>
  );
};
