import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const UserRoleLookupShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <TextField label="Role" source="role" />
        <TextField label="Role Id" source="roleId" />
      </SimpleShowLayout>
    </Show>
  );
};
