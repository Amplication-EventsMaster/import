import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const UserHostShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Host" source="host" />
        <TextField label="ID" source="id" />
        <TextField label="Username" source="username" />
      </SimpleShowLayout>
    </Show>
  );
};
