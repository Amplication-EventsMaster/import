import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { UserRoleTitle } from "../userRole/UserRoleTitle";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Andrew Id" source="andrewId" />
        <TextInput label="Email" source="email" />
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <TextInput label="Middle Name" source="middleName" />
        <TextInput label="Nickname" source="nickname" />
        <TextInput label="Owner" source="owner" />
        <TextInput label="Owner Display" source="ownerDisplay" />
        <TextInput label="Username" source="username" />
        <ReferenceArrayInput
          source="userRole"
          reference="UserRole"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserRoleTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
