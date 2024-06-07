import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const UserRoleProgramShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <TextField label="Program" source="program" />
        <TextField label="Ur Id" source="urId" />
      </SimpleShowLayout>
    </Show>
  );
};
