import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { StudentDatumTitle } from "../studentDatum/StudentDatumTitle";
import { UserTitle } from "../user/UserTitle";

export const UserRoleCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Access" source="access" />
        <NumberInput step={1} label="Default Role" source="defaultRole" />
        <TextInput label="Department" source="department" />
        <NumberInput step={1} label="Hide Name" source="hideName" />
        <TextInput label="Role Id" source="roleId" />
        <ReferenceArrayInput
          source="studentData"
          reference="StudentDatum"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={StudentDatumTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="users.id" reference="User" label="Users">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
