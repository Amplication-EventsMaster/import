import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const UsersOverrideCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Department" source="department" />
        <TextInput label="Email" source="email" />
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <TextInput label="Middle Name" source="middleName" />
        <TextInput label="Nickname" source="nickname" />
        <NumberInput step={1} label="Ur Id" source="urId" />
        <NumberInput step={1} label="User Id" source="userId" />
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Create>
  );
};
