import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const UsersOverrideShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Department" source="department" />
        <TextField label="Email" source="email" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Middle Name" source="middleName" />
        <TextField label="Nickname" source="nickname" />
        <TextField label="Ur Id" source="urId" />
        <TextField label="User Id" source="userId" />
        <TextField label="Username" source="username" />
      </SimpleShowLayout>
    </Show>
  );
};
