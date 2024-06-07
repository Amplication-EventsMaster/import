import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { USER_TITLE_FIELD } from "./UserTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Andrew Id" source="andrewId" />
        <TextField label="Email" source="email" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Middle Name" source="middleName" />
        <TextField label="Nickname" source="nickname" />
        <TextField label="Owner" source="owner" />
        <TextField label="Owner Display" source="ownerDisplay" />
        <TextField label="Username" source="username" />
        <ReferenceManyField
          reference="UserRole"
          target="user_id"
          label="UserRoles"
        >
          <Datagrid rowClick="show">
            <TextField label="Access" source="access" />
            <TextField label="Default Role" source="defaultRole" />
            <TextField label="Department" source="department" />
            <TextField label="Hide Name" source="hideName" />
            <TextField label="ID" source="id" />
            <TextField label="Role Id" source="roleId" />
            <ReferenceField label="Users" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
