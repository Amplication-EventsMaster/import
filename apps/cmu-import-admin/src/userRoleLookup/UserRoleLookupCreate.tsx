import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const UserRoleLookupCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Role" source="role" />
        <NumberInput step={1} label="Role Id" source="roleId" />
      </SimpleForm>
    </Create>
  );
};
